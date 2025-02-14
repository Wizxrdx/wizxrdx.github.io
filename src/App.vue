<script setup lang="ts">
import { ref, onMounted } from 'vue'

type Project = {
  id: number;
  name: string;
  description: string;
}
const name = ref('Benedick Labbao')
const title = ref('Programmer')
const about = ref('Brief introduction about yourself and what you do.')
const email = ref('benedick.dumol@gmail.com')

const projects = ref<Project[]>([
  { id: 1, name: 'Project 1', description: 'Description of project 1' },
  { id: 2, name: 'Project 2', description: 'Description of project 2' }
])

const createNeurons = () => {
  const container = document.getElementById('neuron-container');
  if (!container) return;
  for (let i = 0; i < 300; i++) {
    const neuron = document.createElement('div');
    neuron.classList.add('neuron');
    neuron.textContent = `${Math.round(Math.random())}`;
    neuron.style.left = `${Math.round(Math.random() * 100)}vw`;
    neuron.style.top = `${Math.random() * 100}vh`;
    const rng = Math.random();
    neuron.style.animationDuration = `${15 - (rng * 10)}s`;
    neuron.style.fontSize = `${rng * 100}px`;
    neuron.style.opacity = `0`;
    container.appendChild(neuron);
  }
};

onMounted(() => {
  createNeurons();
})
</script>

<template>
  <div id='app'>
    <section id="hero">
      <div id="neuron-container"></div>
      <div class="overlay">
        <h1>{{ name }}</h1>
        <p>{{ title }}</p>
      </div>
    </section>
        
    <section id='about'>
        <h2>About Me</h2>
        <p>{{ about }}</p>
    </section>
    
    <section id='projects'>
        <h2>Projects</h2>
        <div v-for='project in projects' :key='project.id' class='project'>
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
        </div>
    </section>
    
    <section id='contact'>
        <h2>Contact</h2>
        <p>Email: {{ email }}</p>
        <p>LinkedIn: </p>
    </section>
    
    <footer>
        <p>&copy; 2025 Made with ❤️ by <a href="https://github.com/wizxrdx/" target="_blank">{{ name }}</a>
        </p>
    </footer>
  </div>
</template>

<style scoped>
  #app {
      padding: 0;
      margin: 0 auto;
  }

  #hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    position: relative;
  }

  .overlay {
      background: rgba(0, 0, 0, 0.5);
      padding: 20px;
      border-radius: 10px;
  }
</style>

<style>
#neuron-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: -1;
  }

  .neuron {
    position: absolute;
    width: 30px;
    height: 30px;
    color: #16F529;
    animation: floatNeurons linear infinite;
  }

  @keyframes floatNeurons {
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    100% {
      transform: translateY(-100vh);
      opacity: 1;
    }
  }
</style>