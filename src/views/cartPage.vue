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
  <div class="cart-page">
    <div class="container">
      <div class="row">
        <div class="col-md-3 cart-detail-list mt-4">
          <div>
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
            結帳金額
            </a>
            <hr>
          </div>
          
          <div id="homeSubmenu" class="list-row">
            <div class="float-left">商品小計</div>
            <div class="text-right">2166</div>
            <hr>
          </div>
          
          <div class="list-row">
            <div class="float-left">運費</div>
            <div class="text-right">000</div>
            <hr>
          </div>
          
          <div>
            <div class="float-left">應付金額</div>
            <div class="text-right major-color"><span class="nt">NT$</span><span class="price">2166</span></div>
          </div>

        </div>

        <div class="col-md-9">
          <h4 class="mt-4">購物車內容</h4>
          <table class="table">
            <thead class="product-title">
              <tr>
                <th>商品明細</th>
                <th class="text-center">單價</th>
                <th class="text-center">數量</th>
                <th width="22%" class="text-center">小計</th> 
                <th></th>         
              </tr>
            </thead>

          <tbody class="product-contect">
            <tr v-for="(item, index) in itemList" :key="item.id">
              <td>
                <div>
                  <img src="images/01.png" alt="" class="product-img">
                </div>
              </td>
              <td class="text-center align-middle"><div class="d-flex align-items-center">{{ item.itemName }}</div></td>
              <td class="text-center align-middle">{{ item.price }}</td>
              <td class="text-center align-middle">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <button style="min-width: 2.5rem"
                      class="btn btn-decrement btn-outline-secondary"
                      type="button" @click="handleSub()"><strong>-</strong>
                    </button>
                  </div>
                  <input type="text" inputmode="decimal" style="text-align: center"
                      class="form-control" v-model="item.count">
                  <div class="input-group-append">
                    <button style="min-width: 2.5rem"
                      class="btn btn-increment btn-outline-secondary"
                      type="button" @click="handlePlus()"><strong>+</strong>
                    </button>
                  </div>
                </div>
              </td>
              <td class="align-middle" @click="handledelete(index)"><i class="fas fa-trash-alt"></i></td>
            </tr>
          </tbody>
        </table>
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
      count: 1,
      itemList:[
        {
          id: '1',
          itemName: 'MB-041 奧本水洗式電動鼻毛刀',
          price:'489',
          count: '3',
        },
        {
          id: '2',
          itemName: 'MB-041 奧本水洗式電動鼻毛刀',
          price:'489',
          count: '1',
        },
        {
          id: '3',
          itemName: 'MB-041 奧本水洗式電動鼻毛刀',
          price:'489',
          count: '2',
        }
      ]
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
    },
    handledelete(index) {
      this.itemList.splice(index,1)
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