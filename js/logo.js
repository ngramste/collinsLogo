class Logo {
  constructor (size, xpos, ypos) {
    this.size = size;
    this.xpos = xpos;
    this.ypos = ypos;
    this.offset;
    this.regularFont = loadFont('./fonts/Muli/static/Muli-Regular.ttf');
    this.boldFont = loadFont('./fonts/Muli/static/Muli-ExtraBold.ttf');
  }

  spinner (offset) {
    this.offset = offset;
    const bars = 24;
    strokeWeight(10);
    stroke(color(206, 17, 38));
    fill(color(206, 17, 38));

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

  getSpinnerCenter () {
    let pos = {
      x: this.xpos - this.size,
      y: this.ypos - this.size / 2.5
    }

    return pos;
  }

  display (offset) {
    fill(color(206, 17, 38));
    strokeWeight(0);
    textSize(this.size);
    textFont(this.boldFont);
    text('Raytheon', this.xpos, this.ypos - this.size / 2);
    textFont(this.regularFont);
    text('Technologies', this.xpos, this.ypos + this.size / 2);
    this.spinner(offset);
  }
}
