<template>
    <div class="manager" v-if="isAdmin" :status="setDataUsers">
        <h1>Quản Lý Học Viên</h1>
        <table class="my-table">
            <tr>
                <th>Thời gian đăng ký</th>
                <th>Email</th>
                <th>Trạng thái học viên</th>
                <th>Thêm học viên</th>
                <!-- <th>Mã giới thiệu</th> -->
                <th>Hoa hồng đã nhận</th>
                <th>Hoa hồng Chờ duyệt</th>
                <th>Chi tiết hoa hồng</th>
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
                    <!-- {{user.status == 1 ? 'Đã là học viên' : 'Chưa là học viên'}} -->
                    
                    <el-button type="text" v-if="user.status != 1" @click="enableStudent(idx, 1)">Kích hoạt là học viên</el-button>
                    <el-button type="text" @click="disableStudent(idx)">Xoá học viên</el-button>
                </td>
                <!-- <td width="40">
                    {{user.code}}
                </td> -->
                <td>10000</td>
                <td>100993</td>
                <td><el-button type="text" @click="dialogTableVisible = true">Chi tiết</el-button></td>
            </tr>
        </table>

        <el-dialog
            title="Nhập mã giới thiệu"
            :visible.sync="dialogCode"
            >
            <!-- v-model="form.name" -->
            <el-input  autofocus v-model="code"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogCode = false">Huỷ bỏ</el-button>
                <el-button type="primary" @click="addCode">Xác nhận</el-button>
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
import { mapState } from 'vuex'
import firebase from 'firebase'
import store from '@/store/store'

export default {
    data() {
      return {
        dialogCode: false,
        idxUser: '',
        code: '',
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
        }
    }),

    methods: {
        enableStudent(idx, status) {
            var _this = this
            this.idxUser = idx
            console.log(this.idxUser)
            firebase.database().ref('users/' + this.idxUser + '/status').set(
                status
                , function(error) {
                if (error) {
                // The write failed...
                _this.$message.error('Bạn không thể kích hoạt.');
                _this.dialogCode = false
                } else {
                    _this.$message({
                        message: 'Kích hoạt thành công.',
                        type: 'success'
                    });
                }
            });
        },

        disableStudent(idx) {
            admin.auth().deleteUser(idx)
            .then(function() {
                _this.$message({
                    message: 'Successfully deleted user.',
                    type: 'success'
                });
            })
            .catch(function(error) {
                _this.$message.error('Error deleting user:');
            });
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
    }
    
</style>
