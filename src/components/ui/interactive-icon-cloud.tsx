import { useEffect, useRef, useState } from "react";

interface IconCloudProps {
  iconSlugs?: string[];
  labels?: string[];
}

export function InteractiveIconCloud({
  labels = [
    "Python", "PyTorch", "TensorFlow", "OpenCV", "YOLOv11",
    "BERT", "Android NDK", "C++", "Java", "MediaPipe",
    "MNN", "ARCore", "React", "Next.js", "TypeScript",
    "Node.js", "AWS", "Docker", "Git", "Flask",
    "FastAPI", "Linux", "Scikit-Learn", "REST APIs"
  ],
}: IconCloudProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0, isDown: false, lastX: 0, lastY: 0 });

  useEffect(() => {
    let animId: number;
    let autoRotate = 0.005;

    const loop = () => {
      setRotation((prev) => ({
        x: prev.x + (mouseRef.current.isDown ? 0 : 0.002),
        y: prev.y + (mouseRef.current.isDown ? 0 : autoRotate),
      }));
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseRef.current.isDown = true;
    mouseRef.current.lastX = e.clientX;
    mouseRef.current.lastY = e.clientY;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!mouseRef.current.isDown) return;
    const deltaX = e.clientX - mouseRef.current.lastX;
    const deltaY = e.clientY - mouseRef.current.lastY;
    setRotation((prev) => ({
      x: prev.x - deltaY * 0.005,
      y: prev.y + deltaX * 0.005,
    }));
    mouseRef.current.lastX = e.clientX;
    mouseRef.current.lastY = e.clientY;
  };

  const handleMouseUp = () => {
    mouseRef.current.isDown = false;
  };

  // Compute 3D Fibonacci Sphere positions
  const radius = 150;
  const numItems = labels.length;
  const phi = Math.PI * (3 - Math.sqrt(5));

  const items = labels.map((label, i) => {
    const y = 1 - (i / (numItems - 1)) * 2;
    const radiusAtY = Math.sqrt(1 - y * y);
    const theta = phi * i;
    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;

    // Apply 3D rotation
    const cosY = Math.cos(rotation.y);
    const sinY = Math.sin(rotation.y);
    const x1 = x * cosY - z * sinY;
    const z1 = x * sinY + z * cosY;

    const cosX = Math.cos(rotation.x);
    const sinX = Math.sin(rotation.x);
    const y2 = y * cosX - z1 * sinX;
    const z2 = y * sinX + z1 * cosX;

    const scale = (z2 + 2) / 3; // depth scale 0.33 to 1.0
    const alpha = Math.max(0.2, (z2 + 1) / 2);

    return {
      label,
      screenX: x1 * radius,
      screenY: y2 * radius,
      scale,
      alpha,
      zIndex: Math.round(z2 * 100),
    };
  });

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="relative w-full h-[360px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none overflow-hidden"
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
          style={{
            left: `calc(50% + ${item.screenX}px)`,
            top: `calc(50% + ${item.screenY}px)`,
            transform: `scale(${item.scale})`,
            opacity: item.alpha,
            zIndex: item.zIndex,
          }}
        >
          <span className="px-3 py-1.5 rounded-full text-xs font-mono font-semibold bg-white/95 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 backdrop-blur-md shadow-xs hover:border-zinc-400 dark:hover:border-zinc-500 hover:text-black dark:hover:text-white transition-colors cursor-pointer pointer-events-auto">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
