import { useEffect, useRef } from "react";
import * as THREE from "three";
import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise.js";

const BASE_WIDTH = 1440;
const BASE_HEIGHT = 900;

const GlowField = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 68);

    const fogColor = new THREE.Color(0x030108);
    scene.fog = new THREE.FogExp2(fogColor.getHex(), 0.0045);

    // Nebula plane with shader-driven noise
    const simplex = new SimplexNoise();
    const nebulaGeometry = new THREE.PlaneGeometry(180, 120, 256, 256);
    const nebulaUniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(BASE_WIDTH, BASE_HEIGHT) },
    };
    const nebulaMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: nebulaUniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * viewMatrix * modelPosition;
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }
        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          float a = hash(i);
          float b = hash(i + vec2(1.0, 0.0));
          float c = hash(i + vec2(0.0, 1.0));
          float d = hash(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }
        float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          float frequency = 0.0;
          for (int i = 0; i < 6; i++) {
            value += amplitude * noise(p);
            p *= 2.2;
            amplitude *= 0.45;
          }
          return value;
        }
        void main() {
          vec2 uv = vUv * 3.0 - vec2(1.5);
          float t = uTime * 0.06;
          float n = fbm(uv * 1.2 + vec2(t, -t * 0.6));
          float glow = smoothstep(0.15, 0.6, n);
          vec3 color = mix(
            vec3(0.09, 0.05, 0.24),
            vec3(0.68, 0.35, 0.87),
            pow(glow, 1.3)
          );
          color += vec3(0.25, 0.12, 0.52) * pow(glow, 8.0);
          gl_FragColor = vec4(color, pow(glow, 1.6));
        }
      `,
    });
    const nebulaMesh = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
    nebulaMesh.position.z = -40;
    scene.add(nebulaMesh);

    // Galaxy particles
    const galaxyGeometry = new THREE.BufferGeometry();
    const galaxyParticles = 1600;
    const galaxyPositions = new Float32Array(galaxyParticles * 3);
    const galaxyColors = new Float32Array(galaxyParticles * 3);

    for (let i = 0; i < galaxyParticles; i += 1) {
      const i3 = i * 3;
      const radius = Math.pow(Math.random(), 0.55) * 52;
      const spin = radius * 0.45;
      const branch = (i % 6) / 6;
      const angle = branch * Math.PI * 2 + Math.random() * 0.4;

      const randomX = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? -1 : 1) * 3;
      const randomY = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? -1 : 1) * 3;
      const randomZ = Math.pow(Math.random(), 2) * (Math.random() < 0.5 ? -1 : 1) * 6;

      galaxyPositions[i3] = Math.cos(angle) * radius + randomX;
      galaxyPositions[i3 + 1] = randomY * 0.6;
      galaxyPositions[i3 + 2] = Math.sin(angle) * radius + randomZ;

      const color = new THREE.Color().setHSL(0.68 + Math.random() * 0.08, 0.7, 0.6 + Math.random() * 0.2);
      galaxyColors[i3] = color.r;
      galaxyColors[i3 + 1] = color.g;
      galaxyColors[i3 + 2] = color.b;
    }

    galaxyGeometry.setAttribute("position", new THREE.BufferAttribute(galaxyPositions, 3));
    galaxyGeometry.setAttribute("color", new THREE.BufferAttribute(galaxyColors, 3));

    const galaxyMaterial = new THREE.PointsMaterial({
      size: 1.3,
      depthWrite: false,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.9,
    });

    const galaxyPoints = new THREE.Points(galaxyGeometry, galaxyMaterial);
    scene.add(galaxyPoints);

    // Sparkle bursts
    const sparkleGeometry = new THREE.BufferGeometry();
    const sparkleCount = 400;
    const sparklePositions = new Float32Array(sparkleCount * 3);

    for (let i = 0; i < sparkleCount; i += 1) {
      const i3 = i * 3;
      sparklePositions[i3] = (Math.random() - 0.5) * 120;
      sparklePositions[i3 + 1] = (Math.random() - 0.5) * 70;
      sparklePositions[i3 + 2] = (Math.random() - 0.5) * 120;
    }

    sparkleGeometry.setAttribute("position", new THREE.BufferAttribute(sparklePositions, 3));

    const sparkleMaterial = new THREE.PointsMaterial({
      size: 2.4,
      color: new THREE.Color(0xbbe6ff),
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      opacity: 0.45,
    });

    const sparklePoints = new THREE.Points(sparkleGeometry, sparkleMaterial);
    scene.add(sparklePoints);

    // Ribbon trails
    const ribbonGroup = new THREE.Group();
    const ribbonCount = 5;
    for (let i = 0; i < ribbonCount; i += 1) {
      const curvePoints: THREE.Vector3[] = [];
      const loops = 32;
      for (let j = 0; j < loops; j += 1) {
        const angle = (j / loops) * Math.PI * 2;
        const radius = 18 + i * 4;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle * 3 + i) * 6 + Math.sin(angle * 2) * 3;
        const z = Math.sin(angle) * radius;
        curvePoints.push(new THREE.Vector3(x, y, z));
      }
      const curve = new THREE.CatmullRomCurve3(curvePoints);
      const tubeGeometry = new THREE.TubeGeometry(curve, 256, 0.3, 8, true);
      const tubeMaterial = new THREE.MeshBasicMaterial({
        color: new THREE.Color(0.6 + i * 0.04, 0.3 + i * 0.05, 1),
        transparent: true,
        opacity: 0.25,
        blending: THREE.AdditiveBlending,
      });
      const mesh = new THREE.Mesh(tubeGeometry, tubeMaterial);
      ribbonGroup.add(mesh);
    }
    scene.add(ribbonGroup);

    const clock = new THREE.Clock();
    let animationFrameId = 0;

    const animate = () => {
      const elapsed = clock.getElapsedTime();
      nebulaUniforms.uTime.value = elapsed;

      galaxyPoints.rotation.y = elapsed * 0.08;
      galaxyPoints.rotation.x = Math.sin(elapsed * 0.18) * 0.04;

      sparklePoints.rotation.y = elapsed * 0.12;
      sparklePoints.rotation.x = Math.sin(elapsed * 0.22) * 0.06;

      ribbonGroup.rotation.y = elapsed * 0.05;
      ribbonGroup.rotation.z = Math.sin(elapsed * 0.16) * 0.05;

      camera.position.x = Math.sin(elapsed * 0.16) * 14;
      camera.position.y = Math.cos(elapsed * 0.11) * 6;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      animationFrameId = window.requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const { clientWidth, clientHeight } = container;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const ratioX = event.clientX / window.innerWidth - 0.5;
      const ratioY = event.clientY / window.innerHeight - 0.5;
      camera.position.x += (ratioX * 28 - camera.position.x) * 0.02;
      camera.position.y += (ratioY * 14 - camera.position.y) * 0.02;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      renderer.dispose();
      nebulaGeometry.dispose();
      nebulaMaterial.dispose();
      galaxyGeometry.dispose();
      galaxyMaterial.dispose();
      sparkleGeometry.dispose();
      sparkleMaterial.dispose();
      ribbonGroup.children.forEach((child) => {
        const mesh = child as THREE.Mesh;
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      });
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" aria-hidden="true" />;
};

export default GlowField;
