<script setup lang="ts">
import { onMounted } from 'vue';

const spawnNumbers = (initialCount: number, totalCount: number, interval: number) => {
  let spawned = 0;

  // Initial spawn
  for (let i = 0; i < initialCount; i++) {
    const container = document.getElementById('binary-container');
    if (!container) continue;

    createBinary(container);
    spawned++;
  }
  
  // Spawn the rest
  const intervalId = setInterval(() => {
    const container = document.getElementById('binary-container');
    if (!container) return;

    if (spawned >= totalCount) {
      clearInterval(intervalId);
      return;
    }
    
    createBinary(container);
    spawned++;
  }, interval);
};

const createBinary = (container: HTMLElement) => {
  const neuron = document.createElement('div');
  neuron.classList.add('binary');
  neuron.textContent = `${Math.round(Math.random())}`;
  neuron.style.left = `${Math.round(Math.random() * 100)}vw`;
  neuron.style.top = `${Math.random() * 200}vh`;

  const rng = Math.random();
  neuron.style.animationDuration = `${15 - (rng * 10)}s`;
  neuron.style.fontSize = `${(rng * 50) + 10}px`;
  neuron.style.fontFamily = 'Courier New';
  neuron.style.opacity = `0`;

  container.appendChild(neuron);
}

onMounted(() => {
  const screenArea = window.innerWidth * window.innerHeight;
  const baseDensity = 0.001;

  const totalCount = Math.round(screenArea * baseDensity);
  const initialCount = Math.round(totalCount * 0.6);
  spawnNumbers(initialCount, totalCount, 50);
});
</script>

<template>
    <div id="binary-container"></div>
</template>

<style>
#binary-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: -1;
}

.binary {
  position: absolute;
  width: 30px;
  height: 30px;
  color: #16F529;
  animation: floatNumbers linear infinite;
}

.binary:hover {
  background-color: #FFF;
}

@keyframes floatNumbers {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh);
    opacity: 0;
  }
}
</style>