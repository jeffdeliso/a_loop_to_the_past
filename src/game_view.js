import Game from "./game";

class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.link = this.game.link;
    this.animate = this.animate.bind(this);
    this.restartSound = new Audio('./assets/sounds/LTTP_Secret.wav');
    this.parseKeyDown = this.parseKeyDown.bind(this);
  }

  bindKeyHandlers() {
    document.addEventListener('keydown', this.parseKeyDown);
    document.addEventListener('keydown', this.link.parseKeyDown);
    document.addEventListener('keydown', this.game.parseKeyDown);
    document.addEventListener('keyup', this.link.parseKeyUp);
  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;

    requestAnimationFrame(this.animate);
  }

  animate(time) {
    if (!this.game.gameover) {
      const timeDelta = time - this.lastTime;

      this.game.step(timeDelta);
      this.game.draw(this.ctx);
      this.lastTime = time;

      requestAnimationFrame(this.animate);
    } else {
      this.btn = document.createElement("BUTTON");
      const text = document.createTextNode("restart");
      this.gameover = document.getElementById('gameover');
      this.btn.appendChild(text);
      this.btn.onclick = () => this.newGame();
      this.gameover.appendChild(this.btn);
      this.gameover.style.visibility = 'visible';
      this.gameover.style.opacity = 1;
    }
  }

  newGame() {
    this.restartSound.play();
    this.gameover.removeChild(this.btn);
    this.gameover.style.visibility = 'hidden';
    this.gameover.style.opacity = 0;
    const enterEl = document.getElementById('enter');
    enterEl.style.opacity = 1;
    const controlsEl = document.getElementById('controls');
    controlsEl.style.opacity = 1;
    this.game.stopMusic();
    this.game = new Game({ muted: this.game.muted });
    this.link = this.game.link;
    this.start();
  }

  parseKeyDown(e) {
    // e.preventDefault();
    if (e.keyCode === 13) {
      if (this.game.gameover) this.newGame();
    }
  }
}

export default GameView;