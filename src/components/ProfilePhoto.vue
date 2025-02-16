<script setup lang="ts">
import ProfilePic from '../assets/ben.jpg';
</script>

<template>
  <div class="profile-container">
    <div class="profile-photo">
      <img :src="ProfilePic" alt="Profile Photo" />
      <!-- <img src="https://avatars.githubusercontent.com/u/50022009?v=4" alt="Profile Photo" /> -->
    </div>
  </div>
</template>

<style scoped>
/* Centering the profile picture */
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 5vh;
}

/* Profile Picture */
.profile-photo {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 50px rgba(255, 255, 255, 0.2);
  transition: box-shadow 1s ease-in-out;
  margin: 5vw;
  width: min(50vw, 50vh);
  height: min(50vw, 50vh);
}

.profile-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(1);
  transition: filter 0.5s ease-in-out;
}
</style>
