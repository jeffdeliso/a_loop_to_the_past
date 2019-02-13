import Sword from "./sword";
import Entity from "./entity";

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
const SPIN_DOWN = [
  [504, 139, 20, 26, 0, 4],
  [532, 126, 15, 36, 0, 14],
  [576, 138, 20, 26, 0, 4],
  [604, 142, 28, 22, 0, 0],
  [638, 142, 28, 22, 0, 0],
  [673, 141, 17, 31, 0, 0],
  [695, 142, 28, 22, 12, 0],
  [729, 142, 28, 22, 12, 0],
  [764, 136, 16, 28, 0, 6],
  [791, 138, 20, 26, 0, 4],
  [818, 142, 16, 22, 0, 0]
];
const SPIN_UP = [
  [487, 60, 20, 27, 3, 0],
  [516, 61, 15, 35, -1, 0],
  [595, 60, 20, 27, 3, 0],
  [620, 60, 28, 22, 11, 0],
  [657, 54, 16, 28, 0, 6],
  [681, 60, 28, 22, 0, 0],
  [720, 60, 16, 31, 0, 0],
  [746, 61, 17, 31, 0, 0],
  [767, 61, 20, 27, 3, 0],
  [797, 61, 17, 22, 0, 0]
];
const SPIN_LEFT = [
  [500, 19, 23, 23, 0, 0],
  [536, 19, 31, 23, 0, 0],
  [664, 19, 23, 23, 0, 0],
  [697, 19, 16, 31, 0, 0],
  [718, 19, 28, 23, 12, 0],
  [750, 19, 28, 23, 12, 0],
  [789, 13, 17, 29, 0, 6],
  [815, 19, 28, 23, 0, 0],
  [845, 19, 28, 23, 0, 0],
  [879, 19, 23, 23, 0, 0]
];
const SPIN_RIGHT = [
  [379, 19, 23, 23, 7, 0],
  [335, 19, 31, 23, 15, 0],
  [215, 19, 23, 23, 6, 0],
  [189, 19, 16, 31, 0, 0],
  [156, 19, 28, 23, 0, 0],
  [124, 19, 28, 23, 0, 0],
  [96, 13, 17, 29, 0, 6],
  [59, 19, 28, 23, 12, 0],
  [29, 19, 28, 23, 12, 0],
  [0, 19, 23, 23, 7, 0]
];

class Link extends Entity {
  constructor(options) {
    super(options);
    this.linkSprite = new Image();
    this.linkSprite.src = "./assets/sprites/link.png";
    this.linkSprite2 = new Image();
    this.linkSprite2.src = "./assets/sprites/link.gif";
    this.linkSprite3 = new Image();
    this.linkSprite3.src = "./assets/sprites/link2.gif";
    this.swordSound = new Audio('./assets/sounds/LTTP_Sword.wav');
    this.hurtSound = new Audio('./assets/sounds/LTTP_Link_Hurt.wav');
    this.deathSound = new Audio('./assets/sounds/LTTP_Link_Dying.wav');
    this.swordChargeSound = new Audio('./assets/sounds/LTTP_Sword_Charge.wav');
    this.swordSpinSound = new Audio('./assets/sounds/LTTP_Sword_Spin.wav');

    this.scale = 2;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = 6;
    this.pos = [473, 310];
    this.walkDir = 'down';
    this.frameLen = 7;
    this.box = [32, 48];
    this.canSwing = true;
    this.life = 3;

    this.draw = this.draw.bind(this);
    this.move = this.move.bind(this);
    this.parseKeyDown = this.parseKeyDown.bind(this);
    this.toggleSword = this.toggleSword.bind(this);
    this.parseKeyUp = this.parseKeyUp.bind(this);
    this.update = this.update.bind(this);
    this.toggleHit = this.toggleHit.bind(this);
    this.toggleInvinsible = this.toggleInvinsible.bind(this);
    this.createHurtBox = this.createHurtBox.bind(this);
    this.toggleSpin = this.toggleSpin.bind(this);
  }

