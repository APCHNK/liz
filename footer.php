    <?php get_template_part('template-parts/contact'); ?>

    <footer class="light-bg">
      <div class="columnar">
        <?php
        $copyright = get_field('footer_copyright', 'option') ?: 'Boney M Liz Mitchell. All Right Reserved';
        $email = get_field('footer_email', 'option') ?: 'book.boneym@gmail.com';
        ?>
        <div class="footer-wrap">
          <span><?php echo date('Y'); ?> &copy; <?php echo esc_html($copyright); ?></span>
          <a href="mailto:<?php echo esc_attr($email); ?>"><?php echo esc_html($email); ?></a>
        </div>
      </div>
    </footer>
  </div><!-- .app-wrapper -->

  <?php get_template_part('template-parts/modal'); ?>

  <?php if (is_front_page()) : ?>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js" defer></script>
    <script>document.addEventListener('DOMContentLoaded',function(){
      if(typeof WOW==='undefined')return;
      new WOW({offset:80,mobile:true}).init();
      if(window.innerWidth>=1024){new WOW({boxClass:'wow-desktop',offset:80}).init();}
    });</script>
  <?php endif; ?>
  <?php wp_footer(); ?>
</body>
</html>
