"use client";
import { useEffect, useRef } from 'react';

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        if (canvas && ctx) {
            // Set canvas size
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            const area = canvas.width * canvas.height;
            const neurons: { x: number; y: number; radius: number; dx: number; dy: number; }[] = [];
            const numNeurons = Math.floor(area / 5000);
            const maxDistance = 100;
            console.log(numNeurons, maxDistance);

            // Generate random neurons (circles)
            for (let i = 0; i < numNeurons; i++) {
                neurons.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: 4, // Circle size
                    dx: (Math.random() - 0.2) * 0.2, // Horizontal speed
                    dy: (Math.random() - 0.2) * 0.2  // Vertical speed
                });
            }

            // Draw neurons and connections
            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

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
                            ctx.strokeStyle = `rgba(200, 200, 200, ${1 - distance / maxDistance})`; // Fainter lines for farther neurons
                            ctx.lineWidth = 1;
                            ctx.stroke();
                        }
                    }
                }

                // Draw neurons (circles)
                neurons.forEach((neuron) => {
                    ctx.beginPath();
                    ctx.arc(neuron.x, neuron.y, neuron.radius, 0, Math.PI * 2);
                    ctx.fillStyle = '#d3d3d3'; // Light gray color
                    ctx.fill();

                    // Update neuron position
                    neuron.x += neuron.dx;
                    neuron.y += neuron.dy;

                    // Bounce off walls
                    if (neuron.x < 0 || neuron.x > canvas.width) neuron.dx *= -1;
                    if (neuron.y < 0 || neuron.y > canvas.height) neuron.dy *= -1;
                });

                requestAnimationFrame(animate);
            };

            animate(); // Initial draw
        }
    }, []);
        return (
        <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}></canvas>
    );
}