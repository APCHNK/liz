    <?php get_template_part('template-parts/contact'); ?>

    <footer class="light-bg">
      <div class="columnar">
        <?php
        $copyright = get_field('footer_copyright', 'footer-settings') ?: 'Boney M Liz Mitchell. All Right Reserved';
        $email = get_field('footer_email', 'footer-settings') ?: 'book.boneym@gmail.com';
        $instagram = get_field('footer_instagram', 'footer-settings');
        $facebook = get_field('footer_facebook', 'footer-settings');
        ?>
        <div class="footer-wrap">
          <span><?php echo date('Y'); ?> &copy; <?php echo esc_html($copyright); ?></span>
          <div class="footer-links">
            <a href="mailto:<?php echo esc_attr($email); ?>"><?php echo esc_html($email); ?></a>
            <?php if ($instagram) : ?>
              <a href="<?php echo esc_url($instagram); ?>" target="_blank" rel="noopener noreferrer">Instagram</a>
            <?php endif; ?>
            <?php if ($facebook) : ?>
              <a href="<?php echo esc_url($facebook); ?>" target="_blank" rel="noopener noreferrer">Facebook</a>
            <?php endif; ?>
          </div>
        </div>
      </div>
    </footer>
  </div><!-- .app-wrapper -->

  <?php get_template_part('template-parts/modal'); ?>

  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
  <script>new WOW({offset: 80, mobile: true}).init();</script>
  <?php wp_footer(); ?>
</body>
</html>
