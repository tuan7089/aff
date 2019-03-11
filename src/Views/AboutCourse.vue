<template>
    <div class="about-course">
        <div class="left">
            <img src="@/assets/images/hoc-left.jpg" alt="Khoa-hoc">
            
            <div class="left-footer">
                <div>
                    <span class="title">Kiếm tiền từ Review sản phẩm</span>  
                    <span class="admin"> admin</span>
                </div>
                
                <div class="user">
                    <img src="@/assets/images/user_icon.png" alt="Khoa-hoc">
                    1241
                </div>
                <div class="review">
                    <img src="@/assets/images/star-on.png" alt="Review" v-for="n in 5" :key="n">
                </div>
                
            </div>
        </div>

        <div class="center">
            <h3>Thông Tin Khoá Học</h3>
            <div class="content">
                <strong>
                    Khoá học sẽ hướng dẫn bạn cách kiến tiền online nhờ đánh giá sản phẩm trên trang thương mại điện tử .
Chỉ cần đến sự chăm chỉ và chút sáng tạo của bạn, kiếm thêm 1-10triệu/tháng với 1-2h giờ rảnh mỗi ngày hoàn toàn đơn giản.
                </strong>

                <h4>A. Giới thiệu</h4>
                <p>
                    Review sản phẩm kiếm tiền, là một trong những cách MMO rất phổ biến ở nước ngoài. Nhưng hiện tại ở Việt Nam, hình thức này còn rất mới mẻ và chưa có nhiều người biết tới.
