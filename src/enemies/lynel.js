import Enemy from "./enemy";

const LYNEL_DOWN = [
  [241, 321, 22, 26],
  [241, 361, 22, 26],
  [241, 401, 22, 26]
];
const LYNEL_UP = [
  [321, 318, 22, 31],
  [321, 358, 22, 31]
];
const LYNEL_LEFT = [
  [280, 320, 24, 27],
  [280, 361, 24, 26],
  [281, 400, 23, 27]
];
const LYNEL_RIGHT = [
  [41, 320, 24, 27],
  [41, 361, 24, 26],
  [41, 400, 23, 27]
];

class Lynel extends Enemy {
  constructor(options) {
    super(options);

    this.frameLen = 3;
    this.box = [44, 52];
    this.life = 4;
    this.delta = 1.5;
    this.dropChance = 1;

    this.draw = this.draw.bind(this);
    this.update = this.update.bind(this);
  }

  update() {
    this.tickCount += 1;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      if (this.frameIndex < this.frameLen - 1) {
        this.frameIndex += 1;
      } else {
        if (this.life === 0) this.remove();
        this.frameIndex = 0;
      }
    }
  }

  draw(ctx) {
    if (this.life === 0) {
      this.drawDeath(ctx);
    } else {
      if (this.walkDir === 'down') {
        this.frameLen = LYNEL_DOWN.length;
        ctx.drawImage(this.enemySprite,
          LYNEL_DOWN[this.frameIndex][0],
          LYNEL_DOWN[this.frameIndex][1],
          LYNEL_DOWN[this.frameIndex][2],
          LYNEL_DOWN[this.frameIndex][3],
          this.pos[0],
          this.pos[1],
          LYNEL_DOWN[this.frameIndex][2] * this.scale,
          LYNEL_DOWN[this.frameIndex][3] * this.scale
        );
      } else if (this.walkDir === 'up') {
        this.frameLen = LYNEL_UP.length;
        ctx.drawImage(this.enemySprite,
          LYNEL_UP[this.frameIndex][0],
          LYNEL_UP[this.frameIndex][1],
          LYNEL_UP[this.frameIndex][2],
          LYNEL_UP[this.frameIndex][3],
          this.pos[0],
          this.pos[1] - LYNEL_UP[this.frameIndex][3] * this.scale + 48,
          LYNEL_UP[this.frameIndex][2] * this.scale,
          LYNEL_UP[this.frameIndex][3] * this.scale
        );
      } else if (this.walkDir === 'left') {
        this.frameLen = LYNEL_LEFT.length;
        ctx.drawImage(this.enemySprite,
          LYNEL_LEFT[this.frameIndex][0],
          LYNEL_LEFT[this.frameIndex][1],
          LYNEL_LEFT[this.frameIndex][2],
          LYNEL_LEFT[this.frameIndex][3],
          this.pos[0] - LYNEL_LEFT[this.frameIndex][2] * this.scale + 28,
          this.pos[1],
          LYNEL_LEFT[this.frameIndex][2] * this.scale,
          LYNEL_LEFT[this.frameIndex][3] * this.scale
        );
      } else if (this.walkDir === 'right') {
        this.frameLen = LYNEL_RIGHT.length;
        ctx.drawImage(this.enemySprite2,
          LYNEL_RIGHT[this.frameIndex][0],
          LYNEL_RIGHT[this.frameIndex][1],
          LYNEL_RIGHT[this.frameIndex][2],
          LYNEL_RIGHT[this.frameIndex][3],
          this.pos[0],
          this.pos[1],
          LYNEL_RIGHT[this.frameIndex][2] * this.scale,
          LYNEL_RIGHT[this.frameIndex][3] * this.scale
        );
      }
    }

    this.update();
  }

}

export default Lynel;