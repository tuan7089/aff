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
import { mapMutations } from 'vuex'
import store from '@/store/store'
import firebase from 'firebase'

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },

    methods: {
        // Login: {setSingIn, setStudent, setAdmin, setDataUser }
        login() {
            var _this = this
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(function(data) {
                store.commit('setSignIn', true)
                _this.checkStudent()
            })
            .catch(function(error) {
                _this.$message({
                    message: 'Email hoặc mật khẩu không chính xác.',
                    type: 'warning'
                });
            });
        },

        checkStudent() {
            var _this = this
            var defaultAuth = firebase.auth();
            var user = defaultAuth.currentUser
            var uid = user.uid
            
            // Lấy thông tin cá nhân người dùng
            var ref = firebase.database().ref("users/" + uid);
                ref.once("value").then(function(snapshot) {
                var key     = snapshot.key // Referral code
                var detail  = snapshot.val()

                store.commit('setDataUser', {account: detail, code: key})
            })

            var ref = firebase.database().ref("users/" + uid + '/status');
            ref.once("value")
            .then(function(snapshot) {
                var key     = snapshot.key // "ada"
                var status  = snapshot.val()

                if(status == 1) {
                    store.commit('setStudent', true)
                    _this.$router.replace('/bai-hoc')
                }else {
                    _this.$router.replace('/thanh-toan')

                    _this.$message({
                        message: 'Bạn chưa mua khoá học, hãy mua khoá học để bắt đầu học ngay nào.',
                        type: 'warning'
                    });
                }
            });
        }
    }
}
</script>

<style lang="scss">
    .login {
        text-align: center;
        margin-bottom: 500px;

        .logo {
            font-size: 40px;
        }
    }
</style>
