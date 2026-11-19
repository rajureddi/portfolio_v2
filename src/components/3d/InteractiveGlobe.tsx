import { useEffect, useRef } from 'react';

interface CityMarker {
  name: string;
  lat: number;
  lng: number;
  role: string;
  status: string;
  ping: string;
}

const MARKERS: CityMarker[] = [
  { name: 'Hyderabad (Base)', lat: 17.385, lng: 78.4867, role: 'Full-Stack & AIML Hub', status: 'Primary Node', ping: '4ms' },
  { name: 'Bengaluru', lat: 12.9716, lng: 77.5946, role: 'Cloud & Services Sync', status: 'Active', ping: '12ms' },
  { name: 'San Francisco', lat: 37.7749, lng: -122.4194, role: 'Open Source Repos', status: 'Active', ping: '124ms' },
  { name: 'Tokyo', lat: 35.6762, lng: 139.6503, role: 'Edge Computing Node', status: 'Active', ping: '88ms' },
  { name: 'London', lat: 51.5074, lng: -0.1278, role: 'Civic Data Cluster', status: 'Active', ping: '110ms' },
];

export default function InteractiveGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const activeMarker = MARKERS[0];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    let rotationX = 0.2;
    let rotationY = 0.5;
    let targetRotationX = 0.2;
    let targetRotationY = 0.5;
    let isDragging = false;
    let prevMouse = { x: 0, y: 0 };

    // Generate Fibonacci Sphere dots
    const numPoints = 850;
    const points: { x: number; y: number; z: number; lat: number; lng: number }[] = [];

    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden ratio angle
    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      const lat = Math.asin(y) * (180 / Math.PI);
      const lng = Math.atan2(z, x) * (180 / Math.PI);
      points.push({ x, y, z, lat, lng });
    }

    const latLngToVector = (lat: number, lng: number) => {
      const phiRad = (90 - lat) * (Math.PI / 180);
      const thetaRad = (lng + 180) * (Math.PI / 180);
      return {
        x: -Math.sin(phiRad) * Math.cos(thetaRad),
        y: Math.cos(phiRad),
        z: Math.sin(phiRad) * Math.sin(thetaRad),
      };
    };

    const rotatePoint = (x: number, y: number, z: number, rx: number, ry: number) => {
      // Rotate around X axis
      const cosX = Math.cos(rx);
      const sinX = Math.sin(rx);
      const y1 = y * cosX - z * sinX;
      const z1 = y * sinX + z * cosX;

      // Rotate around Y axis
      const cosY = Math.cos(ry);
      const sinY = Math.sin(ry);
      const x2 = x * cosY + z1 * sinY;
      const z2 = -x * sinY + z1 * cosY;

      return { x: x2, y: y1, z: z2 };
    };

    let animId: number;
    let time = 0;

    const render = () => {
      time += 0.015;
      const isDark = document.documentElement.classList.contains('dark');

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.38;

      if (!isDragging) {
        targetRotationY += 0.003;
      }
      rotationX += (targetRotationX - rotationX) * 0.1;
      rotationY += (targetRotationY - rotationY) * 0.1;

      // Draw faint background sphere glow
      const bgGlow = ctx.createRadialGradient(cx, cy, radius * 0.2, cx, cy, radius * 1.05);
      if (isDark) {
        bgGlow.addColorStop(0, 'rgba(255, 255, 255, 0.03)');
        bgGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        bgGlow.addColorStop(0, 'rgba(0, 0, 0, 0.02)');
        bgGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
      }
      ctx.fillStyle = bgGlow;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.05, 0, Math.PI * 2);
      ctx.fill();

      // Render dots
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const r = rotatePoint(p.x, p.y, p.z, rotationX, rotationY);

        const depth = (r.z + 1) / 2;
        if (depth < 0.1) continue;

        const screenX = cx + r.x * radius;
        const screenY = cy + r.y * radius;
        const pointSize = Math.max(0.6, depth * 1.8);

        ctx.beginPath();
        ctx.arc(screenX, screenY, pointSize, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(228, 228, 231, ${depth * 0.55})`
          : `rgba(82, 82, 91, ${depth * 0.55})`;
        ctx.fill();
      }

      // Connecting arcs
      const baseVec = latLngToVector(MARKERS[0].lat, MARKERS[0].lng);
      const baseRot = rotatePoint(baseVec.x, baseVec.y, baseVec.z, rotationX, rotationY);

      if (baseRot.z > -0.2) {
        for (let j = 1; j < MARKERS.length; j++) {
          const targetVec = latLngToVector(MARKERS[j].lat, MARKERS[j].lng);
          const targetRot = rotatePoint(targetVec.x, targetVec.y, targetVec.z, rotationX, rotationY);

          if (targetRot.z > -0.3) {
            const startX = cx + baseRot.x * radius;
            const startY = cy + baseRot.y * radius;
            const endX = cx + targetRot.x * radius;
            const endY = cy + targetRot.y * radius;

            const midX = (startX + endX) / 2;
            const midY = (startY + endY) / 2 - 25;

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            ctx.quadraticCurveTo(midX, midY, endX, endY);
            ctx.strokeStyle = isDark ? 'rgba(16, 185, 129, 0.35)' : 'rgba(16, 185, 129, 0.45)';
            ctx.lineWidth = 1;
            ctx.stroke();

            // Light pulse traveling along arc
            const pulseT = (time * 0.8 + j * 0.3) % 1;
            const pulseX = (1 - pulseT) * (1 - pulseT) * startX + 2 * (1 - pulseT) * pulseT * midX + pulseT * pulseT * endX;
            const pulseY = (1 - pulseT) * (1 - pulseT) * startY + 2 * (1 - pulseT) * pulseT * midY + pulseT * pulseT * endY;

            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2);
            ctx.fillStyle = isDark ? 'rgba(16, 185, 129, 0.95)' : 'rgba(5, 150, 105, 0.95)';
            ctx.fill();
          }
        }
      }

      // Render City Markers
      for (let j = 0; j < MARKERS.length; j++) {
        const m = MARKERS[j];
        const v = latLngToVector(m.lat, m.lng);
        const r = rotatePoint(v.x, v.y, v.z, rotationX, rotationY);

        if (r.z > 0) {
          const sx = cx + r.x * radius;
          const sy = cy + r.y * radius;

          // Outer beacon ring
          const ringRadius = 4 + Math.sin(time * 3 + j) * 2;
          ctx.beginPath();
          ctx.arc(sx, sy, ringRadius, 0, Math.PI * 2);
          ctx.strokeStyle = j === 0 ? 'rgba(16, 185, 129, 0.7)' : 'rgba(161, 161, 170, 0.5)';
          ctx.lineWidth = 1;
          ctx.stroke();

          // Core dot
          ctx.beginPath();
          ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = j === 0 ? '#10b981' : isDark ? '#ffffff' : '#18181b';
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    // Mouse & Touch interaction
    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - prevMouse.x;
      const dy = e.clientY - prevMouse.y;
      targetRotationY += dx * 0.005;
      targetRotationX -= dy * 0.005;
      prevMouse = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - prevMouse.x;
      const dy = e.touches[0].clientY - prevMouse.y;
      targetRotationY += dx * 0.005;
      targetRotationX -= dy * 0.005;
      prevMouse = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    const onResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[420px] flex items-center justify-center select-none overflow-hidden touch-pan-y">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-pan-y"
      />

      {/* Node Telemetry HUD Card */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 pointer-events-none">
        <div className="p-2.5 sm:p-3 rounded-xl bg-white/90 dark:bg-zinc-950/80 border border-zinc-200 dark:border-white/10 backdrop-blur-xl shadow-md flex flex-col gap-1 max-w-[190px] sm:max-w-[220px]">
          <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
            <span>REGIONAL HUB</span>
            <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              LIVE
            </span>
          </div>
          <div className="text-xs font-bold text-zinc-900 dark:text-white tracking-wide">
            {activeMarker.name}
          </div>
          <div className="text-[10px] text-zinc-600 dark:text-zinc-300 font-mono">
            {activeMarker.role}
          </div>
          <div className="flex items-center justify-between text-[9px] font-mono text-zinc-500 dark:text-zinc-400 pt-1 border-t border-zinc-200 dark:border-white/5">
            <span>Latency: {activeMarker.ping}</span>
            <span>{activeMarker.status}</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 right-4 z-10 pointer-events-none text-[9px] font-mono text-zinc-400 dark:text-zinc-500">
        Interactive 3D Sphere • Drag to rotate
      </div>
    </div>
  );
}
