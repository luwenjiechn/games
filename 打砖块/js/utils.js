/**
 * 导入图片
 * @param {String} path 
 */
const imgFromPath = path => {
  const img = new Image();
  img.src = path;
  return img;
};

/**
 * 碰撞
 * @param {x,y,width,height} a 
 * @param {x,y,width,height} b 
 */
const collide = (a, b) => {
  if (a.y + a.img.height > b.y) {
    if (a.x > b.x && a.x < b.x + b.img.width) {
      return true;
    }
  }
  return false;
};
