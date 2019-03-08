<template>
    <div class="home">
        <!-- <div>
            <img src="@/assets/images/home.jpg" alt="Home">
        </div> -->
        <div class="introduce">
            <h1>Xin chào bạn,cảm ơn bạn đã ghé thăm trang web kiếm tiền <br>Online Affiliate Marketing !</h1>
            <center><img src="@/assets/images/home.jpg" alt="Home" style="width:100%;"></center>
            <div class="item">
                <div class="title">
                    <img src="@/assets/icons/introduce-02.jpg" alt="Introduce">
                    <span class="title">Giới thiệu</span>
                </div>

                <div class="content">
                    <p>Hôm nay mình sẽ giới thiệu đến bạn một hình thức kiếm tiền online khá đơn giản và hiệu quả. 
Đó chính là kiếm tiền từ Review sản phẩm. </p><p>Với công việc này, kiếm tiền online và tăng thu nhập mỗi ngày là vô cùng dễ dàng với bạn. </p>

                </div>
            </div>

            <div class="item">
                <div class="title">
                    <img src="@/assets/icons/introduce-01.jpg" alt="Introduce">
                    <span class="title">Khoá Học Online Dành Cho</span>
                </div>
                <div class="content">
                     Công việc này rất phù hợp với những người có nhiều thời gian rảnh như: học sinh, sinh viên, mẹ bỉm sữa, dân văn phòng. 
                </div>
            </div>

            <div class="item last">
                <div class="title">
                    <img src="@/assets/icons/introduce-03.jpg" alt="Introduce">
                    <span class="title">Yêu Cầu</span>
                </div>

                <div class="content">
                    Chỉ cần có  thẻ ATM, máy tính, điện thoại có kết nối 3g, wifi là bạn có thể tham gia kiếm tiền linh hoạt mọi lúc, mọi nơi …Với hình thức này bạn có thể kiếm được số tiền 200.000đ-500.000đ  từ 1- 2 tiếng/ngày là hoàn toàn khả thi nhé. 
                </div>
            </div>
        </div>

        <div class="special">
            <span class="title">
                ĐẶC BIỆT
            </span>
            <div class="content">
                <p>BẠN SẼ ĐƯỢC HƯỚNG DẪN LÀM AFFILITE MARKETING cùng với chính công việc này, mà không phải mất thêm bất kỳ chi phí phát sinh nào khác. Đảm bảo thu nhập <strong>5.000.000đ – 30.000.000đ / tháng</strong>, sẽ nhiều hơn nếu bạn chăm chỉ và làm đúng hướng dẫn.</p>
                <p>Chúng tôi cam kết sẽ luôn  đồng hành cùng bạn, giúp bạn chinh phục mục tiêu tự do tài chính. </p>
                <span>Thay đổi suy nghĩ, phát triển tư duy!</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.home {
    width: 80%;
    max-width: 1140px;
    margin: 0 auto;

    .introduce {
        h1 {
            text-align: center;
            margin: 10px 0 50px 0;
        }
        margin-top: 20px;
        display: inline-block;
        width: 100%;

        .item {
            float: left;    
            width: 345px;
            margin-right: 48px;

            &.last {
                margin-right: 0;
            }

            .title {
                img {
                    vertical-align: middle;
                    margin-right: 7px;
                }
            }

            .content {
                margin-top: 15px;
                line-height: 1.7;
            }
        }
    }

    .special {
        width: 950px;
        margin: 50px auto;
        border: 1px solid #d9d9d9;
        padding: 20px;
        position: relative;
        border-radius: 3px;
        text-align: center;
        
        .title {
            background: #fff;
            position: absolute;
            top: -15px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 2;
            padding: 0 20px;
        }
    }

    .course {
        .content {
            img {
                width: 400px;
                float: left;
            }

            .detail {
                float: left;
                width: 740px;
                padding: 0 20px;
                box-sizing: border-box;

                p {
                    margin: 0;
                }

                .btn-buying {
                    background: #42525f;
                    color: #fff;
                    border: 1px solid #d9d9d9;
                    padding: 15px 20px;
                    width: 100%;
                    margin-top: 30px;
                }
            }
        }
    }
}
</style>
