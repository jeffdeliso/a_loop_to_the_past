import MovingObject from "./moving_object";

class Enemy extends MovingObject {
  constructor(options) {
    super(options);
    this.link = options.link;
    this.scale = 2;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = 6;
    this.walkDir = 'down';

    // this.draw = this.draw.bind(this);
    this.move = this.move.bind(this);
    // this.update = this.update.bind(this);
  }

  vectorTowardsLink(link) {
    const dx = (link.x() - this.x());
    const dy = (link.y() - this.y());
    const len = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    return [dx / len || 0, dy / len || 0];
  }


  move(timeDelta) {
    this.vect = this.vectorTowardsLink(this.link);
    const delta = 1;
    const vel = [this.vect[0] * delta, this.vect[1] * delta];

    if (vel[0] > 0 && vel[1] > 0) {
      if (vel[0] > vel[1]) {
        this.walkDir = 'right';
      } else {
        this.walkDir = 'down';
      }
    } else if (vel[0] > 0 && vel[1] < 0) {
      if (vel[0] > Math.abs(vel[1])) {
        this.walkDir = 'right';
      } else {
        this.walkDir = 'up';
      }
    } else if (vel[0] < 0 && vel[1] > 0) {
      if (Math.abs(vel[0]) > vel[1]) {
        this.walkDir = 'left';
      } else {
        this.walkDir = 'down';
      }
    } else if (vel[0] < 0 && vel[1] < 0) {
      if (Math.abs(vel[0]) > Math.abs(vel[1])) {
        this.walkDir = 'left';
      } else {
        this.walkDir = 'up';
      }
    }

    // if (!this.sword) {
    //   if (this.up) vel = [vel[0], vel[1] - delta];
    //   if (this.left) vel = [vel[0] - delta, vel[1]];
    //   if (this.down) vel = [vel[0], vel[1] + delta];
    //   if (this.right) vel = [vel[0] + delta, vel[1]];
    // }

    // if (vel[0] === 0 && vel[1] === 0) {
    //   this.walking = false;
    // } else {
    //   if (!this.walking) this.frameIndex = 0;
    //   this.walking = true;
    // }

    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
      offsetX = vel[0] * velocityScale,
      offsetY = vel[1] * velocityScale;

    const newPos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

    if (this.game.enemyIsOutOfBounds(newPos, this)) {
      const newPosX = [this.pos[0] + offsetX, this.pos[1]];
      const newPosY = [this.pos[0], this.pos[1] + offsetY];

      if (!this.game.enemyIsOutOfBounds(newPosX, this)) {
        this.pos = newPosX;
      }
      if (!this.game.enemyIsOutOfBounds(newPosY, this)) {
        this.pos = newPosY;
      }
    } else {
      this.pos = newPos;
    }
  }

  // update() {
  //   this.tickCount += 1;
  //   if (this.tickCount > this.ticksPerFrame) {
  //     this.tickCount = 0;
  //     if (this.frameIndex < this.frameLen - 1) {
  //       this.frameIndex += 1;
  //     } else {
  //       this.frameIndex = 0;
  //     }
  //   }
  // }

