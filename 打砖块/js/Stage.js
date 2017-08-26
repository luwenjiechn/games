// 主进程
class Stage {
  constructor() {
    this.canvas = document.querySelector("#stage");
    this.context = this.canvas.getContext("2d");
    this.keydowns = {};
    this.actions = {};
    this.fps = 60;
    this.clear = () =>
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.drawImage = paddle =>
      this.context.drawImage(paddle.img, paddle.x, paddle.y);

    this.update = () => {};

    // 注册事件
    this.registerAction = (key, callback) => (this.actions[key] = callback);
  }
  start() {
    // events
    window.addEventListener("keydown", events => {
      console.log(events);
      this.keydowns[events.code] = true;
    });
    window.addEventListener("keyup", events => {
      this.keydowns[events.code] = false;
    });
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
    }, 1000 / this.fps);
  }
}
