<template>
    <div class="course" oncopy="return false" oncut="return false" onpaste="return false" v-if="isStudent">
        <div class="video">
            <h3 class="tile">Video</h3>

            <div class="list">
                <div class="video">
                    <iframe wdth="955" height="537" :src="linkYouTubbe" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div class="listVideo">
                    <div class="head">
                        <span class="title">Khoá học kiếm tiền</span>
                    </div>
                    <ul>
                        <li v-for="(video, idx) in videoAff" @click="selectVideo(idx)" :key="idx" :class="{active: video.link == linkYouTubbe}">
                            <strong>Bài {{idx+1}}: </strong>
                            {{video.nameCourse}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="doc">
            <p>Tài liệu tải về</p>
            <a href="">XXXXX</a>
        </div>
    </div>

    <!-- <div v-else class="not-course">
        Xin
    </div> -->
</template>
<script>
import firebase from 'firebase'

export default {
    data() {
        return {
            isStudent: false,
            videoAff: [
                {   
                    nameCourse: 'Giới thiệu về chương trình kiếm tiền từ Review sản phẩm',
                    link: 'https://www.youtube.com/embed/E1OqvhYipHQ'
                },
                {   
                    nameCourse: 'Hướng dẫn đăng kí tài khoản thực chiến kiếm tiền',
                    link: 'https://www.youtube.com/embed/V7-mUGp3KOI',
                },
                {   
                    nameCourse: 'Nguyên tắc trước khi Review',
                    link: 'https://www.youtube.com/embed/dIb-17SSrAw'
                },
                {
                    nameCourse: 'Hướng dẫn cách lựa chọn hình ảnh để Review',
                    link: 'https://www.youtube.com/embed/qu50zPt3gH0'
                },
                {
                    nameCourse: 'Cách chọn sản phẩm dễ Review kiếm tiền',
                    link: 'https://www.youtube.com/embed/1mn2VhZTb2k'
                },
                {
                    nameCourse: 'Tránh những sai lầm khi viết Review',
                    link: 'https://www.youtube.com/embed/BCwnuS6tRDM'
                },
                {
                    nameCourse: 'Cách khảo sát những bài đánh giá trước',
                    link: 'https://www.youtube.com/embed/K8Vt8tip9n0'
                },
                {
                    nameCourse: 'Tóm tắt lại toàn bộ các bước chính trước khi viết Review',
                    link: 'https://www.youtube.com/embed/6h79Vxf7uvw'
                },
                {
                    nameCourse: 'Những câu hỏi thường gặp khi viết Review dành cho người mới bắt đầu',
                    link: 'https://www.youtube.com/embed/6WhL4zBBWpk'
                },
                {
                    nameCourse: 'Những mẫu viết gợi ý cho bạn',
                    link: 'https://www.youtube.com/embed/TxK--f_mJgo'
                },
                {
                    nameCourse: 'Tổng hợp toàn bộ các bước viết Review hoàn chỉnh',
                    link: 'https://www.youtube.com/embed/kw_We5VEi80'
                },
                {
                    nameCourse: 'Hướng dẫn rút tiền về tài khoản ngân hàng',
                    link: 'https://www.youtube.com/embed/l7OQxDMMXf4'
                },
                {
                    nameCourse: 'Mua sản phẩm bằng tài khoản Bảo Kim',
                    link: 'https://www.youtube.com/embed/OX3NREH__8o'
                },
                {
                    nameCourse: 'Đổi tiền lấy thẻ cào điện thoại từ tài khoản Bảo Kim',
                    link: 'https://www.youtube.com/embed/PySw2GtcO5E'
                },
                {
                    nameCourse: 'Cách liên hệ khi cần hỗ trơ trực tiếp trên web',
                    link: 'https://www.youtube.com/embed/3FwbnCQaF04'
                },
                {
                    nameCourse: 'Lưu ý và Tổng kết',
                    link: 'https://www.youtube.com/embed/4ZVVAkL37vQ'
                },
                {
                    nameCourse: 'Kiếm ngay 5 triệu đến 30 triệu mỗi tháng cùng affiliate marketing',
                    link: 'https://www.youtube.com/embed/IFRPB17wKPk'
                }
                
            ],

            linkYouTubbe: 'https://www.youtube.com/embed/E1OqvhYipHQ'
        }
    },

    methods: {
        selectVideo(idx) {
            this.linkYouTubbe = this.videoAff[idx].link
        }
    },

    mounted() {
        var _this = this
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                var defaultAuth = firebase.auth();
                var uid = user.uid
                var ref = firebase.database().ref("users/" + uid + '/status');
                ref.once("value")
                .then(function(snapshot) {
                    var key     = snapshot.key // "ada"
                    var status  = snapshot.val()

                    console.log(status)
                    if(status == 1) {
                        _this.isStudent = true
                    }else {
                        _this.$router.replace('/')
                    }
                });
            } else {
                _this.$router.replace('/')
            }
        });
    }
}
</script>

<style lang="scss">
.course { 
    width: 100%;
    clear: both;
    max-width: 1140px;
    margin: auto;

    iframe {
        width: 100%;
        height: 550px;
    }
    .list {
        .listVideo {
            float: left;
            width: 300px;
            margin-left: 30px;
            background: #eeeeee;

            .head {
                float: left;

                .title {
                    font-size: 1.6rem;
                    display: inline-block;
                    padding: 20px;
                }
            }

            ul {
                list-style: none;
                padding-left: 0;
                background: #f5f5f5;
                margin: 0;
                width: 100%;
                float: left;

                li {
                    padding: 0px 20px;
                    margin-top: 10px;
                    font-size: 17px;

                    &:hover, &.active {
                        cursor: pointer;
                        text-decoration: underline;
                        color: #157de6;
                    }
                }
            }
        }

        .video {
            float: left;
            width: calc(100% - 330px);

            iframe {
                
            }
        }
    }

    .doc {
        display: inline-block;
        width: 100%;;
    }
}
</style>
