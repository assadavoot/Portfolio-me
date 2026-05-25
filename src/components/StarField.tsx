"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type StarLayer = {
  points: THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>;
  depth: number;
  drift: number;
  twinkleSpeed: number;
};

const STAR_COLORS = ["#ffffff", "#bdefff", "#f7dd9a", "#ff9f8c"];

function createStarLayer(
  count: number,
  spread: number,
  size: number,
  depth: number,
  drift: number,
  twinkleSpeed: number,
  opacity: number
) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const phases = new Float32Array(count);
  const speeds = new Float32Array(count);
  const sizes = new Float32Array(count);
  const color = new THREE.Color();

  for (let index = 0; index < count; index += 1) {
    const i = index * 3;
    positions[i] = (Math.random() - 0.5) * spread;
    positions[i + 1] = (Math.random() - 0.5) * spread;
    positions[i + 2] = (Math.random() - 0.5) * spread - depth;

    color.set(STAR_COLORS[index % STAR_COLORS.length]);
    colors[i] = color.r;
    colors[i + 1] = color.g;
    colors[i + 2] = color.b;
    phases[index] = Math.random() * Math.PI * 2;
    speeds[index] = 1.1 + Math.random() * 2.8;
    sizes[index] = size * (0.72 + Math.random() * 0.9);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("aColor", new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
  geometry.setAttribute("aSpeed", new THREE.BufferAttribute(speeds, 1));
  geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));

  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uOpacity: { value: opacity }
    },
    vertexShader: `
      uniform float uTime;
      attribute vec3 aColor;
      attribute float aPhase;
      attribute float aSpeed;
      attribute float aSize;
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        float pulse = 0.5 + 0.5 * sin((uTime * aSpeed) + aPhase);
        vAlpha = 0.24 + pulse * 0.88;
        vColor = aColor * (0.75 + pulse * 0.95);

        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * (310.0 / max(12.0, -mvPosition.z));
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform float uOpacity;
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        vec2 uv = gl_PointCoord - vec2(0.5);
        float distanceFromCenter = length(uv);
        float roundGlow = smoothstep(0.5, 0.0, distanceFromCenter);
        float horizontalSpark = smoothstep(0.055, 0.0, abs(uv.y)) * smoothstep(0.5, 0.0, abs(uv.x));
        float verticalSpark = smoothstep(0.055, 0.0, abs(uv.x)) * smoothstep(0.5, 0.0, abs(uv.y));
        float alpha = (roundGlow + horizontalSpark * 0.35 + verticalSpark * 0.35) * vAlpha * uOpacity;

        if (alpha < 0.02) {
          discard;
        }

        gl_FragColor = vec4(vColor, alpha);
      }
    `
  });

  return {
    points: new THREE.Points(geometry, material),
    depth,
    drift,
    twinkleSpeed
  };
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(64, window.innerWidth / window.innerHeight, 0.1, 1200);
    camera.position.z = 42;

    const layers: StarLayer[] = [
      createStarLayer(610, 125, 4.8, 70, 0.32, 0.85, 0.86),
      createStarLayer(405, 180, 6.2, 120, 0.56, 1.1, 0.72),
      createStarLayer(165, 240, 8.4, 170, 0.86, 1.35, 0.64)
    ];

    layers.forEach((layer) => scene.add(layer.points));

    let frame = 0;
    let scrollTarget = window.scrollY;
    let scrollCurrent = scrollTarget;
    const clock = new THREE.Clock();

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const handleScroll = () => {
      scrollTarget = window.scrollY;
    };

    const animate = () => {
      frame = window.requestAnimationFrame(animate);
      scrollCurrent += (scrollTarget - scrollCurrent) * 0.075;
      const scrollProgress = scrollCurrent * 0.001;
      const elapsed = clock.getElapsedTime();

      layers.forEach((layer, index) => {
        layer.points.material.uniforms.uTime.value = elapsed * layer.twinkleSpeed;
        layer.points.position.y = scrollProgress * layer.drift * 64;
        layer.points.position.x = Math.sin(scrollProgress * (1.1 + index * 0.25)) * layer.drift * 7;
        layer.points.rotation.y = scrollProgress * (0.34 + index * 0.08);
        layer.points.rotation.x = Math.sin(scrollProgress * 0.75 + index) * 0.055;
      });

      camera.position.x = Math.sin(scrollProgress * 0.65) * 3.6;
      camera.position.y = Math.cos(scrollProgress * 0.45) * 2.2;
      camera.lookAt(0, 0, -80);
      renderer.render(scene, camera);
    };

    resize();
    renderer.render(scene, camera);
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    if (!prefersReducedMotion) {
      animate();
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", handleScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      layers.forEach((layer) => {
        scene.remove(layer.points);
        layer.points.geometry.dispose();
        layer.points.material.dispose();
      });
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="star-canvas" aria-hidden="true" />;
}
