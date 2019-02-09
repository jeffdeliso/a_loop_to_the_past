import Entity from "./entity";

class Heart extends Entity {
  constructor(options) {
    super(options);
    this.heartSprite = new Image();
    this.heartSprite.src = "../assets/sprites/items-objects.gif";
    this.box = [14, 13];
    this.draw = this.draw.bind(this);
  }

  draw(ctx) {
    ctx.drawImage(this.heartSprite, 153, 30, 14, 13, this.pos[0], this.pos[1], 14, 13);
  }
}

export default Heart;