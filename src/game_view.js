import Game from "./game";

class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.link = this.game.link;
    this.animate = this.animate.bind(this);
    this.restartSound = new Audio('../assets/sounds/LTTP_Secret.wav');
  }

  bindKeyHandlers() {
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
      const btn = document.createElement("BUTTON");
      const text = document.createTextNode("restart");
      const gameover = document.getElementById('gameover');
      btn.appendChild(text);
      btn.onclick = () => this.newGame(btn, gameover);
      gameover.appendChild(btn);
      gameover.style.visibility = 'visible';
      gameover.style.opacity = 1;
    }
  }

  newGame(btn, parent) {
    this.restartSound.play();
    parent.removeChild(btn);
    parent.style.visibility = 'hidden';
    parent.style.opacity = 0;
    const enterEl = document.getElementById('enter');
    enterEl.style.opacity = 1;
    const controlsEl = document.getElementById('controls');
    controlsEl.style.opacity = 1;
    this.game.stopMusic();
    this.game = new Game({ muted: this.game.muted });
    this.link = this.game.link;
    this.start();
  }
}

export default GameView;