import { useEffect, useRef } from "react";

interface Line {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  width: number;
  color: string;
  opacity: number;
  progress: number;
}

const COLORS = [
  "255, 90, 0",   // neon orange
  "0, 200, 255",  // neon blue
  "255, 90, 0",   // more orange (weighted)
  "0, 200, 255",  // more blue (weighted)
  "255, 160, 0",  // warm amber
];

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

function createLine(canvasWidth: number, canvasHeight: number): Line {
  const angle = randomBetween(-25, 25) * (Math.PI / 180); // slight diagonal
  return {
    x: randomBetween(-100, canvasWidth + 100),
    y: randomBetween(-50, canvasHeight + 50),
    length: randomBetween(80, 260),
    speed: randomBetween(1.5, 4),
    angle,
    width: randomBetween(1, 2.5),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    opacity: randomBetween(0.3, 0.7),
    progress: 0,
  };
}

const NeonLines = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const linesRef = useRef<Line[]>([]);
  const rafRef = useRef<number>(0);
  const scrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Initialise pool of lines
    const COUNT = 18;
    for (let i = 0; i < COUNT; i++) {
      const l = createLine(canvas.width, canvas.height);
      l.progress = Math.random(); // stagger start positions
      linesRef.current.push(l);
    }

    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      linesRef.current.forEach((line, idx) => {
        const dx = Math.cos(line.angle) * line.speed;
        const dy = Math.sin(line.angle) * line.speed + 0.3; // slight downward drift

        line.x += dx;
        line.y += dy;
        line.progress += line.speed / 300;

        // Fade in / fade out over progress 0→1
        const fade =
          line.progress < 0.2
            ? line.progress / 0.2
            : line.progress > 0.8
            ? 1 - (line.progress - 0.8) / 0.2
            : 1;

        const alpha = fade * line.opacity;

        // Head and tail of the streak
        const tailX = line.x - Math.cos(line.angle) * line.length;
        const tailY = line.y - Math.sin(line.angle) * line.length;

        const grad = ctx.createLinearGradient(tailX, tailY, line.x, line.y);
        grad.addColorStop(0, `rgba(${line.color}, 0)`);
        grad.addColorStop(0.5, `rgba(${line.color}, ${alpha * 0.4})`);
        grad.addColorStop(1, `rgba(${line.color}, ${alpha})`);

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(line.x, line.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = line.width;
        ctx.lineCap = "round";
        // Glow effect
        ctx.shadowColor = `rgba(${line.color}, ${alpha * 0.8})`;
        ctx.shadowBlur = line.width * 6;
        ctx.stroke();
        ctx.restore();

        // Recycle when off-screen or finished
        if (
          line.progress >= 1 ||
          line.x > canvas.width + 200 ||
          line.y > canvas.height + 200 ||
          line.x < -200 ||
          line.y < -200
        ) {
          linesRef.current[idx] = createLine(canvas.width, canvas.height);
          linesRef.current[idx].progress = 0;
        }
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 5,
        mixBlendMode: "screen",
      }}
    />
  );
};

export default NeonLines;
