import MovingObject from "./moving_object";

const WALK_DOWN = [3, 33, 63, 93, 123, 153, 183, 213];
const WALK_UP = [2, 32, 62, 92, 122, 152, 182, 212];
const WALK_SIDE = [241, 272, 301, 331, 361, 392];
const SWORD_UP = [
  [0, 181, 22, 22],
  [30, 177, 22, 30],
  [61, 174, 20, 35],
  [89, 177, 24, 30],
  [115, 180, 32, 23]
];
const SWORD_DOWN = [
  [1, 90, 20, 23],
  [30, 90, 22, 24],
  [61, 86, 20, 31],
  [91, 86, 20, 31],
  [115, 87, 28, 29],
  [145, 88, 32, 27]
];
const SWORD_LEFT = [
  [242, 90, 18, 23],
  [268, 90, 26, 24],
  [295, 91, 31, 21],
  [327, 91, 28, 21],
  [359, 86, 23, 31],
  [393, 91, 16, 22]
];
const SWORD_RIGHT = [
  [242, 180, 18, 23],
  [268, 180, 26, 24],
  [295, 181, 31, 21],
  [327, 181, 28, 21],
  [359, 176, 23, 31],
  [393, 181, 16, 22]
];

class Link extends MovingObject {
  constructor(options) {
    super(options);
    this.linkSprite = new Image();
    this.linkSprite.src = "../assets/sprites/link.png";
    this.move = this.move.bind(this);
    this.parseKeyDown = this.parseKeyDown.bind(this);
    this.parseKeyUp = this.parseKeyUp.bind(this);
    this.update = this.update.bind(this);
    this.scale = 2;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = 6;
    this.pos = [473, 310];
    this.draw = this.draw.bind(this);
    this.walkDir = 'down';
    this.frameLen = 7;
    this.box = [32, 48];
    this.toggleSword = this.toggleSword.bind(this);
    this.canSwing = true;
  }

  parseKeyUp(e) {
    e.preventDefault();
    if (e.keyCode === 32) this.canSwing = true;
    if (e.keyCode === 87 || e.keyCode === 38) this.up = false;
    if (e.keyCode === 65 || e.keyCode === 37) this.left = false;
    if (e.keyCode === 83 || e.keyCode === 40) this.down = false;
    if (e.keyCode === 68 || e.keyCode === 39) this.right = false;
  }

  parseKeyDown(e) {
    e.preventDefault();
    if (e.keyCode === 32) this.swingSword();
    if (e.keyCode === 87 || e.keyCode === 38) this.up = true;
    if (e.keyCode === 65 || e.keyCode === 37) this.left = true;
    if (e.keyCode === 83 || e.keyCode === 40) this.down = true;
    if (e.keyCode === 68 || e.keyCode === 39) this.right = true;
  }

  move(timeDelta) {
    let vel = [0, 0];
    const delta = 2;
    if (!this.sword) {
      if (this.up) vel = [vel[0], vel[1] - delta];
      if (this.left) vel = [vel[0] - delta, vel[1]];
      if (this.down) vel = [vel[0], vel[1] + delta];
      if (this.right) vel = [vel[0] + delta, vel[1]];
    }

    if (vel[0] === 0 && vel[1] === 0) {
      this.walking = false;
    } else {
      if (!this.walking) this.frameIndex = 0;
      this.walking = true;
    }

    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
      offsetX = vel[0] * velocityScale,
      offsetY = vel[1] * velocityScale;

    const newPos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

    if (this.game.isOutOfBounds(newPos, this.box)) {
      const newPosX = [this.pos[0] + offsetX, this.pos[1]];
      const newPosY = [this.pos[0], this.pos[1] + offsetY];

      if (!this.game.isOutOfBounds(newPosX, this.box)) {
        this.pos = newPosX;
      }
      if (!this.game.isOutOfBounds(newPosY, this.box)) {
        this.pos = newPosY;
      }
    } else {
      this.pos = newPos;
    }
  }

