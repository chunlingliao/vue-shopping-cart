<template>
    <div>
        <headerTop />
        <!-- 麵包屑 -->
        <nav class="breadcrumb-wrap" aria-label="breadcrumb">
            <ol class="breadcrumb container">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
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
                        <div class="col-lg-3 col-md-4 col-xs-6 p-2">
                            <div class="product">
                                <img src="images/01.png" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <div class="caption">
                                        <h6>商品名稱</h6>
                                        <div class="originalPrice">NT200</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-xs-6 p-2">
                            <div class="product">
                                <img src="images/01.png" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <div class="caption">
                                        <h6>商品名稱</h6>
                                        <div class="originalPrice">NT200</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-xs-6 p-2">
                            <div class="product">
                                <img src="images/01.png" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <div class="caption">
                                        <h6>商品名稱</h6>
                                        <div class="originalPrice">NT200</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-xs-6 p-2">
                            <div class="product">
                                <img src="images/01.png" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <div class="caption">
                                        <h6>商品名稱</h6>
                                        <div class="originalPrice">NT200</div>
                                    </div>
                                </div>
                            </div>
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
	}
}
</script>

<style>

</style>