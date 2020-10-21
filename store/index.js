import Vue from 'vue'
import groupBy from 'lodash.groupby'

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
}

export const actions = {
  async fetchCategories({ commit, state }) {
    const docs = await this.$content('/', { deep: true })
      .only(['title', 'menuTitle', 'category', 'slug', 'to', 'duration'])
      .sortBy('position', 'asc')
      .fetch()
    const categories = groupBy(docs, 'category')
    delete categories[undefined]
    commit('SET_CATEGORIES', categories)
  },
}
