var sprite1,sprite2,sprite3;
var lines1,lines2,lines3;
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

    var sprite1 = new Sprite();
    stage.addChild(sprite1);
    sprite1.x = 0;
    createBg(sprite1);

    lines1 = [];
    for(i = 0;i<3;i++)
    {
        var line = new Sprite();
        sprite1.addChild(line);
        lines1.push(line);
    }

    var sprite2 = new Sprite();
    stage.addChild(sprite2);
    sprite2.x = 200;
    createBg(sprite2);

    lines2 = [];
    for(i = 0;i<3;i++)
    {
        line = new Sprite();
        sprite1.addChild(line);
        lines2.push(line);
    }

    var sprite3 = new Sprite();
    stage.addChild(sprite3);
    sprite3.x = 400;
    createBg(sprite3);

    lines3 = [];
    for(i = 0;i<3;i++)
    {
        line = new Sprite();
        sprite1.addChild(line);
        lines3.push(line);
    }
}

function createBg(sprite)
{
    var startH = sprite.height;
    var endH = startH + 200;
    var g = sprite.graphics;
    g.lineStyle(1,0x000000)
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
    drawTenThousandPoint(self.sprite1,self.lines1);
    drawTenThousandPoint(self.sprite2,self.lines2);
    drawTenThousandPoint(self.sprite3,self.lines3);
}

function drawTenThousandPoint(sprite,lines)
{
    for(var i = 0;i < 10000;i++)
    {
        for(var j = 0;j<3;j++)
        {
            var line = lines[j];
            var g = line.graphics;
            var startY = line.height;
            g.lineStyle(1,colors[j]);
            if(line.height == 0)
            {
                g.moveTo(Math.random()*200,0);
            }
            var endY = startY + 3;
            if(endY > sprite.height)
            {
                createBg(sprite);
            }
            g.lineTo(Math.random()*200,endY + 3);
        }
    }
}
Start();