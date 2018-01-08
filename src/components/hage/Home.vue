<style lang="less">
@import '../../stylesheet/home.less';
@import '~vux/src/styles/1px.less';
box{
        background-color:#28a9fd;
}
.flex-demo {
  text-align: center;
  color: #fff;
  background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
}
</style>
<template>
        <div class="box">
                
                <flexbox orient="vertical">
                        <flexbox-item>
                                <div class="flex-demo">
                                        <group title="mask">
                                                <x-input title="手机号码格式化" mask="999 9999 9999" v-model="maskValue" :max="13" is-type="china-mobile"></x-input>
                                                <cell title="value" :value="maskValue"></cell>
                                                <x-input title="(99) 9-99" mask="(99) 9-99" v-model="maskValue2" :max="9"></x-input>
                                        </group>
                                </div>
                        </flexbox-item>
                        <flexbox-item><div class="flex-demo"></div></flexbox-item>
                </flexbox>
                
        </div>
        <!-- <div class="box">
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
        </div> -->
</template>
<script>
import { Flexbox, FlexboxItem, Divider, XInput, Group } from 'vux'
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
                        this.$router.push({ path: `/play` });
                }
        },
        components: {
                Flexbox,
                FlexboxItem,
                Divider,
                Group,
                XInput
        }
}
</script>
