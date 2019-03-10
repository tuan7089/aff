<template>
    <div class="account">
         <table>
            <tr>
                <th>Email</th>
                <th>Trang thái</th>
                <el-tooltip class="item" effect="dark" content="Bạn sẽ nhận phần trăm hoa hồng khi chia sẻ mã giới thiệu cho các học viên đăng ký sau" placement="top">
                     <th>Mã giới thiệu</th>
                </el-tooltip>
               
            </tr>

            <tr>
                <td>{{dataUser.account.email}}</td>
                <td>{{dataUser.account.status == 1 ? 'Bạn đã là học viên' : ''}}</td>
                <td>{{dataUser.code}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import firebase from 'firebase'
import store from '@/store/store'

export default {
    computed: mapState({
        dataUser: state => state.dataUser
    })
}
</script>
<style lang="scss">
    .account {
        width: 100%;
        max-width: 1140px;
        margin:  auto;

        table {
            border-collapse: collapse;
            td, th {
                border: 1px solid #d9d9d9;
                padding: 7px 12px;
            }
            margin-bottom: 70vh;
        }
    }
</style>
