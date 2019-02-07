// import Util from "./util";

class Entity {
  constructor(options) {
    this.pos = options.pos;
    this.box = options.box;
    this.game = options.game;
  }

  x() {
    return this.pos[0];
  }

  y() {
    return this.pos[1];
  }
  
  width() {
    return this.box[0];
  }

  height() {
    return this.box[1];
  }

  isCollidedWith(otherObject) {
    return (this.x() < otherObject.x() + otherObject.width() &&
      this.x() + this.width() >= otherObject.x() &&
      this.y() < otherObject.y() + otherObject.height() &&
      this.y() + this.height() > otherObject.y());
  }

  // collision detected!


  
  // collideWith(otherObject) {
  //   // default do nothing
  // }

  // // draw(ctx) {
  // //   ctx.fillStyle = this.color;

  // //   ctx.beginPath();
  // //   ctx.arc(
  // //     this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
  // //   );
  // //   ctx.fill();
  // // }

  // isCollidedWith(otherObject) {
  //   const centerDist = Util.dist(this.pos, otherObject.pos);
  //   return centerDist < (this.radius + otherObject.radius);
  // }



  // move(timeDelta) {
  //   // timeDelta is number of milliseconds since last move
  //   // if the computer is busy the time delta will be larger
  //   // in this case the MovingObject should move farther in this frame
  //   // velocity of object is how far it should move in 1/60th of a second
  //   const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
  //     offsetX = this.vel[0] * velocityScale,
  //     offsetY = this.vel[1] * velocityScale;

  //   this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

  //   if (this.game.isOutOfBounds(this.pos)) {
  //     if (this.isWrappable) {
  //       this.pos = this.game.wrap(this.pos);
  //     } else {
  //       this.remove();
  //     }
  //   }
  // }

  // remove() {
  //   this.game.remove(this);
  // }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default Entity;