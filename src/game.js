import Link from "./link";
import Obstacle from "./obstacle";
import Moblin from "./moblin";
import Lynel from "./lynel";
import BlueKnight from "./blue_knight";
import Heart from "./heart";
import Snake from "./snake";

const SPAWN_POS = [
  [340, 650],
  [750, 650],
  [285, -50],
  [720, -50]
];

class Game {
  constructor(options) {
    this.pauseSound = new Audio('./assets/sounds/LTTP_Menu_Cursor.wav');
    this.heartSound = new Audio('./assets/sounds/LTTP_RefillHealth.wav');
    this.overworldMusic = new Audio('./assets/sounds/overworld_theme.mp3');
    this.kakarikoMusic = new Audio('./assets/sounds/kakariko_village.mp3');
    this.selectMusic = new Audio('./assets/sounds/select_screen.mp3');
    this.muteButton = document.getElementById('mute');
    this.soundButton = document.getElementById('sound');
    this.killCount = document.getElementById('kill-count');

    this.link = new Link({ game: this });
    this.obstacles = [];
    this.enemies = [];
    this.items = [];
    this.song = this.kakarikoMusic;
    this.muted = options.muted;
    this.spawnEnemies = false;
    this.count = 0;

    this.parseKeyDown = this.parseKeyDown.bind(this);
    this.togglePause = this.togglePause.bind(this);
    this.muteGame = this.muteGame.bind(this);
    this.unmuteGame = this.unmuteGame.bind(this);
    this.stopMusic = this.stopMusic.bind(this);
    this.music = this.music.bind(this);
    this.updateKillCount = this.updateKillCount.bind(this);

    this.muteButton.onclick = this.muteGame;
    this.soundButton.onclick = this.unmuteGame;

    this.addObstacles();
    this.music(this.kakarikoMusic);
    this.updateKillCount();
  }

