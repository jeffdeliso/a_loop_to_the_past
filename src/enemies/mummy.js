import Enemy from "./enemy";

const MUMMY_DOWN = [
  [124, 681, 16, 26],
  [124, 721, 16, 25]
];
const MUMMY_UP = [
  [204, 681, 16, 26],
  [204, 721, 16, 25]
];
const MUMMY_LEFT = [
  [164, 681, 15, 25],
  [165, 721, 14, 26]
];
const MUMMY_RIGHT = [
  [166, 681, 15, 25],
  [166, 721, 14, 26]
];

class Mummy extends Enemy {
  constructor(options) {
    super(options);

    this.frameLen = 2;
    this.box = [30, 50];
    this.life = 2;
    this.delta = 0.6;
    this.dropChance = 0.1;

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
        if (this.life <= 0) this.remove();
        this.frameIndex = 0;
      }
    }
  }

  draw(ctx) {
    if (this.life <= 0) {
      this.drawDeath(ctx);
    } else {
      if (this.walkDir === 'down') {
        this.frameLen = MUMMY_DOWN.length;
        ctx.drawImage(this.enemySprite,
          MUMMY_DOWN[this.frameIndex][0],
          MUMMY_DOWN[this.frameIndex][1],
          MUMMY_DOWN[this.frameIndex][2],
          MUMMY_DOWN[this.frameIndex][3],
          this.pos[0],
          this.pos[1],
          MUMMY_DOWN[this.frameIndex][2] * this.scale,
          MUMMY_DOWN[this.frameIndex][3] * this.scale
        );
      } else if (this.walkDir === 'up') {
        this.frameLen = MUMMY_UP.length;
        ctx.drawImage(this.enemySprite,
          MUMMY_UP[this.frameIndex][0],
          MUMMY_UP[this.frameIndex][1],
          MUMMY_UP[this.frameIndex][2],
          MUMMY_UP[this.frameIndex][3],
          this.pos[0],
          this.pos[1],
          MUMMY_UP[this.frameIndex][2] * this.scale,
          MUMMY_UP[this.frameIndex][3] * this.scale
        );
      } else if (this.walkDir === 'left') {
        this.frameLen = MUMMY_LEFT.length;
        ctx.drawImage(this.enemySprite,
          MUMMY_LEFT[this.frameIndex][0],
          MUMMY_LEFT[this.frameIndex][1],
          MUMMY_LEFT[this.frameIndex][2],
          MUMMY_LEFT[this.frameIndex][3],
          this.pos[0],
          this.pos[1],
          MUMMY_LEFT[this.frameIndex][2] * this.scale,
          MUMMY_LEFT[this.frameIndex][3] * this.scale
        );
      } else if (this.walkDir === 'right') {
        this.frameLen = MUMMY_RIGHT.length;
        ctx.drawImage(this.enemySprite2,
          MUMMY_RIGHT[this.frameIndex][0],
          MUMMY_RIGHT[this.frameIndex][1],
          MUMMY_RIGHT[this.frameIndex][2],
          MUMMY_RIGHT[this.frameIndex][3],
          this.pos[0],
          this.pos[1],
          MUMMY_RIGHT[this.frameIndex][2] * this.scale,
          MUMMY_RIGHT[this.frameIndex][3] * this.scale
        );
      }
    }

    this.update();
  }

}

export default Mummy;