  // draw(ctx) {
  //   // if (!this.down && !this.left && !this.right && !this.up) {
  //   //   this.walking = false;
  //   // } else {
  //   //   if (!this.walking) this.frameIndex = 0;
  //   //   this.walking = true;
  //   // }
  //   if (this.sword) {
  //     if (this.walkDir === 'down') {
  //       this.frameLen = SWORD_DOWN.length;
  //       ctx.drawImage(this.linkSprite,
  //         SWORD_DOWN[this.frameIndex][0],
  //         SWORD_DOWN[this.frameIndex][1],
  //         SWORD_DOWN[this.frameIndex][2],
  //         SWORD_DOWN[this.frameIndex][3],
  //         this.pos[0],
  //         this.pos[1],
  //         SWORD_DOWN[this.frameIndex][2] * this.scale,
  //         SWORD_DOWN[this.frameIndex][3] * this.scale
  //       );
  //     } else if (this.walkDir === 'up') {
  //       this.frameLen = SWORD_UP.length;
  //       ctx.drawImage(this.linkSprite,
  //         SWORD_UP[this.frameIndex][0],
  //         SWORD_UP[this.frameIndex][1],
  //         SWORD_UP[this.frameIndex][2],
  //         SWORD_UP[this.frameIndex][3],
  //         this.pos[0] - SWORD_UP[this.frameIndex][2] * this.scale + 40,
  //         this.pos[1] - SWORD_UP[this.frameIndex][3] * this.scale + 42,
  //         SWORD_UP[this.frameIndex][2] * this.scale,
  //         SWORD_UP[this.frameIndex][3] * this.scale
  //       );
  //     } else if (this.walkDir === 'left') {
  //       this.frameLen = SWORD_LEFT.length;
  //       ctx.drawImage(this.linkSprite,
  //         SWORD_LEFT[this.frameIndex][0],
  //         SWORD_LEFT[this.frameIndex][1],
  //         SWORD_LEFT[this.frameIndex][2],
  //         SWORD_LEFT[this.frameIndex][3],
  //         this.pos[0] - SWORD_LEFT[this.frameIndex][2] * this.scale + 32,
  //         this.pos[1],
  //         SWORD_LEFT[this.frameIndex][2] * this.scale,
  //         SWORD_LEFT[this.frameIndex][3] * this.scale
  //       );
  //     } else if (this.walkDir === 'right') {
  //       this.frameLen = SWORD_LEFT.length;
  //       ctx.drawImage(this.linkSprite,
  //         SWORD_RIGHT[this.frameIndex][0],
  //         SWORD_RIGHT[this.frameIndex][1],
  //         SWORD_RIGHT[this.frameIndex][2],
  //         SWORD_RIGHT[this.frameIndex][3],
  //         this.pos[0],
  //         this.pos[1],
  //         SWORD_RIGHT[this.frameIndex][2] * this.scale,
  //         SWORD_RIGHT[this.frameIndex][3] * this.scale
  //       );
  //     }
  //   } else {
  //     if (this.down && !this.left && !this.right && !this.up) {
  //       if (this.walkDir !== 'down') this.frameIndex = 0;
  //       this.walkDir = 'down';
  //       this.frameLen = WALK_DOWN.length;
  //     } else if (!this.down && this.left && !this.right && !this.up) {
  //       if (this.walkDir !== 'left') this.frameIndex = 0;
  //       this.walkDir = 'left';
  //       this.frameLen = WALK_SIDE.length;
  //     } else if (!this.down && !this.left && this.right && !this.up) {
  //       if (this.walkDir !== 'right') this.frameIndex = 0;
  //       this.walkDir = 'right';
  //       this.frameLen = WALK_SIDE.length;
  //     } else if (!this.down && !this.left && !this.right && this.up) {
  //       if (this.walkDir !== 'up') this.frameIndex = 0;
  //       this.walkDir = 'up';
  //       this.frameLen = WALK_UP.length;
  //     }

  //     if (this.walking) {
  //       if (this.walkDir === 'down') {
  //         ctx.drawImage(this.linkSprite, WALK_DOWN[this.frameIndex], 30, 16, 24, this.pos[0], this.pos[1], 32, 48);
  //       } else if (this.walkDir === 'up') {
  //         ctx.drawImage(this.linkSprite, WALK_UP[this.frameIndex], 120, 17, 24, this.pos[0], this.pos[1], 34, 48);
  //       } else if (this.walkDir === 'right') {
  //         ctx.drawImage(this.linkSprite, WALK_SIDE[this.frameIndex], 120, 19, 24, this.pos[0], this.pos[1], 38, 48);
  //       } else if (this.walkDir === 'left') {
  //         ctx.drawImage(this.linkSprite, WALK_SIDE[this.frameIndex], 30, 19, 24, this.pos[0], this.pos[1], 38, 48);
  //       }
  //     } else {
  //       if (this.walkDir === 'down') {
  //         ctx.drawImage(this.linkSprite, 33, 1, 16, 22, this.pos[0], this.pos[1], 32, 44);
  //       } else if (this.walkDir === 'up') {
  //         ctx.drawImage(this.linkSprite, 63, 1, 16, 22, this.pos[0], this.pos[1], 32, 44);
  //       } else if (this.walkDir === 'right') {
  //         ctx.drawImage(this.linkSprite, 331, 120, 19, 23, this.pos[0], this.pos[1], 38, 46);
  //       } else if (this.walkDir === 'left') {
  //         ctx.drawImage(this.linkSprite, 151, 0, 19, 23, this.pos[0], this.pos[1], 38, 46);
  //       }
  //     }
  //   }

  //   this.update();
  // }

}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default Enemy;