<template>
<div>
  <headerTop />
  <div class="container">
    <div class="step d-flex justify-content-center">
        <div class="step-item">
            <div class="step-text">
                <div class="text-center">Step1</div>
                <div>購物車</div>
            </div>
        </div>
        <i class="fas fa-arrow-right"></i>
        <div class="step-item">
            <div class="step-text">
                <div class="text-center">Step2</div>
                <div>填寫資料</div>
            </div>
        </div>
        <i class="fas fa-arrow-right"></i>
        <div class="step-item">
            <div class="step-text">
                <div class="text-center">Step3</div>
                <div>確認訂單</div>
            </div>
        </div>
    </div>
  </div>
</div>
</template>

<script>
import headerTop from '../components/header'
export default {
  components: {
    headerTop
  }
}
</script>

<style>


</style>