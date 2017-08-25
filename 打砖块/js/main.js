const __main = () => {
  const paddle = new Paddle();
  const ball = new Ball();
  const block = new Block();
  const game = new Game();

  // 注册事件
  game.registerAction("ArrowLeft", () => paddle.moveLeft());
  game.registerAction("ArrowRight", () => paddle.moveRight());
  game.registerAction("Space", () => ball.fire());

  // 游戏更新
  game.update = () => {
    ball.move();
    if (interset(ball, paddle)) {
      ball.rebound("y");
    }
    if (interset(ball, block) && block.alive) {
      ball.rebound("y");
      block.kill();
    }
  };
  game.draw = () => {
    game.drawImage(paddle);
    game.drawImage(ball);
    if (block.alive) {
      game.drawImage(block);
    }
  };

  game.start();
};

__main();
