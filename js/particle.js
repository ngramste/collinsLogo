class Particle {
  constructor(size) {
    this.xNoise = new NoiseLoop(0.5, -width, width * 2);
    this.yNoise = new NoiseLoop(0.5, -height, height * 2);
    this.dNoise = new NoiseLoop(7, 10, size);
    this.bNoise = new NoiseLoop(7, -50, 400);
  }

  render(a) {
    noStroke();
    let x = this.xNoise.value(a);
    let y = this.yNoise.value(a);
    let d = this.dNoise.value(a);
    let b = this.bNoise.value(a);
    fill(b, b, b, map(b, 0, 255, 255, 0));
    ellipse(x, y, d);
  }
}
