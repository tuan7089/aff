<template>
    <div class="manager" v-if="isAdmin" :status="setDataUsers">
        <h1>Quản Lý Học Viên</h1>
        Số người mua:  {{countStudent}} / {{sumST}} (Người mua khoá học / người đăng ký)
        <table class="my-table">
            <tr>
                <th>Đăng ký</th>
                <th>Email</th>
                <th>Trạng thái</th>
                <th>Xử lý</th>
                <!-- <th>Mã giới thiệu</th> -->
                <th>Giới thiệu</th>
                <th>HH Chờ duyệt</th>
                <th>Chi tiết</th>
            </tr>
            <tr v-for="(user, idx) in dataUsers" :key="idx">
                <td>
                    {{user.date}}
                </td>
                <td>
                    {{user.email}}
                </td>
                <td>
                    <el-tag type="success" v-if="user.status == 1">Học viên</el-tag>
                </td>
                <td>
                    <el-button type="text" v-if="user.status != 1" @click="enableStudent(idx, 1)" class="link">Kích hoạt<table></table></el-button>
                    <el-button type="text" @click="disableStudent(idx)" class="color-delete link">Xoá</el-button>
                </td>
                <td>{{ user.share ? user.share : 0 }}</td>
                <td>{{ user.rose ? user.rose : 0 }}</td>
                <td><el-button type="text" @click="dialogTableVisible = true">Chi tiết</el-button></td>
            </tr>
        </table>
        
        <!-- Dialog ngoài lề -->
        <!-- Xác nhận người giới thiệu -->
        <el-dialog
            title="Xác nhận thưởng hoa hồng"
            :visible.sync="dialogCode"
            >
            <p>Được chia sẻ bởi: {{shareEmail}}</p>
            <!-- v-model="form.name" -->
            Số hoa hồng thưởng cho khách: {{moneyRose}}
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogCode = false">Huỷ bỏ</el-button>
                <el-button type="primary" @click="addRose(0)" plain>Không thưởng</el-button>
                <el-button type="primary" @click="addRose(1)">Thưởng hoa hồng</el-button>
            </span>
        </el-dialog>

        <el-dialog title="Quản lý hoa hồng" :visible.sync="dialogTableVisible">
            <span>Tổng hoa hồng đã nhận: 100000đ</span><br>
            <span>Hoa hồng chưa trả: 1000000đ</span><br>
            <el-button>Xác nhận đã trả toàn bộ</el-button><br>
            <el-table :data="gridData">
                <el-table-column property="date" label="Giới thiệu cho"></el-table-column>
                <el-table-column property="name" label="Trang thái người được giới thiệu"></el-table-column>
                <el-table-column property="address" label="Hoa hồng"></el-table-column>
                <el-table-column property="address" label="Đã trả"></el-table-column>
                <el-table-column
                width="150"
                    label="Xác nhận trả">
                    <template>
                        <el-button>Xác nhận đã trả</el-button>
                        <br>
                        <el-button>Khôi phục về chưa trả</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>
<script>
// import * as admin from "firebase-admin";
// import * as admin from "firebase-admin";
import { mapState } from 'vuex'
import firebase from 'firebase'
import store from '@/store/store'

