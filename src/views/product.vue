<template>
  <div>
    <headerTop />
    <!-- 麵包屑 -->
    <nav class="breadcrumb-wrap" aria-label="breadcrumb">
      <ol class="breadcrumb container">
          <li class="breadcrumb-item"><a href="../index">Home</a></li>
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
              <h3 class="title">MB-041 奧本水洗式電動鼻毛刀</h3>
              <p class="promote mt-5 mb-5">
                ▍ 全機精密防水，浴室使用也不怕水<br>
                ▍ 依照鼻腔構造設計，立體安全圓形刀頭<br>
                ▍ 360度刀頭沖洗設計，快速清潔，乾淨衛生<br>
                ▍ 日本頂級高碳鋼刀刃，堅硬耐久使用<br>
                ▍ 日本Mabuchi馬達，馬力效能一流<br>
              </p>
            </div>
            <div>
              NT$489
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
              <button class="addBtn">加入購物車</button>
              <button class="addBtn major-bg-color ml-3">
                <router-link :to="{ path:'../cartPage' , query: { count: count } }">
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
import headerTop from '../components/header'
import footerTop from '../components/footer'

export default {
  components: {
    headerTop,
    footerTop
  },
  data() {
    return {
      count: 1
    }
  },
  watch: {
    //監聽值
  },
  computed: {
    //相依的資料改變時才做計算方法
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