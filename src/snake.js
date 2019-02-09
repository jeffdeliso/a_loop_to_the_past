import Enemy from "./enemy";

const SNAKE_DOWN = [
  [5, 766, 13, 16],
  [5, 806, 13, 16]
];
const SNAKE_UP = [
  [86, 766, 12, 16],
  [86, 806, 12, 16]
];
const SNAKE_LEFT = [
  [44, 766, 16, 16],
  [44, 806, 16, 16]
];
const SNAKE_RIGHT = [
  [285, 766, 16, 16],
  [285, 806, 16, 16]
];

class Snake extends Enemy {
  constructor(options) {
    super(options);

    this.frameLen = 2;
    this.box = [24, 32];
    this.life = 1;
    this.delta = 3;
    this.dropChance = 0.2;

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
        this.frameLen = SNAKE_DOWN.length;
        ctx.drawImage(this.enemySprite,
          SNAKE_DOWN[this.frameIndex][0],
          SNAKE_DOWN[this.frameIndex][1],
          SNAKE_DOWN[this.frameIndex][2],
          SNAKE_DOWN[this.frameIndex][3],
          this.pos[0],
          this.pos[1],
          SNAKE_DOWN[this.frameIndex][2] * this.scale,
          SNAKE_DOWN[this.frameIndex][3] * this.scale
        );
      } else if (this.walkDir === 'up') {
        this.frameLen = SNAKE_UP.length;
        ctx.drawImage(this.enemySprite,
          SNAKE_UP[this.frameIndex][0],
          SNAKE_UP[this.frameIndex][1],
          SNAKE_UP[this.frameIndex][2],
          SNAKE_UP[this.frameIndex][3],
          this.pos[0],
          this.pos[1] - SNAKE_UP[this.frameIndex][3] * this.scale + 74,
          SNAKE_UP[this.frameIndex][2] * this.scale,
          SNAKE_UP[this.frameIndex][3] * this.scale
        );
      } else if (this.walkDir === 'left') {
        this.frameLen = SNAKE_LEFT.length;
        ctx.drawImage(this.enemySprite,
          SNAKE_LEFT[this.frameIndex][0],
          SNAKE_LEFT[this.frameIndex][1],
          SNAKE_LEFT[this.frameIndex][2],
          SNAKE_LEFT[this.frameIndex][3],
          this.pos[0] - SNAKE_LEFT[this.frameIndex][2] * this.scale + 66,
          this.pos[1],
          SNAKE_LEFT[this.frameIndex][2] * this.scale,
          SNAKE_LEFT[this.frameIndex][3] * this.scale
        );
      } else if (this.walkDir === 'right') {
        this.frameLen = SNAKE_RIGHT.length;
        ctx.drawImage(this.enemySprite2,
          SNAKE_RIGHT[this.frameIndex][0],
          SNAKE_RIGHT[this.frameIndex][1],
          SNAKE_RIGHT[this.frameIndex][2],
          SNAKE_RIGHT[this.frameIndex][3],
          this.pos[0],
          this.pos[1],
          SNAKE_RIGHT[this.frameIndex][2] * this.scale,
          SNAKE_RIGHT[this.frameIndex][3] * this.scale
        );
      }
    }

    this.update();
  }

}

export default Snake;