<script setup lang="ts"></script>
import { RouterLink } from "vue-router";


<template>
  <header> 
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
  </header>
  
  <router-view />
</template>

<style scoped></style>