  update() {
    this.tickCount += 1;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      if (this.frameIndex < this.frameLen - 1) {
        this.frameIndex += 1;
      } else {
        this.frameIndex = 0;
        if (this.sword) this.toggleSword();
      }
    }
  }

  swingSword() {
    if (!this.sword && this.canSwing) {
      this.sword = true;
      this.canSwing = false;
      this.frameIndex = 0;
      this.ticksPerFrame = 2;
    }
  }

  toggleSword() {
    this.ticksPerFrame = 6;
    this.sword = !this.sword;
    this.frameLen = WALK_SIDE.length;
  }

  draw(ctx) {
    // if (!this.down && !this.left && !this.right && !this.up) {
    //   this.walking = false;
    // } else {
    //   if (!this.walking) this.frameIndex = 0;
    //   this.walking = true;
    // }
    if (this.sword) {
      if (this.walkDir === 'down') {
        this.frameLen = SWORD_DOWN.length;
        ctx.drawImage(this.linkSprite,
          SWORD_DOWN[this.frameIndex][0],
          SWORD_DOWN[this.frameIndex][1],
          SWORD_DOWN[this.frameIndex][2],
          SWORD_DOWN[this.frameIndex][3],
          this.pos[0],
          this.pos[1],
          SWORD_DOWN[this.frameIndex][2] * this.scale,
          SWORD_DOWN[this.frameIndex][3] * this.scale
        );
      } else if (this.walkDir === 'up') {
        this.frameLen = SWORD_UP.length;
        ctx.drawImage(this.linkSprite,
          SWORD_UP[this.frameIndex][0],
          SWORD_UP[this.frameIndex][1],
          SWORD_UP[this.frameIndex][2],
          SWORD_UP[this.frameIndex][3],
          this.pos[0] - SWORD_UP[this.frameIndex][2] * this.scale + 40,
          this.pos[1] - SWORD_UP[this.frameIndex][3] * this.scale + 42,
          SWORD_UP[this.frameIndex][2] * this.scale,
          SWORD_UP[this.frameIndex][3] * this.scale
        );
      } else if (this.walkDir === 'left') {
        this.frameLen = SWORD_LEFT.length;
        ctx.drawImage(this.linkSprite,
          SWORD_LEFT[this.frameIndex][0],
          SWORD_LEFT[this.frameIndex][1],
          SWORD_LEFT[this.frameIndex][2],
          SWORD_LEFT[this.frameIndex][3],
          this.pos[0] - SWORD_LEFT[this.frameIndex][2] * this.scale + 32,
          this.pos[1],
          SWORD_LEFT[this.frameIndex][2] * this.scale,
          SWORD_LEFT[this.frameIndex][3] * this.scale
        );
      } else if (this.walkDir === 'right') {
        this.frameLen = SWORD_LEFT.length;
        ctx.drawImage(this.linkSprite,
          SWORD_RIGHT[this.frameIndex][0],
          SWORD_RIGHT[this.frameIndex][1],
          SWORD_RIGHT[this.frameIndex][2],
          SWORD_RIGHT[this.frameIndex][3],
          this.pos[0],
          this.pos[1],
          SWORD_RIGHT[this.frameIndex][2] * this.scale,
          SWORD_RIGHT[this.frameIndex][3] * this.scale
        );
      }
    } else {
      if (this.down && !this.left && !this.right && !this.up) {
        if (this.walkDir !== 'down') this.frameIndex = 0;
        this.walkDir = 'down';
        this.frameLen = WALK_DOWN.length;
      } else if (!this.down && this.left && !this.right && !this.up) {
        if (this.walkDir !== 'left') this.frameIndex = 0;
        this.walkDir = 'left';
        this.frameLen = WALK_SIDE.length;
      } else if (!this.down && !this.left && this.right && !this.up) {
        if (this.walkDir !== 'right') this.frameIndex = 0;
        this.walkDir = 'right';
        this.frameLen = WALK_SIDE.length;
      } else if (!this.down && !this.left && !this.right && this.up) {
        if (this.walkDir !== 'up') this.frameIndex = 0;
        this.walkDir = 'up';
        this.frameLen = WALK_UP.length;
      }

      if (this.walking) {
        if (this.walkDir === 'down') {
          ctx.drawImage(this.linkSprite, WALK_DOWN[this.frameIndex], 30, 16, 24, this.pos[0], this.pos[1], 32, 48);
        } else if (this.walkDir === 'up') {
          ctx.drawImage(this.linkSprite, WALK_UP[this.frameIndex], 120, 17, 24, this.pos[0], this.pos[1], 34, 48);
        } else if (this.walkDir === 'right') {
          ctx.drawImage(this.linkSprite, WALK_SIDE[this.frameIndex], 120, 19, 24, this.pos[0], this.pos[1], 38, 48);
        } else if (this.walkDir === 'left') {
          ctx.drawImage(this.linkSprite, WALK_SIDE[this.frameIndex], 30, 19, 24, this.pos[0], this.pos[1], 38, 48);
        }
      } else {
        if (this.walkDir === 'down') {
          ctx.drawImage(this.linkSprite, 33, 1, 16, 22, this.pos[0], this.pos[1], 32, 44);
        } else if (this.walkDir === 'up') {
          ctx.drawImage(this.linkSprite, 63, 1, 16, 22, this.pos[0], this.pos[1], 32, 44);
        } else if (this.walkDir === 'right') {
          ctx.drawImage(this.linkSprite, 331, 120, 19, 23, this.pos[0], this.pos[1], 38, 46);
        } else if (this.walkDir === 'left') {
          ctx.drawImage(this.linkSprite, 151, 0, 19, 23, this.pos[0], this.pos[1], 38, 46);
        }
      }
    }

    this.update();
  }

}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default Link;