import gsap from 'gsap';

export default function removeInitialStyles(targets) {
  targets.forEach(target => {
    gsap.set(target, { autoAlpha: 1, y: 'initial' });
  });
}
