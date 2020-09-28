<template>
  <div>
    <headerTop />
    <!-- 麵包屑 -->
    <nav class="breadcrumb-wrap" aria-label="breadcrumb">
      <ol class="breadcrumb container">
          <li class="breadcrumb-item"><router-link :to="{ path:'../index'}">Home</router-link></li>
          <li class="breadcrumb-item"><a href="#">全系列商品</a></li>
      </ol>
    </nav>
    <div class="product">
      <div class="container">
        <div class="row">
          <div class="col-md-6 product-list mt-4">
            <div>
              <img src="images/01.png" alt="" class="product-add-img">
            </div>
            <div>
              <img src="images/01.png" alt="" class="product-img mr-2 addProductBoder">
              <img src="images/01.png" alt="" class="product-img mr-2 addProductBoder">
              <img src="images/01.png" alt="" class="product-img mr-2 addProductBoder">
            </div>
          </div>
          <div class="col-md-6 product-list mt-4">
            <div>
              <h3 class="title">{{ itemName }}</h3>
              <p class="promote mt-5 mb-5">
                ▍ 全機精密防水，浴室使用也不怕水<br>
                ▍ 依照鼻腔構造設計，立體安全圓形刀頭<br>
                ▍ 360度刀頭沖洗設計，快速清潔，乾淨衛生<br>
                ▍ 日本頂級高碳鋼刀刃，堅硬耐久使用<br>
                ▍ 日本Mabuchi馬達，馬力效能一流<br>
              </p>
            </div>
            <div>
              NT.{{ price }}
            </div>
            <hr>
            <div class="mt-3">
              <div class="input-group addInputGroup">
                <div class="input-group-prepend">
                  <button style="min-width: 2.5rem"
                    class="btn btn-decrement btn-outline-secondary"
                    type="button" @click="handleSub()"><strong>-</strong>
                  </button>
                </div>
                <input type="text" inputmode="decimal" style="text-align: center"
                    class="form-control" v-model="count">
                <div class="input-group-append">
                  <button style="min-width: 2.5rem"
                    class="btn btn-increment btn-outline-secondary"
                    type="button" @click="handlePlus()"><strong>+</strong>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button class="addBtn" @click="addItem()">加入購物車</button>
              <button class="addBtn major-bg-color ml-3" @click="addItem()">
                <router-link :to="{ path:'../cartPage' }">
                  立即購買
                </router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footerTop />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import headerTop from '../components/header'
import footerTop from '../components/footer'
import cloneDeep from 'lodash/cloneDeep'

export default {
  components: {
    headerTop,
    footerTop
  },
  data() {
    return {
      count: this.$route.query.count,
      itemName: this.$route.query.itemName,
      price: this.$route.query.price
    }
  },
  watch: {
  },
  computed: {
    ...mapGetters({
      getShoppingCartListState: 'getShoppingCartListState'
    })
  },
  methods: {
		// 初始
		handlePlus () {
    this.count++;
    },
		handleSub () {
			if(this.count >1) {
				this.count--;
			}
    },
    // 加入購物車
    addItem(){
      // console.log('~~~',this.getShoppingCartListState)
      // 需要用拷貝值才吃得到
      let a = cloneDeep(this.getShoppingCartListState)

      // 預設購物車裡面的商品參數值為false
      let haveSameName = false
      for (let i in this.getShoppingCartListState) {
        // console.log('>>>>>>>>>>>', this.getShoppingCartListState[i].itemName, this.itemName)
        // 當資料裡的名稱等於商品名稱 就相加 (相同的商品相加就對了！)
        if (this.getShoppingCartListState[i].itemName === this.itemName) {
          a[i] = {
            itemName: this.getShoppingCartListState[i].itemName,
            price: this.getShoppingCartListState[i].price,
            count: Number(this.getShoppingCartListState[i].count) + Number(this.count)
          }
          haveSameName = true
        }
      }
      // 第一次加進去購物車的商品 就push進去
      if (!haveSameName) {
          a.push({
            itemName: this.itemName,
            price: this.price,
            count: this.count
          })
      }  
      console.log('a>>', a, haveSameName)
      this.$store.dispatch("setShoppingCartList", a)
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
    console.log(window.customElements)
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