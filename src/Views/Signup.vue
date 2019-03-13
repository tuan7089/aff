<template>
    <div class="sign-up">
        <span class="logo">
            Affiliate Marketing
        </span>
        <h2>Đăng ký với email</h2>

        <div class="form">
            <input type="text" placeholder="email@gmail.com" v-model="email">
            <input type="password"  placeholder="Mật khẩu" v-model="password">
            <input type="password"  placeholder="Nhập lại mật khẩu" v-model="retypePassword">
            <button @click="siginUp" class="btn-aff success">Đăng ký</button>
            
            <div>
                <span>Bạn có tài khoản</span>
                <router-link to="/dang-nhap">Đăng nhập</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase'
import store from '@/store/store'

export default {
    data() {
        return {
            email: '',
            password: '',
            retypePassword: ''
        }
    },

    methods: {
        siginUp() {
            if(this.retypePassword == this.password) {
                var _this = this
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(function(data) {
                    var code = store.state.codeXXX
                    // 
                    var dataSend = {
                        email: data.user.email,
                        date: data.user.metadata.creationTime,
                    }
                    if(code != '' && code != null && code != undefined) {
                        dataSend = Object.assign({}, dataSend, {code: code})
                    }

                    firebase.database().ref('users/' + data.user.uid).set(dataSend);

                    _this.$message({
                        message: 'Chúc mừng, bạn đã đăng ký thành công',
                        type: 'success'
                    });

                    _this.$router.replace('thanh-toan')
                })
                .catch(function(error) {
                    console.log(error)
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode == 'auth/weak-password') {
                        _this.$message({
                            message: 'Mật khẩu quá yếu!',
                            type: 'warning'
                        });
                    } else {
                        _this.$message.error('Email này đã tồn tại!.');
                    }
                });
            } else {
                this.$message({
                    message: 'Nhập lại mật khẩu không đúng!',
                    type: 'warning'
                });
            }
        }
    }
}
</script>

<style lang="scss">
    .sign-up {
        text-align: center;
        margin-bottom: 500px;

        .logo {
            font-size: 40px;
        }
    }
</style>
