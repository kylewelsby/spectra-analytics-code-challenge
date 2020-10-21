<template>
  <aside class="flex flex-col text-sm lg:text-xs">
    <h3 class="text-purple-500 text-lg font-medium mt-5 mb-2">Contents</h3>
    <ul>
      <li v-for="(docs, category, index) in categories" :key="category">
        <p
          class="mb-2 text-gray-500 uppercase tracking-wider font-bold text-sm lg:text-xs"
        >
          {{ category }}
        </p>
        <ul class="mb-4">
          <li
            v-for="doc of docs"
            :key="doc.slug"
            class="text-gray-700 dark:text-gray-300"
          >
            <NuxtLink :to="doc" class="flex flex-row items-center py-1">
              <span class="flex-grow">{{ doc.menuTitle || doc.title }}</span>
              <small class="text-xs whitespace-no-wrap">({{formatDuration(doc.duration)}})</small>
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
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
  computed: {
    categories() {
      return this.$store.state.categories
    },
  },
  methods: {
    formatDuration(duration) {
      return shortEnglishHumanizer(duration * 1000, {
        largest: 1,
        round: true
      })
    }
  }
}
</script>
