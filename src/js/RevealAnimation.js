import { gsap } from 'gsap';
import { setInitialStyles, gsapEffect } from './utils';

const RevealAnimation = {
  init() {
    this.bindEvents();
    this.setup();
    this.createObserver();
  },

  bindEvents() {
    document.addEventListener('load', () => this.getElements());
    window.addEventListener('resize', () => this.handleResize());
  },

  setup() {
    this.THRESHOLD = 0.33;

    // setInitialStyles(this.revealElements);
    console.log(this.revealElements);
    // setInitialStyles(this.revealStaggerItems);
    gsap.set([this.pill, this.revealStaggerScale], { autoAlpha: 0 });
    gsap.set(this.pillBg, { width: this.pillHeight, height: this.pillHeight });
    gsap.set(this.revealStaggerScale, { scale: 0.5 });

    gsapEffect();
  },

  createObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: this.THRESHOLD,
    };

    const observer = new IntersectionObserver(this.handleIntersect, options);
    this.revealElements.forEach(revealElement => observer.observe(revealElement));
  },

  handleIntersect(entries) {
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
  },

  handleResize() {
    this.pillHeight = this.pill.getBoundingClientRect().height;
    gsap.set(this.pillBg, { width: this.pillHeight, height: this.pillHeight });
  },

  getElements() {
    this.revealElements = document.querySelectorAll('.js-reveal');
    this.revealStaggerItems = document.querySelectorAll('.js-reveal-stagger-item');
    this.revealStaggerScale = document.querySelectorAll('.js-reveal-stagger-scale');
    this.pill = document.querySelector('.js-pill');
    this.pillBg = document.querySelector('.js-pill-bg');
    this.pillHeight = this.pill.getBoundingClientRect().height;
  },
};

RevealAnimation.init();

export default RevealAnimation;
