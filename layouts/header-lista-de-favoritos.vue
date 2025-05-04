<template>
  <div class="bg-gray-900 min-h-screen w-full">
    <Header
      title="Todos os seus"
      word-of-title="favoritos."
      background="bg-gray-900"
      withIconHeartVoid
      :show-content="false"
      img-header="img/rick-and-morty.png"
      :width="315"
      :height="453"
     />

    <NuxtPage />

    <Footer class="mt-20" />
  </div>
</template>

<script setup lang="ts">
</script>
