import gsap from 'gsap';

export default function setInitialStyles(targets) {
  targets.forEach(target => {
    gsap.set(target, { autoAlpha: 0, transformOrigin: 'top', y: 10, scaleY: 1.025 });
  });
}
