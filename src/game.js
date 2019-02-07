import Link from "./link";
import Obstacle from "./obstacle";
import Entity from "./entity";
import Moblin from "./moblin";

const SPAWN_POS = [
  [340, 650],
  [750, 650],
  [285, -50],
  [720, -50],
];

class Game {
  constructor() {
    this.link = new Link({ game: this });
    this.spawnEnemies = false;
    this.obstacles = [];
    this.enemies = [];
    this.addObstacles();
    this.parseKeyDown = this.parseKeyDown.bind(this);
  }

  addMoblins() {
    SPAWN_POS.forEach(pos => {
      this.add(new Moblin({ game: this, link: this.link, pos }));
    });
  }

  parseKeyDown(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
      if (!this.spawnEnemies) this.addMoblins();
      this.spawnEnemies = true;
    }
  }

  add(object) {
    if (object instanceof Moblin) {
      this.enemies.push(object);
    } else if (object instanceof Obstacle) {
      this.obstacles.push(object);
    } else {
      throw new Error("unknown type of object");
    }
  }

  addObstacles() {
    this.add(new Obstacle({ pos: [0, 0], box: [125, 193] }));
    this.add(new Obstacle({ pos: [125, 0], box: [55, 77] }));
    this.add(new Obstacle({ pos: [125, 77], box: [15, 40] }));
    this.add(new Obstacle({ pos: [180, 0], box: [14, 38] }));
    this.add(new Obstacle({ pos: [436, 214], box: [76, 70] }));
    this.add(new Obstacle({ pos: [0, 537], box: [134, 63] }));
    this.add(new Obstacle({ pos: [0, 487], box: [96, 50] }));
    this.add(new Obstacle({ pos: [96, 497], box: [18, 40] }));
    this.add(new Obstacle({ pos: [114, 511], box: [10, 26] }));
    this.add(new Obstacle({ pos: [182, 391], box: [116, 150] }));
    this.add(new Obstacle({ pos: [174, 410], box: [8, 92] }));
    this.add(new Obstacle({ pos: [165, 420], box: [9, 34] }));
    this.add(new Obstacle({ pos: [297, 420], box: [17, 38] }));
    this.add(new Obstacle({ pos: [214, 375], box: [52, 16] }));
    this.add(new Obstacle({ pos: [415, 0], box: [115, 72] }));
    this.add(new Obstacle({ pos: [434, 575], box: [153, 25] }));
    this.add(new Obstacle({ pos: [447, 560], box: [13, 15] }));
    this.add(new Obstacle({ pos: [566, 560], box: [13, 15] }));
    this.add(new Obstacle({ pos: [460, 542], box: [106, 33] }));
    this.add(new Obstacle({ pos: [490, 528], box: [45, 14] }));
    this.add(new Obstacle({ pos: [0, 193], box: [80, 28] }));
    this.add(new Obstacle({ pos: [0, 220], box: [58, 75] }));
    this.add(new Obstacle({ pos: [0, 295], box: [17, 190] }));
    this.add(new Obstacle({ pos: [17, 415], box: [58, 71] }));
    this.add(new Obstacle({ pos: [17, 385], box: [38, 30] }));
    this.add(new Obstacle({ pos: [688, 391], box: [116, 150] }));
    this.add(new Obstacle({ pos: [680, 410], box: [8, 92] }));
    this.add(new Obstacle({ pos: [671, 420], box: [9, 34] }));
    this.add(new Obstacle({ pos: [803, 420], box: [17, 38] }));
    this.add(new Obstacle({ pos: [720, 375], box: [52, 16] }));
    this.add(new Obstacle({ pos: [688, 391], box: [116, 150] }));
    this.add(new Obstacle({ pos: [680, 410], box: [8, 92] }));
    this.add(new Obstacle({ pos: [671, 420], box: [9, 34] }));
    this.add(new Obstacle({ pos: [803, 420], box: [17, 38] }));
    this.add(new Obstacle({ pos: [720, 375], box: [52, 16] }));
    this.add(new Obstacle({ pos: [648, 118], box: [116, 150] }));
    this.add(new Obstacle({ pos: [640, 136], box: [8, 92] }));
    this.add(new Obstacle({ pos: [631, 144], box: [9, 34] }));
    this.add(new Obstacle({ pos: [763, 144], box: [17, 38] }));
    this.add(new Obstacle({ pos: [680, 102], box: [52, 16] }));
    this.add(new Obstacle({ pos: [890, 0], box: [160, 70] }));
    this.add(new Obstacle({ pos: [950, 70], box: [100, 115] }));
    this.add(new Obstacle({ pos: [927, 70], box: [23, 60] }));
    this.add(new Obstacle({ pos: [1005, 185], box: [45, 119] }));
    this.add(new Obstacle({ pos: [989, 185], box: [16, 51] }));
    this.add(new Obstacle({ pos: [929, 520], box: [121, 80] }));
    this.add(new Obstacle({ pos: [989, 404], box: [61, 116] }));
    this.add(new Obstacle({ pos: [953, 499], box: [36, 21] }));
    this.add(new Obstacle({ pos: [1012, 384], box: [38, 20] }));
    this.add(new Obstacle({ pos: [1042, 302], box: [8, 82] }));
  }

  allObjects() {
    return [this.link].concat(this.enemies);
  }

  allMovingObjects() {
    return [this.link].concat(this.enemies);
  }

  enemyWillCollideWithEnemy(pos, enemy) {
    for (let i = 0; i < this.enemies.length; i++) {
      const otherEnemy = this.enemies[i];
      if (enemy === otherEnemy) continue;
      if (otherEnemy.willCollideWith(pos, enemy.box)) return true;
    }
    return false;
  }

  checkEnemyWillCollideWithSword() {
    for (let i = 0; i < this.enemies.length; i++) {
      const enemy = this.enemies[i];
      if (this.link.hurtBox && enemy.isCollidedWith(this.link.hurtBox)) {
        enemy.hitByLink();
      }
    }
    return false;
  }

  checkEnemyCollidedWithLink() {
    for (let i = 0; i < this.enemies.length; i++) {
      const enemy = this.enemies[i];
      if (enemy.isCollidedWith(this.link)) {
        this.link.hitByEnemy(enemy.vect);
      }
    }
    return false;
  }

  willCollideWithObstacle(pos, box) {
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      if (obstacle.willCollideWith(pos, box)) {
        return true;
      }
    }
    return false;
  }

  draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach((object) => {
      object.draw(ctx);
    });
  }

  isOutOfBounds(pos, box) {
    return ((pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > Game.DIM_X - box[0]) || (pos[1] > Game.DIM_Y - box[1])) || this.willCollideWithObstacle(pos, box);
  }

  enemyIsOutOfBounds(pos, enemy) {
    return this.willCollideWithObstacle(pos, enemy.box) || this.enemyWillCollideWithEnemy(pos, enemy);
  }

  moveObjects(delta) {
    this.allMovingObjects().forEach((object) => {
      object.move(delta);
    });
  }

  addEnemyToRandomSpawn() {
    const idx = Math.floor(Math.random() * 4);
    const pos = SPAWN_POS[idx];
    this.add(new Moblin({ game: this, link: this.link, pos }));
  }

  remove(object) {
    if (object instanceof Moblin) {
      this.enemies.splice(this.enemies.indexOf(object), 1);
    } else {
      throw new Error("unknown type of object");
    }
  }

  step(delta) {
    if (this.spawnEnemies && this.enemies.length < 4) this.addEnemyToRandomSpawn();
    this.moveObjects(delta);
    this.checkEnemyWillCollideWithSword();
    this.checkEnemyCollidedWithLink();
  }
}

Game.DIM_X = 1050;
Game.DIM_Y = 600;
Game.FPS = 32;

export default Game;