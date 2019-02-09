import Enemy from "./enemy";

const BLUE_DOWN = [
  [1, 156, 22, 35],
  [1, 197, 22, 33],
  [1, 235, 22, 38],
  [1, 277, 22, 34]
];
const BLUE_UP = [
  [81, 161, 22, 26],
  [81, 197, 22, 33],
  [81, 240, 22, 27],
  [81, 281, 22, 26]
];
const BLUE_LEFT = [
  [37, 161, 29, 26],
  [36, 200, 32, 27],
  [37, 240, 29, 27]
];
const BLUE_RIGHT = [
  [279, 161, 29, 26],
  [277, 200, 32, 27],
  [279, 240, 29, 27]
];

class BlueKnight extends Enemy {
  constructor(options) {
    super(options);
    this.blueSprite = new Image();
    this.blueSprite.src = "../assets/sprites/enemies.png";
    this.blueSprite2 = new Image();
    this.blueSprite2.src = "../assets/sprites/enemies2.png";

    this.frameLen = 4;
    this.box = [44, 56];
    this.life = 5;
    this.delta = 0.75;
    this.dropChance = 0.3;

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
        this.frameLen = BLUE_DOWN.length;
        ctx.drawImage(this.blueSprite,
          BLUE_DOWN[this.frameIndex][0],
          BLUE_DOWN[this.frameIndex][1],
          BLUE_DOWN[this.frameIndex][2],
          BLUE_DOWN[this.frameIndex][3],
          this.pos[0],
          this.pos[1],
          BLUE_DOWN[this.frameIndex][2] * this.scale,
          BLUE_DOWN[this.frameIndex][3] * this.scale
        );
      } else if (this.walkDir === 'up') {
        this.frameLen = BLUE_UP.length;
        ctx.drawImage(this.blueSprite,
          BLUE_UP[this.frameIndex][0],
          BLUE_UP[this.frameIndex][1],
          BLUE_UP[this.frameIndex][2],
          BLUE_UP[this.frameIndex][3],
          this.pos[0],
          this.pos[1] - BLUE_UP[this.frameIndex][3] * this.scale + 74,
          BLUE_UP[this.frameIndex][2] * this.scale,
          BLUE_UP[this.frameIndex][3] * this.scale
        );
      } else if (this.walkDir === 'left') {
        this.frameLen = BLUE_LEFT.length;
        ctx.drawImage(this.blueSprite,
          BLUE_LEFT[this.frameIndex][0],
          BLUE_LEFT[this.frameIndex][1],
          BLUE_LEFT[this.frameIndex][2],
          BLUE_LEFT[this.frameIndex][3],
          this.pos[0] - BLUE_LEFT[this.frameIndex][2] * this.scale + 66,
          this.pos[1],
          BLUE_LEFT[this.frameIndex][2] * this.scale,
          BLUE_LEFT[this.frameIndex][3] * this.scale
        );
      } else if (this.walkDir === 'right') {
        this.frameLen = BLUE_RIGHT.length;
        ctx.drawImage(this.blueSprite2,
          BLUE_RIGHT[this.frameIndex][0],
          BLUE_RIGHT[this.frameIndex][1],
          BLUE_RIGHT[this.frameIndex][2],
          BLUE_RIGHT[this.frameIndex][3],
          this.pos[0],
          this.pos[1],
          BLUE_RIGHT[this.frameIndex][2] * this.scale,
          BLUE_RIGHT[this.frameIndex][3] * this.scale
        );
      }
    }

    this.update();
  }

}

export default BlueKnight;