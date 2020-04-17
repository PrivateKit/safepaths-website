import gsap from 'gsap';

const removeInitialStyles = targets => {
  targets.forEach(target => {
    gsap.set(target, { autoAlpha: 1, y: 'initial' });
  });
};

export default removeInitialStyles;
