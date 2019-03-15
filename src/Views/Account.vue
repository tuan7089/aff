<template>
    <div class="account-detail">
         <!-- <table>
            <tr>
                <th>Email</th>
                <th>Trang thái</th>
                <el-tooltip class="item" effect="dark" content="Bạn sẽ nhận phần trăm hoa hồng khi chia sẻ mã giới thiệu cho các học viên đăng ký sau" placement="top">
                     <th>Mã giới thiệu (Nhấn để sao chép)</th>
                </el-tooltip>
               
            </tr>

            <tr>
                <td>{{dataUser.account.email}}</td>
                <td>{{dataUser.account.status == 1 ? 'Bạn đã là học viên' : ''}}</td>
                <el-tooltip class="item" effect="dark" content="Nhấp để sao chép mã giới thiệu" placement="top">
                     <td id="text-copy" @click="copyReference">https://kiemtienonlineaffiliate.com/#/ma-gioi-thieu/{{dataUser.code}}</td>
                </el-tooltip>
                
            </tr>
        </table> -->

        <h2 class="title">Thông tin học viên</h2>
        <div class="info">
            <div class="item-info">
                <label for=""><strong>Email:</strong></label><br>
                <el-button class="btn-aff">{{dataUser.account.email}}</el-button>
            </div>
            
            <div class="item-info">
                <label for=""><strong>Mã giới thiệu:</strong> (Nhấn để sao chép)</label><br>
                 <button  class="btn-aff" @click="copyReference" id="text-copy">https://kiemtienonlineaffiliate.com/#/ma-gioi-thieu/{{dataUser.code}}</button>
                <!-- <el-button  @click="copyReference"><span id="text1-copy">https://kiemtienonlineaffiliate.com/#/ma-gioi-thieu/{{dataUser.code}}</span></el-button> -->
            </div>
            
        </div>

        <h2 class="title">Hoạt động giới thiệu</h2>
        <div v-if="dataUser.share && dataUser.share.length > 0">
            <span>Hoa hồng chờ duyệt: </span> 
            <span>2000000</span><br>
            <span>Hoa hồng đã nhận:</span>
            <span>1000000</span>
            <table>
                <tr>
                    <th>Thời gian</th>
                    <th>
                        Tài khoản được giới thiệu
                    </th>
                    <th>Hoa hồng</th>
                </tr>
                {{dataUser}}
                <tr v-for="(data, idx) in dataUser.share" :key="idx">
                    <td>{{data.date}}</td>
                    <td>{{data.email}}</td>
                    <td>{{moneyRose}}</td>
                </tr>
            </table>
        </div>

        <div v-else class="no-rose">
            Bạn chưa có hoa hồng hãy chia sẻ mã giới thiều
        </div>

    </div>
</template>
<script>
import { mapState } from 'vuex'
import firebase from 'firebase'
import store from '@/store/store'

export default {
    computed: mapState({
        dataUser: state => state.dataUser,
        moneyRose: state => state.moneyRose
    }),

    methods: {
        copyReference() {
            var target = document.getElementById("text-copy");
            var range, select;
            if (document.createRange) {
                range = document.createRange();
                range.selectNode(target);
                select = window.getSelection();
                select.removeAllRanges();
                select.addRange(range);
                document.execCommand("copy");
                select.removeAllRanges();
            } else {
                range = document.body.createTextRange();
                range.moveToElementText(target);
                range.select();
                document.execCommand("copy");
            }

            this.$message({
                message: 'Sao chép thành công.',
                type: 'success'
            });
        },
    }
}
</script>
<style lang="scss">
    .account-detail {
        width: 100%;
        max-width: 1140px;
        margin:  auto;
        margin-bottom: 700px;

        .title {
            margin-bottom: 0;
            margin-top: 30px;
        }

        table {
            border-collapse: collapse;
            td, th {
                border: 1px solid #d9d9d9;
                padding: 7px 12px;
            }
            margin-bottom: 70vh;
        }

        label {
            display: inline-block;
            margin: 20px 0 10px;
        }

        button {
            width: 400px;
            text-align: left;
            background: #fff;
            overflow: hidden;
            white-space: nowrap;
            
            span {
                max-width: 100%;
                display: inline-block;
                overflow: hidden;
            }
        }
    }
</style>
