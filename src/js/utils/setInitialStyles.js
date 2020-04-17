import gsap from 'gsap';

const setInitialStyles = targets => {
  targets.forEach(target => {
    gsap.set(target, { autoAlpha: 0, transformOrigin: 'top', y: 10, scaleY: 1.025 });
  });
};

export default setInitialStyles;
