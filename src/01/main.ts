import '../style.css'
import p5 from "p5";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = () => {
    p.background(220);
    p.ellipse(50, 50, 80, 80);
    p.line(10, 10, 200, 200);
  };
};

new p5(sketch);
