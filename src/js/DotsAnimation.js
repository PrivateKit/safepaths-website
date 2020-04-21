import { gsap } from 'gsap';

const DotsAnimation = {
  init() {
    this.dots = document.querySelectorAll('.js-dot');
    this.dots && this.setup();
  },

  setup() {
    this.dots.forEach(dot => {
      const dotSize = Math.floor(Math.random() * 60);
      const dotPositionX = Math.floor(Math.random() * 100);
      const dotPositionY = Math.floor(Math.random() * 100);

      gsap.set(dot, {
        width: `${dotSize}px`,
        height: `${dotSize}px`,
        top: `${dotPositionY}%`,
        left: `${dotPositionX}%`,
      });
    });
  },
};

export default DotsAnimation;
