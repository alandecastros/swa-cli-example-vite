<template>
  <h2>API から取得した時刻</h2>
  <p>{{ utcTime }}</p>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'TheTime',
  setup() {
    let utcTime = ref('未取得')
    onMounted(async () => {
      const resp = await axios.get('http://localhost:4280/api/swa-api')
      utcTime.value = resp.data
      console.log(utcTime)
    })
    return {
      utcTime,
    }
  },
})
</script>
