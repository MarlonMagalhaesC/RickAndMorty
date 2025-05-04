<template>

  <div class="flex">
    <div
      v-for="item in data.results"
      :key="item.id"
      class="flex flex-col justify-between min-w-[157px] min-h-[202px] bg-[#313234] m-4 rounded-3xl relative py-8 items-center px-3"
    >
      <div class="absolute top-0 -translate-y-1/2">
         <IconsPlanet/>
      </div>
      <div class="text-center">
         {{ item.name }}
      </div>
      <div class="">
        <ReadMore :url="item.url" />
      </div>
      <div>
        coracao
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">

const  { data, status, error, refresh, clear } = useFetch("https://rickandmortyapi.com/api/location")

console.log('locations: ')
console.log(data.value)

</script>