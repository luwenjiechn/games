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

  // 判断相撞
  collide(a) {
    if (a.y + a.img.height > this.y) {
      if (a.x > this.x && a.x < this.x + this.img.width) {
        return true;
      }
    }
    return false;
  }
}
