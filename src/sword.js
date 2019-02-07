import Entity from "./entity";

class Sword extends Entity {
  constructor(options) {
    super(options);
    // this.pos = pos;
    // this.width = width;
    // this.height = height ;
    this.draw = this.draw.bind(this);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "black";
    ctx.rect(this.x(), this.y(), this.width(), this.height());
    ctx.stroke();
  }
}

export default Sword;