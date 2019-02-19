import Entity from "./entity";

class Obstacle extends Entity {
  constructor(options) {
    super(options);
    this.draw = this.draw.bind(this);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "black";
    ctx.rect(this.pos[0], this.pos[1], this.width(), this.height());
    ctx.stroke();
  }
}

export default Obstacle;