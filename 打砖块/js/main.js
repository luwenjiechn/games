const __main = () => {
  const paddle = new Paddle();
  const ball = new Ball();
  const blocks = [];
  for (let i = 0; i <= 3; i++) {
    const block = new Block();
    block.x = i * 150;
    block.y = 50;
    blocks.push(block);
  }
  const game = new Stage();

  // 注册事件
  game.registerAction("ArrowLeft", () => paddle.moveLeft());
  game.registerAction("ArrowRight", () => paddle.moveRight());
  game.registerAction("Space", () => {
    ball.fire()
  });

  // 游戏更新
  game.update = () => {
    ball.move();
    if (interset(ball, paddle)) {
      ball.rebound("y");
    }
    blocks.forEach(block => {
      if (interset(ball, block) && block.alive) {
        ball.rebound("y");
        block.kill();
      }
    });
  };
  game.draw = () => {
    game.drawImage(paddle);
    game.drawImage(ball);
    blocks.forEach((block, index) => {
      if (block.alive) {
        game.drawImage(block);
      }
    });
  };

  game.start();
};

__main();
