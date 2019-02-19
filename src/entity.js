class Entity {
  constructor(options) {
    this.enemySprite = new Image();
    this.enemySprite.src = "./assets/sprites/enemies.png";
    this.enemySprite2 = new Image();
    this.enemySprite2.src = "./assets/sprites/enemies2.png";
    this.deathSprite = new Image();
    this.deathSprite.src = "./assets/sprites/death-effects.png";
    this.itemSprite = new Image();
    this.itemSprite.src = "./assets/sprites/items-objects.gif";
    this.pos = options.pos;
    this.box = options.box;
    this.game = options.game;
  }

  x() {
    return this.pos[0];
  }

  y() {
    return this.pos[1];
  }
  
  width() {
    return this.box[0];
  }

  height() {
    return this.box[1];
  }

  isCollidedWith(otherObject) {
    return (this.x() < otherObject.x() + otherObject.width() &&
      this.x() + this.width() > otherObject.x() &&
      this.y() < otherObject.y() + otherObject.height() &&
      this.y() + this.height() > otherObject.y());
  }

  willCollideWith(pos, box) {
    return (this.x() < pos[0] + box[0] &&
      this.x() + this.width() > pos[0] &&
      this.y() < pos[1] + box[1] &&
      this.y() + this.height() > pos[1]);
  }

  remove() {
    this.game.remove(this);
  }

  angleToPos(pos) {
    const dx = this.x() - pos[0];
    const dy = this.y() - pos[1];

    if (dx > 0) {
      return  Math.atan(dy / dx) + Math.PI;
    } else {
      return Math.atan(dy / dx);
    }
  }

  distanceToObject(obj) {
    return Math.sqrt(Math.pow(this.x() - obj.x(), 2) + Math.pow(this.y() - obj.y(), 2));
  }

  angleRangeToObject(obj) {
    const lowerLeft = this.angleToPos([obj.x(), obj.y() + obj.height()]);
    const lowerRight = this.angleToPos([obj.x() + obj.width(), obj.y() + obj.height()]);
    const upperLeft = this.angleToPos([obj.x(), obj.y()]);
    const upperRight = this.angleToPos([obj.x() + obj.width(), obj.y()]);
    const max = Math.max(lowerLeft, lowerRight, upperLeft, upperRight);
    const min = Math.min(lowerLeft, lowerRight, upperLeft, upperRight);

    return [min, max];
  }
}

export default Entity;