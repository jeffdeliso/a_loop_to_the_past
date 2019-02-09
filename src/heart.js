import Entity from "./entity";

class Heart extends Entity {
  constructor(options) {
    super(options);
    this.heartSprite = new Image();
    this.heartSprite.src = "./assets/sprites/items-objects.gif";
    this.box = [14, 13];
    this.draw = this.draw.bind(this);
    this.startFlash = this.startFlash.bind(this);
    this.removeTimeouts = this.removeTimeouts.bind(this);
    this.tickCount = 0;
    this.ticksPerFrame = 4;
    this.flashCount = false;
    this.flashTimeout = setTimeout(this.startFlash, 10000);
  }

  startFlash() {
    this.flash = true;
    this.removeTimout = setTimeout(() => this.game.removeItem(this), 5000);
  }

  removeTimeouts() {
    clearTimeout(this.flashTimeout);
    clearTimeout(this.removeTimout);
  }

  draw(ctx) {
    if (this.flash && this.flashCount) {
      this.update();
    } else {
      ctx.drawImage(this.heartSprite, 153, 30, 14, 13, this.pos[0], this.pos[1], 21, 19.5);
      this.update();
    }
  }

  update() {
    this.tickCount += 1;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      this.flashCount = !this.flashCount;
    }
  }
}

export default Heart;