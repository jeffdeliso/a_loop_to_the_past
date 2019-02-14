import Entity from "../entity";

const DEATH = [
  [83, 8, 16, 15],
  [110, 9, 14, 14],
  [132, 4, 22, 22],
  [157, 5, 24, 22]
];

class Enemy extends Entity {
  constructor(options) {
    super(options);
    this.link = options.link;
    this.hitSound = new Audio('./assets/sounds/LTTP_Enemy_Hit.wav');
    this.deathSound = new Audio('./assets/sounds/LTTP_Enemy_Kill.wav');

    this.scale = 2;
    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = 6;
    this.walkDir = 'down';
    this.life = 3;
    this.delta = 1;
    this.angle1 = true;
    this.angle2 = true;
    this.dropChance = 0.2;

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

  findMoveAngle() {
    const angleToLink = this.angleToPos(this.link.pos);
    let angleToLink1 = angleToLink;
    let angleToLink2 = angleToLink;
    let dist = this.distanceToObject(this.link);

    if (dist > 150) {
      dist = 150;
    }

    let timeOut;
    while (true) {
      if (this.link.walking) {
        if (timeOut) clearTimeout(timeOut);
        this.angle1 = true;
        this.angle2 = true;
      }
      
      if (this.angle1 && !this.checkObstacles(angleToLink1, dist)) {
      // if (!this.checkObstacles(angleToLink1, dist)) {
        this.angle2 = false;
        timeOut = setTimeout(() => this.angle2 = true, 5000);
        return angleToLink1;
      }
      if (this.angle2 && !this.checkObstacles(angleToLink2, dist)) {
      // if (!this.checkObstacles(angleToLink2, dist)) {
        this.angle1 = false;
        timeOut = setTimeout(() => this.angle1 = true, 5000);
        return angleToLink2;
      }
      if (angleToLink1 > Math.PI + angleToLink) {
        return angleToLink;
      }

      angleToLink1 += 0.1;
      angleToLink2 -= 0.1;
    }
  }

  checkObstacles(angle, dist) {
    const obstacles = this.game.obstacles;
    for (let i = 0; i < obstacles.length; i++) {
      const obj = obstacles[i];
      if (this.objectBetweenSelfAndLink(obj, angle, dist)) {
        return true;
      }
    }
    return false;
  }

  objectBetweenSelfAndLink(obj, angle, dist) {
    const borders = [
      [obj.x(), obj.y(), obj.x() + obj.width(), obj.y()],
      [obj.x(), obj.y(), obj.x(), obj.y() + obj.height()],
      [obj.x() + obj.width(), obj.y() + obj.height(), obj.x() + obj.width(), obj.y()],
      [obj.x() + obj.width(), obj.y() + obj.height(), obj.x(), obj.y() + obj.height()]
    ];

    const corners = [
      [this.x(), this.y()],
      [this.x(), this.y() + this.height()],
      [this.x() + this.width(), this.y()],
      [this.x() + this.width(), this.y() + this.height()]
    ];
    
    for (let i = 0; i < borders.length; i++) {
      for (let j = 0; j < corners.length; j++) {
        const corner = corners[j];
        
        const pos = borders[i];
  
        const newPos = this.findNewPoint(corner[0], corner[1], angle, dist);
        if (this.intersects(corner[0], corner[1], newPos.x, newPos.y, ...pos)) {
          return true;
        }
      }
    }
  }

  intersects(a, b, c, d, p, q, r, s) {
    let det, gamma, lambda;
    det = (c - a) * (s - q) - (r - p) * (d - b);

    if (det === 0) {
      return false;
    } else {
      lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
      gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;

      return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
    }
  }

  findNewPoint(x, y, angle, distance) {
    let result = {};
    result.x = Math.round(Math.cos(angle) * distance + x);
    result.y = Math.round(Math.sin(angle) * distance + y);
    
    return result;
  }
  
  move(timeDelta) {
    this.toggleMoveThrough();
    let vel;
    if (this.life === 0) {
      vel = [0, 0];
    } else if (!this.hit) {
      const angle = this.findMoveAngle();
      this.vect = [Math.cos(angle), Math.sin(angle)];

      vel = [this.vect[0] * this.delta, this.vect[1] * this.delta];
      this.setWalkDir();
  
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

  toggleMoveThrough() {
    if (!this.hit && this.moveThrough && !this.game.enemyWillCollideWithEnemy(this.pos, this)) {
      this.moveThrough = false;
    }
  }

  setWalkDir() {
    const linkVect = this.vectorTowardsLink(this.link);

    if (linkVect[0] > 0 && linkVect[1] > 0) {
      if (linkVect[0] > linkVect[1]) {
        if (this.walkDir !== 'right') this.frameIndex = 0;
        this.walkDir = 'right';
      } else {
        if (this.walkDir !== 'down') this.frameIndex = 0;
        this.walkDir = 'down';
      }
    } else if (linkVect[0] > 0 && linkVect[1] < 0) {
      if (linkVect[0] > Math.abs(linkVect[1])) {
        if (this.walkDir !== 'right') this.frameIndex = 0;
        this.walkDir = 'right';
      } else {
        if (this.walkDir !== 'up') this.frameIndex = 0;
        this.walkDir = 'up';
      }
    } else if (linkVect[0] < 0 && linkVect[1] > 0) {
      if (Math.abs(linkVect[0]) > linkVect[1]) {
        if (this.walkDir !== 'left') this.frameIndex = 0;
        this.walkDir = 'left';
      } else {
        if (this.walkDir !== 'down') this.frameIndex = 0;
        this.walkDir = 'down';
      }
    } else if (linkVect[0] < 0 && linkVect[1] < 0) {
      if (Math.abs(linkVect[0]) > Math.abs(linkVect[1])) {
        if (this.walkDir !== 'left') this.frameIndex = 0;
        this.walkDir = 'left';
      } else {
        if (this.walkDir !== 'up') this.frameIndex = 0;
        this.walkDir = 'up';
      }
    }
  }

  hitByLink() {
    if (!this.hit) {
      this.hitSound.play();
      this.hitVect = [this.vect[0] * -1, this.vect[1] * -1];
      this.hit = true;
      this.moveThrough = true;
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