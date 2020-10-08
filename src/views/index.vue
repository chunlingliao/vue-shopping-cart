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
        <div class="container" style="min-height:70vh">
            <h2 class="text-left mt-5 mb-4">全系列商品推薦</h2>
            <div class="row">
                <!-- 側欄 -->
                <div class="sidebar col-md-3 mb-4 pr-4">
                    <div class="wrapper">
                        <nav id="sidebar">
                            <ul class="list-unstyled components list-group text-left">
                                <li class="list-group-item">
                                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false"
                                        class="dropdown-toggle list-link">全系列商品</a>
                                    <ul class="collapse list-unstyled category-dropdown" id="homeSubmenu">
                                        <li>
                                            <a href="#">聯名限量系列</a>
                                        </li>
                                        <li>
                                            <a href="#">春夏系列</a>
                                        </li>
                                        <li>
                                            <a href="#">冬天系列</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="list-group-item">
                                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"
                                        class="dropdown-toggle list-link">特惠商品</a>
                                    <ul class="collapse list-unstyled category-dropdown" id="pageSubmenu">
                                        <li>
                                            <a href="#">春夏精選</a>
                                        </li>
                                        <li>
                                            <a href="#">精選組合</a>
                                        </li>
                                        <li>
                                            <a href="#">出清特惠</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <!-- 商品內容 -->
                <div class="content col-md-9">
                    <h5 class="section-heading text-left">全系列商品</h5>
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-xs-6 p-2" v-for="item in itemList" :key="item.id">
                            <div>
															<router-link :to="{ path:'../product' , query: { itemName: item.itemName, price: item.price, count: item.count, img:item.img, desc:item.desc  } }">
																<img :src="`${item.img}`" class="card-img-top" alt="...">
															</router-link>
                                <div class="card-body">
                                    <div class="caption">
                                        <h6>{{ item.itemName }}</h6>
                                        <div class="originalPrice">NT.{{ item.price }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- <div class="col-lg-3 col-md-4 col-xs-6 p-2">
                            <div class="product">
                                <img src="images/01.png" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <div class="caption">
                                        <h6>商品名稱</h6>
                                        <div class="originalPrice">NT200</div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <!-- <div class="col-lg-3 col-md-4 col-xs-6 p-2">
                            <div class="product">
                                <img src="images/01.png" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <div class="caption">
                                        <h6>商品名稱</h6>
                                        <div class="originalPrice">NT200</div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <!-- <div class="col-lg-3 col-md-4 col-xs-6 p-2">
                            <div class="product">
                                <img src="images/01.png" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <div class="caption">
                                        <h6>商品名稱</h6>
                                        <div class="originalPrice">NT200</div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
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
			// 第一頁商品明細
      itemList:[
        {
          id: '1',
          itemName: 'MB-01 奧本水洗式電動鼻毛刀',
          price:'489',
					count: '1',
					img: 'img/Lipstick/z001.jpg',
					desc:'zzz'
        },
        {
          id: '2',
          itemName: 'MB-02',
          price:'29',
					count: '1',
					img: 'img/Lipstick/z002.jpg'
        },
        {
          id: '3',
          itemName: 'MB-03',
          price:'55',
					count: '1',
					img: 'img/Lipstick/z003.jpg'
				},
				{
          id: '4',
          itemName: 'MB-04',
          price:'99',
					count: '1',
					img: 'img/Lipstick/z004.png'
				},
				{
          id: '5',
          itemName: 'MB-04',
          price:'99',
					count: '1',
					img: 'img/Lipstick/z005.jpg'
				},
				{
          id: '6',
          itemName: 'MB-04',
          price:'99',
					count: '1',
					img: 'img/Lipstick/z006.jpg'
				},
				{
          id: '7',
          itemName: 'MB-04',
          price:'99',
					count: '1',
					img: 'img/Lipstick/z007.jpg'
				},
				{
          id: '8',
          itemName: 'MB-04',
          price:'99',
					count: '1',
					img: 'img/Lipstick/z008.jpg'
				},
				{
          id: '9',
          itemName: 'MB-04',
          price:'99',
					count: '1',
					img: 'img/Lipstick/z009.jpg'
				},
				{
          id: '10',
          itemName: 'MB-04',
          price:'99',
					count: '1',
					img: 'img/Lipstick/z010.jpg'
				},
				{
          id: '11',
          itemName: 'MB-04',
          price:'99',
					count: '1',
					img: 'img/Lipstick/z011.jpg'
				},
				{
          id: '12',
          itemName: 'MB-04',
          price:'99',
					count: '1',
					img: 'img/Lipstick/z012.jpg'
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