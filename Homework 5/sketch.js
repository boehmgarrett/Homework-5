var run1;
var run2;

var imageX1 = 300;
var imageY1 = 100;
var speedX, speedY;
var imageW1 = 256;
var imageH1 = 256;

var textX = 50;
var textY = 50;
var fontType;
var i = 0;
var time = 10;
var counter = 0;

var flipX = false;

var animations = [];

var pizza;
var xImage = 900, yImage = 300;

function setup()
{
    createCanvas(1600,1400);
    run1 = loadImage("./images/Run (1).png");
    run2 = loadImage("./images/Run (2).png");
    run3 = loadImage("./images/Run (3).png");
    run4 = loadImage("./images/Run (4).png");
    run5 = loadImage("./images/Run (5).png");
    run6 = loadImage("./images/Run (6).png");
    run7 = loadImage("./images/Run (7).png");

    animations[0] = run1;
    animations[1] = run2;
    animations[2] = run3;
    animations[3] = run4;
    animations[4] = run5;
    animations[5] = run6;
    animations[6] = run7;
    fontType = loadFont("./fonts/ProtestRiot-Regular.ttf")
 
    setInterval(timeIt, 50);

}

function draw()
{

    background(120);
 
    if(flipX)
    {
        push();

        scale(-1, 1);

        image(animations[i], -imageX1-imageW1,imageY1);
        
        pop();
    }
    else
    {
        image(animations[i], imageX1,imageY1);
    }
    
   
    if(keyIsPressed)
    {
        if(key == "a")
        {
            flipX = true;
            imageX1 -=2;
            for(var a = 0; a < animations.length; a++)
            {
                if(hit)
                pizza.remove(a);
            
            }
        }

        if(key == "d")
        {
            flipX = false;
            imageX1 +=2;
        }
        if(key == "w")
        {
            imageY1 -=2;
        }
        if(key == "s")
        {
            imageY1 +=2;
        }

       
    }

    image(pizza, xImage, yImage)

    if(dist(imageX1, imageY1, 900, 300) < animations.width / 2 + pizza.width / 2) {
        pizza = null;
    }
    let d = dist(animations.x, animations.y, pizza.x, pizza.y);
    if (d < animations.size / 2 + pizza.size / 2) {
      // If collision detected, make item disappear
      pizza.visible = false;
    }
}

function timeIt() {
    if (i < animations.length-1) {
      i++;
    }
    else
    {
        i = 0;
    }

   
}

function moveEnemy()
  {
    if(counter >= 2)
    {
        if(imageX1 >= imageX2)
        {
            imageX1-=1;
        }
        if(imageY1 >= imageY2)
        {
            imageY1-=1;
        }

        if(imageX1 <= imageX2)
        {
            imageX1+=1;
        }
        if(imageY1 <= imageY2)
        {
            imageY1+=1;
        }
        counter = 0;
    }
   
    
    counter++;
  
}

function preload() {
    pizza = loadImage("./images/Pizza.png");
}
