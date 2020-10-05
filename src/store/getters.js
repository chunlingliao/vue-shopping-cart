export default {
  // 取得購物車資料
  getShoppingCartListState: state => {
    console.log('>',state.shoppingCartList)
    return state.shoppingCartList
  },
  // test
  // gettttState: state => {
  //   console.log('>',state.shoppingCartList)
  //   return state.getttt
  // }
}
