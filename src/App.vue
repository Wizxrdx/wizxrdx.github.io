<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Matrix from './components/Matrix.vue'
import ProfilePhoto from './components/ProfilePhoto.vue'
import ChangingText from './components/ChangingText.vue'

const name = ref('Benedick Labbao')
const titles = ref(['Computer Engineer', 'Software Engineer', 'Electronics Hobbyist', 'Programmer', 'Data Scientist', 'Web Developer'])
const about = ref('Anything Tech-Related.')
// const email = ref('benedick.dumol@gmail.com')

// const projects = ref<Project[]>([
//   { id: 1, name: 'Project 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac libero ultrices aliquam. Nullam nec purus ac libero ultrices aliquam. Nullam nec purus ac libero ultrices aliquam. Nullam nec purus ac libero ultrices aliquam.'
//    },
//   { id: 2, name: 'Project 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ac libero ultrices aliquam. Nullam nec purus ac libero ultrices aliquam. Nullam nec purus ac libero ultrices aliquam. Nullam nec purus ac libero ultrices aliquam.' }
// ])
</script>

<template>
  <div id='app'>
    <Navbar />
    <section id="hero">
      <Matrix />
      <ProfilePhoto />
      <div class="overlay">
        <h1>{{ name }}</h1>
        <ChangingText :titles="titles" />
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
    top: 5vh;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
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

  .overlay {
    width: 40vw;
  }
}
</style>
<style scoped>
  #about {
    background: #000;
    padding-top: 5vh;
    height: 100vh;
    text-align: center;
}
</style>