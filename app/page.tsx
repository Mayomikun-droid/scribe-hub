'use client';
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import * as THREE from "three";

const WelcomeScene = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return () => undefined;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x020617, 0.01);

    const camera = new THREE.PerspectiveCamera(
      58,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 70;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1500;
    const positions = new Float32Array(starCount * 3);
    const speeds = new Float32Array(starCount);

    for (let i = 0; i < starCount; i += 1) {
      const index = i * 3;
      positions[index] = (Math.random() - 0.5) * 420;
      positions[index + 1] = (Math.random() - 0.5) * 420;
      positions[index + 2] = (Math.random() - 0.5) * 420;
      speeds[i] = 0.15 + Math.random() * 0.35;
    }

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      color: 0x7dd3fc,
      size: 1.8,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    const ribbonCount = 3;
    const ribbonMeshes: THREE.Mesh[] = [];

    for (let i = 0; i < ribbonCount; i += 1) {
      const ribbonGeometry = new THREE.TorusGeometry(28 + i * 4, 0.6, 16, 180);
      const ribbonMaterial = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x22d3ee : 0xa855f7,
        wireframe: true,
        transparent: true,
        opacity: 0.16,
      });
      const ribbon = new THREE.Mesh(ribbonGeometry, ribbonMaterial);
      ribbon.rotation.set(Math.random(), Math.random(), Math.random());
      ribbon.position.set((i - 1) * 8, (i % 2 === 0 ? 1 : -1) * 6, -22 - i * 4);
      scene.add(ribbon);
      ribbonMeshes.push(ribbon);
    }

    const pointLight = new THREE.PointLight(0x22d3ee, 2.8, 200, 2.2);
    pointLight.position.set(30, 50, 50);
    scene.add(pointLight);
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    const clock = new THREE.Clock();
    let animationId = 0;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      const positionsArray = starGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < starCount; i += 1) {
        const index = i * 3;
        positionsArray[index + 2] += speeds[i];
        if (positionsArray[index + 2] > 210) {
          positionsArray[index + 2] = -210;
        }
      }
      starGeometry.attributes.position.needsUpdate = true;

      stars.rotation.y = elapsed * 0.02;
      stars.rotation.x = Math.sin(elapsed * 0.4) * 0.03;

      ribbonMeshes.forEach((mesh, idx) => {
        mesh.rotation.y = elapsed * (0.06 + idx * 0.02);
        mesh.rotation.x = elapsed * (0.03 + idx * 0.018);
      });

      pointLight.intensity = 2.4 + Math.sin(elapsed * 1.5) * 0.6;
      pointLight.position.x = Math.sin(elapsed * 0.6) * 28;
      pointLight.position.y = 35 + Math.cos(elapsed * 0.4) * 12;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      starGeometry.dispose();
      starMaterial.dispose();
      ribbonMeshes.forEach((mesh) => {
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      });
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" aria-hidden />;
};

const floatTransition = {
  duration: 12,
  repeat: Infinity,
  ease: [0.42, 0, 0.58, 1] as const,
};

export default function WelcomePage() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020617] text-white">
      <WelcomeScene />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(16,185,129,0.18),transparent_60%)]" />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-14 sm:px-6 lg:px-12 lg:py-20">
        <header className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 text-left">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-400/20 text-lg font-semibold text-emerald-200">
              SH
            </span>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                Scribe Hub
              </p>
              <p className="text-base font-semibold text-white">
                Learn → Earn → Grow
              </p>
            </div>
          </Link>
          <div className="hidden items-center gap-3 sm:flex">
            <button
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/80 transition hover:border-emerald-200/70 hover:text-emerald-100"
              onClick={() => router.push("/signup")}
            >
              Sign in
            </button>
            <button
              className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300"
              onClick={() => router.push("/signup")}
            >
              Get started
            </button>
          </div>
        </header>

        <main className="flex flex-1 flex-col-reverse gap-12 pb-10 pt-16 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-8 text-center lg:max-w-xl lg:text-left"
          >
            <motion.div
              animate={{
                y: [0, -6, 0, 6, 0],
                rotate: [0, -1, 0, 1, 0],
              }}
              transition={floatTransition}
              className="space-y-4"
            >
              <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-100">
                Welcome to Scribe Hub
              </span>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Your AI-powered runway from first skill to first paycheck.
              </h1>
              <p className="text-base text-slate-200/90 sm:text-lg">
                Step into a unified ecosystem where Allen AI guides you through courses, contests, gigs, and community mentoring—built to accelerate African talent.
              </p>
            </motion.div>
            <motion.div
              animate={{
                y: [0, 4, 0, -4, 0],
                opacity: [0.9, 1, 0.95, 1, 0.9],
              }}
              transition={floatTransition}
              className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <button
                className="w-full rounded-full bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-cyan-300 sm:w-auto"
                onClick={() => router.push("/signup")}
              >
                Get started
              </button>
              <button
                className="w-full rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-white/50 hover:bg-white/10 sm:w-auto"
                onClick={() => router.push("/login")}
              >
                I already have an account
              </button>
            </motion.div>
            <motion.div
              animate={{
                y: [0, 3, 0, -3, 0],
                opacity: [0.8, 0.95, 0.85, 0.98, 0.8],
              }}
              transition={{ 
                duration: 16, 
                delay: 0.2,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1] as const
              }}
              className="grid gap-4 text-left sm:grid-cols-3"
            >
              {["AI-guided learning", "Contest winnings", "Certified skills"].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-black/30 p-4 text-sm text-slate-200/90">
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex h-[360px] w-full max-w-lg justify-center overflow-hidden rounded-[36px] border border-white/10 bg-black/30 px-6 py-8 backdrop-blur-2xl"
          >
            <motion.div
              className="absolute -left-12 top-10 h-48 w-48 rounded-full bg-emerald-400/20 blur-3xl"
              animate={{
                scale: [1, 1.2, 0.9, 1.05, 1],
                opacity: [0.6, 0.9, 0.7, 0.8, 0.6],
              }}
              transition={{ 
                duration: 14, 
                delay: 0.4,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1] as const
              }}
            />
            <motion.div
              className="absolute -right-16 bottom-6 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl"
              animate={{
                scale: [1, 0.85, 1.05, 0.95, 1],
                opacity: [0.5, 0.8, 0.6, 0.9, 0.5],
              }}
              transition={{ 
                duration: 13, 
                delay: 0.8,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1] as const
              }}
            />
            <motion.div
              className="absolute inset-0"
              animate={{
                rotate: [0, 0.2, -0.2, 0.15, 0],
                scale: [1, 1.02, 0.98, 1.03, 1],
              }}
              transition={{ 
                duration: 18, 
                delay: 0.3,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1] as const
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative z-10 space-y-5 text-center"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                The cockpit awaits
              </p>
              <h2 className="text-2xl font-semibold">
                Meet Allen inside your live 3D hangar.
              </h2>
              <p className="text-sm text-slate-200/80">
                A full Three.js scene will render your personal Allen avatar here. Watch the space animate as we finalize the volumetric feed integration.
              </p>
              <div className="mx-auto flex max-w-xs flex-col gap-3 text-left text-xs text-white/70">
                <p>• Daily XP streaks and payout milestones</p>
                <p>• Verified credentials minted to your identity</p>
                <p>• Referral bonuses ready once you share your link</p>
              </div>
            </motion.div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}