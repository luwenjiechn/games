// 球对象
class Ball {
  constructor() {
    this.x = 100;
    this.y = 150;
    this.speedX = 5;
    this.speedY = 5;
    this.fired = false;
    this.img = imgFromPath("img/ball.png");
  }

  fire() {
    this.fired = true;
  }

  // 球移动
  move() {
    // this.fire();
    if (this.fired) {
      // 判断是否撞墙
      if (this.out("x")) {
        this.rebound("x");
      }
      if (this.out("y")) {
        this.rebound("y");
      }
      this.x += this.speedX;
      this.y += this.speedY;
      // console.log(this.x, this.y);
    }
  }

  // 球反弹
  rebound(position) {
    if (position == "x") {
      this.speedX *= -1;
    }
    if (position == "y") {
      this.speedY *= -1;
    }
  }

  // 出界
  out(position) {
    if (position == "x") {
      return this.x <= 0 || this.x + this.img.width >= 400;
    }
    if (position == "y") {
      return this.y <= 0 || this.y + this.img.height >= 300;
    }
    return true;
  }
}
