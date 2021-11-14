<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite!" />
  <a href="/admin">Admin</a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
  name: 'TheHome',
  components: {
    HelloWorld,
  },
})
</script>
