/**
 * Created by Administrator on 2016/3/15.
 */
/// <reference path="ivank.d.ts"/>
var Draw;
(function (Draw) {
    var DrawGL = (function () {
        function DrawGL() {
            this.lineEnds1 = [0, 0, 0];
            this.lineEnds2 = [0, 0, 0];
            this.lineEnds3 = [0, 0, 0];
            this.colors = [0xff0000, 0x00ff00, 0x0000ff];
            var self_p = this;
            var stage = new Stage("canvas");
            var i = 0;
            var line;
            this.sprite1 = new Sprite();
            stage.addChild(this.sprite1);
            this.sprite1.x = 0;
            this.createBg(this.sprite1);
            this.lines1 = [];
            for (i = 0; i < 3; i++) {
                line = new Sprite();
                this.sprite1.addChild(line);
                this.lines1.push(line);
            }
            this.sprite2 = new Sprite();
            stage.addChild(this.sprite2);
            this.sprite2.x = 200;
            this.createBg(this.sprite2);
            this.lines2 = [];
            for (i = 0; i < 3; i++) {
                line = new Sprite();
                this.sprite2.addChild(line);
                this.lines2.push(line);
            }
            this.sprite3 = new Sprite();
            stage.addChild(this.sprite3);
            this.sprite3.x = 400;
            this.createBg(this.sprite3);
            this.lines3 = [];
            for (i = 0; i < 3; i++) {
                line = new Sprite();
                this.sprite3.addChild(line);
                this.lines3.push(line);
            }
            var line1 = self_p.sprite1;
            line1.graphics.lineStyle(1, 0xff0000);
            line1.graphics.moveTo(0, 0);
            line1.graphics.lineTo(50, 200);
            $("#navbar-btn-add-point").click(function () {
                //drawTenThousandPoints(self);
                var line = self_p.sprite1;
                line.graphics.clear();
                line.graphics.lineStyle(1, 0xffff00);
                line.graphics.moveTo(10, 10);
                line.graphics.lineTo(50, 200);
            });
        }
        DrawGL.prototype.createBg = function (sprite) {
            var startH = sprite.height;
            var endH = startH + 200;
            var g = sprite.graphics;
            g.lineStyle(1, 0x000000);
            g.moveTo(0, startH);
            g.lineTo(200, startH);
            g.moveTo(0, startH);
            g.moveTo(0, endH);
            g.moveTo(200, startH);
            g.lineTo(200, endH);
            g.moveTo(0, endH);
            g.lineTo(200, endH);
            var i = 0;
            g.lineStyle(0.3, 0xcccccc);
            for (i = 1; i < 5; i++) {
                g.moveTo(i * 40, startH);
                g.lineTo(i * 40, endH);
                g.moveTo(0, startH + i * 40);
                g.lineTo(200, startH + i * 40);
            }
        };
        return DrawGL;
    })();
    Draw.DrawGL = DrawGL;
    Draw.draw = new Draw.DrawGL();
})(Draw || (Draw = {}));
//# sourceMappingURL=draw.js.map