<template>
  <div class="flex flex-col">
    <h1 class="text-4xl flex flex-row items-center mb-2">
      <span data-page-title class="flex-grow text-purple-500">{{ document.title }}</span>
      <small class="text-sm">({{ formattedDuration }})</small>
    </h1>
    <VideoBlock :src="document.video" class="mb-2"/>
    <AppPrevNext :prev="prev" :next="next" class="mb-2"/>
    <div>
      <NuxtContent :document="document" />
    </div>
  </div>
</template>
<script>
import humanizeDuration from 'humanize-duration'
const shortEnglishHumanizer = humanizeDuration.humanizer({
  language: 'shortEn',
  languages: {
    shortEn: {
      y: () => "yr",
      mo: () => "mo",
      w: () => "wk",
      d: () => "day",
      h: () => "hr",
      m: () => "min",
      s: () => "sec",
      ms: () => "ms",
    }
  }
})
export default {
  middleware({ app, params, redirect }) {
    if (params.pathMatch === 'index') {
      redirect('/')
    }
  },
  async asyncData({ $content, params, error }) {
    const path = `/guide/${params.pathMatch || 'index'}`
    console.log(path)
    const [document] = await $content({ deep: true }).where({ path }).fetch()
    if (!document) {
      return error({ statusCode: 404, message: 'Page not found' })
    }
    const [prev, next] = await $content('/guide', { deep: true })
      .only(['title', 'slug', 'to'])
      .sortBy('position', 'asc')
      .surround(document.slug, { before: 1, after: 1 })
      .fetch()
    return {
      document,
      prev,
      next,
    }
  },
  head() {
    return {
      title: this.document.title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: this.document.title },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: this.document.title,
        },
      ],
    }
  },
  computed: {
    formattedDuration() {
      return shortEnglishHumanizer(this.document.duration * 1000, {
        // largest: 1,
        // round: true
      })
    },
  },
}
</script>
