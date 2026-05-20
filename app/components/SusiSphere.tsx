"use client";
import React, { useRef, useEffect, useCallback } from "react";

interface SusiSphereProps {
  size?: number;
  isListening?: boolean;
  isSpeaking?: boolean;
  isConnecting?: boolean;
  className?: string;
}

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

const SusiSphere: React.FC<SusiSphereProps> = ({
  size = 72,
  isListening = false,
  isSpeaking = false,
  isConnecting = false,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const timeRef = useRef(0);
  const blobsRef = useRef<Blob[]>([]);

  const isActive = isListening || isSpeaking || isConnecting;

  useEffect(() => {
    const cx = size / 2;
    const cy = size / 2;
    const r = size * 0.26;
    blobsRef.current = Array.from({ length: 7 }, (_, i) => {
      const angle = (i / 7) * Math.PI * 2;
      return {
        x: cx + Math.cos(angle) * r * 0.5,
        y: cy + Math.sin(angle) * r * 0.5,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: size * (0.2 + Math.random() * 0.16),
      };
    });
  }, [size]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const w = size;
    const h = size;
    const cx = w / 2;
    const cy = h / 2;
    const R = w / 2 - 1;

    timeRef.current += isActive ? 0.020 : 0.007;
    const t = timeRef.current;

    ctx.clearRect(0, 0, w * dpr, h * dpr);
    ctx.save();
    ctx.scale(dpr, dpr);

    // Clip to circle
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    // === BASE: bright warm cream-to-golden gradient — no dark edges ===
    const baseGrad = ctx.createRadialGradient(cx * 0.65, cy * 0.55, 0, cx, cy, R);
    baseGrad.addColorStop(0,    "#fffde8"); // bright cream center
    baseGrad.addColorStop(0.28, "#fde68a"); // soft yellow
    baseGrad.addColorStop(0.58, "#F7C429"); // brand gold
    baseGrad.addColorStop(0.82, "#fbbf24"); // warm amber
    baseGrad.addColorStop(1,    "#f59e0b"); // honey — NO black/dark
    ctx.fillStyle = baseGrad;
    ctx.fillRect(0, 0, w, h);

    // === FLUID BLOBS: warm whites and light golds ===
    const speed     = isActive ? 1.5 : 0.6;
    const amplitude = isActive ? R * 0.32 : R * 0.18;

    blobsRef.current.forEach((blob, i) => {
      blob.x += blob.vx * speed;
      blob.y += blob.vy * speed;

      const angle   = (i / blobsRef.current.length) * Math.PI * 2 + t * 0.28;
      const targetX = cx + Math.cos(angle + t * 0.14) * amplitude;
      const targetY = cy + Math.sin(angle * 1.3 + t * 0.09) * amplitude;
      blob.x += (targetX - blob.x) * 0.012;
      blob.y += (targetY - blob.y) * 0.012;

      const blobR = blob.r * (isSpeaking ? 1 + 0.22 * Math.sin(t * 7 + i) : 1);
      const grad  = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blobR);

      if (i % 3 === 0) {
        // Bright white-cream blobs
        grad.addColorStop(0,   "rgba(255,253,235,0.80)");
        grad.addColorStop(0.4, "rgba(255,248,195,0.45)");
        grad.addColorStop(1,   "rgba(255,248,195,0)");
      } else if (i % 3 === 1) {
        // Warm soft-gold blobs
        grad.addColorStop(0,   "rgba(253,230,138,0.65)");
        grad.addColorStop(0.5, "rgba(247,196,41,0.30)");
        grad.addColorStop(1,   "rgba(247,196,41,0)");
      } else {
        // Peachy-white blobs
        grad.addColorStop(0,   "rgba(255,237,174,0.70)");
        grad.addColorStop(0.45,"rgba(251,191,36,0.25)");
        grad.addColorStop(1,   "rgba(251,191,36,0)");
      }

      ctx.globalCompositeOperation = "screen";
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(blob.x, blob.y, blobR, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.globalCompositeOperation = "source-over";

    // === AURORA: bright, warm rotating shimmer ===
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(t * 0.35);
    for (let deg = 20; deg < 100; deg += 4) {
      const rad   = (deg * Math.PI) / 180;
      const alpha = 0.28 * Math.sin(((deg - 20) / 80) * Math.PI);
      if (alpha > 0.01) {
        const x1 = Math.cos(rad) * R;
        const y1 = Math.sin(rad) * R;
        const lg = ctx.createLinearGradient(0, 0, x1, y1);
        lg.addColorStop(0,   `rgba(255,255,255,${alpha})`);
        lg.addColorStop(0.5, `rgba(255,249,213,${alpha * 0.5})`);
        lg.addColorStop(1,   "rgba(255,255,255,0)");
        ctx.strokeStyle = lg;
        ctx.lineWidth   = 3;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(x1, y1);
        ctx.stroke();
      }
    }
    ctx.restore();

    // === COUNTER-AURORA: softer opposite shimmer ===
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(-t * 0.22);
    for (let deg = 190; deg < 260; deg += 5) {
      const rad   = (deg * Math.PI) / 180;
      const alpha = 0.18 * Math.sin(((deg - 190) / 70) * Math.PI);
      if (alpha > 0.01) {
        const x1 = Math.cos(rad) * R;
        const y1 = Math.sin(rad) * R;
        const lg = ctx.createLinearGradient(0, 0, x1, y1);
        lg.addColorStop(0, `rgba(255,248,195,${alpha})`);
        lg.addColorStop(1, "rgba(255,248,195,0)");
        ctx.strokeStyle = lg;
        ctx.lineWidth   = 2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(x1, y1);
        ctx.stroke();
      }
    }
    ctx.restore();

    // === WAVE RINGS when active ===
    if (isActive) {
      const ringCount = isSpeaking ? 3 : 2;
      for (let ring = 0; ring < ringCount; ring++) {
        const phase  = (t * 2.2 + ring * (Math.PI * 2) / ringCount) % (Math.PI * 2);
        const waveR  = R * 0.52 + R * 0.4 * (phase / (Math.PI * 2));
        const alpha  = (1 - phase / (Math.PI * 2)) * (isSpeaking ? 0.55 : 0.35);
        ctx.beginPath();
        ctx.arc(cx, cy, waveR, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
        ctx.lineWidth   = 1.5;
        ctx.stroke();
      }
    }

    // === CONNECTING inner pulse ===
    if (isConnecting) {
      const pulse = 0.5 + 0.5 * Math.sin(t * 6);
      ctx.beginPath();
      ctx.arc(cx, cy, R * 0.65 + R * 0.22 * pulse, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,255,255,${0.45 * pulse})`;
      ctx.lineWidth   = 2;
      ctx.stroke();
    }

    // === SPECULAR HIGHLIGHT — strong bright gloss ===
    const specGrad = ctx.createRadialGradient(
      cx * 0.5, cy * 0.38, 0,
      cx * 0.62, cy * 0.52, R * 0.52
    );
    specGrad.addColorStop(0,    "rgba(255,255,255,0.88)");
    specGrad.addColorStop(0.3,  "rgba(255,255,255,0.30)");
    specGrad.addColorStop(0.65, "rgba(255,255,255,0.06)");
    specGrad.addColorStop(1,    "rgba(255,255,255,0)");
    ctx.fillStyle = specGrad;
    ctx.fillRect(0, 0, w, h);

    // === SOFT WARM EDGE VIGNETTE — amber/peach, no black ===
    const edgeGrad = ctx.createRadialGradient(cx, cy, R * 0.58, cx, cy, R);
    edgeGrad.addColorStop(0,   "rgba(251,191,36,0)");
    edgeGrad.addColorStop(0.7, "rgba(245,158,11,0.12)");
    edgeGrad.addColorStop(1,   "rgba(217,119,6,0.28)");  // warm honey, not black
    ctx.fillStyle = edgeGrad;
    ctx.fillRect(0, 0, w, h);

    ctx.restore();
  }, [size, isListening, isSpeaking, isConnecting, isActive]);

  useEffect(() => {
    const animate = () => {
      draw();
      frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [draw]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width  = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width  = `${size}px`;
    canvas.style.height = `${size}px`;
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      className={`rounded-full ${className}`}
      style={{ borderRadius: "50%", display: "block" }}
    />
  );
};

export default SusiSphere;
