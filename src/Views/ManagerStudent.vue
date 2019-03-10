<template>
    <div class="manager" v-if="isAdmin" :status="setDataUsers">
        <h1>Quản Lý Học Viên</h1>
        <table>
            <tr>
                <th>Thời gian đăng ký</th>
                <th>Email</th>
                <th>Trạng thái học viên</th>
                <th>Thêm học viên</th>
                <th>Mã giới thiệu</th>
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
                    
                    <el-button type="text" v-if="user.status != 1" @click="enableStudent(idx)">Kích hoạt là học viên</el-button>
                    <el-button type="text" v-else @click="disableStudent(idx)">Huỷ học viên</el-button>
                </td>
                <td>
                    <el-button type="text" @click="openDialogCode(idx)">Thêm mã giới thiệu</el-button>
                </td>
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
    </div>
</template>
<script>
import { mapState } from 'vuex'
import firebase from 'firebase'
import store from '@/store/store'

export default {
    data() {
      return {
        dialogCode: false,
        idxUser: '',
        code: ''
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
        enableStudent() {

        },

        disableStudent() {
            alert('Em chưa làm cái này')
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
                _this.$message.error('Bạn không thể tham mã giới thiệu.');
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

        table {
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
