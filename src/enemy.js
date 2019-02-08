import MovingObject from "./moving_object";

const DEATH = [
  [83, 8, 16, 15],
  [110, 9, 14, 14],
  [132, 4, 22, 22],
  [157, 5, 24, 22]
];

class Enemy extends MovingObject {
  constructor(options) {
    super(options);
    this.link = options.link;
    this.deathSprite = new Image();
    this.deathSprite.src = "../assets/sprites/death-effects.png";
    this.hitSound = new Audio('../assets/sounds/LTTP_Enemy_Hit.wav');
    this.deathSound = new Audio('../assets/sounds/LTTP_Enemy_Kill.wav');

    this.scale = 2;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = 6;
    this.walkDir = 'down';
    this.life = 3;
    this.delta = 1;

    this.move = this.move.bind(this);
    this.toggleHit = this.toggleHit.bind(this);
    this.drawDeath = this.drawDeath.bind(this);
  }

  vectorTowardsLink(link) {
    const dx = (link.x() - this.x());
    const dy = (link.y() - this.y());
    const len = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    return [dx / len || 0, dy / len || 0];
  }

  move(timeDelta) {
    let vel;
    if (this.life === 0) {
      vel = [0, 0];
    } else if (!this.hit) {
      this.vect = this.vectorTowardsLink(this.link);
      vel = [this.vect[0] * this.delta, this.vect[1] * this.delta];

      if (vel[0] > 0 && vel[1] > 0) {
        if (vel[0] > vel[1]) {
          if (this.walkDir !== 'right') this.frameIndex = 0;
          this.walkDir = 'right';
        } else {
          if (this.walkDir !== 'down') this.frameIndex = 0;
          this.walkDir = 'down';
        }
      } else if (vel[0] > 0 && vel[1] < 0) {
        if (vel[0] > Math.abs(vel[1])) {
          if (this.walkDir !== 'right') this.frameIndex = 0;
          this.walkDir = 'right';
        } else {
          if (this.walkDir !== 'up') this.frameIndex = 0;
          this.walkDir = 'up';
        }
      } else if (vel[0] < 0 && vel[1] > 0) {
        if (Math.abs(vel[0]) > vel[1]) {
          if (this.walkDir !== 'left') this.frameIndex = 0;
          this.walkDir = 'left';
        } else {
          if (this.walkDir !== 'down') this.frameIndex = 0;
          this.walkDir = 'down';
        }
      } else if (vel[0] < 0 && vel[1] < 0) {
        if (Math.abs(vel[0]) > Math.abs(vel[1])) {
          if (this.walkDir !== 'left') this.frameIndex = 0;
          this.walkDir = 'left';
        } else {
          if (this.walkDir !== 'up') this.frameIndex = 0;
          this.walkDir = 'up';
        }
      }
    } else {
      const delta = 4;
      vel = [this.hitVect[0] * delta, this.hitVect[1] * delta];
    }

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

  hitByLink() {
    if (!this.hit) {
      this.hitSound.play();
      this.hitVect = [this.vect[0] * -1, this.vect[1] * -1];
      this.hit = true;
      setTimeout(this.toggleHit, 300);
    }
  }

  toggleHit() {
    this.hit = !this.hit;
    this.life -= 1;
    if (this.life === 0) {
      this.ticksPerFrame = 2;
      this.frameIndex = 0;
    }
  }

  drawDeath(ctx) {
    this.deathSound.play();
    ctx.drawImage(this.deathSprite,
      DEATH[this.frameIndex][0],
      DEATH[this.frameIndex][1],
      DEATH[this.frameIndex][2],
      DEATH[this.frameIndex][3],
      this.pos[0],
      this.pos[1],
      DEATH[this.frameIndex][2] * this.scale,
      DEATH[this.frameIndex][3] * this.scale
    );
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default Enemy;