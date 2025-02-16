<script setup lang="ts">
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import Matrix from './components/Matrix.vue'
import ProfilePhoto from './components/ProfilePhoto.vue'
import ChangingText from './components/ChangingText.vue'

const name = ref('Benedick Labbao')
const titles = ref(['Computer Engineer', 'Software Engineer', 'Electronics Hobbyist', 'Programmer', 'Data Scientist', 'Web Developer', 'Gamer'])
const skill = ref('Data Science | Deep Learning | Machine Learning | Web Development | Embedded Systems')
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
        
    <section id='about'>
        <h2>About Me</h2>
        <p>Currently studying Computer Engineering at Technological Institute of the Philippines - Quezon City</p>
        <p>Fell in love with coding during high school (2017)</p>
        <p>Passionate when it comes to latest technologies and innovations</p>
        <h2>My Technical Skill Set</h2>
        <p>{{ skill }}</p>
        <p>Check out my <a href="https://github.com/Wizxrdx" target="_blank">GitHub Profile</a> for a more specific details.</p>
    </section>
    
    <!-- <section id='projects'>
        <h2>Projects</h2>
        <div v-for='project in projects' :key='project.id' class='project'>
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
        </div>
    </section> -->
    
    <!-- <section id='contact'>
        <h2>Contact</h2>
        <p>Email: {{ email }}</p>
        <p>LinkedIn: </p>
    </section> -->
    
    <footer>
        <p>&copy; 2025 Made with ❤️ by <a href="https://github.com/wizxrdx/" target="_blank">{{ name }}</a>
        </p>
    </footer>
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
    flex-direction: column;
  }

  .overlay {
      background: #000;
      padding: 0.5vw;
      border-radius: 10px;
      width: 80vw;
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
    padding-top: 10vh;
    height: 90vh;
    text-align: center;
}
</style>

<style scoped>
  footer {
    color: white;
    text-align: center;
    padding: 1vh;
    justify-items: center;
  }

  footer p {
    margin: 0;
    padding: 1em;
    border-radius: 5px;
    background-color: #000;
  }
</style>