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
  const trackBar = playerEl.querySelector('.track');
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

  function updateUI() {
    const song = songs[currentSongIndex];
    if (!song) return;

    if (coverImg) {
      const coverUrl = song.cover ? (song.cover.url || song.cover) : defaultCover;
      coverImg.src = coverUrl || defaultCover;
    }
    if (currentSongEl) currentSongEl.textContent = song.track_name || '';
    if (currentArtistEl) currentArtistEl.textContent = song.artist || '';

    // Update play/pause icons
    if (playBtn) {
      const playIcon = playBtn.dataset.playIcon;
      const pauseIcon = playBtn.dataset.pauseIcon;
      playBtn.src = isPlaying ? pauseIcon : playIcon;
      playBtn.alt = isPlaying ? 'pause' : 'play';
    }

    // Update library highlight
    librarySongs.forEach((el, i) => {
      el.classList.toggle('is-playing', i === currentSongIndex);
      const icon = el.querySelector('.song-play-icon');
      if (icon) {
        const playIcon = icon.dataset.playIcon;
        const pauseIcon = icon.dataset.pauseIcon;
        icon.src = (isPlaying && i === currentSongIndex) ? pauseIcon : playIcon;
      }
    });

    // Update duration displays
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
    audio.play().catch(() => { isPlaying = false; updateUI(); });
    isPlaying = true;
    updateUI();
  }

  function pauseSong() {
    audio.pause();
    isPlaying = false;
    updateUI();
  }

  function togglePlay() {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
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
    updateUI();
  }

  // Events
  if (playBtn) {
    playBtn.addEventListener('click', togglePlay);
  }

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
      updateUI();
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
      updateUI();
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

    // Update duration in library
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
      audio.play().catch(() => { isPlaying = false; updateUI(); });
      audio.removeEventListener('canplay', handler);
    });
    updateUI();
  });

  if (rangeInput) {
    rangeInput.addEventListener('input', (e) => {
      audio.currentTime = e.target.value;
    });
  }

  updateUI();
}
