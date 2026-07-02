import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Ingredient3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 6;

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // 4. Create 3D Organic Leaf Geometry using Shapes
    const leafShape = new THREE.Shape();
    // Draw a leaf outline
    leafShape.moveTo(0, -2);
    leafShape.quadraticCurveTo(1.5, -0.5, 0.2, 2); // Right side
    leafShape.quadraticCurveTo(0, 2.3, -0.2, 2);   // Tip
    leafShape.quadraticCurveTo(-1.5, -0.5, 0, -2); // Left side

    const extrudeSettings = {
      steps: 1,
      depth: 0.15,
      bevelEnabled: true,
      bevelThickness: 0.08,
      bevelSize: 0.08,
      bevelOffset: 0,
      bevelSegments: 4,
    };

    const geometry = new THREE.ExtrudeGeometry(leafShape, extrudeSettings);
    // Center the geometry
    geometry.center();

    // 5. Translucent Green Physical Material
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x1B5E20,
      emissive: 0x071c08,
      roughness: 0.2,
      metalness: 0.1,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
      transmission: 0.3, // Semi-translucent look
      thickness: 0.5,
      side: THREE.DoubleSide,
    });

    const leafMesh = new THREE.Mesh(geometry, material);
    scene.add(leafMesh);

    // 6. Glowing center light inside the leaf
    const glowLight = new THREE.PointLight(0xDDEED8, 5, 10);
    glowLight.position.set(0, 0, 0);
    scene.add(glowLight);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xfaf9f6, 1.2);
    scene.add(ambientLight);

    // Key directional light for reflections
    const dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    // Rim light to make edges glow
    const rimLight = new THREE.DirectionalLight(0xDDEED8, 1.5);
    rimLight.position.set(-5, -5, -2);
    scene.add(rimLight);

    // 7. Scroll Animation Control
    let scrollY = window.scrollY;
    let targetRotationY = 0;
    let targetRotationX = 0;
    let targetPositionY = 0;

    const handleScroll = () => {
      scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? scrollY / scrollHeight : 0;

      targetRotationY = progress * Math.PI * 4;
      targetRotationX = progress * Math.PI * 2;
      targetPositionY = Math.sin(progress * Math.PI * 3) * 0.3; // Gentle wave movement
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // 8. Render & Animation Loop
    let clock = new THREE.Clock();
    let reqId;

    const animate = () => {
      reqId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Lerp rotations for smooth scrolling responsiveness
      leafMesh.rotation.y += (targetRotationY - leafMesh.rotation.y) * 0.08;
      leafMesh.rotation.x += (targetRotationX - leafMesh.rotation.x) * 0.08;

      // Add gentle automatic hover floating
      leafMesh.position.y += (targetPositionY + Math.sin(elapsedTime * 1.5) * 0.15 - leafMesh.position.y) * 0.08;
      leafMesh.position.x = Math.cos(elapsedTime * 0.8) * 0.1;

      // Pulse glow light slightly
      glowLight.intensity = 5 + Math.sin(elapsedTime * 2) * 1.5;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize Handling
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(reqId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[300px] lg:min-h-[500px] flex items-center justify-center">
      {/* Light glow backplate behind the canvas */}
      <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-forest/5 rounded-full blur-[80px] pointer-events-none z-0" />
      
      {/* 3D Canvas container */}
      <div ref={containerRef} className="w-full h-full z-10 flex justify-center items-center pointer-events-none" />
      
      {/* Overlay guide text */}
      <div className="absolute bottom-4 text-center pointer-events-none select-none z-20">
        <p className="text-[10px] font-inter tracking-[0.25em] text-[#7B5E3B] uppercase">
          Interactive Organic 3D Space
        </p>
      </div>
    </div>
  );
}
