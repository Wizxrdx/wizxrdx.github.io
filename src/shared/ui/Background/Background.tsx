"use client";
import { useEffect, useRef } from "react";
import styles from "./Background.module.css";

type Neuron = {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
};

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let neurons: Neuron[] = [];
    const maxDistance = 100;
    const maxDistanceSquared = maxDistance * maxDistance;
    let viewWidth = 0;
    let viewHeight = 0;
    let animationId = 0;
    let resizeTimeoutId: number | null = null;
    let unlockResizeTimeoutId: number | null = null;
    let allowResize = false;

    const applyCanvasSize = () => {
      viewWidth = Math.max(1, Math.round(window.innerWidth));
      viewHeight = Math.max(1, Math.round(window.innerHeight));

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.floor(viewWidth * dpr));
      canvas.height = Math.max(1, Math.floor(viewHeight * dpr));
      canvas.style.width = `${viewWidth}px`;
      canvas.style.height = `${viewHeight}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const resizeCanvas = () => {
      applyCanvasSize();

      const area = viewWidth * viewHeight;
      const targetNeurons = Math.max(16, Math.min(96, Math.floor(area / 12000)));

      if (neurons.length < targetNeurons) {
        for (let i = neurons.length; i < targetNeurons; i++) {
          neurons.push({
            x: Math.random() * viewWidth,
            y: Math.random() * viewHeight,
            radius: 3,
            dx: (Math.random() - 0.5) * 0.4,
            dy: (Math.random() - 0.5) * 0.4,
          });
        }
      } else if (neurons.length > targetNeurons) {
        neurons = neurons.slice(0, targetNeurons);
      }
    };

    const requestResize = () => {
      if (!allowResize) return;

      if (resizeTimeoutId !== null) {
        window.clearTimeout(resizeTimeoutId);
      }
      resizeTimeoutId = window.setTimeout(() => {
        const nextWidth = Math.max(1, Math.round(window.innerWidth));
        const nextHeight = Math.max(1, Math.round(window.innerHeight));

        const widthChanged = nextWidth !== viewWidth;
        const heightChangedSignificantly = Math.abs(nextHeight - viewHeight) > 120;

        // Ignore tiny height oscillations from browser UI chrome changes.
        if (widthChanged || heightChangedSignificantly) {
          resizeCanvas();
        }
        resizeTimeoutId = null;
      }, 100);
    };

    window.addEventListener("resize", requestResize, { passive: true });
    resizeCanvas();

    // Prevent first-load resize bursts from causing visible up/down jitter.
    unlockResizeTimeoutId = window.setTimeout(() => {
      allowResize = true;
    }, 1200);

    const animate = () => {
      ctx.clearRect(0, 0, viewWidth, viewHeight);

      for (let i = 0; i < neurons.length; i++) {
        for (let j = i + 1; j < neurons.length; j++) {
          const dx = neurons[i].x - neurons[j].x;
          const dy = neurons[i].y - neurons[j].y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < maxDistanceSquared) {
            const distance = Math.sqrt(distanceSquared);
            ctx.beginPath();
            ctx.moveTo(neurons[i].x, neurons[i].y);
            ctx.lineTo(neurons[j].x, neurons[j].y);
            ctx.strokeStyle = `rgba(200, 200, 200, ${1 - distance / maxDistance})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      neurons.forEach((neuron) => {
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, neuron.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(211, 211, 211, 0.7)";
        ctx.fill();

        neuron.x += neuron.dx;
        neuron.y += neuron.dy;

        if (neuron.x < 0 || neuron.x > viewWidth) neuron.dx *= -1;
        if (neuron.y < 0 || neuron.y > viewHeight) neuron.dy *= -1;

        neuron.x = Math.max(0, Math.min(neuron.x, viewWidth));
        neuron.y = Math.max(0, Math.min(neuron.y, viewHeight));
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", requestResize);

      if (resizeTimeoutId !== null) {
        window.clearTimeout(resizeTimeoutId);
      }
      if (unlockResizeTimeoutId !== null) {
        window.clearTimeout(unlockResizeTimeoutId);
      }
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas}></canvas>;
}
