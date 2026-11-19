import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const SparklesCore = ({
  className,
  minSize = 0.6,
  maxSize = 2.2,
  particleDensity = 60,
  particleColor = "#06b6d4",
}: {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const particles: {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
    }[] = [];

    const count = Math.floor((width * height) / 10000) * (particleDensity / 30);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * (maxSize - minSize) + minSize,
        speedY: (Math.random() - 0.5) * 0.3,
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.7 + 0.3,
      });
    }

    let animId: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    const onResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, [minSize, maxSize, particleDensity, particleColor]);

  return (
    <div className={cn("relative w-full h-full", className)}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
