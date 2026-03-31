<?php
$banner = get_field('banner');
if (!$banner) return;

$image = $banner['image'] ?? null;
$title = $banner['title'] ?? '';
$subtitle = $banner['subtitle'] ?? '';
$button = $banner['button'] ?? null;

if (!$title) return;
?>
<div class="banner banner-bg">
  <div class="banner-img wow fadeIn" data-wow-duration="1.2s">
    <?php if ($image) : ?>
      <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['title'] ?? ''); ?>">
    <?php endif; ?>
  </div>
  <div class="columnar vertical">
    <div class="banner-wrap">
      <div class="heading">
        <div>
          <?php if ($title) : ?>
            <h1 class="wow fadeInUp" data-wow-delay="0.3s"><?php echo esc_html($title); ?></h1>
          <?php endif; ?>
          <?php if ($subtitle) : ?>
            <p class="wow fadeInUp" data-wow-delay="0.5s"><?php echo esc_html($subtitle); ?></p>
          <?php endif; ?>
        </div>
        <?php if (!empty($button['link']['title'])) : ?>
          <div class="btn-wrap wow fadeInUp" data-wow-delay="0.7s">
            <button class="button button--primary" data-open-modal>
              <?php echo esc_html($button['link']['title']); ?>
            </button>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
</div>
