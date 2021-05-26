class Plane {
  constructor (callSign, size) {
    this.callSign = callSign;
    this.size = size;
    this.x;
    this.y;
    this.oldx;
    this.oldy;
    this.xNoise = new NoiseLoop(0.25, -width, width * 2);
    this.yNoise = new NoiseLoop(0.25, -height, height * 2);
    this.altNoise = new NoiseLoop(7, 29, 41);
    this.ping = 0;
  }

  startPing () {
    this.ping = 250;
  }

  display (a) {
    strokeWeight(this.size / 4);
    noFill();
    stroke(0 + this.ping);

    this.x = this.xNoise.value(a);
    this.y = this.yNoise.value(a);
    let alt = Math.floor(this.altNoise.value(a));

    // if (250 == this.ping) {
      this.oldx = this.x;
      this.oldy = this.y;
    // }
    
    rect(this.oldx, this.oldy, this.size, this.size);
    line(this.oldx + this.size * 1.3, this.oldy - this.size * 0.3, this.oldx + this.size * 4, this.oldy - this.size * 3);

    fill(0 + this.ping);
    noStroke();
    textSize(this.size * 1.5);
    text(this.callSign, this.oldx + this.size * 4.25, this.oldy - this.size * 2.5);
    text("FL " + alt + "0", this.oldx + this.size * 4.25, this.oldy - this.size * 1);
    this.ping -= (0 == this.ping) ? 0 : 10;
  }
}