export default {
    data() {
      return {
        //   Tổng Doanh Số khoá học
        sumST: 0,
        dialogCode: false,

        // Thông tin học viên đang xử lý
        idxUser: '',
        emailUser: '',
        code: '',
        shareEmail: '',
        shareUID: '',

        gridData: [{
          date: 'amail@gmail.com',
          name: 'Học viên',
          address: 200000,
          status: 'Đã trả'
        }, {
         date: 'amail@gmail.com',
          name: ''
        }, {
          date: 'amail@gmail.com',
          name: '',
          address: ''
        }, {
          date: 'amail@gmail.com',
          name: 'Học viên',
          address: 200000,
          status: 'Chưa trả'
        }],
        dialogTableVisible: false,
      }
    },
    
    computed: mapState( {
        isAdmin: state => state.isAdmin,
        dataUsers: state => state.dataUsers,
        moneyRose: state => state.moneyRose,

        setDataUsers () {
            if(this.isAdmin) {
                var ref = firebase.database().ref("users");

                ref.once("value")
                .then(function(snapshot) {
                    var key     = snapshot.key // "ada"
                    var users  = snapshot.val()

                    // Lấy ra thông tin toàn bộ học viên cho quan trị viên
                    store.commit('setDataUsers', users)
                });
            }
        },

        countStudent() {
            var a = 0
            this.sumST = 0
            if(this.dataUsers) {
                for (var property in this.dataUsers) {
                    this.sumST ++
                    if(this.dataUsers[property].status && this.dataUsers[property].status == 1) {
                        a ++
                    }
                }
            }
           

            return a
        }

        
    }),

    methods: {
        enableStudent(idx, status) {
            var _this = this
            this.idxUser = idx
            console.log(this.idxUser)
            // Lấy thông tin người kích hoạt
            var ref = firebase.database().ref("users/" + idx + '/shareCode');
            ref.once("value")
            .then(function(snapshot) {
                console.log(snapshot.key)
                console.log(snapshot.val())
                
                if( snapshot.val() != null && snapshot.val() != undefined && snapshot.val() != '') {
                    _this.dialogCode = true
                    _this.shareEmail = snapshot.val().email
                    _this.shareUID = snapshot.val().UID
                }
            })
        },

        // Kích hoạt là học viên
        proccessEnable() {
            console.log(this.idxUser)
            var _this = this

            firebase.database().ref('users/' + this.idxUser + '/status').set(
                1
                , function(error) {
                if (error) {
                // The write failed...
                _this.$message.error('Bạn không thể kích hoạt.');
                _this.dialogCode = false
                } else {
                    _this.$message({
                        message: 'Kích hoạt thành công.',
                        type: 'success',
                        duration: 3000
                    });
                }
            });
        },

        // Xác nhận thưởng hoa hồng
        // {type: 0: Đã được thưởng, 1 Bắt đầu thưởng}
        addRose(type) {
            console.log(type)
            var _this = this
            if(type == 0) {
                // Cộng vào số hoa hồng đã nhận
            }

            if(type == 1) {
                // Cộng số hoa CHƯA NHẬN
                var ref = firebase.database().ref("users/" + _this.shareUID + '/rose')
                ref.once("value")
                .then(function(snapshot) {
                    var money
                    if( snapshot.val() != null && snapshot.val() != undefined && snapshot.val() != '') {
                        var moneyOld = parseInt(snapshot.val())
                        money = moneyOld + _this.moneyRose
                    } else {
                        money = _this.moneyRose
                    }

                    // Cộng vào số hoa hồng chưa được nhận
                     firebase.database().ref('users/' + _this.shareUID + '/rose').set(
                        money
                        , function(error) {
                        if (error) {
                        // The write failed...
                        _this.$message.error('Lỗi , xin báo quản trị web.');
                        _this.dialogCode = false
                        } else {
                            _this.$message({
                                message: 'Thêm hoa hồng thành công.',
                                type: 'success',
                                duration: 1000
                            });
                        }
                    });

                    // Thêm danh sách nhận hoa hồng
                    firebase.database().ref('share/' + _this.shareUID + '/' + _this.idxUser).set(
                        {date: 'Hôm nay', email: 'email'});
                })
            }

            // Kick hoạt học viên
            this.proccessEnable()
        },

        disableStudent(idx) {
            let userRef = firebase.database().ref('users/' + idx);
            userRef.remove()
        },

        openDialogCode(idx) {
            this.dialogCode = true
            this.idxUser = idx
        },

        // Cần làm thêm đoạn này để xử lý rất nhiều
        addCode() {
            var _this = this

            firebase.database().ref('users/' + this.idxUser + '/code').set(
                _this.code
                , function(error) {
                if (error) {
                // The write failed...
                _this.$message.error('Bạn không thể thêm mã giới thiệu.');
                _this.dialogCode = false
                } else {
                    _this.$message({
                        message: 'Thêm mã giới thiệu thành công.',
                        type: 'success'
                    });
                    _this.dialogCode = false
                }
            });
        }
    },

    mounted() {
    }
}
</script>

<style lang="scss">
.link:hover {
    text-decoration: underline;
}
    .manager {
        width: 100%;
        max-width: 1140px;
        margin: 0 auto;

        .my-table {
            border-collapse: collapse;  
            margin-bottom: 200px;

            td, th {
                border: 1px solid #d9d9d9;
                padding: 7px 15px;
            }
            span{
                font-size: 16px;
            }
        }

        .color-delete {
            color: #ff4c4c;
            margin-left: 0;
        }
    }
    
</style>
