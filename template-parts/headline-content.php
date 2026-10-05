<?php
$headline = get_sub_field('headline');
$slides = get_sub_field('slides');
// slides with actual text only; an empty default slide must not hide the Text Area
$slides = is_array($slides) ? array_values(array_filter($slides, fn($s) => trim(strip_tags($s['content'] ?? '')) !== '')) : [];
$text_area = get_sub_field('text_area');

if ((!$headline || (!$headline['title'] && !$headline['subtitle'])) && !$slides && !$text_area) return;

$has_slider = count($slides) > 1;
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
  <?php elseif ($slides || $text_area) : ?>
    <div class="description load-fadeInUp load-delay-1"><?php echo wp_kses_post($slides ? $slides[0]['content'] : $text_area); ?></div>
  <?php endif; ?>
</div>
