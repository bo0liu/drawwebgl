/**
 * Created by Administrator on 2016/3/15.
 */
/// <reference path="ivank.d.ts"/>
module draw
{
    export class DrawGL
    {
        private sprite1:Sprite;
        private sprite2:Sprite;
        private sprite3:Sprite;
        private lines1:Sprite[];
        private lines2:Sprite[];
        private lines3:Sprite[];
        private colors:number[] = [0xff0000,0x00ff00,0x0000ff];

        constructor()
        {
            stage:Stage = new Stage("canvas");

            i = 0;

            this.sprite1 = new Sprite();
            stage.addChild(this.sprite1);
            this.sprite1.x = 0;
            createBg(this.sprite1);

            this.lines1 = [];
            for(i = 0;i<3;i++)
            {
                line:Sprite = new Sprite();
                this.sprite1.addChild(line);
                lines1.push(line);
            }

            this.sprite2 = new Sprite();
            stage.addChild(this.sprite2);
            this.sprite2.x = 200;
            createBg(this.sprite2);

            this.lines2 = [];
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

        createBg(sprite)
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
    }
}