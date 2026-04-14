<?php
$headline = get_sub_field('headline');
$text_area = get_sub_field('text_area');
$slides = get_sub_field('slides');

if ((!$headline || (!$headline['title'] && !$headline['subtitle'])) && !$text_area && !$slides) return;

$has_slider = $slides && is_array($slides) && count($slides) > 1;
?>
<div class="text-block">
  <div class="headline load-fadeInUp">
    <?php if (!empty($headline['title'])) : ?>
      <h2><?php echo esc_html($headline['title']); ?></h2>
    <?php endif; ?>
    <?php if (!empty($headline['subtitle'])) : ?>
      <span><?php echo esc_html($headline['subtitle']); ?></span>
    <?php endif; ?>
  </div>

  <?php if ($has_slider) : ?>
    <div class="description-slider load-fadeInUp load-delay-1">
      <div class="swiper description-swiper">
        <div class="swiper-wrapper">
          <?php foreach ($slides as $slide) : ?>
            <div class="swiper-slide">
              <?php echo wp_kses_post($slide['content']); ?>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  <?php elseif ($text_area) : ?>
    <div class="description load-fadeInUp load-delay-1">
      <?php echo wp_kses_post($text_area); ?>
    </div>
  <?php endif; ?>
</div>
