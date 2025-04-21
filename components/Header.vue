<template>
<div
  class="w-full h-[580px] text-white"
  :class="[
    background,
    withIconHeartVoid ? 'border-b border-b-[#11B0C8]' : ''
  ]"
>
  <div class="mx-auto container max-w-[1250px] px-4">
    <div class="flex justify-between pt-14">
      <NuxtImg
        src="img/logo.png"
        height="64"
        width="219"
      />
        <NuxtLink
          to="/ListaDeFavoritos"
          class="flex gap-2 place-self-end px-3 py-2 rounded-full bg-[#11B0C8] text-sm items-center mb-4"
        >
          <IconsHeartVoidWhite />
          <span>Lista de favoritos</span>
        </NuxtLink>
    </div>

    <div class="flex justify-between">
      <div class="content w-[397px] flex flex-col  mt-14">

        <IconsHeartVoid
          v-if="withIconHeartVoid"
          class="mb-10"
        />

        <h1 class="text-5xl font-bold leading-[52px] block mb-10"> {{ title }} <span class="text-[#11B0C8]"> {{ wordOfTitle }} </span></h1>

        <div v-if="showContent">
          <p class="mb-16">Personagens. localizações, episódios e muito mais.</p>

          <div class="flex gap-5 mb-4">
          <div
            class="flex gap-2 place-self-end px-3 py-2 rounded-full bg-[#11B0C8] text-sm items-center mb-4"
          >
            <IconsMoon />
            <span>Escuro</span>
          </div>

          <div
          class="flex gap-2 place-self-end px-3 py-2 rounded-full bg-[#313234] text-sm items-center mb-4"
          >
            <IconsSun />
            <span>Claro</span>
          </div>
          </div>

          <p class="text-[#11B0C8]">Ai sim, Porr#@%&*</p>
        </div>
      </div>
      <div
        class="mt-6"
        :class="[
          `w-[${width}px]`,
          `h-[${height}px]`,
           withIconHeartVoid ? 'm-52 !mt-0' : 'm-0'
        ]"

      >
        <NuxtImg
         :src="imgHeader"
         :width="width"
         :height="height"
         class="w-full h-full"
        />
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
const props = defineProps({
 title: {
   type: String,
   default: 'Saiba tudo em um só'
 },

 wordOfTitle: {
   type: String,
   default: 'lugar.'
 },

 background: {
  type: String,
  default: 'bg-black'
 },

 withIconHeartVoid: {
  type: Boolean,
  default: false
 },

 showContent: {
  type: Boolean,
  default: true
 },

 imgHeader: {
  type: String,
  default: 'img/Rick.png'
 },

 width: {
  type: Number,
  default: 774
 },

 height: {
  type: Number,
  default:  434
 }
})
</script>
