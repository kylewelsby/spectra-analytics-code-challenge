<template>
  <video :poster="$_r(poster)" controls v-if="src">
    <source v-for="[src, type] in formats" :src="$_r(src)" :type="type" :key="src" />
  </video>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: '',
    },
  },
  computed: {
    formats() {
      return ['webm', 'mp4', 'ogv'].map((format) => {
        return [this.src.replace(/\.\w{3,4}$/, `.${format}`), `video/${format}`]
      })
      },
    poster() {
      return this.src.replace(/\.\w{3,4}$/, '.jpg')
    },
  }
}
</script>
