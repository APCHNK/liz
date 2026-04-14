<?php
$mux_id = get_sub_field('mux_playback_id');
if (!$mux_id) return;

// Load Mux Player only when needed
if (!defined('MUX_LOADED')) {
  define('MUX_LOADED', true);
  echo '<script type="module" src="https://cdn.jsdelivr.net/npm/@mux/mux-player@3/dist/mux-player.mjs" async></script>';
}
?>
<div class="booking-hero">
  <div class="booking-hero__video wow fadeInUp" data-wow-duration="1s">
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