  parseKeyUp(e) {
    e.preventDefault();
    if (e.keyCode === 32) {
      if (this.spinCharged) {
        this.frameIndex = 2;
        this.ticksPerFrame = 2;
        this.spinning = true;
        this.swordSpinSound.play();
        this.cancelSpin = true;
        this.spinCharged = false;
        this.hurtBox = () => new Sword({ pos: [this.x() - 25, this.y() - 25], box: [85, 85] });
      } else {
        clearTimeout(this.spinTimout);
        clearTimeout(this.soundTimout);
        this.cancelSpin = true;
        this.chargingSpin = false;
        this.swordChargeSound.pause();
        this.swordChargeSound.currentTime = 0;
        this.canSwing = true;
      }
    }

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
    let vel;
    let dx = 0;
    let dy = 0;
    if (this.hit) {
      const delta = 4;
      vel = [this.vect[0] * delta, this.vect[1] * delta];
    } else {
      if (!this.sword) {
        if (this.up) dy += -1;
        if (this.left) dx += -1;
        if (this.down) dy += 1;
        if (this.right) dx += 1;
      }

      const len = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
      const vect = [dx / len || 0, dy / len || 0];

      let delta;
      if (this.chargingSpin || this.spinCharged) {
        delta = 0.5;
      } else {
        delta = 2;
      }

      vel = [vect[0] * delta, vect[1] * delta];

      if (vel[0] === 0 && vel[1] === 0) {
        this.walking = false;
      } else {
        if (!this.walking) this.frameIndex = 0;
        this.walking = true;
      }
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


  swingSword() {
    if (!this.sword && this.canSwing) {
      this.swordSound.play();
      this.sword = true;
      this.canSwing = false;
      this.frameIndex = 0;
      this.ticksPerFrame = 2;

      if (this.walkDir === 'down') {
        this.createHurtBox({ pos: [this.x() - 10, this.y() + 25], box: [70, 40] });
      } else if (this.walkDir === 'up') {
        this.createHurtBox({ pos: [this.x() - 25, this.y() - 25], box: [70, 45] });
      } else if (this.walkDir === 'left') {
        this.createHurtBox({ pos: [this.x() - 30, this.y()], box: [40, 60] });
      } else if (this.walkDir === 'right') {
        this.createHurtBox({ pos: [this.x() + 25, this.y()], box: [40, 60] });
      }
    }
  }

  createHurtBox(options) {
    this.hurtBox = () => new Sword(options);
  }

  toggleSword() {
    if (this.canSwing) {
      this.frameLen = WALK_SIDE.length;
    } else {
      this.chargingSpin = true;
      this.cancelSpin = false;
      clearTimeout(this.spinTimout);
      clearTimeout(this.soundTimout);
      this.soundTimeout = setTimeout(this.playChargeSound.bind(this), 250);
      this.spinTimeout = setTimeout(this.finishChargeing.bind(this), 500);
    }
    this.ticksPerFrame = 6;
    this.sword = !this.sword;
    this.hurtBox = null;
  }

  toggleSpin() {
    this.spinning = false;
    this.ticksPerFrame = 6;
    this.hurtBox = null;
    this.canSwing = true;
  }

  playChargeSound() {
    if (!this.cancelSpin) {
      this.swordChargeSound.play();
    }
  }

  finishChargeing() {
    if (!this.cancelSpin) {
      this.spinCharged = true;
      this.chargingSpin = false;
    }
  }

  hitByEnemy(vect) {
    if (!this.invisible && !this.spinning) {
      this.hurtSound.play();
      this.vect = vect;
      this.hit = true;
      this.invisible = true;
      this.invisibleFrameCount = 1;
      this.life -= 1;
      setTimeout(this.toggleHit, 300);
      setTimeout(this.toggleInvinsible, 2000);
    }
  }

  toggleHit() {
    this.hit = !this.hit;
  }

  toggleInvinsible() {
    this.invisible = !this.invisible;
  }


  draw(ctx) {
    if (this.life === 0) {
      this.deathSound.play();
      ctx.drawImage(this.linkSprite, 89, 214, 24, 15, this.pos[0], this.pos[1], 48, 30);
    } else {
      if (!(this.invisible && this.invisibleFrameCount % 2 === 0)) {
        if (this.sword) {
          this.drawSwingSword(ctx);
        } else if (this.chargingSpin) {
          this.drawSpinCharging(ctx);
        } else if (this.spinCharged) {
          this.drawSpinCharged(ctx);
        } else if (this.spinning) {
          this.drawSpin(ctx);
        } else {
          this.setWalkDir();
          if (this.walking) {
            this.drawLinkWalking(ctx);
          } else {
            this.drawLinkStanding(ctx);
          }
        }
      }
    }

    // if (this.hurtBox) this.hurtBox().draw(ctx);
    this.drawLife(ctx);
    this.update();
  }

  drawLinkWalking(ctx) {
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

  drawLinkStanding(ctx) {
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

  drawSwingSword(ctx) {
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
  }

  drawSpinCharging(ctx) {
    if (this.walkDir === 'down') {
      this.frameLen = SPIN_DOWN.length;
      ctx.drawImage(this.linkSprite2,
        SPIN_DOWN[0][0],
        SPIN_DOWN[0][1],
        SPIN_DOWN[0][2],
        SPIN_DOWN[0][3],
        this.pos[0] - SPIN_DOWN[0][4] * this.scale,
        this.pos[1] - SPIN_DOWN[0][5] * this.scale,
        SPIN_DOWN[0][2] * this.scale,
        SPIN_DOWN[0][3] * this.scale
      );
    } else if (this.walkDir === 'up') {
      this.frameLen = SPIN_UP.length;
      ctx.drawImage(this.linkSprite2,
        SPIN_UP[0][0],
        SPIN_UP[0][1],
        SPIN_UP[0][2],
        SPIN_UP[0][3],
        this.pos[0] - SPIN_UP[0][4] * this.scale,
        this.pos[1] - SPIN_UP[0][5] * this.scale,
        SPIN_UP[0][2] * this.scale,
        SPIN_UP[0][3] * this.scale
      );
    } else if (this.walkDir === 'left') {
      this.frameLen = SPIN_LEFT.length;
      ctx.drawImage(this.linkSprite2,
        SPIN_LEFT[0][0],
        SPIN_LEFT[0][1],
        SPIN_LEFT[0][2],
        SPIN_LEFT[0][3],
        this.pos[0] - SPIN_LEFT[0][4] * this.scale,
        this.pos[1] - SPIN_LEFT[0][5] * this.scale,
        SPIN_LEFT[0][2] * this.scale,
        SPIN_LEFT[0][3] * this.scale
      );
    } else if (this.walkDir === 'right') {
      this.frameLen = SPIN_RIGHT.length;
      ctx.drawImage(this.linkSprite3,
        SPIN_RIGHT[0][0],
        SPIN_RIGHT[0][1],
        SPIN_RIGHT[0][2],
        SPIN_RIGHT[0][3],
        this.pos[0] - SPIN_RIGHT[0][4] * this.scale,
        this.pos[1] - SPIN_RIGHT[0][5] * this.scale,
        SPIN_RIGHT[0][2] * this.scale,
        SPIN_RIGHT[0][3] * this.scale
      );
    }
  }

  drawSpinCharged(ctx) {
    if (this.walkDir === 'down') {
      this.frameLen = SPIN_DOWN.length;
      ctx.drawImage(this.linkSprite2,
        SPIN_DOWN[1][0],
        SPIN_DOWN[1][1],
        SPIN_DOWN[1][2],
        SPIN_DOWN[1][3],
        this.pos[0] - SPIN_DOWN[1][4] * this.scale,
        this.pos[1] - SPIN_DOWN[1][5] * this.scale,
        SPIN_DOWN[1][2] * this.scale,
        SPIN_DOWN[1][3] * this.scale
      );
    } else if (this.walkDir === 'up') {
      this.frameLen = SPIN_UP.length;
      ctx.drawImage(this.linkSprite2,
        SPIN_UP[1][0],
        SPIN_UP[1][1],
        SPIN_UP[1][2],
        SPIN_UP[1][3],
        this.pos[0] - SPIN_UP[1][4] * this.scale,
        this.pos[1] - SPIN_UP[1][5] * this.scale,
        SPIN_UP[1][2] * this.scale,
        SPIN_UP[1][3] * this.scale
      );
    } else if (this.walkDir === 'left') {
      this.frameLen = SPIN_LEFT.length;
      ctx.drawImage(this.linkSprite2,
        SPIN_LEFT[1][0],
        SPIN_LEFT[1][1],
        SPIN_LEFT[1][2],
        SPIN_LEFT[1][3],
        this.pos[0] - SPIN_LEFT[1][4] * this.scale,
        this.pos[1] - SPIN_LEFT[1][5] * this.scale,
        SPIN_LEFT[1][2] * this.scale,
        SPIN_LEFT[1][3] * this.scale
      );
    } else if (this.walkDir === 'right') {
      this.frameLen = SPIN_RIGHT.length;
      ctx.drawImage(this.linkSprite3,
        SPIN_RIGHT[1][0],
        SPIN_RIGHT[1][1],
        SPIN_RIGHT[1][2],
        SPIN_RIGHT[1][3],
        this.pos[0] - SPIN_RIGHT[1][4] * this.scale,
        this.pos[1] - SPIN_RIGHT[1][5] * this.scale,
        SPIN_RIGHT[1][2] * this.scale,
        SPIN_RIGHT[1][3] * this.scale
      );
    }
  }

  drawSpin(ctx) {
    if (this.walkDir === 'down') {
      this.frameLen = SPIN_DOWN.length;
      ctx.drawImage(this.linkSprite2,
        SPIN_DOWN[this.frameIndex][0],
        SPIN_DOWN[this.frameIndex][1],
        SPIN_DOWN[this.frameIndex][2],
        SPIN_DOWN[this.frameIndex][3],
        this.pos[0] - SPIN_DOWN[this.frameIndex][4] * this.scale,
        this.pos[1] - SPIN_DOWN[this.frameIndex][5] * this.scale,
        SPIN_DOWN[this.frameIndex][2] * this.scale,
        SPIN_DOWN[this.frameIndex][3] * this.scale
      );
    } else if (this.walkDir === 'up') {
      this.frameLen = SPIN_UP.length;
      ctx.drawImage(this.linkSprite2,
        SPIN_UP[this.frameIndex][0],
        SPIN_UP[this.frameIndex][1],
        SPIN_UP[this.frameIndex][2],
        SPIN_UP[this.frameIndex][3],
        this.pos[0] - SPIN_UP[this.frameIndex][4] * this.scale,
        this.pos[1] - SPIN_UP[this.frameIndex][5] * this.scale,
        SPIN_UP[this.frameIndex][2] * this.scale,
        SPIN_UP[this.frameIndex][3] * this.scale
      );
    } else if (this.walkDir === 'left') {
      this.frameLen = SPIN_LEFT.length;
      ctx.drawImage(this.linkSprite2,
        SPIN_LEFT[this.frameIndex][0],
        SPIN_LEFT[this.frameIndex][1],
        SPIN_LEFT[this.frameIndex][2],
        SPIN_LEFT[this.frameIndex][3],
        this.pos[0] - SPIN_LEFT[this.frameIndex][4] * this.scale,
        this.pos[1] - SPIN_LEFT[this.frameIndex][5] * this.scale,
        SPIN_LEFT[this.frameIndex][2] * this.scale,
        SPIN_LEFT[this.frameIndex][3] * this.scale
      );
    } else if (this.walkDir === 'right') {
      this.frameLen = SPIN_RIGHT.length;
      ctx.drawImage(this.linkSprite3,
        SPIN_RIGHT[this.frameIndex][0],
        SPIN_RIGHT[this.frameIndex][1],
        SPIN_RIGHT[this.frameIndex][2],
        SPIN_RIGHT[this.frameIndex][3],
        this.pos[0] - SPIN_RIGHT[this.frameIndex][4] * this.scale,
        this.pos[1] - SPIN_RIGHT[this.frameIndex][5] * this.scale,
        SPIN_RIGHT[this.frameIndex][2] * this.scale,
        SPIN_RIGHT[this.frameIndex][3] * this.scale
      );
    }
  }

  drawLife(ctx) {
    let spriteX;
    for (let i = 1; i <= 3; i++) {
      if (i > this.life) {
        spriteX = 456;
      } else {
        spriteX = 440;
      }

      ctx.drawImage(this.linkSprite2, spriteX, 147, 7, 7, 900 + i * 35, 10, 28, 28);
    }
  }

  setWalkDir() {
    if (this.down && !this.left && !this.right && !this.RIGHT) {
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
  }

  update() {
    this.tickCount += 1;
    if (this.tickCount > this.ticksPerFrame) {
      this.tickCount = 0;
      if (this.invisible) this.invisibleFrameCount += 1;
      if (this.frameIndex < this.frameLen - 1) {
        this.frameIndex += 1;
      } else {
        if (this.sword) this.toggleSword();
        if (this.spinning) this.toggleSpin();
        this.frameIndex = 0;
      }
    }
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

export default Link;