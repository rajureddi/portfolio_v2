import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function HeroNeuralScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7.5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for the central core
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Outer Wireframe Polyhedron
    const outerGeo = new THREE.IcosahedronGeometry(2.2, 1);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      roughness: 0.2,
      metalness: 0.9,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerMesh);

    // 2. Inner Faceted Nucleus (Glass/Crystal look)
    const innerGeo = new THREE.OctahedronGeometry(1.2, 0);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x6366f1,
      emissive: 0x083344,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.9,
      thickness: 1.5,
      transparent: true,
      opacity: 0.85,
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // 3. Orbital Rings
    const ringGeo1 = new THREE.TorusGeometry(3.1, 0.015, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.7, 0.012, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.4,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    coreGroup.add(ring2);

    // 4. Vertex Data Nodes (glowing points on polyhedron vertices)
    const posAttribute = outerGeo.attributes.position;
    const vertexCount = posAttribute.count;
    const vertexNodesGeo = new THREE.BufferGeometry();
    const vertexPositions = new Float32Array(vertexCount * 3);

    for (let i = 0; i < vertexCount * 3; i++) {
      vertexPositions[i] = posAttribute.array[i];
    }
    vertexNodesGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(vertexPositions, 3)
    );

    const vertexNodesMat = new THREE.PointsMaterial({
      color: 0xa5f3fc,
      size: 0.09,
      transparent: true,
      opacity: 0.9,
    });
    const vertexNodes = new THREE.Points(vertexNodesGeo, vertexNodesMat);
    coreGroup.add(vertexNodes);

    // 5. Surrounding Synaptic Particle Cloud
    const particleCount = 450;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleScales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.2 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);
      particleScales[i] = Math.random() * 0.05 + 0.02;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x67e8f9,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particleCloud = new THREE.Points(particleGeo, particleMat);
    scene.add(particleCloud);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 3, 20);
    cyanLight.position.set(4, 3, 4);
    scene.add(cyanLight);

    const indigoLight = new THREE.PointLight(0x6366f1, 2.5, 20);
    indigoLight.position.set(-4, -3, 3);
    scene.add(indigoLight);

    // Interaction State
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let isDragging = false;
    let prevMousePos = { x: 0, y: 0 };
    let rotationVelocity = { x: 0, y: 0 };

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      mouse.targetX = (clientX / rect.width) * 2 - 1;
      mouse.targetY = -(clientY / rect.height) * 2 + 1;

      if (isDragging) {
        const deltaX = e.clientX - prevMousePos.x;
        const deltaY = e.clientY - prevMousePos.y;
        rotationVelocity.x = deltaY * 0.005;
        rotationVelocity.y = deltaX * 0.005;
        prevMousePos = { x: e.clientX, y: e.clientY };
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      setIsInteracting(true);
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onPointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    container.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);

    // Click wave trigger
    const onClick = () => {
      // Temporary pulse animation
      outerMesh.scale.set(1.15, 1.15, 1.15);
      setTimeout(() => {
        outerMesh.scale.set(1, 1, 1);
      }, 300);
    };
    container.addEventListener('click', onClick);

    // Resize handler
    const onResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Base rotation + mouse tilt
      if (!isDragging) {
        coreGroup.rotation.y += 0.006 + rotationVelocity.y;
        coreGroup.rotation.x += 0.003 + rotationVelocity.x;
        rotationVelocity.x *= 0.94;
        rotationVelocity.y *= 0.94;
      } else {
        coreGroup.rotation.y += rotationVelocity.y;
        coreGroup.rotation.x += rotationVelocity.x;
      }

      // Gyroscopic response to cursor
      coreGroup.position.x = mouse.x * 0.4;
      coreGroup.position.y = mouse.y * 0.4;
      coreGroup.rotation.z = mouse.x * 0.15;

      // Dynamic counter-rotations
      innerMesh.rotation.y = -elapsedTime * 0.35;
      innerMesh.rotation.x = elapsedTime * 0.2;

      ring1.rotation.z = elapsedTime * 0.25;
      ring2.rotation.z = -elapsedTime * 0.2;

      // Particle subtle breathing rotation
      particleCloud.rotation.y = elapsedTime * 0.02;
      particleCloud.rotation.x = Math.sin(elapsedTime * 0.1) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      container.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerdown', onPointerDown);
      container.removeEventListener('click', onClick);
      window.removeEventListener('pointerup', onPointerUp);

      renderer.dispose();
      outerGeo.dispose();
      outerMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      vertexNodesGeo.dispose();
      vertexNodesMat.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[480px] sm:h-[560px] lg:h-[640px] flex items-center justify-center select-none">
      {/* Interactive 3D Canvas Mount */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
      />

      {/* Floating 3D HUD Badges */}
      <div className="absolute top-4 left-4 z-20 pointer-events-none">
        <div className="px-3 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/20 backdrop-blur-md flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[10px] font-mono font-medium tracking-wider text-cyan-300 uppercase">
            3D Spatial Neural Core
          </span>
        </div>
      </div>

      <div className="absolute bottom-4 right-4 z-20 pointer-events-none flex flex-col items-end gap-1.5">
        <div className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-[10px] font-mono text-slate-400">
          Interaction: <span className="text-cyan-400">{isInteracting ? 'ACTIVE DRAG' : 'CURSOR TRACKING'}</span>
        </div>
        <div className="text-[9px] font-mono text-slate-500">
          Drag to spin • Click to pulse
        </div>
      </div>

      {/* Ambient Radial Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,#07080c_90%)]" />
    </div>
  );
}
