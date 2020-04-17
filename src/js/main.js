import { gsap } from 'gsap';
import Parallax from './parallax';
import 'modernizr';

/* ---------------------------------------------
Utilities
--------------------------------------------- */
const setInitialStyles = targets => {
  targets.forEach(target => {
    target.style.opacity = 0;
    target.style.transformOrigin = 'top';
    target.style.transform = 'translateY(10px) scaleY(1.025)';
  });
};

const removeInitialStyles = targets => {
  targets.forEach(target => {
    target.style.opacity = 1;
    target.style.transform = 'initial';
  });
};

/* ---------------------------------------------
Canvas Animation
--------------------------------------------- */
const canvas = document.getElementById('canvas');

const w = 1000;
const h = (canvas.height = w);
const ctx = canvas.getContext('2d');
const scale = window.devicePixelRatio;
let frame = 0;

setup();

function setup() {
  canvas.width = w * scale;
  canvas.height = h * scale;

  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;

  ctx.scale(scale, scale);
}

function circ(x, y, rad, opacity) {
  ctx.beginPath();
  ctx.strokeStyle = `rgba(165, 175, 250, ${opacity})`;
  ctx.lineWidth = 83.5;
  ctx.arc(x, y, rad, 0, Math.PI * 2);
  ctx.stroke();
  ctx.closePath();
}

function offset(source, offset) {
  return Math.floor(source / offset);
}

function animate() {
  window.requestAnimationFrame(animate);
  frame += 0.2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const circleOffset = offset(w / 6, 25);

  for (let i = 0; i < circleOffset; i++) {
    const radius = ((i * (w / circleOffset) + frame) % w) / 2;
    const opacity = 1 - ((i * (w / circleOffset) + frame) % w) / 2 / (w / 2);
    circ(w / 2, h / 2, radius, opacity);
  }
}
animate();

/* ---------------------------------------------
Topper animations
--------------------------------------------- */
const header = document.querySelector('.js-site-header');
const topperHeadline = document.querySelector('.js-topper-headline');
const topperDeck = document.querySelector('.js-topper-deck');
const topperList = document.querySelectorAll('.js-topper-list');
const topperListItem = document.querySelectorAll('.js-topper-list-item');
const topperArt = document.querySelector('.js-topper-art');

let ww = window.innerWidth;

// register the effect with GSAP:
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

const topperAnimation = () => {
  const tl = gsap.timeline();

  gsap.fromTo(
    topperArt,
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 1, ease: 'power3.out', delay: 1 },
  );

  if (ww >= 960) {
    setInitialStyles([header, topperHeadline, topperDeck]);
    setInitialStyles(topperList);
    setInitialStyles(topperListItem);

    tl.fadeIn(header)
      .fadeIn(topperHeadline, { duration: 1 }, '-=0.6')
      .fadeIn(topperDeck, '-=0.9')
      .fadeIn(topperList, '-=0.8')
      .fadeIn(topperListItem, '-=1.2');
  } else {
    removeInitialStyles([header, topperHeadline, topperDeck]);
    removeInitialStyles(topperList);
    removeInitialStyles(topperListItem);
    removeInitialStyles(topperArt);
  }
};

topperAnimation();

/* ---------------------------------------------
Reveal animations
--------------------------------------------- */
let revealElements;
let revealStaggerItems;
let revealStaggerScale;
let pill;
let pillHeight;
let pillBg;
let dotsWrapper;
let imgUIBg;
const THRESHOLD = 0.33;

window.addEventListener(
  'load',
  () => {
    revealElements = document.querySelectorAll('.js-reveal');
    revealStaggerItems = document.querySelectorAll('.js-reveal-stagger-item');
    revealStaggerScale = document.querySelectorAll('.js-reveal-stagger-scale');
    dotsWrapper = document.querySelector('.js-callout-dots');
    pill = document.querySelector('.js-pill');
    pillBg = document.querySelector('.js-pill-bg');
    pillHeight = pill.getBoundingClientRect().height;
    imgUIBg = document.querySelector('.js-callout-img-bg');
    const imgUIBgSize = imgUIBg.getBoundingClientRect();

    gsap.set([pill, revealStaggerScale], { autoAlpha: 0 });
    gsap.set(pillBg, { width: pillHeight, height: pillHeight });
    gsap.set(revealStaggerScale, { scale: 0.5 });
    gsap.set(dotsWrapper, { width: imgUIBgSize.width, height: imgUIBgSize.height });

    setInitialStyles(revealElements);
    setInitialStyles(revealStaggerItems);
    createObserver();
  },
  false,
);

function handleIntersect(entries) {
  const tl = gsap.timeline();

  entries.forEach(entry => {
    const staggerItems = entry.target.querySelectorAll('.js-reveal-stagger-item');
    const staggerScale = entry.target.querySelectorAll('.js-reveal-stagger-scale');
    const entryPill = entry.target.querySelector('.js-pill');
    const entryPillBg = entry.target.querySelector('.js-pill-bg');

    if (entry.isIntersecting) {
      gsap.effects.fadeIn(entry.target).delay(0.1);
      gsap.effects.fadeIn(staggerItems);
      gsap.to(staggerScale, {
        scale: 1,
        autoAlpha: 1,
        ease: 'power2.out',
        duration: 0.6,
        stagger: index => index * 0.1,
      });
      tl.to(entryPillBg, { width: '100%', ease: 'power3.out', duration: 0.6 }).to(entryPill, {
        autoAlpha: 1,
        duration: 0.3,
      });
    }
  });
}

function createObserver() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: THRESHOLD,
  };

  const observer = new IntersectionObserver(handleIntersect, options);
  revealElements.forEach(revealElement => observer.observe(revealElement));
}

/* ---------------------------------------------
Parallax animations
--------------------------------------------- */
const setParallax = () => {
  const parallaxImages = document.querySelectorAll('.js-callout-img');

  parallaxImages.forEach(parallaxImage => Parallax.init(parallaxImage, -25));
};

/* ---------------------------------------------
Dots animations
--------------------------------------------- */
const dots = document.querySelectorAll('.js-dot');

dots.forEach(dot => {
  const dotSize = Math.floor(Math.random() * 60);
  const dotPositionX = Math.floor(Math.random() * 100);
  const dotPositionY = Math.floor(Math.random() * 100);

  dot.style.width = `${dotSize}px`;
  dot.style.height = `${dotSize}px`;
  dot.style.top = `${dotPositionY}%`;
  dot.style.left = `${dotPositionX}%`;
});

/* ---------------------------------------------
Event handlers
--------------------------------------------- */
window.addEventListener('scroll', () => requestAnimationFrame(setParallax));

window.addEventListener('resize', () => {
  ww = window.innerWidth;

  pillHeight = pill.getBoundingClientRect().height;
  gsap.set(pillBg, { width: pillHeight, height: pillHeight });

  if (ww < 960) {
    removeInitialStyles([header, topperHeadline, topperDeck]);
    removeInitialStyles(topperList);
    removeInitialStyles(topperListItem);
    removeInitialStyles(topperArt);
  }
});
