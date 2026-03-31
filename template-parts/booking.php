<?php
$mux_id = get_sub_field('mux_playback_id');
if (!$mux_id) return;
?>
<div class="booking-hero">
  <div class="booking-hero__video">
    <mux-player
      playback-id="<?php echo esc_attr($mux_id); ?>"
      autoplay muted loop
      stream-type="on-demand"
      default-hidden-captions
      playback-rates=""
      no-hot-keys
      preload="auto"
      prefer-playback="mse"
      min-resolution="720p"
      max-resolution="1080p"
    ></mux-player>
  </div>
</div>
