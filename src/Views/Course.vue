<template>
    <div class="course" oncopy="return false" oncut="return false" onpaste="return false">
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
                        <li v-for="(video, idx) in videoAff" @click="selectVideo(idx)" :key="idx">{{video.nameCourse}}</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div class="doc">
            <p>Tài liệu tải về</p>
            <a href="">XXXXX</a>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase'

export default {
    data() {
        return {
            videoAff: [
                {   
                    nameCourse: 'Bai hoc 1',
                    link: 'https://www.youtube.com/embed/OHbwkZgkBIU'
                },
                {   
                    nameCourse: 'Bai hoc 2',
                    link: 'https://www.youtube.com/embed/kLu0D0r1yqA',
                },
                {   
                    nameCourse: 'Bai hoc 3',
                    link: 'https://www.youtube.com/embed/_9tJN_O84yQ'
                },
                
                
            ],

            linkYouTubbe: 'https://www.youtube.com/embed/OHbwkZgkBIU'
        }
    },

    methods: {
        selectVideo(idx) {
            this.linkYouTubbe = this.videoAff[idx].link
        }
    },

    mounted() {
        firebase.auth().onAuthStateChanged(function(user) {
            console.log(user)
        if (user) {
            var defaultAuth = firebase.auth();
            var uid = user.uid
            console.log(uid)
            var _this = this
            var ref = firebase.database().ref("users/" + uid + '/status');
            ref.once("value")
            .then(function(snapshot) {
                var key     = snapshot.key // "ada"
                var status  = snapshot.val()

                console.log(status)
            });
        } else {
             console.log('Chưa đăng nhập')
        }
        });
    }
}
</script>

<style lang="scss">
.course { 
    float: left;
    width: 100%;
    clear: both;

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
                    padding: 10px 20px;
                    margin-top: 10px;

                    &:hover {
                        cursor: pointer;
                        text-decoration: underline;
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
