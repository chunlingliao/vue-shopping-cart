<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">LOGO</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">關於我們 <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">最新動態</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              購買商品
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">全系列商品</a>
              <a class="dropdown-item" href="#">特惠商品</a>
              <a class="dropdown-item" href="#">其他商品</a>
            </div>
          </li>
        </ul>
        <div class="dropdown">
          <a href="#" id="shopcart-dropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <i class="fas fa-shopping-cart"></i>
            <!-- 購物車計數 -->
            <span class="cart-count">1</span>
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="shopcart-dropdown">
            <!-- 一項商品 -->
            <div class="card-list" v-for="item in itemList" :key="item.id">
              <div class="product-item">
                <div class="thumb-img">
                  <img class="w-100" src="images/01.png" alt="">
                </div>
                <div class="product-name">
                  <p class="title">{{ item.itemName }}</p>
                  <p class="amount">
                    <span class="danger-color"> <span>NT</span><span class="mr-1">{{ item.price }}</span> </span>
                    <span>*{{ item.count }}</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="total text-right mb-2"><span>總計: </span><span class="danger-color">{{ listTotalAmount }}</span></div>
            <div class="btn btn-block btn-cart">
              <router-link :to="{ path:'../cartPage' , query: { count: count } }">
                  立即結帳
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      itemList:[],
      count:'0',
      listTotalAmount:'0', // 商品小計
      totalAmount:'0' // 應付金額
    }
  },
  watch: {
    //監聽值
    // 商品明細的數量變更
    'itemList': {
      handler (val) {
        this.count = this.itemList.count
        console.log('>>',this.count)
        this.totalprice()
      },
      deep: true
    },
    getShoppingCartListState: {
      handler (val) {
        console.log('>> watch getShoppingCartListState', val)
        this.itemList = val
        this.totalprice()
      },
      deep: true
    },
    gettttState (val) {
      console.log('gettttState:', val)
    }
  },
  computed: {
    ...mapGetters({
      getShoppingCartListState: 'getShoppingCartListState',
      gettttState: 'gettttState'
    })
  },
  methods: {
    // 初始
    // 商品小計 加總金額
    totalprice() {
      let total = 0 // 先宣告等於0
        for (let i in this.itemList) {
          console.log(i, this.itemList[i].price,this.itemList[i].count)
          total += this.itemList[i].price * this.itemList[i].count
        }
        console.log(total)
        this.listTotalAmount = total
        this.totalAmount = total + this.shipping // 應付金額 = 商品小計 ＋ 運費
      }

  },
  //BEGIN--生命週期
  beforeCreate: function() {
    //實體初始化
  },
  created: function() {
    //實體建立完成。資料 $data 已可取得，但 $el 屬性還未被建立。
    this.src = this.$options.__file ;
  },
  beforeMount: function() {
    //執行元素掛載之前。
  },
  mounted: function() {
    //元素已掛載， $el 被建立。
    // console.log(window.customElements)
    this.totalprice()

    console.log('gettttState:', this.gettttState)
  },
  beforeUpdate: function() {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  updated: function() {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  beforeDestroy: function() {
    //實體還可使用。
  },
  destroyed: function() {
    //實體銷毀。
  }
  //END--生命週期
}
</script>

<style>

</style>