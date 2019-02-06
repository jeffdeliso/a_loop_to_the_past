import Link from "./link";
import Util from "./util";

class Game {
  constructor() {
    // this.asteroids = [];
    // this.bullets = [];
    this.links = [];

    // this.addAsteroids();
  }

  add(object) {

    // if (object instanceof Asteroid) {
    //   this.asteroids.push(object);
    // } else if (object instanceof Bullet) {
    //   this.bullets.push(object);
    if (object instanceof Link) {
      this.links.push(object);
    } else {
      throw new Error("unknown type of object");
    }
  }

  // addAsteroids() {
  //   for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
  //     this.add(new Asteroid({ game: this }));
  //   }
  // }

  addLink() {

    const link = new Link({
      pos: [473, 310],
      game: this
    });

    this.add(link);

    return link;
  }

  allObjects() {
    return [].concat(this.links);
  }

  checkCollisions() {
    const allObjects = this.allObjects();
    for (let i = 0; i < allObjects.length; i++) {
      for (let j = 0; j < allObjects.length; j++) {
        const obj1 = allObjects[i];
        const obj2 = allObjects[j];

        if (obj1.isCollidedWith(obj2)) {
          const collision = obj1.collideWith(obj2);
          if (collision) return;
        }
      }
    }
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    // ctx.fillStyle = Game.BG_COLOR;
    // ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }

  isOutOfBounds(pos) {
    return (pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
  }

  moveObjects(delta) {
    this.allObjects().forEach((object) => {
      object.move(delta);
    });
  }

  randomPosition() {
    return [
      Game.DIM_X * Math.random(),
      Game.DIM_Y * Math.random()
    ];
  }

  remove(object) {
    // if (object instanceof Bullet) {
    //   this.bullets.splice(this.bullets.indexOf(object), 1);
    // } else if (object instanceof Asteroid) {
    //   this.asteroids.splice(this.asteroids.indexOf(object), 1);
    if (object instanceof Link) {
      this.links.splice(this.links.indexOf(object), 1);
    } else {
      throw new Error("unknown type of object");
    }
  }

  step(delta) {
    this.moveObjects(delta);
    this.checkCollisions();
  }

  wrap(pos) {
    return [
      Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y)
    ];
  }
}

Game.DIM_X = 1050;
Game.DIM_Y = 600;
Game.FPS = 32;

export default Game;