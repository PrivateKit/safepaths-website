import { gsap } from 'gsap';
import 'modernizr';

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
      opacity: 1,
      ease: 'power3.out',
      stagger: config.stagger,
    }),
  defaults: { duration: 0.6, stagger: 0 },
  extendTimeline: true,
});

const setInitialStyles = targets => {
  targets.forEach(target => {
    target.style.opacity = 0;
    target.style.transform = 'translateY(5px)';
  });
};

const removeInitialStyles = targets => {
  targets.forEach(target => {
    target.style.opacity = 1;
    target.style.transform = 'initial';
  });
};

const topperAnimation = () => {
  const tl = gsap.timeline();

  gsap.fromTo(topperArt, { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power3.out', delay: 1 });

  if (ww >= 960) {
    setInitialStyles([header, topperHeadline, topperDeck]);
    setInitialStyles(topperList);
    setInitialStyles(topperListItem);

    tl.fadeIn(header)
      .delay(0.2)
      .fadeIn(topperHeadline, { duration: 1 })
      .fadeIn(topperDeck, '-=0.9')
      .fadeIn(topperList, { stagger: 0.1, duration: 1.2 }, '-=0.8')
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
// Set up intersection observer
// const options = {
//   root: document.querySelector('#scrollArea'),
//   rootMargin: '0px',
//   threshold: 1.0,
// };

// const callback = (entries, observer) => {
//   entries.forEach(entry => {
//     console.log(entry);
//     // Each entry describes an intersection change for one observed
//     // target element:
//     //   entry.boundingClientRect
//     //   entry.intersectionRatio
//     //   entry.intersectionRect
//     //   entry.isIntersecting
//     //   entry.rootBounds
//     //   entry.target
//     //   entry.time
//   });
// };

// const observer = new IntersectionObserver(callback, options);

// const target = document.querySelector('.js-reveal');
// observer.observe(target);
