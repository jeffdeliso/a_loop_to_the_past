import MovingObject from "./moving_object";

const WALK_DOWN = [3, 33, 63, 93, 123, 153, 183, 213];
const WALK_UP = [2, 32, 62, 92, 123, 152, 182, 212];
const WALK_SIDE = [241, 272, 301, 331, 361, 392];
// const WALK_LEFT = [249, 277, 301, 326, 351, 376, 402];


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
  }

  parseKeyUp(e) {
    e.preventDefault();
    if (e.keyCode === 87 || e.keyCode === 38) this.up = false;
    if (e.keyCode === 65 || e.keyCode === 37) this.left = false;
    if (e.keyCode === 83 || e.keyCode === 40) this.down = false;
    if (e.keyCode === 68 || e.keyCode === 39) this.right = false;
  }

  parseKeyDown(e) {
    e.preventDefault();
    if (e.keyCode === 87 || e.keyCode === 38) this.up = true;
    if (e.keyCode === 65 || e.keyCode === 37) this.left = true;
    if (e.keyCode === 83 || e.keyCode === 40) this.down = true;
    if (e.keyCode === 68 || e.keyCode === 39) this.right = true;
  }

  move(timeDelta) {
    this.update();
    let vel = [0, 0];
    const delta = 2;
    if (this.up) vel = [vel[0], vel[1] - delta];
    if (this.left) vel = [vel[0] - delta, vel[1]];
    if (this.down) vel = [vel[0], vel[1] + delta];
    if (this.right) vel = [vel[0] + delta, vel[1]];

    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
      offsetX = vel[0] * velocityScale,
      offsetY = vel[1] * velocityScale;

    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

    if (this.game.isOutOfBounds(this.pos)) {
      if (this.isWrappable) {
        this.pos = this.game.wrap(this.pos);
      } else {
        this.remove();
      }
    }
  }

  update() {
    this.tickCount += 1;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      if (this.frameIndex < this.frameLen - 1) {
        // debugger
        this.frameIndex += 1;
      } else {
        this.frameIndex = 0;
      }
    }
  }

  draw(ctx) {
    if (this.down && !this.left && !this.right && !this.up) {
      this.walkDir = 'down';
      this.frameLen = WALK_DOWN.length;
    } else if (!this.down && this.left && !this.right && !this.up) {
      this.walkDir = 'left';
      this.frameLen = WALK_SIDE.length;
    } else if (!this.down && !this.left && this.right && !this.up) {
      this.walkDir = 'right';
      this.frameLen = WALK_SIDE.length;
    } else if (!this.down && !this.left && !this.right && this.up) {
      this.walkDir = 'up';
      this.frameLen = WALK_UP.length;
    }

    if (this.walkDir === 'down') {
      ctx.drawImage(this.linkSprite, WALK_DOWN[this.frameIndex], 30, 16, 24, this.pos[0], this.pos[1], 32, 48);
    } else if (this.walkDir === 'up') {
      ctx.drawImage(this.linkSprite, WALK_UP[this.frameIndex], 120, 17, 24, this.pos[0], this.pos[1], 34, 48);
    } else if (this.walkDir === 'right') {
      ctx.drawImage(this.linkSprite, WALK_SIDE[this.frameIndex], 120, 19, 24, this.pos[0], this.pos[1], 38, 48);
    } else if (this.walkDir === 'left') {
      ctx.drawImage(this.linkSprite, WALK_SIDE[this.frameIndex], 30, 19, 24, this.pos[0], this.pos[1], 38, 48);
    }
  }

}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default Link;