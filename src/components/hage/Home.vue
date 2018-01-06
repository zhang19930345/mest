<style lang="less">
@import '../../stylesheet/home.less';
.box{
  background-color:#28a9fd;
  background-size:cover;
  width:100%;
  height:100vh;
  display:-webkit-flex;
  flex-direction:column;
  text-align: center;
  padding-top:2rem;
  .images{
          img{
                  width:1.813rem;
                  height:1.813rem;
          }
  }
  .user_span{
          padding-top:0.506rem;
          font-size:0.92rem;
          color:#ffffff;
          span:nth-child(1){
                  font-weight: 600;
          }
          span:nth-child(2){
                  font-weight:300;
          }
  }
  .user-from{
          .user-user,.user-password{
                  width:8rem;
                  margin:0 auto;
                  /* padding-bottom:0.266rem; */
                  border-bottom:1px solid #a5d5fe;
                  margin-top:1.093rem;

          }
          input{
                  width:8rem;
                  border:none;
                  border-radius:0.266rem;
                  text-align: center;
                  font-size:0.48rem;
                  font-weight: normal;
                  font-stretch: normal;
                  color:#ffffff;
                  line-height: 0.8rem;
                  background-color:#28a9fd;
          }
          .user-button{
                  margin-top:1.573rem;
                  button{
                          width:8rem;
                          height:1.333rem;
                          border-radius: 50px;
                          border:none;
                          border:1px solid #ffffff;
                          background-color:#28a9fd;
                          color:#ffffff;
                  }
          }
  }
  .hom_foter{
          font-size:0.48rem;
          color:#ffffff;
          margin-top:0.666rem;
  }
}
</style>
<template>
        <div class="box">
                <div class="images">
                        <img src="../../assets/img/2018-01-05_135043.png" alt="">
                </div>
                <div class="user_span">
                        <span>Px</span>
                        <span>Player</span>
                </div>
                <div class="user-from">
                        <form>
                                <div class="user-user">
                                        <input type="text" placeholder="Username" v-model="user">
                                </div>
                                <div class="user-password">
                                        <input type="password" placeholder="Password" v-model="password">
                                </div>
                                <div class="user-button">
                                        <button type="button" v-on:click="Landing">Sign In</button>
                                </div>
                        </form>
                </div>     
                <div class="hom_foter">
                        <span>There is no account registered? </span>
                        <span>
                                <router-link to="/please">Please</router-link> 
                        </span>
                </div> 
        </div>
</template>
<script>
export default {
        data: function () {
                return {
                        user: 'admin',
                        password: 123456,
                }
        },
        methods: {
                Landing: function () {
                        if (this.user == '' || this.password == '') {
                                alert("用户名和密码不能为空");
                        }
                        if (this.user !== this.user || this.password !== this.password) {
                                alert("用户名错误或密码错误，请从新输入！")
                        }
                        this.$router.push({ path: `/please` });
                }
        }
}
</script>
