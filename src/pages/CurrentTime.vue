<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'

let utcTime = ref('未取得')
onMounted(async () => {
  const resp = await axios.get('/api/swa-api')
  utcTime.value = resp.data
  console.log(utcTime)
})
</script>

<template>
  <h2>API から取得した時刻</h2>
  <p>{{ utcTime }}</p>
</template>
