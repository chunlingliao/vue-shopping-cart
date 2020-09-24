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
            <i class="fas fa-shopping-cart"></i></a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="shopcart-dropdown">
            <!-- 一項商品 -->
            <div class="card-list">
              <div class="product-item">
                <div class="thumb-img">
                  <img class="w-100" src="images/01.png" alt="">
                </div>
                <div class="product-name">
                  <p class="title">MB-043 奧本口袋型電動刮鬍刀</p>
                  <p class="amount">
                    <span class="danger-color"> NT$489元 </span>
                    <span>*1</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="total text-right mb-2"><span>總計: </span><span class="danger-color">1188</span></div>
            <div class="btn btn-block btn-cart">立即結帳</div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {

  }
</script>

<style>

</style>