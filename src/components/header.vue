<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <div class="mobile-nav">
        <button class="navbar-toggler float-left mr-2" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link :to="{ path:'/' }">
          <div class="nav-logo float-left ml-3 ml-md-0"><a class="navbar-brand" href="#">LOGO</a></div>
        </router-link>
      </div>
      <div class="collapse navbar-collapse order-2 order-lg-1" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">關於我們 <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">最新動態</a>
          </li>
          <li class="nav-item dropdown d-none d-lg-block">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
              購買商品
            </a>
            <div class="dropdown-menu buy-list" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">全系列商品</a>
              <a class="dropdown-item" href="#">特惠商品</a>
              <a class="dropdown-item" href="#">其他商品</a>
            </div>
          </li>
          <!-- 手機版"購買商品" -->
          <li class="nav-item d-block d-lg-none">
            <a href="#buy" data-toggle="collapse" aria-expanded="false"
              class="dropdown-toggle nav-link">購買商品</a>
            <ul class="collapse list-unstyled category-dropdown buy-list-mb" id="buy">
              <li><a href="#">全系列商品</a></li>
              <li><a href="#">特惠商品</a></li>
              <li><a href="#">其他商品</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="d-inline-flex order-1 order-lg-2">
        <div class="dropdown">
          <a href="#" id="user-dropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <i class="fas fa-user usericon"></i>
            <span class="usericon mr-3" v-if="loginStatus==='true'">{{ username }}</span>
          </a>
          <div class="dropdown-menu dropdown-menu-right dropdown-user" aria-labelledby="user-dropdown">
            <!-- 登入登出 -->
            <router-link :to="{ path:'../login' }" v-if="loginStatus!=='true'">
              <div class="btn btn-block l-btn">
                登入
              </div>
            </router-link>
            <div v-else>
              <router-link :to="{ path:'../cartPage' , query: { count: count } }">
                <div class="btn btn-block l-btn mb-2">
                  訂單明細
                </div>
              </router-link>
              <div class="btn btn-block btn-primary l-btn" @click="loginout()">
                會員登出
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown">
          <a href="#" id="shopcart-dropdown" role="button" data-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <i class="fas fa-shopping-cart"></i>
            <!-- 購物車計數 -->
            <span class="cart-count">{{ cartCount }}</span>
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="shopcart-dropdown">
            <!-- 一項商品 -->
            <div class="card-list" v-for="item in itemList" :key="item.id">
              <!-- {{itemList}} -->
              <div class="product-item">
                <div class="thumb-img">
                  <img :src="`${item.img}`" class="w-100" alt="">
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
            <div class="total text-right mb-2"><span>總計: </span><span class="danger-color">{{ listTotalAmount }}</span>
            </div>
            <router-link :to="{ path:'../cartPage' , query: { count: count } }">
              <div class="btn btn-block l-btn">
                立即結帳
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    data() {
      return {
        itemList: [],
        count: '0',
        listTotalAmount: '0', // 商品小計
        totalAmount: '0', // 應付金額
        cartCount: '0', // 購物車商品數量
        username: this.$route.query.username,
        loginStatus: localStorage.getItem('login')
      }
    },
    watch: {
      //監聽值
      // 商品明細的數量變更
      getShoppingCartListState: {
        handler(val) {
          console.log('>> watch', val)
          this.itemList = val
          this.totalprice()
        },
        deep: true
      }
    },
    computed: {
      ...mapGetters({
        getShoppingCartListState: 'getShoppingCartListState'
      })
    },
    methods: {
      // 初始
      // 商品小計 加總金額
      totalprice() {
        this.itemList = this.getShoppingCartListState
        // console.log('img',this.itemList)
        let total = 0 // 先宣告等於0
        let cartTotal = 0
        for (let i in this.itemList) {
          console.log(i, this.itemList[i].price, this.itemList[i].count)
          total += this.itemList[i].price * this.itemList[i].count
          cartTotal += parseInt(this.itemList[i].count)
        }
        console.log(',,,', cartTotal)
        this.listTotalAmount = total
        this.totalAmount = total + this.shipping // 應付金額 = 商品小計 ＋ 運費
        this.cartCount = cartTotal // 購物車商品數量
        console.log('>>>>>>>>>>>>>>>', this.cartCount)
      },
      loginout() {
        localStorage.clear();
        this.loginStatus = 'false'
        this.$store.dispatch("setShoppingCartList", [])
        this.cartCount = 0
        this.username = ''
        this.$toastr.success(`成功登出`)
        this.$router.push({
          path: '/',
        })
      }
    },
    //BEGIN--生命週期
    beforeCreate: function () {
      //實體初始化
    },
    created: function () {
      //實體建立完成。資料 $data 已可取得，但 $el 屬性還未被建立。
      this.src = this.$options.__file;
    },
    beforeMount: function () {
      //執行元素掛載之前。
    },
    mounted: function () {
      //元素已掛載， $el 被建立。
      // console.log(window.customElements)
      this.totalprice()
      // console.log('gettttState:', this.gettttState)
    },
    beforeUpdate: function () {
      //當資料變化時被呼叫，還不會描繪 View。
    },
    updated: function () {
      //當資料變化時被呼叫，還不會描繪 View。
    },
    beforeDestroy: function () {
      //實體還可使用。
    },
    destroyed: function () {
      //實體銷毀。
    }
    //END--生命週期
  }
</script>

<style>

</style>