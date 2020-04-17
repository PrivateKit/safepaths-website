import gsap from 'gsap';

const gsapEffect = () => {
  gsap.registerEffect({
    name: 'fadeIn',
    effect: (targets, config) =>
      gsap
        .timeline()
        .to(targets, {
          duration: 0.6,
          autoAlpha: 1,
          ease: 'power2.out',
          stagger: index => index * 0.1,
        })
        .to(
          targets,
          {
            duration: config.duration,
            y: 0,
            scaleY: 1,
            ease: 'power2.out',
            stagger: index => index * 0.1,
            force3D: true,
          },
          '<',
        ),
    defaults: { duration: 0.8 },
    extendTimeline: true,
  });
};

export default gsapEffect;
