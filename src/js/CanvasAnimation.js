const CanvasAnimation = {
  init() {
    if (document.getElementById('canvas')) {
      this.setup();
      this.animate();
    }
  },

  setup() {
    this.canvas = document.getElementById('canvas');
    this.w = 1000;
    this.h = this.canvas.height = this.w;
    this.ctx = this.canvas.getContext('2d');
    this.scale = window.devicePixelRatio;
    this.frame = 0;

    this.canvas.width = this.w * this.scale;
    this.canvas.height = this.h * this.scale;

    this.canvas.style.width = `${this.w}px`;
    this.canvas.style.height = `${this.h}px`;

    this.ctx.scale(this.scale, this.scale);
  },

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.frame += 0.2;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const circleOffset = this.offset(this.w / 6, 25);

    for (let i = 0; i < circleOffset; i++) {
      const radius = ((i * (this.w / circleOffset) + this.frame) % this.w) / 2;
      const opacity = 1 - ((i * (this.w / circleOffset) + this.frame) % this.w) / 2 / (this.w / 2);
      this.circ(this.w / 2, this.h / 2, radius, opacity);
    }
    this.centerCirc();
  },

  centerCirc() {
    this.ctx.beginPath();
    this.ctx.fillStyle = `rgba(165, 175, 250, 1)`;
    this.ctx.arc(this.w / 2, this.h / 2, 50, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.closePath();
  },

  circ(x, y, rad, opacity) {
    this.ctx.beginPath();
    this.ctx.strokeStyle = `rgba(165, 175, 250, ${opacity})`;
    this.ctx.lineWidth = 83.5;
    this.ctx.arc(x, y, rad, 0, Math.PI * 2);
    this.ctx.stroke();
    this.ctx.closePath();
  },

  offset(source, offset) {
    return Math.floor(source / offset);
  },
};

export default CanvasAnimation;
