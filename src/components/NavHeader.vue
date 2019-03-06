<template>
    <div class="nav-header">
        <div class="row-header">
            <div class="logo">
                <router-link to="/" class=" middle-content title">
                    <!-- <img src="@/assets/images/logo.png" alt="Logo"> -->
                    <span>
                        AFFILITE<br> MARKETING
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
                    <button v-else @click="signOut" class="btn-aff">Đăng xuất</button>
                </div>
                <div class="link-nav">
                     <router-link to="/">
                        Trang chủ
                    </router-link>
                    <router-link to="/lien-he">
                        Liên hệ
                    </router-link>
                    <router-link to="/bai-hoc">
                        Học
                    </router-link>
                </div>
            </div>
            <div class="user"></div>
        </div>
        
    </div>
</template>
<script>
import firebase from 'firebase'

export default {
    data() {
        return {
            // signIn: false
        }
    },

    computed: {
        signIn() {
            firebase.auth().onAuthStateChanged(function(user) {
            console.log(user)
                if (user) {
                    return true
                    // var defaultAuth = firebase.auth();
                    // var uid = user.uid
                    // console.log(uid)
                    // var _this = this
                    // var ref = firebase.database().ref("users/" + uid + '/status');
                    // ref.once("value")
                    // .then(function(snapshot) {
                    //     var key     = snapshot.key // "ada"
                    //     var status  = snapshot.val()
                
                    //     console.log(status)
                    // });
                } else {
                    return false
                }
                });
            return false
        }
    },

    mounted() {
        
    },

    methods: {
        signOut() {
            console.log('ra')
            var _this = this
            firebase.auth().signOut().then(function() {
                _this.$router.replace('/')
                }).catch(function(error) {
            });
        }
    }
}
</script>


<style lang="scss">
// Header
.nav-header {
    background-color: #4267b2;
    border-bottom: 1px solid #29487d;
    color: #fff;
    z-index: 1000;
    width: 100%;
    position: fixed;
    top: 0;
    
   

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
                }
            }

            .link-nav {
                margin-top: 15px;
                a {
                    padding: 5px 12px;
                    margin-right: 20px;
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
