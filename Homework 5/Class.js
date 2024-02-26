class robot

{
    constructor(myFilePath, x, y, w, h)
    {
        this.myFilePath=myFilePath;
        this.myImageObject = loadImage(this.myFilePath);
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
    }
updateX(x)
{
    this.x=x;
}
updateY(y)
{
    this.y=y;
}
draw()
{
    imageH1(this.myImageObject, this.x, this.y);
}
//checkCollision(x2,y2,w2,h2)
//{
   
//	if (
//		this.x - w/2 < x2 + w2/2 &&
//		this.x + w2/2 > x2 -w/2 &&
//		this.y - h2/2 < y2 + h/2 &&
//		this.y + h2/2 > y2 - h/2
	
//	){
  //   return true;
	//} else {
//     return false;
  //  }
//}
}