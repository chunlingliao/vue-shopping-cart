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
															<!-- <router-link :to="{ path:'../product' , query: { itemName: item.itemName, price: item.price, count: item.count, img:item.img, desc:item.desc  } }"> -->
															<router-link :to="{ path:'../product' , query: {  item: item } }">
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
          itemName: 'YSL 聖羅蘭 奢華緞面漆光唇釉',
          price:'1300',
					count: '1',
					img: 'img/Lipstick/z001.jpg',
					desc:'▍2018 網友評鑑美妝賞 唇釉 第1名 <br> ▍2018 綜合賞 綜合大賞 第1名 <br>▍2017 網友評鑑美妝賞 唇釉 第1名'
        },
        {
          id: '2',
          itemName: 'YSL 聖羅蘭 情挑誘光水唇膏',
          price:'1300',
					count: '1',
					img: 'img/Lipstick/z002.jpg',
					desc: '▍2017 聖殿賞 聖殿賞 第2名 <br> ▍2016 網友評鑑美妝賞 唇膏 第2名 <br> ▍2015 網友評鑑美妝賞 唇膏 第2名 <br> ▍2014 網友評鑑美妝賞 唇膏 第1名 <br>▍2013 上半年新秀賞 唇膏 第1名 <br>▍2013 網友評鑑美妝賞 唇膏 第1名'
        },
        {
          id: '3',
          itemName: 'MB-03',
          price:'55',
					count: '1',
					img: 'img/Lipstick/z003.jpg',
					desc: '▍2017 聖殿賞 聖殿賞 第2名 <br> ▍2016 網友評鑑美妝賞 唇膏 第2名 <br> ▍2015 網友評鑑美妝賞 唇膏 第2名 <br> ▍2014 網友評鑑美妝賞 唇膏 第1名 <br>▍2013 上半年新秀賞 唇膏 第1名'
				},
				{
          id: '4',
          itemName: 'ROCK真我唇膏筆',
          price:'99',
					count: '1',
					img: 'img/Lipstick/z004.png',
					desc:' ▍60款訂製色任意混搭混色，創造大於60的真我專屬色。<br> ▍專業唇刷筆桿外型設計，一筆勾勒完美上色。<br> ▍霧光感色澤、高延展質地，內含柔焦複合體及天然山茶花、維他命E等成分，能夠撫平唇紋不卡紋，擁有霧感唇色的同時仍具保濕功效。'
				},
				{
          id: '5',
          itemName: '奢華美唇訂製唇膏 Rouge d’ Armani',
          price:'1200',
					count: '1',
					img: 'img/Lipstick/z005.jpg',
					desc:'粉嫩、好上手、顯色、好氣色、飽滿、細緻、金屬光 <br> ▍2016 網友評鑑美妝賞 唇膏 第1名'
				},
				{
          id: '6',
          itemName: 'Dior 迪奧 癮誘粉漾潤唇膏',
          price:'1050',
					count: '1',
					img: 'img/Lipstick/z006.jpg',
					desc:'▍2019 網友評鑑美妝賞 唇部保養 第2名 <br> ▍2018 網友評鑑美妝賞 唇部保養 第3名 <br> ▍2017 網友評鑑美妝賞 唇部保養 第2名 <br> ▍2016 網友評鑑美妝賞 唇部保養 第1名'
				},
				{
          id: '7',
          itemName: 'LOREAL PARiS 巴黎萊雅 奢華皮革訂製唇膏',
          price:'470',
					count: '1',
					img: 'img/Lipstick/z007.jpg',
					desc:'*精品皮革訂製唇膏 與奢華同行 <br> -重金訂製低調細緻皮革包裝 <br> -今年秋冬用雙唇演繹出 專屬的皮革時尚新態度 <br> *#小棕皮 玩轉絲絨柔霧唇X亮澤光感唇 打造時尚「皮氣感」<br> -注入滿滿專櫃等級的珍稀植物萃取精華油成分，及保濕鎖水因子 <br> -唇色顯色又飽和呈絲絨霧面感卻保濕不卡紋 <br> -雙唇閃耀低調卻不俗氣的質感亮澤光'
				},
				{
          id: '8',
          itemName: 'YSL 聖羅蘭 情挑誘吻蜜唇露',
					price:'1280',
					count: '1',
					img: 'img/Lipstick/z008.jpg',
					desc: '顯色度佳、不易掉色、紅色系、裸色系、橘色系、紫色系、粉色系、桃紅色系、遮蓋唇色 <br> ▍2018 網友評鑑美妝賞 唇露 第2名 <br> ▍2018 上半年新秀賞 唇露 第1名'
				},
				{
          id: '9',
          itemName: 'Dior 迪奧 癮誘超模漆光唇釉',
          price:'1200',
					count: '1',
					img: 'img/Lipstick/z009.jpg',
					desc:'▍2018 網友評鑑美妝賞 唇釉 第2名 <br> ▍2017 網友評鑑美妝賞 唇釉 第2名'
				},
				{
          id: '10',
          itemName: 'Estee Lauder 雅詩蘭黛 絕對慾望精油唇膏',
          price:'1150',
					count: '1',
					img: 'img/Lipstick/z010.jpg',
					desc: '顯色度佳、不易掉色、紅色系、遮蓋唇色、好上手、顯白 <br> ▍2017 上半年新秀賞 唇膏 第1名'
				},
				{
          id: '11',
          itemName: 'Whoo 皇后之吻潤色護唇膏',
          price:'1080',
					count: '1',
					img: 'img/Lipstick/z011.jpg',
					desc:'【 用途 】<br>添加高效漢本保養精華成分，能夠防止唇部水分蒸發，並升雙唇的柔軟度，重現水潤光采。使雙唇平滑，並修護龜裂脫皮的肌膚。'
				},
				{
          id: '12',
          itemName: 'COCO水亮唇膏 ROUGE COCO SHINE',
          price:'1150',
					count: '1',
					img: 'img/Lipstick/z012.jpg',
					desc: '▍2012 網友評鑑美妝賞 唇膏 第1名 <br> ▍2011 網友評鑑美妝賞 唇膏 第3名'
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