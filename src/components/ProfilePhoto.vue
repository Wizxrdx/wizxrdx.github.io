<script setup lang="ts">
</script>

<template>
  <div class="profile-container">
    <div class="profile-photo">
      <img src="https://avatars.githubusercontent.com/u/50022009?v=4" alt="Profile Photo" />
    </div>
  </div>
</template>

<style scoped>
/* Centering the profile picture */
.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5vw;
  flex: 7 7 auto;
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
}

.profile-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(1);
  transition: filter 0.5s ease-in-out;
}
</style>
