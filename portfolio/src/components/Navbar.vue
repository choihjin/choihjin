<template>
    <nav class="bg-white dark:bg-gray-900 shadow-md py-4 transition">
      <div class="container mx-auto flex justify-between items-center px-6">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-white">Portfolio</h1>
        <ul class="flex gap-6">
          <li><router-link to="/" class="hover:text-blue-500">Home</router-link></li>
          <li><router-link to="/about" class="hover:text-blue-500">About</router-link></li>
          <li><router-link to="/contact" class="hover:text-blue-500">Contact</router-link></li>
        </ul>
        <button @click="toggleDarkMode" class="ml-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md">
          🌙/☀️
        </button>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const isDark = ref(false);
  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle("dark", isDark.value);
  };
</script>  