import { gsap } from 'gsap';
import 'modernizr';

/* ---------------------------------------------
Utilities
--------------------------------------------- */
const setInitialStyles = targets => {
  targets.forEach(target => {
    target.style.opacity = 0;
    target.style.transform = 'translateY(10px)';
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
  ctx.lineWidth = 45.5;
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

  const circleOffset = offset(w / 6, 15);

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
    gsap.to(targets, {
      duration: config.duration,
      y: 0,
      autoAlpha: 1,
      ease: 'power2.out',
      stagger: config.stagger,
      force3D: true,
    }),
  defaults: { duration: 0.8, stagger: 0.2 },
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
      .fadeIn(topperList, { stagger: 0.1 }, '-=0.8')
      .fadeIn(topperListItem, { stagger: 0.025 }, '-=1.2');
  } else {
    removeInitialStyles([header, topperHeadline, topperDeck]);
    removeInitialStyles(topperList);
    removeInitialStyles(topperListItem);
    removeInitialStyles(topperArt);
  }
};

window.addEventListener('resize', () => {
  ww = window.innerWidth;

  if (ww < 960) {
    removeInitialStyles([header, topperHeadline, topperDeck]);
    removeInitialStyles(topperList);
    removeInitialStyles(topperListItem);
    removeInitialStyles(topperArt);
  }
});

topperAnimation();

/* ---------------------------------------------
Reveal animations
--------------------------------------------- */
let revealElements;
let revealStaggerItems;
const THRESHOLD = 0.5;

window.addEventListener(
  'load',
  () => {
    revealElements = document.querySelectorAll('.js-reveal');
    revealStaggerItems = document.querySelectorAll('.js-reveal-stagger-item');

    setInitialStyles(revealElements);
    setInitialStyles(revealStaggerItems);
    createObserver();
  },
  false,
);

function handleIntersect(entries) {
  entries.forEach(entry => {
    const staggerItems = entry.target.querySelectorAll('.js-reveal-stagger-item');

    if (entry.intersectionRatio >= THRESHOLD) {
      gsap.effects.fadeIn(entry.target).delay(0.1);
      gsap.effects.fadeIn(staggerItems, { stagger: 0.2 });
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
