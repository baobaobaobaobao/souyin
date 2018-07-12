<template>
    <div class="main">
        <hr id="hr_top">
        </hr>
        <!--中部显示-->
        <div id="mymiddle">
            <div class="mymiddle_class">
                <div>
                    <hr></hr>
                </div>
                <div>
                    <div class="mymiddle_my_left"><img src="../../assets/images/my.jpg" /></div>
                    <div class="mymiddle_my_name">
                        <a href="#yolo" class="button">
                            <div v-html="nameHtml">热爱</div>
                        </a>
                    </div>
                    <div class="mymiddle_my_right">
                        <p v-html="song_count">
                            <p>
                                <p v-html="song_time">已听100小时</p>
                    </div>
                </div>
                <div>
                    <hr></hr>
                </div>
                <div class="mymiddle_near">
                    <div>
                        <hr></hr>
                    </div>
                    <div class="mymiddle_mynear_left">
                        <button class="buttonClass">最近播放</button>
                    </div>
                    <div class="mymiddle_mynear_right">10首</div>
                </div>
                <div>
                    <hr></hr>
                </div>
                <div class="mymiddle_collect">
                    <div class="mymiddle_collect_left">我的收藏</div>
                    <div class="mymiddle_collect_right">10首</div>
                    <div>
                        <hr></hr>
                    </div>
                </div>
            </div>
        </div>
        <!--底部-->
        <div id="bboot">
            <div class="bboot_class">
                <div class="bboot_left_class">
                    <div class="bboot_left_picture"><img src="../../assets/images/sing.jpg" /></div>
                    <div>
                        <p class="bboot_left_content">我的歌曲</p>
                    </div>
                </div>
                <div class="bboot_right_class">'+ '
                </div>'
            </div>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery'
    import {
        getLocalStorage
    } from '../common/loginCommon';
    export default {
        data: function() {
            return {
                nameHtml: '热爱',
                song_count: '100',
                song_time: '100'
            }
        },
        methods: {},
        created() {
            /*初始化，调用方法开始获取用户数据*/
            var storage = getLocalStorage();
            console.log(JSON.parse(storage.getItem("users")).id);
            //开始给界面上某些东西赋值
            this.nameHtml = JSON.parse(storage.getItem("users")).username;
            this.song_count = '<p>已听歌' + JSON.parse(storage.getItem("users")).song_count + '首</p>';
            this.song_time = '<p>已听' + JSON.parse(storage.getItem("users")).song_time + '小时</p>';
        }
    }
</script>

