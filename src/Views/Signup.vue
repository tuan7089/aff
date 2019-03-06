<template>
    <div class="login">
        <span class="logo">
            Affiliate Marketing
        </span>
        <h2>Đăng ký với email</h2>

        <div class="form">
            <input type="text" placeholder="email@gmail.com" v-model="email">
            <input type="password"  placeholder="Mật khẩu" v-model="password">
            <button @click="siginUp">Đăng ký</button>
            
            <div>
                <span>Bạn có tài khoản</span>
                <router-link to="/dang-nhap">Đăng nhập</router-link>
            </div>
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
        siginUp() {
            console.log(this.email)
            console.log(this.password)
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(function(data) {
                console.log('Success')
                console.log(data)
            })
            .catch(function(error) {
                console.log('Error')
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
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
