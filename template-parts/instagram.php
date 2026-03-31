<?php
$photos = theme_get_instagram_photos(8);
if (empty($photos)) return;
?>
<div class="white-bg spacing-lg">
  <div class="columnar">
    <div class="instagram-section">
      <h2 class="wow fadeInUp">Social Media</h2>
      <div class="instagram-grid">
        <?php foreach ($photos as $index => $photo) : ?>
          <a href="<?php echo esc_url($photo['link']); ?>" target="_blank" rel="noopener noreferrer" class="instagram-item wow fadeInUp" data-wow-delay="<?php echo ($index * 0.08); ?>s">
            <img src="<?php echo esc_url($photo['url']); ?>" alt="Instagram" loading="lazy">
          </a>
        <?php endforeach; ?>
      </div>
      <div class="instagram-cta">
        <a href="https://www.instagram.com/laborlov/" target="_blank" rel="noopener noreferrer" class="button button--outline">
          View more on Instagram
        </a>
      </div>
    </div>
  </div>
</div>
