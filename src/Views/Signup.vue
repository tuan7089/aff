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
                    console.log(data)
                    console.log(data.user)
                    firebase.database().ref('users/' + data.user.uid).set({
                        email: data.user.email,
                        date: data.user.metadata.creationTime
                    });

                    _this.$message({
                        message: 'Chúc mừng, bạn đã đăng ký thành công',
                        type: 'success'
                    });

                    _this.$router.replace('thanh-toan')
                })
                .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode == 'auth/weak-password') {
                        this.$message({
                            message: 'Mật khẩu quá yếu!',
                            type: 'warning'
                        });
                    } else {
                        this.$message.error('Email này đã tồn tại!.');
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
        margin-bottom: calc(100vh - 646px);

        .logo {
            font-size: 40px;
        }
    }
</style>
