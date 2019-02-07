import Enemy from "./enemy";

const MOBLIN_DOWN = [
  [124, 0, 16, 28],
  [124, 38, 16, 32],
  [123, 81, 16, 28],
  [124, 121, 16, 26]
];
const MOBLIN_UP = [
  [203, 1, 18, 25],
  [203, 41, 18, 25],
  [203, 80, 18, 28],
  [204, 121, 16, 25]
];
const MOBLIN_LEFT = [
  [225, 15, 19, 25],
  [222, 56, 24, 24],
  [226, 95, 17, 25],
  [227, 136, 14, 24]
];
const MOBLIN_RIGHT = [
  [162, 1, 19, 25],
  [160, 42, 24, 24],
  [163, 81, 17, 25],
  [165, 122, 14, 24]
];


class Moblin extends Enemy {
  constructor(options) {
    super(options);
    this.moblinSprite = new Image();
    this.moblinSprite.src = "../assets/sprites/enemies.png";
    this.frameLen = 4;
    this.box = [28, 48];

    this.draw = this.draw.bind(this);
    // this.move = this.move.bind(this);
    this.update = this.update.bind(this);
  }

  // move(timeDelta) {
  //   let vel = [0, 0];
  //   const delta = 2;
  //   if (!this.sword) {
  //     if (this.up) vel = [vel[0], vel[1] - delta];
  //     if (this.left) vel = [vel[0] - delta, vel[1]];
  //     if (this.down) vel = [vel[0], vel[1] + delta];
  //     if (this.right) vel = [vel[0] + delta, vel[1]];
  //   }

  //   if (vel[0] === 0 && vel[1] === 0) {
  //     this.walking = false;
  //   } else {
  //     if (!this.walking) this.frameIndex = 0;
  //     this.walking = true;
  //   }

  //   const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
  //     offsetX = vel[0] * velocityScale,
  //     offsetY = vel[1] * velocityScale;

  //   const newPos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

  //   if (this.game.isOutOfBounds(newPos, this.box)) {
  //     const newPosX = [this.pos[0] + offsetX, this.pos[1]];
  //     const newPosY = [this.pos[0], this.pos[1] + offsetY];

  //     if (!this.game.isOutOfBounds(newPosX, this.box)) {
  //       this.pos = newPosX;
  //     }
  //     if (!this.game.isOutOfBounds(newPosY, this.box)) {
  //       this.pos = newPosY;
  //     }
  //   } else {
  //     this.pos = newPos;
  //   }
  // }

  update() {
    this.tickCount += 1;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      if (this.frameIndex < this.frameLen - 1) {
        this.frameIndex += 1;
      } else {
        this.frameIndex = 0;
        if (this.life === 0) this.game.remove(this);
      }
    }
  }

  draw(ctx) {
    // if (!this.down && !this.left && !this.right && !this.up) {
    //   this.walking = false;
    // } else {
    //   if (!this.walking) this.frameIndex = 0;
    //   this.walking = true;
    // }
    if (this.life === 0) {
      this.drawDeath(ctx);
    } else {
      if (this.walkDir === 'down') {
        ctx.drawImage(this.moblinSprite,
          MOBLIN_DOWN[this.frameIndex][0],
          MOBLIN_DOWN[this.frameIndex][1],
          MOBLIN_DOWN[this.frameIndex][2],
          MOBLIN_DOWN[this.frameIndex][3],
          this.pos[0],
          this.pos[1],
          MOBLIN_DOWN[this.frameIndex][2] * this.scale,
          MOBLIN_DOWN[this.frameIndex][3] * this.scale
        );
      } else if (this.walkDir === 'up') {
        ctx.drawImage(this.moblinSprite,
          MOBLIN_UP[this.frameIndex][0],
          MOBLIN_UP[this.frameIndex][1],
          MOBLIN_UP[this.frameIndex][2],
          MOBLIN_UP[this.frameIndex][3],
          this.pos[0],
          this.pos[1] - MOBLIN_UP[this.frameIndex][3] * this.scale + 48,
          MOBLIN_UP[this.frameIndex][2] * this.scale,
          MOBLIN_UP[this.frameIndex][3] * this.scale
        );
      } else if (this.walkDir === 'left') {
        ctx.drawImage(this.moblinSprite,
          MOBLIN_LEFT[this.frameIndex][0],
          MOBLIN_LEFT[this.frameIndex][1],
          MOBLIN_LEFT[this.frameIndex][2],
          MOBLIN_LEFT[this.frameIndex][3],
          this.pos[0] - MOBLIN_LEFT[this.frameIndex][2] * this.scale + 28,
          this.pos[1],
          MOBLIN_LEFT[this.frameIndex][2] * this.scale,
          MOBLIN_LEFT[this.frameIndex][3] * this.scale
        );
      } else if (this.walkDir === 'right') {
        ctx.drawImage(this.moblinSprite,
          MOBLIN_RIGHT[this.frameIndex][0],
          MOBLIN_RIGHT[this.frameIndex][1],
          MOBLIN_RIGHT[this.frameIndex][2],
          MOBLIN_RIGHT[this.frameIndex][3],
          this.pos[0],
          this.pos[1],
          MOBLIN_RIGHT[this.frameIndex][2] * this.scale,
          MOBLIN_RIGHT[this.frameIndex][3] * this.scale
        );
      }
    }

    this.update();
  }

}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default Moblin;