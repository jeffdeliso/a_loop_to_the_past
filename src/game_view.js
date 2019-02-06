class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.link = this.game.addLink();
  }

  bindKeyHandlers() {
    // const link = this.link;
    document.addEventListener('keydown', this.link.parseKeyDown);
    document.addEventListener('keyup', this.link.parseKeyUp);
    
    // Object.keys(GameView.MOVES).forEach((k) => {
    //   const move = GameView.MOVES[k];
    //   key(k, () => { ship.power(move); });
    // });

    // key("space", () => { ship.fireBullet(); });
  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    // start the animation
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    // every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate.bind(this));
  }
}

GameView.MOVES = {
  w: [0, -6],
  a: [-6, 0],
  s: [0, 6],
  d: [6, 0],
  up: [0, -6],
  left: [-6, 0],
  down: [0, 6],
  right: [6, 0],
};

export default GameView;

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;