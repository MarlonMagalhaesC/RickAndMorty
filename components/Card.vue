<template>
      <div class="mx-auto mt-4 border border-[#000000] rounded-2xl w-[262px] h-[200px]">
        <NuxtImg
          :src="image"
          width="262"
          height="200"
          class="rounded-2xl object-cover w-full h-full"
        />
      </div>

      <div class="mx-auto w-[262px] flex flex-col gap-2 flex-1">
        <div class="flex flex-row justify-between flex-1">
          <div class="flex flex-col gap-3">
            <p>{{ name }}</p>

            <ul class="inline-block">
              <li class="flex items-center gap-2">
                <IconsAlive /> {{ status }}
              </li>
              <li class="flex items-center gap-2">
                <IconsHuman /> {{ species }}
              </li>
              <li class="flex items-center gap-2">
                <IconsEarth /> {{ planet }}
              </li>
            </ul>
          </div>

          <div
            class="group mt-2 cursor-pointer"
          >
            <IconsHeartFull class="hidden group-hover:block" />
            <IconsHeartVoid class="block group-hover:hidden" />
          </div>
        </div>

        <NuxtLink
          :to="url"
          target="_blank"
        >
          <div
            class="flex gap-1 place-self-end px-3 py-2 rounded-full bg-[#11B0C8] text-sm items-center mb-4"
          >
            <IconsReadmore />
            <span>Saiba Mais</span>
          </div>
        </NuxtLink>
      </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  image: {
    type: String,
    required: true
  },

  name: {
    type: String,
    required: true
  },

  status: {
    type: String,
    required: true
  },

  species: {
    type: String,
    required: true
  },

  planet: {
    type: String,
    required: true
  },

  url: {
    type:String,
    required: true
  }
})
</script>