<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import ProfilePhoto from './components/ProfilePhoto.vue'

const name = ref('Benedick Labbao')
const title = ref('A Programmer and Aspring Software Engineer')
const about = ref('Brief introduction about yourself and what you do.')
// const email = ref('benedick.dumol@gmail.com')

// const projects = ref<Project[]>([
//   { id: 1, name: 'Project 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac libero ultrices aliquam. Nullam nec purus ac libero ultrices aliquam. Nullam nec purus ac libero ultrices aliquam. Nullam nec purus ac libero ultrices aliquam.'
//    },
//   { id: 2, name: 'Project 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac libero ultrices aliquam. Nullam nec purus ac libero ultrices aliquam. Nullam nec purus ac libero ultrices aliquam. Nullam nec purus ac libero ultrices aliquam.' }
// ])



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
  spawnNumbers(300, 500, 50);
});
</script>

<template>
  <div id='app'>
    <Navbar />
    <section id="hero">
      <div id="binary-container"></div>
      <ProfilePhoto />
      <div class="overlay">
        <h1>{{ name }}</h1>
        <p>{{ title }}</p>
        <p>{{ about }}</p>
      </div>
    </section>
        
    <!-- <section id='about'>
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
    </footer> -->
  </div>
</template>

<style scoped>
  #app {
      margin: 0 auto;
      cursor: default;
  }

  #hero {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    position: relative;
    flex-direction: column;
  }

  .overlay {
      background: rgba(0, 0, 0, 0.5);
      padding: 0.5vw;
      border-radius: 10px;
      flex: 1 1 auto;
  }

  @media (min-aspect-ratio: 1/1) {
  #hero {
    flex-direction: row;
  }
}
</style>

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