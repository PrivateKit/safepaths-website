import 'modernizr';

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
  ctx.strokeStyle = `rgba(200, 210, 250, ${opacity})`;
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
