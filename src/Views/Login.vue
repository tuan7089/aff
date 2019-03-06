<template>
    <div class="login">
        <span class="logo">
            Affiliate Marketing
        </span>
        <h2>Đăng nhập với email</h2>

        <div class="form">
            <input type="text"  placeholder="email@gmail.com" v-model="email">
            <input type="password"  placeholder="Mật khẩu" v-model="password">
            <button @click="login">Đăng nhập</button>
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
            this.$router.replace('bai-hoc')
            // var _this = this
            // console.log(this.email +     this.password)
            // firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            // .then(function(data) {
            //     console.log(data)
            //     this.$router.replace('bai-hoc')
            // })
            // .catch(function(error) {
            // // Handle Errors here.
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // if (errorCode === 'auth/wrong-password') {
            //     alert('Wrong password.');
            // } else {
            //     alert(errorMessage);
            // }
            // console.log(error);
            // });
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

        .form {
            margin: 0 auto;
            width: 300px;

            input {
                width: 100%;
                height: 40px;
                border-radius: 3px;
                margin-top: 20px;
                border: 1px solid #d9d9d9;
                padding: 0 15px;
                box-sizing: border-box;
            }

            button {
                margin: 30px 0;
                padding: 5px 10px;
                font-size: 20px;
                border: 1px solid #d9d9d9;
            }
        }
    }
</style>
