<template>
  <div
    v-for="item in data.results"
    :key="item.id"
    class="min-w-[295px] h-[145px] bg-[#313234] rounded-xl flex flex-col text-lg p-4 justify-between"
  >
    <div class="flex gap-4">
      <IconsEpisode class="shrink-0"/>
      <p> {{ item.name }} </p>
    </div>

    <div class="flex justify-between">
      <div class="flex gap-1 place-self-start px-3 py-2 rounded-full bg-[#11B0C8] text-sm items-center ">
        <IconsReadmore />
        <span>Saiba Mais</span>
      </div>

      <IconsHeartFull
            class="cursor-pointer"
      />

      <IconsHeartVoid
        class="cursor-pointer"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

  const { data, status, error, refresh, clear } = await useFetch("https://rickandmortyapi.com/api/episode");

  console.log(data.value.results);

</script>
