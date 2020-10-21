<template>
  <div class="flex flex-row">
    <div class="flex-grow">
      <NuxtLink v-if="prev" :to="prev" class="text-blue-500 font-medium underline">{{ prev.title }}</NuxtLink>
    </div>
    <div class="flex-grow text-right">
      <NuxtLink v-if="next" :to="next" class="text-blue-500 font-medium underline">Next Video</NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>
