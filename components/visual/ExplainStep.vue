<template>
  <div class="bg-white px-2 py-6 rounded-lg shadow-lg max-w-[170px]">
    <div class="bg-custom-blue-500 rounded-full h-10 w-10 flex items-center justify-center mx-auto">
      <p class="font-medium text-white">{{ props.order }}</p>
    </div>
    <p class="text-center pt-5">{{ props.text }}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  order: number,
  text: string
}>();
</script>