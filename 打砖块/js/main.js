const __main = () => {
  const paddle = new Paddle();
  const ball = new Ball();
  const game = new Game();
  const block = new Block();

  // 注册事件
  game.registerAction("ArrowLeft", () => paddle.moveLeft());
  game.registerAction("ArrowRight", () => paddle.moveRight());
  game.registerAction("KeyF", () => ball.fire());

  // 游戏更新
  game.update = () => {
    ball.move();
    if (interset(ball, paddle)) {
      ball.speedY *= -1;
    }
  };
  game.draw = () => {
    game.drawImage(paddle);
    game.drawImage(ball);
    game.drawImage(block);
  };

  game.start();
};

__main();
