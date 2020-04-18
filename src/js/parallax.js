import { gsap } from 'gsap';

const Parallax = {
  init(el, displace) {
    this.animateItem(el, displace);
  },
  setPosition() {
    if (window.pageYOffset !== undefined) {
      return window.pageYOffset;
    } else {
      return (document.documentElement || document.body.parentNode || document.body).scrollTop;
    }
  },
  animateItem(el, displace) {
    if (typeof window.orientation !== 'undefined') {
      return;
    }
    const scrollPosition = this.setPosition();
    gsap.to(el, { y: scrollPosition / displace, ease: 'power2.out', duration: 0.3 });
  },
};

const parallaxImages = document.querySelectorAll('.js-callout-img');
window.addEventListener('scroll', () => {
  parallaxImages.forEach(parallaxImage => Parallax.init(parallaxImage, -25));
});

export default Parallax;
