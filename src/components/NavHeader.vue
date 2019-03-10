<template>
    <div class="nav-header">
        <div class="row-header">
            <div class="logo">
                <router-link to="/" class=" middle-content title">
                    <!-- <img src="@/assets/images/logo.png" alt="Logo"> -->
                    <span>
                        AFFILIATE<br> MARKETING
                    </span>
                </router-link>
            </div>
            
            <div class="link">
                <div class="account">
                    <div v-if="!signIn">
                        <router-link to="/dang-nhap">
                            <el-button type="primary">Đăng nhập</el-button>
                        </router-link>
                        <router-link to="/dang-ky">
                            <el-button>Đăng ký</el-button>
                        </router-link>
                    </div>
                    <div v-else>
                        <router-link to="quan-ly" v-if="isAdmin && isAdmin==true">
                            <button class="btn-aff el-button">Quản lý học viên</button>
                        </router-link>
                        
                        <button @click="signOut" class="btn-aff signOut">Đăng xuất</button>
                    </div>
                    
                    
                </div>
                <div class="link-nav">
                    <router-link to="/">
                        Trang chủ
                    </router-link>
                    <router-link to="/hoc-kiem-tien-online">
                        Thông tin khoá học
                    </router-link>
                    <router-link to="/huong-dan">
                        Hướng Dẫn
                    </router-link>
                    <!-- <router-link to="/chien-dich-moi" class="link-disable">
                        Chiến Dịch Mới 
                    </router-link> -->
                    <router-link to="/tintuc" class="link-disable">
                       Tin Tức 
                    </router-link>
                    <!-- <router-link to="/Affiliate" class="link-disable">
                        Affiliate VIP 
                    </router-link> -->
                    <router-link to="/bai-hoc" v-if="isStudent">
                        Bài học 
                    </router-link>
                    <router-link to="/tai-khoan" v-if="signIn">
                        Trang cá nhân
                    </router-link>
                </div>
            </div>
            <div class="user"></div>
        </div>
        
    </div>
</template>
<script>
import { mapState } from 'vuex'
import firebase from 'firebase'
import store from '@/store/store'

export default {
    // data() {
    //     return {
    //         admin: false
    //     }
    // },
    computed: {
        ...mapState({
            signIn: state => state.signIn,
            isAdmin: state => state.isAdmin,
            isStudent: state => state.isStudent
        })
    },

    methods: {
        signOut() {
            var _this = this
            firebase.auth().signOut()
            .then(function() {
                _this.$router.replace('/home')
                store.commit('setSignIn', false)
                store.commit('setStudent', false)
            }).catch(function(error) {
                _this.$router.replace('/')
            });
        }
    },

    mounted() {
        
    }
}
</script>


<style lang="scss">
// Header
.nav-header {
    background-color: #4267b2;
    border-bottom: 1px solid #29487d;
    color: #fff;
    float: left;
    // z-index: 1000;
    width: 100%;
    // position: fixed;
    // top: 0;
    
   
    
    .row-header {
        width: 80%;
        margin: auto;
        padding: 15px;

        .logo {
            display: inline-block;
            
            img {
                width: 60px;
            }
            
            .title {
                margin-left: 10px;
                font-size: 26px;
                color: #fff;
                text-decoration: unset;
                text-align: center;
            }
        }

        .link {
            float: right;
            margin-top: 7px;
            
            .account {
                width: 100%;
                text-align: right;

                button {
                    font-size: 16px;
                    padding: 8px 18px;

                    &.el-button--primary {
                        background: #4267b2;
                        margin-right: 15px;
                    }

                    &.signOut {
                        color: #fff;
                        background: #3e68bd
                    }

                    &.el-button {
                        margin-right: 15px;
                    }
                }
            }

            .link-nav {
                margin-top: 15px;
                text-align: right;

                a {
                    padding: 5px 12px;
                    margin-left: 20px;
                    color: #fff;
                    font-size: 16px;
                    border-radius: 2px;

                    &:hover {
                        background: #2d85e0;
                        text-decoration: underline;
                    }
                }

                .router-link-exact-active {
                    &.router-link-active {
                        background: #2d85e0;
                    }
                }
            }
        }
    }
    
}
</style>
