<template>
    <div class="loginPage">
        <div class="mainContent">
            <h1 class="lgTitle">{{$brandInfo.brandName}}后台管理系统</h1>
            <form class="lgForm">
                <div class="lgError">
                    <span v-if="errors.has('username')">{{errors.first('username')}}</span>
                    <span v-else-if="errors.has('password')">{{errors.first('password')}}</span>
                    <!-- <span v-else-if="showError">{{errorMsg}}</span> -->
                </div>
                <el-input :class="[errors.has('username') ? 'is-error-input' : '', 'lgInput']"
                    v-model="username"
                    :prefix-icon="userIcon"
                    @focus="userIcon = 'icon-userLight'"
                    @blur="userIcon = 'icon-user'"
                    placeholder="请输入登录账号"
                    name="account"
                    v-validate="'required'"
                    data-vv-as="账号"
                    @keyup.enter.native="login"
                />
                <el-input :class="[errors.has('password') ? 'is-error-input' : '', 'lgInput']"
                    v-model="password"
                    :prefix-icon="pwdIcon"
                    @focus="pwdIcon = 'icon-pwdLight'"
                    @blur="pwdIcon = 'icon-pwd'"
                    placeholder="请输入登录密码"
                    v-validate="'required'"
                    name="password"
                    data-vv-as="密码"
                    type="password"
                    @keyup.enter.native="login"
                />
                <el-button class="lgButton" type="primary" @click="login" :loading="disabled">
                    {{disabled ? '登 录 中' : '登 录'}}
                </el-button>
            </form>
        </div>
    </div>
</template>

<script>
import { commonModule, COMMON_USERINFO } from '@/store/modules/common'
export default {
    data () {
        return {
            userIcon: 'icon-user',
            pwdIcon: 'icon-pwd',
            username: '',
            password: '',
            showError: false,
            errorMsg: '',
            disabled: false
        }
    },
    methods: {
        login () {
            this.$validator.validateAll().then((valid) => {
                if (valid) {
                    let params = {
                        username: this.username,
                        password: this.password
                    }
                    this.disabled = true
                    this.$apis.login(params).then(res => {
                        this.disabled = false
                        if (res.code === 2000) {
                            this.$router.replace('/welcome')
                            this.$store.dispatch(`${commonModule.name}/${COMMON_USERINFO}`, res.data)
                            this.$message({
                                message: res.message,
                                type: 'success'
                            })
                        } else {
                            this.showError = true
                            this.errorMsg = res.message
                        }
                    }).catch(error => {
                        this.disabled = false
                        console.error(error.message)
                    })
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import './login.less';
</style>
<style lang="less">
.lgForm {
    .el-input__inner {
        background: none;
        &:focus {
            color: #409EFF;
        }
    }
}
</style>
