var sprite1,sprite2,sprite3;
var lines1,lines2,lines3;
var lineEnds1,lineEnds2,lineEnds3;
var colors = [0xff0000,0x00ff00,0x0000ff];
function Start()
{
    createSprites();
    var self = this;
    $("#navbar-btn-add-point").on("click",function()
    {
        drawTenThousandPoints(self);
    })
}

function createSprites()
{
    var stage = new Stage("canvas");

    var i = 0;

    sprite1 = new Sprite();
    stage.addChild(sprite1);
    sprite1.x = 0;
    sprite1.y = 0;
    createBg(sprite1);

    lines1 = [];
    lineEnds1 = [0,0,0];
    for(i = 0;i<3;i++)
    {
        var line = new Sprite();
        sprite1.addChild(line);
        line.x = 0;
        line.y = 0;
        lines1.push(line);
        line.graphics.lineStyle(1,0xff0000);
        line.graphics.moveTo(0,0);
        line.graphics.lineTo(Math.random()*100,Math.random()*100);
    }

    sprite2 = new Sprite();
    stage.addChild(sprite2);
    sprite2.x = 200;
    createBg(sprite2);

    lines2 = [];
    lineEnds2 = [0,0,0];
    for(i = 0;i<3;i++)
    {
        line = new Sprite();
        sprite2.addChild(line);
        line.x = 0;
        line.y = 0;
        lines2.push(line);
    }

    sprite3 = new Sprite();
    stage.addChild(sprite3);
    sprite3.x = 400;
    createBg(sprite3);

    lines3 = [];
    lineEnds3 = [0,0,0];
    for(i = 0;i<3;i++)
    {
        line = new Sprite();
        sprite3.addChild(line);
        line.x = 0;
        line.y = 0;
        lines3.push(line);
    }
}

function createBg(sprite)
{
    var startH = sprite.height;
    var endH = startH + 200;
    var g = sprite.graphics;
    g.lineStyle(1,0x000000);
    g.moveTo(0,startH);
    g.lineTo(200,startH);
    g.moveTo(0,startH);
    g.moveTo(0,endH);
    g.moveTo(200,startH);
    g.lineTo(200,endH);
    g.moveTo(0,endH);
    g.lineTo(200,endH);
    var i = 0;
    g.lineStyle(0.3,0xcccccc);
    for (i = 1;i<5;i++)
    {
        g.moveTo(i*40,startH);
        g.lineTo(i*40,endH);

        g.moveTo(0,startH+i*40);
        g.lineTo(200,startH+i*40);
    }
}

function drawTenThousandPoints(self)
{
    drawTenThousandPoint(self.sprite1,self.lines1,self.lineEnds1);
    drawTenThousandPoint(self.sprite2,self.lines2,self.lineEnds2);
    drawTenThousandPoint(self.sprite3,self.lines3,self.lineEnds3);
}

function drawTenThousandPoint(sprite,lines,lineEnds)
{
    //for(var i = 0;i < 10000;i++)
    //{
        for(var j = 0;j<3;j++)
        {
            var line = lines[j];
            var g = line.graphics;
            var startY = lineEnds[j];
            g.lineStyle(2,0xff0000,1);
            //if(line.height == 0)
            //{
            //    g.moveTo(Math.random()*200,0);
            //}
            //var endY = startY + 3;
            //if(endY > sprite.height)
            //{
            //    createBg(sprite);
            //}
            //g.lineTo(Math.random()*200,endY);
            //lineEnds[j] = endY;
            g.moveTo(20,0);
            g.lineTo(40,30);
        }
    //}
}
Start();