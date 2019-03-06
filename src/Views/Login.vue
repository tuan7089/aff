<template>
    <div class="login">
        <span class="logo">
            Affiliate Marketing
        </span>
        <h2>Đăng nhập với email</h2>

        <div class="form">
            <input type="text"  placeholder="email@gmail.com" v-model="email">
            <input type="password"  placeholder="Mật khẩu" v-model="password">
            <button @click="login" class="btn-aff success">Đăng nhập</button>
            <p>
                Bạn không có tài khoản, bạn có muốn tạo tài khoản?
                <router-link to="dang-ky">Đăng ký</router-link>
            </p>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase'

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        login() {
            console.log('âssa')
            var _this = this
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(function(data) {
                _this.$router.replace('bai-hoc')
            })
            .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            });
        }
    }
}
</script>

<style lang="scss">
    .login {
        text-align: center;

        .logo {
            font-size: 40px;
        }
    }
</style>
