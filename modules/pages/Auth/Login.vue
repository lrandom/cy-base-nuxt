<script setup lang="ts">

const payload = reactive({
  email: '',
  password: ''
})

async function handleLogin() {
}

onMounted(()=>{
  console.log(useRuntimeConfig().public.endPointUrl);
})
</script>

<template>
  <form @submit.prevent="handleLogin()">
    <input type="text" name="email" v-model="payload.email">
    <input type="password" name="email" v-model="payload.password">
    <button>Submit</button>
  </form>
</template>

<style scoped>

</style>