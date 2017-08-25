class Block {
  constructor() {
    this.x = 10;
    this.y = 10;
    this.speed = 15;
    this.img = imgFromPath("img/block.png");
    this.alive = true;
  }
  kill() {
    this.alive = false;
  }
}
