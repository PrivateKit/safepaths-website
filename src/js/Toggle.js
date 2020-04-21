import gsap from 'gsap';

const Toggle = {
  init() {
    this.el = document.querySelector('.js-toggle-element');
    this.button = document.querySelector('.js-toggle-button');
    if (this.el && this.button) {
      this.button.addEventListener('click', () => this.toggleElement());
    }
  },

  toggleElement() {
    const tl = gsap.timeline();

    if (this.el.style.height === 'auto') {
      tl.to(this.el, {
        height: `60px`,
        '--shadow-opacity': 1,
        ease: 'power3.out',
        duration: 0.4,
      }).to(this.button, { innerText: `Read more` });
    } else {
      tl.to(this.el, {
        height: `auto`,
        '--shadow-opacity': 0,
        ease: 'power2.out',
        duration: 0.4,
      }).to(this.button, { innerText: `Collapse` });
    }
  },
};

export default Toggle;
