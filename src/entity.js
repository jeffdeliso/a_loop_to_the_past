class Entity {
  constructor(options) {
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
}

export default Entity;