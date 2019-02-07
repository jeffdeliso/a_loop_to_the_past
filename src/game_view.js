class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.link = this.game.addLink();
  }

  bindKeyHandlers() {
    document.addEventListener('keydown', this.link.parseKeyDown);
    document.addEventListener('keyup', this.link.parseKeyUp);
  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;

    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
  }
}

export default GameView;

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;