  parseKeyDown(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
      if (!this.spawnEnemies) {
        this.addEnemies();
        const enterEl = document.getElementById('enter');
        enterEl.style.opacity = 0;
        const controlsEl = document.getElementById('controls');
        controlsEl.style.opacity = 0;
        this.spawnEnemies = true;
      }
    } else if (e.keyCode === 80) {
      if (!this.gameover) this.togglePause();
    }
  }

  muteGame() {
    if (!this.muted) {
      this.soundButton.classList.toggle("selected");
      this.muteButton.classList.toggle("selected");
      this.song.pause();
      this.song.currentTime = 0;
      this.muted = true;
    }
  }

  unmuteGame() {
    if (this.muted) {
      this.soundButton.classList.toggle("selected");
      this.muteButton.classList.toggle("selected");
      this.muted = false;
      this.song.play();
    }
  }

  music(song) {
    this.song.pause();
    this.song.currentTime = 0;
    this.song = song;
    this.song.onended = () => this.song.play();
    if (!this.muted) {
      this.song.play();
    }
  }

  stopMusic() {
    this.song.pause();
  }

  togglePause() {
    const pauseEl = document.getElementById('pause');
    this.paused = !this.paused;
    if (this.paused) {
      this.pauseSound.play();
      pauseEl.style.visibility = 'visible';
    } else {
      pauseEl.style.visibility = 'hidden';
    }
  }


  allObjects() {
    return [this.link].concat(this.enemies).concat(this.items);
  }

  allMovingObjects() {
    return [this.link].concat(this.enemies);
  }

  add(object) {
    if (object instanceof Obstacle) {
      this.obstacles.push(object);
    } else {
      this.enemies.push(object);
    }
  }

  addEnemyToRandomSpawn() {
    let pos = SPAWN_POS[Math.floor(Math.random() * 4)];
    while (this.enemyWillCollideWithEnemy(pos, {box: [50, 50]})) {
      pos = SPAWN_POS[Math.floor(Math.random() * 4)];
    }
    const enemyIdx = Math.random();

    if (enemyIdx > 0.8) {
      this.add(new Lynel({ game: this, link: this.link, pos }));
    } else if (enemyIdx > 0.7) {
      this.add(new Snake({ game: this, link: this.link, pos }));
    } else if (enemyIdx > 0.3) {
      this.add(new Moblin({ game: this, link: this.link, pos }));
    } else {
      this.add(new BlueKnight({ game: this, link: this.link, pos }));
    }
  }

  addEnemies() {
    this.music(this.overworldMusic);
    SPAWN_POS.forEach(pos => {
      const enemyIdx = Math.random();
      if (enemyIdx > 0.5) {
        this.add(new Moblin({ game: this, link: this.link, pos }));
      } else {
        this.add(new BlueKnight({ game: this, link: this.link, pos }));
      }
    });
  }

  addHeart(pos) {
    this.items.push(new Heart({ pos, game: this }));
  }

  remove(object) {
    const pos = object.pos;
    if (Math.random() < object.dropChance) this.addHeart(pos);

    this.enemies.splice(this.enemies.indexOf(object), 1);
    this.count += 1;
    this.updateKillCount();
  }

  updateKillCount() {
    this.killCount.innerHTML = `${this.count}`;
  }

  removeItem(object) {
    object.removeTimeouts();
    this.items.splice(this.items.indexOf(object), 1);
  }

  isOutOfBounds(pos, box) {
    return ((pos[0] < 0) || (pos[1] < 0) ||
      (pos[0] > Game.DIM_X - box[0]) || (pos[1] > Game.DIM_Y - box[1])) || this.willCollideWithObstacle(pos, box);
  }

  enemyIsOutOfBounds(pos, enemy) {
    return this.willCollideWithObstacle(pos, enemy.box) || (this.enemyWillCollideWithEnemy(pos, enemy) && !enemy.moveThrough);
  }

  enemyWillCollideWithEnemy(pos, enemy) {
    for (let i = 0; i < this.enemies.length; i++) {
      const otherEnemy = this.enemies[i];
      if (enemy === otherEnemy) continue;
      if (otherEnemy.willCollideWith(pos, enemy.box)) return true;
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

  linkCollidedWithItem() {
    for (let i = 0; i < this.items.length; i++) {
      const heart = this.items[i];
      if (heart.isCollidedWith(this.link)) {
        this.heartSound.play();
        if (this.link.life < 3) this.link.life += 1;
        this.removeItem(heart);
      }
    }
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

  checkEnemyWillCollideWithSword() {
    for (let i = 0; i < this.enemies.length; i++) {
      const enemy = this.enemies[i];
      if (this.link.hurtBox && enemy.isCollidedWith(this.link.hurtBox)) {
        enemy.hitByLink();
      }
    }
    return false;
  }

  moveObjects(delta) {
    this.allMovingObjects().forEach((object) => {
      object.move(delta);
    });
  }

  step(delta) {
    debugger
    if (!this.paused) {
      if (this.spawnEnemies && this.enemies.length < (4 + Math.floor(this.count / 10))) this.addEnemyToRandomSpawn();
      this.moveObjects(delta);
      this.checkEnemyWillCollideWithSword();
      this.checkEnemyCollidedWithLink();
      this.linkCollidedWithItem();
    }
  }

  draw(ctx) {
    if (!this.paused) {
      ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
      ctx.fillStyle = "#489847";
      ctx.fillRect(158, 90, 162, 202);
      this.allObjects().forEach((object) => {
        object.draw(ctx);
      });

      if (this.link.life === 0) {
        this.gameover = true;
        this.music(this.selectMusic);
      }
    }

    // this.obstacles.forEach((object) => {
    //   object.draw(ctx);
    // });
  }

  addObstacles() {
    this.add(new Obstacle({ pos: [-400, -400], box: [525, 593] }));
    this.add(new Obstacle({ pos: [125, -400], box: [55, 477] }));
    this.add(new Obstacle({ pos: [125, 77], box: [15, 40] }));
    this.add(new Obstacle({ pos: [180, -400], box: [14, 438] }));
    this.add(new Obstacle({ pos: [436, 214], box: [76, 70] }));
    this.add(new Obstacle({ pos: [-400, 537], box: [534, 463] }));
    this.add(new Obstacle({ pos: [-400, 487], box: [496, 50] }));
    this.add(new Obstacle({ pos: [96, 497], box: [18, 40] }));
    this.add(new Obstacle({ pos: [114, 511], box: [10, 26] }));
    this.add(new Obstacle({ pos: [182, 391], box: [116, 150] }));
    this.add(new Obstacle({ pos: [174, 410], box: [8, 92] }));
    this.add(new Obstacle({ pos: [165, 420], box: [9, 34] }));
    this.add(new Obstacle({ pos: [297, 420], box: [17, 38] }));
    this.add(new Obstacle({ pos: [214, 375], box: [52, 16] }));
    this.add(new Obstacle({ pos: [415, -400], box: [115, 472] }));
    this.add(new Obstacle({ pos: [434, 575], box: [153, 425] }));
    this.add(new Obstacle({ pos: [447, 560], box: [13, 15] }));
    this.add(new Obstacle({ pos: [566, 560], box: [13, 15] }));
    this.add(new Obstacle({ pos: [460, 542], box: [106, 33] }));
    this.add(new Obstacle({ pos: [490, 528], box: [45, 14] }));
    this.add(new Obstacle({ pos: [-400, 193], box: [480, 28] }));
    this.add(new Obstacle({ pos: [-400, 220], box: [458, 75] }));
    this.add(new Obstacle({ pos: [-400, 295], box: [417, 190] }));
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
    this.add(new Obstacle({ pos: [890, -400], box: [160, 470] }));
    this.add(new Obstacle({ pos: [950, 70], box: [100, 115] }));
    this.add(new Obstacle({ pos: [927, 70], box: [23, 60] }));
    this.add(new Obstacle({ pos: [1005, 185], box: [45, 119] }));
    this.add(new Obstacle({ pos: [989, 185], box: [16, 51] }));
    this.add(new Obstacle({ pos: [929, 520], box: [121, 480] }));
    this.add(new Obstacle({ pos: [989, 404], box: [61, 116] }));
    this.add(new Obstacle({ pos: [953, 499], box: [36, 21] }));
    this.add(new Obstacle({ pos: [1012, 384], box: [38, 20] }));
    this.add(new Obstacle({ pos: [1042, 302], box: [8, 82] }));
  }
}

Game.DIM_X = 1050;
Game.DIM_Y = 600;
Game.FPS = 32;

export default Game;