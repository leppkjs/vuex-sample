<template>
  <header class="s-header">
    <div class="header-logo">
      <a class="site-logo" href="/"><img src="../assets/images/logo.png" alt="Homepage"></a>
    </div>

    <nav class="header-nav">
      <a class="header-nav__close" title="close" @click.stop="menuToggle"><span>Close</span></a>

      <div class="header-nav__content">
        <h3>Navigation</h3>

        <ul class="header-nav__list">
          <li class="current"><a class="smoothscroll" href="#home" title="home">Home</a></li>
          <li><a class="smoothscroll" href="#about" title="about">About</a></li>
          <li><a class="smoothscroll" href="#services" title="services">Services</a></li>
          <li><a class="smoothscroll" href="#works" title="works">Works</a></li>
          <li><a class="smoothscroll" href="#clients" title="clients">Clients</a></li>
          <li><a class="smoothscroll" href="#contact" title="contact">Contact</a></li>
        </ul>

        <p>Perspiciatis hic praesentium nesciunt. Et neque a dolorum <a href='#0'>voluptatem</a> porro iusto sequi
          veritatis libero enim. Iusto id suscipit veritatis neque reprehenderit.</p>

        <ul class="header-nav__social">
          <li>
            <a href="#"><i class="fa fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-instagram"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-behance"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-dribbble"></i></a>
          </li>
        </ul>

      </div>
      <!-- end header-nav__content -->

    </nav>
    <!-- end header-nav -->

    <a class="header-menu-toggle" @click.stop="menuToggle">
      <span class="header-menu-text">Menu</span>
      <span class="header-menu-icon"></span>
    </a>

  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  methods: {
    menuToggle: function () {
      // TODO Dom핸들링이 아닌 직접 적으로 컴포넌트 외에걸 컨트롤 할려면???
      document.querySelector('body').classList.toggle('menu-is-open');
    }
  }
};
</script>
