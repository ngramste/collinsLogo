
class NoiseLoop {
  constructor (diameter, min, max) {
    this.diameter = diameter;
    this.min = min;
    this.max = max;
    this.startx = random(1000);
    this.starty = random(1000);
  }

  value (angle) {
    let value = 0;
    let simplex = new SimplexNoise();
    let xoff = map(cos(angle), -1, 1, this.startx, this.startx + this.diameter);
    let yoff = map(sin(angle), -1, 1, this.starty, this.starty + this.diameter);
    // value = simplex.noise2D(xoff, yoff);
    value = noise(xoff, yoff);
    return map(value, 0, 1, this.min, this.max);
  }
}
