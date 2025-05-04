<template>
  <NuxtLink :to="url">
      <div
       class="flex gap-1 place-self-start px-3 py-2 rounded-full bg-[#11B0C8] text-sm items-center"
      >
        <IconsReadmore />
        <span>Saiba Mais</span>
     </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps ({
  url: {
    type: String,
    require: true
  }
})
</script>