<style>
    .nav {
        width: 100%;
        height: 1.5rem;
        list-style: none;
    }
    .nav li a {
        width: 30%;
        float: left;
    }
    .tab-con {
        min-height: 12.5rem;
        margin-top: .625rem;
        border-radius: .25rem;
        margin: 0 auto;
    }
    body {
        margin: 0;
        padding: 0;
        font-size: 1rem
    }
    #header {
        width: 10rem;
        height: 1.3333rem;
        background: #514c4c;
    }
    .bheader_left_class {
        margin-left: 2.1rem;
        margin-top: .053333rem;
        margin-bottom: .625rem;
        float: left;
        font-size: .533333rem;
    }
    .bheader_right_class {
        margin-left: .533333rem;
        height: 1.3333rem;
        margin-right: 3.866667rem;
        margin-top: .293333rem;
        margin-bottom: .266667rem;
        float: right;
        font-size: .48rem;
    }
    .bheader_font_class {
        font-family: "Microsoft YaHei", "微软雅黑", "MicrosoftJhengHei", "华文细黑", "STHeiti,MingLiu";
        color: aliceblue;
    }
    #middle {
        width: 8rem;
        height: 10.666667rem;
        margin: 2.133333rem 1.013333rem 1.733333rem 0.5rem;
    }
    /*中部搜索框*/
    .bmiddle_search_class {
        width: 100%;
        height: 1.2rem;
    }
    /*搜索框，占全局*/
    .bmiddle_search_body {
        margin-top: 0%;
        width: 100%;
        height: 100%;
    }
    .bmiddle_nearfont_class {
        margin-top: 1.066667rem;
        left: .986667rem;
        top: 8rem;
        width: 1.306667rem;
        height: .613333rem;
        line-height: .453333rem;
        opacity: 0.6;
        color: rgba(16, 16, 16, 1);
        font-size: .32rem;
        text-align: center;
        font-family: Microsoft Yahei;
    }
    .bmiddle_nearfont1_class {
        left: 2.933333rem;
        top: 5.52rem;
        width: .773333rem;
        height: .613333rem;
        line-height: .533333rem;
        opacity: 0.8;
        color: rgba(16, 16, 16, 1);
        font-size: .373333rem;
        text-align: center;
        font-family: Arial;
    }
    .bmiddle_hotfont_class {
        left: .986667rem;
        top: 7.386667rem;
        width: 1.306667rem;
        height: .613333rem;
        line-height: .453333rem;
        opacity: 0.6;
        color: rgba(16, 16, 16, 1);
        font-size: .32rem;
        text-align: center;
        font-family: Arial;
    }
    .bmiddle_hotfont1_class {
        left: 2.933333rem;
        top: 7.386667rem;
        width: 1.52rem;
        height: .613333rem;
        line-height: .533333rem;
        opacity: 0.8;
        color: rgba(16, 16, 16, 1);
        font-size: .373333rem;
        text-align: center;
        font-family: Arial;
    }
    #bboot {
        margin-bottom: .266667rem;
        left: 0rem;
        top: auto;
        width: 10rem;
        height: 1.6rem;
        background-color: rgba(81, 76, 76, 1);
        box-shadow: 0rem 0rem 0rem 0rem rgba(255, 255, 255, 0);
    }
    .bboot_class {
        margin-bottom: .266667rem;
        left: 0rem;
        top: auto;
        width: 10rem;
        height: 1.6rem;
        background-color: rgba(81, 76, 76, 1);
        box-shadow: 0rem 0rem 0rem 0rem rgba(255, 255, 255, 0);
        /*单侧投影*/
        /* background: #fb3; */
        box-shadow: 0 -5px 8px -4px black;
    }
    .bboot_left_class {
        margin: .266667rem .266667rem .266667rem .533333rem;
        width: 40%;
        height: 1.6rem;
        float: left;
    }
    .bboot_left_picture {
        left: .533333rem;
        width: 1.6rem;
        height: 1.6rem;
        float: left;
        /* background:url(../images/sing.jpg) no-repeat ; */
    }
    .bboot_left_content {
        width: 1.92rem;
        height: .613333rem;
        float: left;
        line-height: .533333rem;
        color: rgba(255, 255, 255, 1);
        font-size: .373333rem;
        text-align: center;
        font-family: Arial;
    }
    .bboot_right_class {
        background: url(../../assets/images/kan.jpg) no-repeat;
        float: right;
        margin-right: .613333rem;
        margin-top: .266667rem;
        width: 1.2rem;
        height: 1.066667rem;
        background-color: rgba(255, 255, 255, 1);
    }
    body {
        margin: 0;
        padding: 0;
    }
    #header {
        width: 10rem;
        height: 1.333333rem;
        background: #514c4c;
        margin-bottom: .533333rem;
    }
    .bheader_left_class {
        margin-left: 3.493333rem;
        margin-top: .293333rem;
        margin-bottom: .266667rem;
        float: left;
    }
    .bheader_right_class {
        margin-left: .533333rem;
        margin-right: 3.866667rem;
        margin-top: .053333rem;
        margin-bottom: .266667rem;
        font-size: .533333rem;
        float: right;
    }
    .bheader_font_class {
        font-family: "Microsoft YaHei", "微软雅黑", "MicrosoftJhengHei", "华文细黑", "STHeiti,MingLiu";
        color: aliceblue;
    }
    /*中部显示*/
    #mymiddle {
        margin: 1.333333rem .133333rem 8rem .32rem;
        width: auto;
        height: 8rem;
    }
    /*用户头像*/
    .mymiddle_my_left {
        margin-left: .266667rem;
        width: 1.066667rem;
        height: 1.066667rem;
        float: left;
        /* background:url(../images/my.jpg) no-repeat ; */
    }
    /*用户名*/
    .mymiddle_my_name {
        left: .133333rem;
        margin-left: .213333rem;
        width: .773333rem;
        height: .613333rem;
        float: left;
        line-height: .533333rem;
        color: rgba(16, 16, 16, 1);
        font-size: .373333rem;
        text-align: center;
        font-family: Arial;
    }
    /*我的听歌*/
    .mymiddle_my_right {
        left: .133333rem;
        width: 20%;
        height: 1.6rem;
        float: right;
        margin-right: .533333rem;
        color: rgba(16, 16, 16, 1);
        font-size: .32rem;
        text-align: center;
        font-family: Arial;
    }
    /*最近播放的div*/
    .mymiddle_near {
        margin-top: 1.333333rem;
    }
    /*最近播放*/
    .mymiddle_mynear_right {
        left: 8.933333rem;
        float: right;
        width: auto;
        margin-right: .613333rem;
        height: .613333rem;
        line-height: .4rem;
        opacity: 0.65;
        color: rgba(16, 16, 16, 1);
        font-size: .266667rem;
        text-align: center;
        font-family: Arial;
        /*自适应半椭圆实现*/
        background: #fb3;
        border-radius: 50% / 100% 100% 0 0;
    }
    /*爬蚂蚁的实现机制。*/
    @keyframes ants {
        to {
            background-position: 100% 100%
        }
    }
    /*我的收藏左边*/
    .mymiddle_collect_left {
        left: .32rem;
        width: 1.52rem;
        height: .533333rem;
        line-height: .533333rem;
        color: rgba(16, 16, 16, 1);
        font-size: .373333rem;
        text-align: center;
        font-family: Arial;
        float: left;
        /*底下是爬蚂蚁实现*/
        border: 1px solid transparent;
        background: linear-gradient(white, white) padding-box, repeating-linear-gradient(-45deg, black 0, black 25%, transparent 0, transparent 50%) 0 / .6em .6em;
        animation: ants 12s linear infinite;
    }
    .mymiddle_collect_right {
        left: 8.906667rem;
        float: right;
        width: .746667rem;
        height: .613333rem;
        margin-right: .613333rem;
        line-height: .4rem;
        opacity: 0.65;
        color: rgba(16, 16, 16, 1);
        font-size: .266667rem;
        text-align: center;
        font-family: Arial;
        /*自适应半椭圆实现*/
        background: #fb3;
        border-radius: 50% / 100% 100% 0 0;
    }
    #bboot {
        margin-bottom: .266667rem;
        left: 0rem;
        top: auto;
        width: 10rem;
        height: 1.6rem;
        background-color: rgba(81, 76, 76, 1);
        box-shadow: 0rem 0rem 0rem 0rem rgba(255, 255, 255, 0);
    }
    hr {
        width: 100%;
    }
