const imgFromPath = path => {
  const img = new Image();
  img.src = path;
  return img;
};

class Paddle {
  constructor() {
    this.x = 100;
    this.y = 250;
    this.speed = 15;
    this.img = imgFromPath("img/paddle.png");
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
  collide(ball) {
    if (ball.y + ball.img.height > this.y) {
      if (ball.x > this.x && ball.x < this.x + this.img.width) {
        return true;
      }
    }
    return false;
  }
}

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
        this.speedX *= -1;
      }
      if (this.out("y")) {
        this.speedY *= -1;
      }
      this.x += this.speedX;
      this.y += this.speedY;
      // console.log(this.x, this.y);
    }
  }

  // 出界
  out(position) {
    if (position == "x") {
      return this.x <= 0 || this.x >= 400;
    }
    if (position == "y") {
      return this.y <= 0 || this.y >= 300;
    }
    return true;
  }
}

class Game {
  constructor() {
    this.canvas = document.querySelector("#canvas");
    this.context = canvas.getContext("2d");
    this.keydowns = {};
    this.actions = {};
    this.clear = () =>
      this.context.clearRect(0, 0, canvas.width, canvas.height);

    this.drawImage = paddle => {
      this.context.drawImage(paddle.img, paddle.x, paddle.y);
    };
    this.update = () => {};

    // events
    window.addEventListener("keydown", events => {
      // console.log(events)
      this.keydowns[events.code] = true;
    });
    window.addEventListener("keyup", events => {
      this.keydowns[events.code] = false;
    });

    // 注册事件
    this.registerAction = (key, callback) => (this.actions[key] = callback);

    setInterval(() => {
      Object.keys(this.actions).forEach(item => {
        if (this.keydowns[item]) {
          // console.log(this);
          this.actions[item]();
        }
      });
      this.update();
      this.clear();
      this.draw();
    }, 1000 / 60);
  }
}

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
    if (paddle.collide(ball)) {
      ball.speedY *= -1;
    }
  };
  game.draw = () => {
    game.drawImage(paddle);
    game.drawImage(ball);
  };
};

__main();
