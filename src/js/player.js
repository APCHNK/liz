export function initPlayer() {
  const playerEl = document.querySelector('.player-wrap');
  if (!playerEl) return;

  const audio = document.getElementById('audio-player');
  if (!audio) return;

  const songs = JSON.parse(playerEl.dataset.tracks || '[]');
  if (songs.length === 0) return;

  let currentSongIndex = 0;
  let isPlaying = false;

  const coverImg = playerEl.querySelector('.cover');
  const currentSongEl = playerEl.querySelector('.current-song');
  const currentArtistEl = playerEl.querySelector('.current-artist');
  const timeCurrentEl = playerEl.querySelector('.time-current');
  const timeDurationEl = playerEl.querySelector('.time-duration');
  const animateTrack = playerEl.querySelector('.animate-track');
  const rangeInput = playerEl.querySelector('input[type="range"]');
  const playBtn = playerEl.querySelector('.play-btn');
  const prevBtn = playerEl.querySelector('.skip-back');
  const nextBtn = playerEl.querySelector('.skip-forward');
  const librarySongs = playerEl.querySelectorAll('.library-song');

  const defaultCover = playerEl.dataset.defaultCover || '';

  function formatTime(time) {
    if (isNaN(time)) return '0:00';
    return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);
  }

  function animateCoverChange() {
    if (!coverImg) return;
    coverImg.classList.remove('is-changing');
    void coverImg.offsetWidth;
    coverImg.classList.add('is-changing');
    coverImg.addEventListener('animationend', () => {
      coverImg.classList.remove('is-changing');
    }, { once: true });
  }

  function updateUI(trackChanged) {
    const song = songs[currentSongIndex];
    if (!song) return;

    if (coverImg) {
      const coverUrl = song.cover ? (song.cover.url || song.cover) : defaultCover;
      if (trackChanged) animateCoverChange();
      coverImg.src = coverUrl || defaultCover;
    }

    if (currentSongEl) {
      if (trackChanged) {
        currentSongEl.style.opacity = '0';
        setTimeout(() => {
          currentSongEl.textContent = song.track_name || '';
          currentSongEl.style.opacity = '1';
        }, 150);
      } else {
        currentSongEl.textContent = song.track_name || '';
      }
    }

    if (currentArtistEl) {
      if (trackChanged) {
        currentArtistEl.style.opacity = '0';
        setTimeout(() => {
          currentArtistEl.textContent = song.artist || '';
          currentArtistEl.style.opacity = '0.7';
        }, 200);
      } else {
        currentArtistEl.textContent = song.artist || '';
      }
    }

    // Play/pause icon
    if (playBtn) {
      playBtn.src = isPlaying ? playBtn.dataset.pauseIcon : playBtn.dataset.playIcon;
      playBtn.alt = isPlaying ? 'pause' : 'play';
      playBtn.classList.toggle('is-playing-anim', isPlaying);
    }

    // Library highlight
    librarySongs.forEach((el, i) => {
      el.classList.toggle('is-playing', i === currentSongIndex);
      const icon = el.querySelector('.song-play-icon');
      if (icon) {
        icon.src = (isPlaying && i === currentSongIndex) ? icon.dataset.pauseIcon : icon.dataset.playIcon;
      }
    });

    // Duration displays
    librarySongs.forEach((el, i) => {
      const dur = el.querySelector('.duration');
      if (dur && i === currentSongIndex && audio.duration) {
        dur.textContent = formatTime(audio.duration);
      } else if (dur && i !== currentSongIndex) {
        dur.textContent = '--:--';
      }
    });
  }

  function loadSong(index) {
    const song = songs[index];
    if (!song) return;
    audio.src = song.audio;
    audio.load();
  }

  function playSong() {
    if (!audio.src || audio.src === window.location.href) {
      loadSong(currentSongIndex);
    }
    audio.play().catch(() => { isPlaying = false; updateUI(false); });
    isPlaying = true;
    updateUI(false);
  }

  function pauseSong() {
    audio.pause();
    isPlaying = false;
    updateUI(false);
  }

  function togglePlay() {
    isPlaying ? pauseSong() : playSong();
  }

  function skipTo(index) {
    if (index === currentSongIndex) {
      togglePlay();
      return;
    }
    currentSongIndex = index;
    loadSong(currentSongIndex);
    if (isPlaying) {
      audio.addEventListener('canplay', function handler() {
        audio.play().catch(() => {});
        audio.removeEventListener('canplay', handler);
      });
    } else {
      playSong();
    }
    updateUI(true);
  }

  // Events
  if (playBtn) playBtn.addEventListener('click', togglePlay);

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
      loadSong(currentSongIndex);
      if (isPlaying) {
        audio.addEventListener('canplay', function handler() {
          audio.play().catch(() => {});
          audio.removeEventListener('canplay', handler);
        });
      }
      updateUI(true);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentSongIndex = (currentSongIndex + 1) % songs.length;
      loadSong(currentSongIndex);
      if (isPlaying) {
        audio.addEventListener('canplay', function handler() {
          audio.play().catch(() => {});
          audio.removeEventListener('canplay', handler);
        });
      }
      updateUI(true);
    });
  }

  librarySongs.forEach((el, i) => {
    el.addEventListener('click', () => skipTo(i));
  });

  audio.addEventListener('timeupdate', () => {
    const current = audio.currentTime;
    const duration = audio.duration;
    if (timeCurrentEl) timeCurrentEl.textContent = formatTime(current);
    if (timeDurationEl) timeDurationEl.textContent = formatTime(duration);

    const percentage = Math.round((current / duration) * 100);
    if (animateTrack) {
      animateTrack.style.transform = `translateX(${percentage}%)`;
    }
    if (rangeInput) {
      rangeInput.value = current;
      rangeInput.max = duration || 0;
    }

    const activeSong = librarySongs[currentSongIndex];
    if (activeSong) {
      const dur = activeSong.querySelector('.duration');
      if (dur) dur.textContent = formatTime(duration);
    }
  });

  audio.addEventListener('ended', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.addEventListener('canplay', function handler() {
      audio.play().catch(() => { isPlaying = false; updateUI(false); });
      audio.removeEventListener('canplay', handler);
    });
    updateUI(true);
  });

  if (rangeInput) {
    rangeInput.addEventListener('input', (e) => {
      audio.currentTime = e.target.value;
    });
  }

  updateUI(false);
}