</style>


<style>
    /*父级元素*/
    .mymiddle_mynear_left {
        left: .32rem;
        float: left;
        width: 2.3rem;
        height: .533333rem;
        font-size: 0.3rem;
        color: rgba(16, 16, 16, 1);
    }
    /*放上自己学习的东西，《css揭秘>*/
    .buttonClass {
        height: 80%;
        padding: 0.125rem 0.125rem;
        border: 0.0625rem solid #446d88;
        border-radius: .25rem;
        box-shadow: 0 0.0625rem 0.3125rem gray;
        color: white;
        text-shadow: 0rem -0.0625rem 0.0625rem #335166;
        font: inherit;
        line-height: 1.5;
    }
    /*我们可爱的只变外表形状，不变内容来了*/
    /**
             * Parallelograms — with pseudoelements
             */
    .button {
        position: relative;
        display: inline-block;
        border: 0;
        background: transparent;
        color: white;
        text-transform: uppercase;
        text-decoration: none;
        /* font: bold 200%/1 sans-serif; */
    }
    .button::before {
        content: '';
        /* To generate the box */
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        background: #58a;
        transform: skew(45deg);
    }
    /*菱形图片随鼠标进行变换的效果也来了*/
    img {
        max-width: 250px;
        margin: 2px;
        -webkit-clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
        clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
        transition: 1s;
    }
    img:hover {
        -webkit-clip-path: circle(30% at 50% 50%);
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
    /*梯形标签页*/
    nav {
        position: relative;
        z-index: 1;
        padding-left: 1em;
    }
    nav>a {
        position: relative;
        display: inline-block;
        padding: .3em 1em 0;
        color: inherit;
        text-decoration: none;
        margin: 0 -.3em;
    }
    nav>a::before,
    main {
        border: .1em solid rgba(0, 0, 0, .4);
    }
    nav a::before {
        content: '';
        /* To generate the box */
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        border-bottom: none;
        border-radius: .5em .5em 0 0;
        background: #ccc linear-gradient(hsla(0, 0%, 100%, .6), hsla(0, 0%, 100%, 0));
        box-shadow: 0 .15em white inset;
        transform: scale(1.1, 1.3) perspective(.5em) rotateX(5deg);
        transform-origin: bottom;
    }
    /*饼图实现*/
    /**
             * Animated pie chart
             */
    .pie {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: yellowgreen;
        background-image: linear-gradient(to right, transparent 50%, currentColor 0);
        color: #655;
        float: right;
    }
    .pie::before {
        content: '';
        display: block;
        margin-left: 50%;
        height: 100%;
        border-radius: 0 100% 100% 0 / 50%;
        background-color: inherit;
        transform-origin: left;
        animation: spin 3s linear infinite, bg 6s step-end infinite;
    }
    @keyframes spin {
        to {
            transform: rotate(.5turn);
        }
    }
    @keyframes bg {
        50% {
            background: currentColor;
        }
    }
    /*毛玻璃没实现*/
    /* <!-- 
            body, main::before {
            	background: url("http://csssecrets.io/images/tiger.jpg") 0 / cover fixed;
            }
            main {
            	position: relative;
            	margin: 0 auto;
            	
            	background: hsla(0,0%,100%,.25) border-box;
            	overflow: hidden;
            	border-radius: .3em;
            	box-shadow: 0 0 0 1px hsla(0,0%,100%,.3) inset,
            	             0 .5em 1em rgba(0, 0, 0, 0.6);
            	text-shadow: 0 1px 1px hsla(0,0%,100%,.3);
            }
            main::before {
            	content: '';
            	position: absolute;
            	top: 0; right: 0; bottom: 0; left: 0;
            	margin: -30px;
            	z-index: -1;
            	-webkit-filter: blur(20px);
            	filter: blur(20px);
            }
            blockquote { font-style: italic }
            blockquote cite { font-style: normal; } --> */
    /*折角效果实现*/
    /**
             * Folded corner effect — at an angle
             */
    .folder {
        position: relative;
        background: #58a;
        /* Fallback */
        background: linear-gradient(-150deg, transparent 1.5em, #58a 0);
        padding: 0.1em;
        color: white;
        font: 100%/1.6 Baskerville, Palatino, serif;
        border-radius: .5em;
    }
    .folder::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        background: linear-gradient(to left bottom, transparent 50%, rgba(0, 0, 0, .2) 0, rgba(0, 0, 0, .4)) 100% 0 no-repeat;
        transform: translateY(-1.3em) rotate(-30deg);
        transform-origin: bottom right;
        border-bottom-left-radius: .5em;
        box-shadow: -.2em .2em .3em -.1em rgba(0, 0, 0, .15)
    }
    /*斑马条纹*/
    /**
             * Adjusting tabs
             */
    .prefont {
        padding: .5em;
        line-height: 1.5;
        background: hsl(20, 50%, 95%);
        font-family: Consolas, Monaco, monospace;
    }
    pre:nth-of-type(2) {
        tab-size: 2
    }
    pre:nth-of-type(3) {
        tab-size: 4
    }
    pre:nth-of-type(4) {
        tab-size: 0
    }
    code {
        font: inherit;
    }
    /*闪光灯*/
    .glow {
        color: #ffc;
        text-decoration: none;
        transition: 1s;
    }
    .glow:hover {
        text-shadow: 0 0 .1em, 0 0 .3em;
    }
    /*永远的固定底部,根据内部内容收缩的效果*/
    /**
             * Sticky footer with flexible height
             */
    body {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    .main {
        flex: 1;
    }
</style>