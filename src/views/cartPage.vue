<template>
  <div>
    <headerTop />
    <div class="cart-page">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 cart-detail-list order-1">
            <div>
              <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                結帳金額
              </a>
              <hr>
            </div>

            <div id="homeSubmenu" class="list-row collapse">
              <div class="float-left">商品小計</div>
              <div class="text-right">{{ listTotalAmount }}</div>
              <hr>
            </div>

            <div class="list-row">
              <div class="float-left">運費</div>
              <div class="text-right">{{ shipping }}</div>
              <hr>
            </div>

            <div>
              <div class="float-left">應付金額</div>
              <div class="text-right major-color"><span class="nt">NT$</span><span
                  class="price">{{ totalAmount }}</span></div>
            </div>

          </div>

          <div class="col-lg-9 main-content order-0">
            <h4 class="mt-4">購物車內容</h4>
            <table class="table co-border">
              <thead class="product-title">
                <tr>
                  <th>商品明細</th>
                  <th width="30%" class="text-center"></th>
                  <th width="22%" class="text-center">單價</th>
                  <th width="30%" class="text-center">數量</th>
                  <th width="22%" class="text-center">小計</th>
                  <th></th>
                </tr>
              </thead>

              <tbody v-if="itemList.length <= 0" class="product-contect">
                <tr>
                  <td class="text-center" colspan="6">
                    <div><i class="fas fa-shopping-cart"></i></div>
                    <div>快點去購物唷～</div>
                    <button class="addBtn major-bg-color ml-3">
                      <router-link :to="{ path:'/' }">
                        購物去
                      </router-link>
                    </button>
                  </td>
                </tr>
              </tbody>

              <tbody v-else class="product-contect">
                <tr v-for="(item, index) in itemList" :key="item.id">
                  <td>
                    <div>
                      <img :src="`${item.img}`" alt="" class="product-img">
                    </div>
                  </td>
                  <td class="text-center align-middle">
                    <div class="d-flex align-items-center">{{ item.itemName }}</div>
                  </td>
                  <td class="text-center align-middle">{{ item.price }}</td>
                  <td class="text-center align-middle">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <button style="min-width: 2.5rem" class="btn btn-decrement btn-outline-secondary" type="button"
                          @click="handleSub(index)"><strong>-</strong>
                        </button>
                      </div>
                      <input type="text" inputmode="decimal" style="text-align: center" class="form-control"
                        v-model="item.count">
                      <div class="input-group-append">
                        <button style="min-width: 2.5rem" class="btn btn-increment btn-outline-secondary" type="button"
                          @click="handlePlus(index)"><strong>+</strong>
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="text-center align-middle">{{ item.price * item.count }}</td>
                  <td class="align-middle" @click="handledelete(index)"><i class="fas fa-trash-alt"></i></td>
                </tr>
              </tbody>
            </table>

            <!-- 手機版 -->
            <div v-if="itemList.length <= 0" class="product-contect-mb">
              <div class="text-center">
                <div><i class="fas fa-shopping-cart"></i></div>
                <div>快點去購物唷～</div>
                <button class="addBtn major-bg-color ml-3">
                  <router-link :to="{ path:'/' }">
                    購物去
                  </router-link>
                </button>
              </div>
            </div>
            <div v-else class="product-contect-mb">
              <div>商品明細</div>
              <div class="normal-line-items col-xs-12">
                <div class="line-item" v-for="(item, index) in itemList" :key="item.id">
                  <div class="image-and-content d-flex">
                    <div class="mr-2 mb-3">
                      <img :src="`${item.img}`" alt="" class="product-img">
                    </div>
                    <div class="line-item-content">
                      <div class="title">
                        {{ item.itemName }}
                      </div>
                      <span data-money-format="true">NT.{{ item.price }}</span>
                    </div>
                    <div class="delete-button" @click="handledelete(index)"><i class="fas fa-trash-alt"></i>
                    </div>
                  </div>
                  <div class="d-flex">
                    <div class="input-group buy-count">
                      <div class="input-group-prepend">
                        <button style="min-width: 2.5rem" class="btn btn-decrement btn-outline-secondary" type="button"
                          @click="handleSub(index)"><strong>-</strong>
                        </button>
                      </div>
                      <input type="text" inputmode="decimal" style="text-align: center" class="form-control"
                        v-model="item.count">
                      <div class="input-group-append">
                        <button style="min-width: 2.5rem" class="btn btn-increment btn-outline-secondary" type="button"
                          @click="handlePlus(index)"><strong>+</strong>
                        </button>
                      </div>
                    </div>
                    <div class="total-price major-color">NT.{{ item.price * item.count }}</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 手機版結束 -->
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
  import {
    mapGetters
  } from 'vuex'

  export default {
    components: {
      headerTop,
      footerTop
    },
    data() {
      return {
        itemList: [],
        listTotalAmount: '0', // 商品小計
        shipping: 60, // 運費
        totalAmount: '0' // 應付金額
      }
    },
    watch: {
      //監聽值
      getShoppingCartListState(val) {
        console.log('watch', val)
        this.itemList = val
        this.totalprice()
      }
    },
    computed: {
      ...mapGetters({
        getShoppingCartListState: 'getShoppingCartListState'
      })
    },
    methods: {
      // 初始
      // 點擊＋加
      handlePlus(index) {
        console.log(this.itemList[index].count)
        this.itemList[index].count++;
        this.totalprice()
      },
      // 點擊-減 不少於0
      handleSub(index) {
        if (this.itemList[index].count > 1) {
          this.itemList[index].count--;
          this.totalprice()
        }
      },
      // 刪除
      handledelete(index) {
        this.itemList.splice(index, 1)
      },
      // 商品小計 加總金額
      totalprice() {
        let total = 0 // 先宣告等於0
        let cartTotal = 0
        for (let i in this.itemList) {
          console.log(i, this.itemList[i].price, this.itemList[i].count)
          total += this.itemList[i].price * this.itemList[i].count
          cartTotal += parseInt(this.itemList[i].count)
        }
        console.log(total)
        this.listTotalAmount = total
        this.totalAmount = total + this.shipping // 應付金額 = 商品小計 ＋ 運費
        this.cartCount = cartTotal // 購物車商品數量
        console.log('≈≈≈', this.cartCount)
      }
    },
    //BEGIN--生命週期
    beforeCreate: function () {
      //實體初始化
    },
    created: function () {
      //實體建立完成。資料 $data 已可取得，但 $el 屬性還未被建立。
      this.src = this.$options.__file;
      console.log('~~~~~~~', this.getShoppingCartListState)
      // 用store的資料
      this.itemList = this.getShoppingCartListState
    },
    beforeMount: function () {
      //執行元素掛載之前。
    },
    mounted: function () {
      //元素已掛載， $el 被建立。
      // console.log(window.customElements)
      // console.log('>>>', this.getShoppingCartListState)
      this.totalprice()
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