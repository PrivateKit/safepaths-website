import Parallax from './parallax';
import CanvasAnimation from './CanvasAnimation';
import RevealAnimation from './RevealAnimation';
import 'modernizr';

CanvasAnimation.init();
RevealAnimation.init();

const parallaxImages = document.querySelectorAll('.js-callout-img');
window.addEventListener('scroll', () => {
  parallaxImages.forEach(parallaxImage => Parallax.init(parallaxImage, -25));
});
