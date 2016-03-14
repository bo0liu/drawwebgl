function Start()
{
    var stage = new Stage("c");

    var sp = new Sprite();
    stage.addChild(sp);

    //	rectangles
//            for(var i=0; i<50; i++)
//            {
//                var color = Math.floor(Math.random()*0xffffff);
//                sp.graphics.beginFill(color, 0.6);
//                sp.graphics.drawRect(Math.random()*800, Math.random()*500, 70, 70);
//            }

    //	line
    sp.graphics.lineStyle(2, 0xff0000);
    sp.graphics.moveTo(20, 20);
    sp.graphics.lineTo(800, 1800);

    var g = new Graphics();
    g.lineStyle(2,0x00ff00);
    g.moveTo(0,20);
    g.lineTo(50,50);
    stage.add(g);
}

Start();