Vậy, tại sao lại có thể kiếm tiền từ hình thức này? và phương pháp review như thế nào mới hiệu quả… mời bạn hãy tiếp tục theo dõi bài viết.
                </p>
                <span>1. Vật giá là gì?</span>
                <p>
                    Vật giá là một trang website thương mại điện tử (TMĐT) đứng TOP ở Việt Nam giống như: Lazada, Shopee hay Tiki… tại đây, bạn có thể tìm được tất cả các sản phẩm thiết yếu trong cuộc sống với đầy đủ các ngành nghề khác nhau.
                </p>

                <span>
                    2. Vì sao có thể kiếm tiền được với hình thức review này?
                </span>
                <p>
                    <strong>Vật giá</strong> ra mắt chương trình review, với mục đích cung cấp cho khách hàng các thông tin <strong>feedback</strong>, của những người đã từng dùng qua các sản phẩm trên <strong>Vật giá</strong> đang cung cấp. Nhằm tạo niềm tin cho người dùng khi mua sắm online, từ đó thúc đẩy doanh số bán hàng của sàn TMĐT này.
                </p>
                <p>
                    Để khuyến khích người dùng để lại đánh giá dưới mỗi sản phẩm. <strong>Vatgia</strong> sẽ có những phần thưởng cho những đánh giá <strong>chất lượng</strong>, tối đa <strong>15.000 VNĐ</strong>.
                </p>

                <h4>B. Quyền lợi khi tham gia review</h4>
                <p>Vật giá sẽ có từng khung phần thưởng, dưới đây là chi tiết cơ chế thưởng cho các đánh giá chất lượng đối với mỗi sản phẩm. </p>
                <strong>Tiền mặt được thưởng vào tài khoản Bảo Kim để có thể mua sắm, tại bất cứ địa điểm nào hỗ trợ thanh toán qua Bảo Kim. Đặc biệt bạn có thể rút toàn bộ tiền thưởng về thẻ ATM cá nhân. </strong>

                <h4>C. Lưu ý đối với một bài đánh giá</h4>
                <p>
                    Sẽ có một số lưu ý bạn cần quan tâm, để có thể hiệu quả với hình thức kiếm tiền online này. Đó là đánh giá của bạn phải là <strong>đánh giá chất lượng</strong> thì <strong>mới được nhận tiền thưởng</strong>. 
                </p>
                <p>Dưới đây là các nguyên tắc bạn cần lắm rõ:</p>
                <span>1. Thành phần bài review</span>
                <p>
                    Bạn cần đáp ứng các tiêu chí dưới đây, để giúp bài review có đủ điều kiện là một đánh giá chất lượng:
                </p>
                <ul>
                    <li>
                        <strong>Hình ảnh:</strong> Trong bài review bạn phải đính kèm một ảnh gốc – ảnh chưa qua bất kỳ một phần mềm chỉnh sửa nào. Ngoài ra ảnh phải rõ nét và không quá nhỏ.
                    </li>
                    <li>
                        <strong>Độ dài:</strong> Bài review độ dài <strong>tối thiểu là 150 từ (không phải 150 ký tự bạn nhé)</strong>
                    </li>
                </ul>
                <span>2. Bài review không nhất thiết là bài đầu tiên</span>
                <p>Một sản phẩm có thể có rất nhiều đánh giá, trước thời điểm bạn chuẩn bị review nó. Nhưng điều này không quan trọng, chỉ cần bài review của bạn là một <strong>đánh giá chất lượng</strong> thì bạn sẽ nhận được tiền thưởng.</p>
                <p>Ví dụ: Sản phẩm Apple iPhone X 256GB đã có 3 đánh giá, nhưng chưa có <strong>đánh giá chất lượng</strong> nào, thì bạn vẫn được thưởng nếu đánh giá của bạn là <strong>đánh giá chất lượng</strong>.</p>
                <span>3. Không giới hạn số lượng</span>
                <p>
                    Bạn có thể đánh giá mọi sản phẩm trên trang vật giá . Đặc biệt <strong>không yêu cầu bạn phải mua nó trên Vatgia</strong>, theo thang điểm từ 1 – 5 sao (5 là tốt nhất) kèm theo những nhận xét cá nhân. 
                </p>
                <span>LƯU Ý:</span>
                <p>
                    <strong>
                        Công việc này là viết đánh giá sản phẩm cho các hãng. Bạn chỉ cần viết đúng quy tắc thì tiền sẽ về tài khoản. Sẽ có người kiểm duyệt đánh giá trên web từ bên công ty.
                    </strong>
                </p>
                <p>
                    <strong>
                        Để bài viết của bạn đạt chất  lượng được kiểm duyệt và kiếm được tiền thì bạn cần học qua 1 khoá học online gồm 17 video.
                    </strong>
                </p>
                <!-- <div class="bai-hoc">
                    <p><strong>Bài 1 :</strong> Giới thiệu về chương trình kiếm tiền từ Review sản phẩm</p>
                    <p><strong>Bài 2 :</strong> Hướng dẫn đăng kí tài khoản thực chiến kiếm tiền</p>
                    <p><strong>Bài 3 :</strong> Nguyên tắc trước khi Review</p>
                    <p><strong>Bài 4 :</strong> Hướng dẫn cách lựa chọn hình ảnh để Review</p>
                    <p><strong>Bài 5 :</strong> Cách chọn sản phẩm dễ Review kiếm tiền</p>
                    <p><strong>Bài 6 :</strong> Tránh những sai lầm khi viết Review</p>
                    <p><strong>Bài 7 :</strong> Cách khảo sát những bài đánh giá trước </p>
                    <p><strong>Bài 8 :</strong> Tóm tắt lại toàn bộ các bước chính trước khi viết Review</p>
                    <p><strong>Bài 9 :</strong> Những câu hỏi thường gặp khi viết Review dành cho người mới bắt đầu</p>
                    <p><strong>Bài 10 :</strong> Những mẫu viết gợi ý cho bạn</p>
                    <p><strong>Bài 11 :</strong> Tổng hợp toàn bộ các bước viết Review hoàn chỉnh</p>
                    <p><strong>Bài 12 :</strong> Hướng dẫn rút tiền về tài khoản ngân hàng</p>
                    <p><strong>Bài 13 :</strong> Mua sản phẩm bằng tài khoản Bảo Kim</p>
                    <p><strong>Bài 14 :</strong> Đổi tiền lấy thẻ cào điện thoại từ tài khoản Bảo Kim</p>
                    <p><strong>Bài 15 :</strong> Cách liên hệ khi cần hỗ trơ trực tiếp trên web</p>
                    <p><strong>Bài 16 :</strong> Lưu ý và Tổng kết</p>
                    <p><strong>Bài 17 :</strong> Kiếm ngay 5 triệu đến 30 triệu mỗi tháng cùng affiliate marketing</p>
                </div> -->
                <p>
                    <strong>
                        Bạn chỉ cần áp dụng theo đúng khóa học - thực hành luôn sau đó và  tiền về tài khoản trong 30p . Đồng thời bạn được sử dụng khóa học mãi mãi , quên ở đâu học lại ở đó . 
                    </strong>
                </p>
                <p>
                    <strong>
                        MUA 1 LẦN DUY NHẤT, KIẾM TIỀM MÃI MÃI CHỈ VỚI GIÁ ƯU ĐÃI 399.000đ và được tham gia  làm AFILIATE MARKETING sau khi bạn là học viên của khóa học từ trang web. Giúp bạn có thể kiếm thêm 5.000.000đ-  30.000.000đ mỗi tháng mà không cần mất thêm bất kỳ chi phí nào. 
                    </strong>
                </p>
                <p>
                    <strong>
                        Cam Kết sau một tháng bạn bỏ ra 399.000đ ,  với thời gian rảnh chỉ từ 1-2h / ngày và đã làm theo đúng hướng dẫn mà không kiếm được bất kỳ khoản thu nhập nào từ khóa học này. Bạn sẽ được hoàn lại 100% số tiền đã mua khóa học vào tài khoản ngân hàng .
                    </strong>
                </p>
                <p>
                    <strong>
                        Hiện có hàng trăm học viên đã, đang kiếm tiềm triệu mỗi tháng chỉ với 399.000đ. Bạn còn chần chừ gì nữa .Hãy nhanh tay đăng ký mua ngay khóa để bắt đầu kiếm tiền triệu thôi nào!!!!!!
                    </strong>
                </p>

                <center>
                    <router-link to="/huong-dan">
                        <button class="btn-aff btn-buy">
                            YES! TÔI MUỐN SỞ HỮU NGAY KHÓA HỌC NÀY
                        </button>
                    </router-link>
                    
                </center>
            </div>
        </div>

        <div class="right">
            <h3 class="title">Nội Dung Khoá Học</h3>
            <div class="content">
                <p><strong>Bài 1 :</strong> Giới thiệu về chương trình kiếm tiền từ Review sản phẩm</p>
                <p><strong>Bài 2 :</strong> Hướng dẫn đăng kí tài khoản thực chiến kiếm tiền</p>
                <p><strong>Bài 3 :</strong> Nguyên tắc trước khi Review</p>
                <p><strong>Bài 4 :</strong> Hướng dẫn cách lựa chọn hình ảnh để Review</p>
                <p><strong>Bài 5 :</strong> Cách chọn sản phẩm dễ Review kiếm tiền</p>
                <p><strong>Bài 6 :</strong> Tránh những sai lầm khi viết Review</p>
                <p><strong>Bài 7 :</strong> Cách khảo sát những bài đánh giá trước </p>
                <p><strong>Bài 8 :</strong> Tóm tắt lại toàn bộ các bước chính trước khi viết Review</p>
                <p><strong>Bài 9 :</strong> Những câu hỏi thường gặp khi viết Review dành cho người mới bắt đầu</p>
                <p><strong>Bài 10 :</strong> Những mẫu viết gợi ý cho bạn</p>
                <p><strong>Bài 11 :</strong> Tổng hợp toàn bộ các bước viết Review hoàn chỉnh</p>
                <p><strong>Bài 12 :</strong> Hướng dẫn rút tiền về tài khoản ngân hàng</p>
                <p><strong>Bài 13 :</strong> Mua sản phẩm bằng tài khoản Bảo Kim</p>
                <p><strong>Bài 14 :</strong> Đổi tiền lấy thẻ cào điện thoại từ tài khoản Bảo Kim</p>
                <p><strong>Bài 15 :</strong> Cách liên hệ khi cần hỗ trơ trực tiếp trên web</p>
                <p><strong>Bài 16 :</strong> Lưu ý và Tổng kết</p>
                <p><strong>Bài 17 :</strong> Kiếm ngay 5 triệu đến 30 triệu mỗi tháng cùng affiliate marketing</p>

            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .about-course {
        display: flex;  
        margin: 30px auto 0;
        width: 90%;
        max-width: 1240px;

        .left, .right {
            width: 30%;
            float: left;
            min-height: 100px;
        }

        .left {
            .left-footer {
                padding: 0 10px;
            }
            .title {
                display: block;
                // margin: 7px 0;
            }
            .admin {
                color: #999;
            }
            .user {
                float: left;
                
                img {
                    width: 15px;
                    vertical-align: text-top;
                }

                
            }
            img {
                width: 100%;
            }

            .review {
                float: right;
                img {
                    width: 20px;
                }
            }
        }
        .center, .right {
            .content {
                padding: 0 10px;
            }
            h3 {
                margin: 0  0 20px;
                padding: 10px;
                background: #5b90c5;
                color: #fff;
            }
        }
        .center {
            margin: 0 50px;
            width: 800px;
            float: left;
            min-height: 100px;

            .bai-hoc {
                p {
                    margin: 0;
                }
            }
            
            padding-bottom: 150px;
        }
        
        .left {
            float: left
        }

        .right {
            
            p {
                margin: 7px 0;
            }
        }
    }
</style>

