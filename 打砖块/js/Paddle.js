class Paddle {
  constructor() {
    this.x = 100;
    this.y = 250;
    this.img = imgFromPath("img/paddle.png");
    this.speed = 15;
  }

  // 向左移动
  moveLeft() {
    this.x -= this.speed;
  }

  // 向右移动
  moveRight() {
    this.x += this.speed;
  }
}
