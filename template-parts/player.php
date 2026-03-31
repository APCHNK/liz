<?php
$headline = get_sub_field('headline');
$tracks = get_sub_field('tracks');

if (!$tracks || !is_array($tracks) || count($tracks) === 0) return;

// Build tracks JSON for JS
$tracks_json = array_map(function ($track) {
  return array(
    'audio'      => $track['audio'] ?? '',
    'track_name' => $track['track_name'] ?? '',
    'artist'     => $track['artist'] ?? '',
    'cover'      => !empty($track['cover']) ? array('url' => $track['cover']['url']) : null,
  );
}, $tracks);

$default_cover = get_template_directory_uri() . '/assets/images/player-image.jpg';
$play_icon = get_template_directory_uri() . '/assets/icons/play-icon.svg';
$pause_icon = get_template_directory_uri() . '/assets/icons/pause-icon.svg';
$prev_icon = get_template_directory_uri() . '/assets/icons/prev-icon.svg';
$next_icon = get_template_directory_uri() . '/assets/icons/next-icon.svg';

$first_cover = !empty($tracks_json[0]['cover']['url']) ? $tracks_json[0]['cover']['url'] : $default_cover;
?>
<div class="player">
  <?php if ($headline) : ?>
    <h2 class="wow fadeInUp"><?php echo esc_html($headline); ?></h2>
  <?php endif; ?>

  <div class="player-wrap wow fadeInUp" data-wow-delay="0.2s" data-tracks='<?php echo esc_attr(json_encode($tracks_json)); ?>' data-default-cover="<?php echo esc_url($default_cover); ?>">
    <div class="controls-wrap">
      <img class="cover" src="<?php echo esc_url($first_cover); ?>" alt="cover" height="200" width="200">
      <div class="player-controls">
        <p class="current-song"><?php echo esc_html($tracks_json[0]['track_name'] ?? ''); ?></p>
        <p class="current-artist"><?php echo esc_html($tracks_json[0]['artist'] ?? ''); ?></p>
        <div class="time">
          <span class="time-current">0:00</span>
          <span class="time-duration">0:00</span>
        </div>
        <div style="background: rgba(255, 64, 52, 1);" class="track">
          <input value="0" type="range" max="0" min="0">
          <div class="animate-track"></div>
        </div>
        <div class="controls">
          <img src="<?php echo esc_url($prev_icon); ?>" alt="prev" class="skip skip-back">
          <img
            src="<?php echo esc_url($play_icon); ?>"
            alt="play"
            class="play play-btn"
            data-play-icon="<?php echo esc_url($play_icon); ?>"
            data-pause-icon="<?php echo esc_url($pause_icon); ?>"
          >
          <img src="<?php echo esc_url($next_icon); ?>" alt="next" class="skip skip-forward">
        </div>
      </div>
    </div>

    <audio id="audio-player"></audio>

    <?php if (count($tracks_json) > 1) : ?>
    <div class="library-songs">
      <?php foreach ($tracks_json as $i => $song) : ?>
        <div class="library-song <?php echo $i === 0 ? 'is-playing' : ''; ?>">
          <div class="song-info">
            <img
              src="<?php echo esc_url($play_icon); ?>"
              alt="play"
              class="play song-play-icon"
              data-play-icon="<?php echo esc_url($play_icon); ?>"
              data-pause-icon="<?php echo esc_url($pause_icon); ?>"
            >
            <div>
              <span class="song-name"><?php echo esc_html($song['track_name']); ?></span>
              <span class="artist"><?php echo esc_html($song['artist']); ?></span>
            </div>
          </div>
          <span class="duration">--:--</span>
        </div>
      <?php endforeach; ?>
    </div>
    <?php endif; ?>
  </div>
</div>
