"use client";
import { useEffect, useRef } from 'react';
import styles from './Background.module.css';

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let neurons: { x: number; y: number; radius: number; dx: number; dy: number; }[] = [];
        const maxDistance = 100;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight; // Fixed viewport height

            const area = canvas.width * canvas.height;
            const targetNeurons = Math.floor(area / 8000); // Consistent density

            // Adjust neuron count without losing existing ones
            if (neurons.length < targetNeurons) {
                for (let i = neurons.length; i < targetNeurons; i++) {
                    neurons.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        radius: 3,
                        dx: (Math.random() - 0.5) * 0.4,
                        dy: (Math.random() - 0.5) * 0.4
                    });
                }
            } else if (neurons.length > targetNeurons) {
                neurons = neurons.slice(0, targetNeurons);
            }
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        let animationId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw connections
            for (let i = 0; i < neurons.length; i++) {
                for (let j = i + 1; j < neurons.length; j++) {
                    const dx = neurons[i].x - neurons[j].x;
                    const dy = neurons[i].y - neurons[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < maxDistance) {
                        ctx.beginPath();
                        ctx.moveTo(neurons[i].x, neurons[i].y);
                        ctx.lineTo(neurons[j].x, neurons[j].y);
                        ctx.strokeStyle = `rgba(200, 200, 200, ${1 - distance / maxDistance})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                }
            }

            // Draw & move neurons
            neurons.forEach((neuron) => {
                ctx.beginPath();
                ctx.arc(neuron.x, neuron.y, neuron.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(211, 211, 211, 0.7)';
                ctx.fill();

                neuron.x += neuron.dx;
                neuron.y += neuron.dy;

                // Bounce off walls (using current canvas size)
                if (neuron.x < 0 || neuron.x > canvas.width) neuron.dx *= -1;
                if (neuron.y < 0 || neuron.y > canvas.height) neuron.dy *= -1;

                // Keep them within bounds if the window shrinks suddenly
                neuron.x = Math.max(0, Math.min(neuron.x, canvas.width));
                neuron.y = Math.max(0, Math.min(neuron.y, canvas.height));
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);
    return (
        <canvas ref={canvasRef} className={styles.canvas}></canvas>
    );
}