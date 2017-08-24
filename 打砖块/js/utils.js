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

/**
 * 矩形是否相交，传入的参数必须有x,y,width,height
 * @param {Object} a 
 * @param {Object} b 
 */
const interset = (a, b) => {
  const ab = n => {
    if (n > 0) return n;
    else return -n;
  };
  const ax1 = a.x,
    ay1 = a.y,
    ax2 = a.x + a.img.width,
    ay2 = a.y + a.img.height;

  const bx1 = b.x,
    by1 = b.y,
    bx2 = b.x + b.img.width,
    by2 = b.y + b.img.height;

  const zx = ab(ax1 + ax2 - bx1 - bx2); //两个矩形重心在x轴上的距离的两倍
  const x = ab(ax1 - ax2) + ab(bx1 - bx2); //两矩形在x方向的边长的和
  const zy = ab(ay1 + ay2 - by1 - by2); //重心在y轴上距离的两倍
  const y = ab(ay1 - ay2) + ab(by1 - by2); //y方向边长的和

  return zx <= x && zy <= y;
};
