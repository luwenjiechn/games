const __main = () => {
  const paddle = new Paddle();
  const ball = new Ball();
  const game = new Game();

  // 注册事件
  game.registerAction("ArrowLeft", () => paddle.moveLeft());
  game.registerAction("ArrowRight", () => paddle.moveRight());
  game.registerAction("KeyF", () => ball.fire());

  // 游戏更新
  game.update = () => {
    ball.move();
    if (collide(ball, paddle)) {
      ball.speedY *= -1;
    }
  };
  game.draw = () => {
    game.drawImage(paddle);
    game.drawImage(ball);
  };

  game.start();
};

__main();
