<template>
  <div>
    <headerTop />
      <!-- 麵包屑 -->
      <nav class="breadcrumb-wrap" aria-label="breadcrumb">
          <ol class="breadcrumb container">
              <li class="breadcrumb-item"><router-link :to="{ path:'../'}">Home</router-link></li>
              <li class="breadcrumb-item"><a href="#">全系列商品</a></li>
          </ol>
      </nav>
      <!-- <div>
        <form action="">
          <div>
            <span>歡迎回來</span>
          </div>
          <div class="">
            <label for="email">
              <span>註冊信箱</span>
            </label>
            <input type="text" class="" name="customer[email]" id="email" placeholder="E-MAIL">
          </div>
          <div class="f">
            <label for="password">
              <span class="">會員密碼</span>
            </label>
            <input type="password" class="" name="customer[password]" id="password" placeholder="密碼">
          </div>
          <div class="">
            <button class="text-center" type="submit"> 會員登入 </button>
          </div>
        </form>
      </div> -->
    <div class="min-height">
      <div class="login">
        <!-- <form> -->
        <div class="loginform">
          <div class="form-group">
            <label for="exampleInputUser">帳號</label>
            <input type="text" v-model="user.username" @keyup.enter="login()" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username">
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">密碼</label>
            <input v-model="user.password" @keyup.enter="login()" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">記住我</label>
          </div>
          <button @click="login()" class="btn btn-block btn-primary">登入</button>
        <!-- </form> -->
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
      user: {
        username: '',
        password: '',
      },
    };
  },
    methods:{
      //登入邏輯
      login(){
        console.log('1',this.user.username,this.user.password)
        // 尚未輸入帳號
        if (!this.user.username) {
          this.$toastr.error('尚未輸入帳號')
          return
        }
        // 尚未輸入密碼
        if (!this.user.password) {
          this.$toastr.error('尚未輸入密碼')
          return
        }
        if (this.user.username ==='' || this.user.password ==='' && this.user.username !=='aazz' || this.user.password!=='a123') {
          // 錯誤訊息
          console.log(this.user.username,this.user.password)
          this.$toastr.error(`${this.user.username} 登入失敗！請重新登入`)
        } else if (this.user.username ==='aazz' && this.user.password==='a123') { 
          // success
          console.log(this.user.username,this.user.password)
          this.$toastr.success(`${this.user.username} 登入成功`)
          localStorage.setItem('login','true')
          // 登入成功跳轉內頁
          this.$router.push({
            path: '/',
            query: { username: this.user.username }
          })
        }
      }
    }
}
</script>