<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <nav class="p-4 flex gap-4">
      <router-link to="/" class="text-lg">Home</router-link>
      <router-link to="/about" class="text-lg">About</router-link>
      <router-link to="/contact" class="text-lg">Contact</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
