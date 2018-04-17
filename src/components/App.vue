<template>
  <div class="container-fluid">
    <!-- Header Area -->
    <header class="s-header">
      <div class="header-logo">
        <a class="site-logo" href="/"><img src="../assets/images/logo.png" alt="Homepage"></a>
      </div>

      <nav class="header-nav">
        <a href="#0" class="header-nav__close" title="close" @click="menuToggle"><span>Close</span></a>

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

      <a class="header-menu-toggle" href="#0">
        <span class="header-menu-text">Menu</span>
        <span class="header-menu-icon"></span>
      </a>

    </header>
    <!-- home ================================================== -->
    <section id="home" class="s-home target-section" data-parallax="scroll" data-image-src="../assets/images/hero-bg.jpg"
             data-natural-width=3000 data-natural-height=2000 data-position-y=center>

      <div class="overlay"></div>
      <div class="shadow-overlay"></div>

      <div class="home-content">

        <div class="row home-content__main">

          <h3>Welcome to Glint</h3>

          <h1>
            We are a creative group <br>
            of people who design <br>
            influential brands and <br>
            digital experiences.
          </h1>

          <div class="home-content__buttons">
            <a href="#contact" class="smoothscroll btn btn--stroke">
              Start a Project
            </a>
            <a href="#about" class="smoothscroll btn btn--stroke">
              More About Us
            </a>
          </div>

        </div>

        <div class="home-content__scroll">
          <a href="#about" class="scroll-link smoothscroll">
            <span>Scroll Down</span>
          </a>
        </div>

        <div class="home-content__line"></div>

      </div> <!-- end home-content -->

      <ul class="home-social">
        <li>
          <a href="#0"><i class="fa fa-facebook" aria-hidden="true"></i><span>Facebook</span></a>
        </li>
        <li>
          <a href="#0"><i class="fa fa-twitter" aria-hidden="true"></i><span>Twiiter</span></a>
        </li>
        <li>
          <a href="#0"><i class="fa fa-instagram" aria-hidden="true"></i><span>Instagram</span></a>
        </li>
        <li>
          <a href="#0"><i class="fa fa-behance" aria-hidden="true"></i><span>Behance</span></a>
        </li>
        <li>
          <a href="#0"><i class="fa fa-dribbble" aria-hidden="true"></i><span>Dribbble</span></a>
        </li>
      </ul>
      <!-- end home-social -->

    </section>
    <!-- end s-home -->
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
  },
  methods: {
    menuToggle: function () {
      alert(1)
      document.querySelector('body').classList.toggle('menu-is-open')
    }
  },
  components: {}
}
</script>
