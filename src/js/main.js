import { gsap } from 'gsap';
import { setInitialStyles, removeInitialStyles, gsapEffect } from './utils';
import Parallax from './parallax';
import CanvasAnimation from './CanvasAnimation';
import RevealAnimation from './RevealAnimation';
import 'modernizr';

/* ---------------------------------------------
Topper animations
--------------------------------------------- */
// const header = document.querySelector('.js-site-header');
// const topperHeadline = document.querySelector('.js-topper-headline');
// const topperDeck = document.querySelector('.js-topper-deck');
// const topperList = document.querySelectorAll('.js-topper-list');
// const topperListItem = document.querySelectorAll('.js-topper-list-item');
// const topperArt = document.querySelector('.js-topper-art');

// let ww = window.innerWidth;

// // register the effect with GSAP:
// gsap.registerEffect({
//   name: 'fadeIn',
//   effect: (targets, config) =>
//     gsap
//       .timeline()
//       .to(targets, {
//         duration: 0.6,
//         autoAlpha: 1,
//         ease: 'power2.out',
//         stagger: index => index * 0.1,
//       })
//       .to(
//         targets,
//         {
//           duration: config.duration,
//           y: 0,
//           scaleY: 1,
//           ease: 'power2.out',
//           stagger: index => index * 0.1,
//           force3D: true,
//         },
//         '<',
//       ),
//   defaults: { duration: 0.8 },
//   extendTimeline: true,
// });

// const topperAnimation = () => {
//   const tl = gsap.timeline();

//   gsap.fromTo(
//     topperArt,
//     { autoAlpha: 0 },
//     { autoAlpha: 1, duration: 1, ease: 'power3.out', delay: 1 },
//   );

//   if (ww >= 960) {
//     setInitialStyles([header, topperHeadline, topperDeck]);
//     setInitialStyles(topperList);
//     setInitialStyles(topperListItem);

//     tl.fadeIn(header)
//       .fadeIn(topperHeadline, { duration: 1 }, '-=0.6')
//       .fadeIn(topperDeck, '-=0.9')
//       .fadeIn(topperList, '-=0.8')
//       .fadeIn(topperListItem, '-=1.2');
//   } else {
//     removeInitialStyles([header, topperHeadline, topperDeck]);
//     removeInitialStyles(topperList);
//     removeInitialStyles(topperListItem);
//     removeInitialStyles(topperArt);
//   }
// };

// topperAnimation();

/* ---------------------------------------------
Reveal animations
--------------------------------------------- */
// let revealElements;
// let revealStaggerItems;
// let revealStaggerScale;
// let pill;
// let pillHeight;
// let pillBg;
// const THRESHOLD = 0.33;

// window.addEventListener(
//   'load',
//   () => {
//     revealElements = document.querySelectorAll('.js-reveal');
//     revealStaggerItems = document.querySelectorAll('.js-reveal-stagger-item');
//     revealStaggerScale = document.querySelectorAll('.js-reveal-stagger-scale');
//     pill = document.querySelector('.js-pill');
//     pillBg = document.querySelector('.js-pill-bg');
//     pillHeight = pill.getBoundingClientRect().height;

//     gsap.set([pill, revealStaggerScale], { autoAlpha: 0 });
//     gsap.set(pillBg, { width: pillHeight, height: pillHeight });
//     gsap.set(revealStaggerScale, { scale: 0.5 });

//     setInitialStyles(revealElements);
//     setInitialStyles(revealStaggerItems);
//     createObserver();
//   },
//   false,
// );

/* ---------------------------------------------
Parallax animations
--------------------------------------------- */
// const setParallax = () => {
//   const parallaxImages = document.querySelectorAll('.js-callout-img');

//   parallaxImages.forEach(parallaxImage => Parallax.init(parallaxImage, -25));
// };

/* ---------------------------------------------
Dots animations
--------------------------------------------- */
// const dots = document.querySelectorAll('.js-dot');

// dots.forEach(dot => {
//   const dotSize = Math.floor(Math.random() * 60);
//   const dotPositionX = Math.floor(Math.random() * 100);
//   const dotPositionY = Math.floor(Math.random() * 100);

//   gsap.set(dot, {
//     width: `${dotSize}px`,
//     height: `${dotSize}px`,
//     top: `${dotPositionY}%`,
//     left: `${dotPositionX}%`,
//   });
// });

/* ---------------------------------------------
Event handlers
--------------------------------------------- */
// window.addEventListener('scroll', setParallax);

// window.addEventListener('resize', () => {
//   ww = window.innerWidth;

//   pillHeight = pill.getBoundingClientRect().height;
//   gsap.set(pillBg, { width: pillHeight, height: pillHeight });

//   if (ww < 960) {
//     removeInitialStyles([header, topperHeadline, topperDeck]);
//     removeInitialStyles(topperList);
//     removeInitialStyles(topperListItem);
//     removeInitialStyles(topperArt);
//   }
// });
