<template>
    <div id="bodys">
        <!--head-->
        <div id="header">
            <div class="header">
                <div class="bheader_left_class"><input class="search_class" /></div>
                <div class="bheader_right_class">
                    <p class="bheader_font_class"><button v-on:click="searchs">搜索</button></p>
                </div>
            </div>
        </div>
        <!--中部显示-->
        <div id="mymiddle" class="main">
            <input v-show="isShow" type="text">
            <div>
                <div>
                    <div style="height:58px;width:100%;" v-for="item in songlists">
                        <div class="blog-post-left">
                            <h5>{{ item.name }}</h5>
                            <div></div>
                        </div>
                        <div style="float:right">
                            <button v-on:click="kan(item.id)"><div class="blog-post-right">
                                                </div></button>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </div>
        </div>
        <!--底部-->
        <boot/>
    </div>
</template>
<script>
    import $ from 'jquery'
    import Vue from 'vue'
   
    import boot from '../../components/commonComponents/boot.vue'
    import {
        strategies,
        Validator,
        EventUtil,
        Events,
        getSingle,
        EventTarget,
        serializeObject
    } from '../../components/common/commonFunction.js'
    import Vuex from 'vuex'
    Vue.use(Vuex)
    /*维护一份播放状态*/
    // 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
    export default {
        components: {
            boot
        },
        // props: {
        //     Parentmessage: '',
        //     isShow: false,
        //     message: '',
        //     songlists: ''
        // },
        data() {
            return {
                songlists: '',
                isShow: false,
                songname: 'mySong',
            }
        },
        computed: {
            listeners() {
                return {}
            }
        },
        methods: {
            searchs: function() {
                var _that = this;
                var searchData = {
                    keywords: "西海情歌"
                };
                /*发送事件*/
                $.ajax({
                    type: "GET",
                    dataType: "json",
                    url: "http://122.152.227.45:3000/song/search",
                    data: searchData,
                    success: function(data) {
                        var songdata = JSON.stringify(data);
                        var datas = JSON.parse(songdata);
                        // console.log(datas);
                        _that.handleEvent(datas.data.list.result.songs);
                    },
                    error: function(datas) {
                        alert(Constants.GET_SONGDATA);
                    }
                });
            },
            /*发送歌曲信息*/
            handleEvent: function(SongData) {
                console.log(SongData);
                this.songlists = SongData;
            },
            kan: function(id) {
                var _that = this;
                var searchData = {
                    id: id,
                    br: 320000
                };
                $.ajax({
                    type: "GET",
                    dataType: "json",
                    url: "http://122.152.227.45:3000/song/music/url",
                    data: searchData,
                    success: function(data) {
                        var songdata = JSON.parse(JSON.stringify(data));
                        console.log(data);
                        var datas = data.data.songUrl.data[0].url;
                        //1 播放
                        var createSinLeAudios = getSingle(_that.createAudios); //这里的参数还可以为创建各种东西等等。
                        var singleAudio = createSinLeAudios();
                        singleAudio.src = datas;
                        singleAudio.id="audios";
                        singleAudio.play(); 

                        // var audios = document.getElementById('audios');
                        // audios.src = datas;
                        // audios.play();


                        //2 给底部播放组件加歌曲名字以及url
                        _that.songname = "<p>" + data.data.songUrl.data[0].url + "</p>";
                        // _that.handleEvent(datas.data.list.result.songs);
                        //3 触发状态变换
                        _that.$store.commit('increment')
                        console.log(_that.$store.state.isborast) // -> 1
                        //4 还有就是拿到数据发给底部boot组件，以方便它传给播放界面数据。
                        _that.$bus.emit('sendsongToboot', data.data.songUrl.data[0],createSinLeAudios);
                        console.log("发送给boot");
                    },
                    error: function(datas) {
                        alert(Constants.GET_SONGDATA);
                    }
                });
            },
            createAudios: function() {
                var audio = document.createElement('audio');
                document.body.appendChild(audio);
                return audio;
            }
        },
        mounted: function() {
            var _this = this;
        }
    }
</script>

<style>
    .bodys {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    #header {
        width: 10rem;
        height: 1.333333rem;
        background: #514c4c;
    }
    .search_class {
        left: .533333rem;
        top: .8rem;
        width: 8rem;
        height: 1.066667rem;
        color: rgba(136, 136, 136, 1);
        font-size: .373333rem;
        text-align: left;
        font-family: Arial;
        border: .026667rem solid rgba(187, 187, 187, 1);
    }
    .bheader_left_class {
        margin-left: .266667rem;
        margin-top: .053333rem;
        margin-bottom: .266667rem;
        float: left;
    }
    .bheader_right_class {
        margin-right: .133333rem;
        margin-left: .133333rem;
        margin-bottom: .266667rem;
        font-size: .533333rem;
        float: right;
    }
    .bheader_font_class {
        font-family: "Microsoft YaHei", "微软雅黑", "MicrosoftJhengHei", "华文细黑", "STHeiti,MingLiu";
        color: aliceblue;
    }
    .search_answer {
        left: .64rem;
        width: 1.573333rem;
        height: .613333rem;
        line-height: .453333rem;
        color: rgba(16, 16, 16, 1);
        font-size: .373333rem;
        text-align: center;
        font-family: Arial;
    }
    /*中部显示*/
    #mymiddle {
        width: 100%;
        height: auto;
    }
    .blog-post-left {
        float: left;
        left: .373333rem;
        line-height: .4rem;
        color: rgba(16, 16, 16, 1);
        font-size: .346667rem;
        font-family: Arial;
    }
    .blog-post-right {
        float: right;
        margin-right: .266667rem;
        width: 1.066667rem;
        height: 1.066667rem;
        background: url(../../assets/images/kan.jpg) no-repeat;
    }
</style>