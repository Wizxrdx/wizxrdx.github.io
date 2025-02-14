<script setup lang="ts">
</script>

<template>
  <nav id="navbar">
    <ul>
      <li><a href="#hero">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</template>

<style scoped>
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  opacity: 0.7;
  background-color: #000;
  padding: 10px 0;
  text-align: center;
  z-index: 1000;
}

#navbar ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

#navbar li {
  margin: 0 15px;
}

#navbar a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: 0.3s;
}

#navbar a:hover {
  color: #16F529;
}


</style>
