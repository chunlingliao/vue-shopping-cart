// https://vuex.vuejs.org/en/actions.html

export default {
  //
  async setShoppingCartList (options, payload) {
    console.log('payload', payload)
    try {
      options.commit('saveShoppingCartList', payload)
    } catch (error) {
      return error
    }
  },
  // test
  async setGettt (options, payload) {
    console.log('setGettt payload', payload)
    options.commit('saveGettt', payload)
  },
}
