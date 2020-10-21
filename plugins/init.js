export default async function ({store, app}) {
  await store.dispatch('fetchCategories')
}
