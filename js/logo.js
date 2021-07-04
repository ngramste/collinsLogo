class Logo {
  constructor (size, xpos, ypos) {
    this.size = size;
    this.xpos = xpos;
    this.ypos = ypos;
    this.font = loadFont('./fonts/Anton-Regular.ttf');
  }

  spinner (offset) {
    const bars = 24;
    strokeWeight(10);
    stroke(0);
    fill(0);

    let x = this.xpos - this.size;
    let y = this.ypos - this.size / 2.5;

    for (let bar = 0; bar < bars; bar++) {
      strokeWeight(map((bar + offset * 400) % bars, 0, bars, bars * this.size / 125, this.size / 50));

      let sx = cos(map(bar, 0, bars, 0, TWO_PI)) * this.size / 2.5 + x;
      let sy = sin(map(bar, 0, bars, 0, TWO_PI)) * this.size / 2.5 + y;
      let ex = cos(map(bar, 0, bars, 0, TWO_PI)) * this.size / 1.1 + x;
      let ey = sin(map(bar, 0, bars, 0, TWO_PI)) * this.size / 1.1 + y;

      line(sx, sy, ex, ey);
    }
  }

  display (offset) {
    fill(0);
    strokeWeight(0);
    textSize(this.size);
    textFont(this.font);
    text('Collins', this.xpos, this.ypos - this.size / 2);
    text('Aerospace', this.xpos, this.ypos + this.size / 2);
    this.spinner(offset);
  }
}
