import { gsap } from 'gsap';

const Parallax = {
  init() {
    this.parallaxImages = document.querySelectorAll('.js-callout-img');
    this.parallaxImages &&
      this.parallaxImages.forEach(parallaxImage => this.animateItem(parallaxImage, -25));
    window.requestAnimationFrame(this.init.bind(this));
  },
  setPosition() {
    if (window.pageYOffset !== undefined) {
      return window.pageYOffset;
    } else {
      return (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }
  },
  animateItem(el, displace) {
    const scrollPosition = this.setPosition();
    gsap.to(el, { y: scrollPosition / displace, ease: 'power2.out', duration: 0.3 });
  },
};

export default Parallax;
