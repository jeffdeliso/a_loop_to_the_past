import Entity from "./entity";

class Projectile extends Entity {
  constructor(options) {
    super(options);
    this.delta = options.delta;
    this.vect = options.vect;
  }
}

export default Projectile;
