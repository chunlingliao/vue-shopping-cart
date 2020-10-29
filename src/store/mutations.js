// https://vuex.vuejs.org/en/mutations.html

export default {
  // 購物車資料
  saveShoppingCartList (state, payload) {
    console.log('mut:',payload)
    state.shoppingCartList = payload
    localStorage.setItem('CartList',JSON.stringify(state.shoppingCartList))
  },
  // test
  saveGettt (state, payload) {
    console.log('saveGettt mut:',payload)
    state.getttt = payload
  }
}