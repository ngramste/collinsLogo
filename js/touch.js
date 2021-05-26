class TouchPing {
  constructor (posx, posy) {
    this.posx = posx;
    this.posy = posy;
    this.size = 0;
    this.speed = 10;
  }

  growTouch () {
    this.size += this.speed;
  }

  isHit (plane) {
    // console.log(plane.x, plane.y, this.posx, this.posy, this.size);
    if (dist(plane.x, plane.y, this.posx, this.posy) - this.size / 2 < this.speed &&
        dist(plane.x, plane.y, this.posx, this.posy) - this.size / 2 > 0) {
      return true;
    } else {
      return false;
    }
  }

  display () {
    ellipseMode(CENTER);
    noFill();
    strokeWeight(3);
    stroke(100);

    ellipse(this.posx, this.posy, this.size, this.size);
  }
}