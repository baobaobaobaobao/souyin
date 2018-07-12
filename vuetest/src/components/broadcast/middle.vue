<template>
    <div id="sing_middle">
        <div class="bmiddle">
            <div class=" path">
                <div class="avatar">
                    <img src="../../assets/images/bao.jpg" />
                </div>
            </div>
            <div class="bmiddle_bottem">
                <ul>
                    <li class="tramition">
                        <a href="http://www.divcss5.com/"></a>
                    </li>
                    <li class="like">
                        <a href="http://www.css5.com.cn/"></a>
                    </li>
                </ul>
            </div>
            <div>
                进度条没写。
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            value: {
                type: String,
                default: '',
            }
        },
        computed: {
            listeners() {
                return {
                    // Pass all component listeners directly to input
                    ...this.$listeners,
                    // Override input listener to work with v-model
                    input: event => this.$emit('input', event.target.value)
                }
            }
        }
    }
</script>

<style>
    /*中部图片显示，能不能显示的牛逼一点？？*/
    .bmiddle_picture {
        height: 10.666667rem;
        width: 70%;
        margin-top: 2.4rem;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        background: url(../../assets/images/sing_main.jpg) no-repeat;
    }
    .tramition {
        width: 1.333333rem;
        height: 1.333333rem;
        background: url(../../assets/images/tramition.jpg) no-repeat;
    }
    .like {
        width: 1.333333rem;
        height: 1.333333rem;
        background: url(../../assets/images/like.jpg) no-repeat;
    }
    .bmiddle_bottem {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        height: 1.333333rem;
    }
    /**
                    * Animation along a circular path - Solution 1
                    */
    @keyframes spin {
        to {
            transform: rotate(1turn);
        }
    }
    .avatar {
        animation: spin 5s infinite linear;
        transform-origin: 50% 150px;
    }
    .avatar>img {
        animation: inherit;
        animation-direction: reverse;
    }
    /* Anything below this is just styling */
    .avatar {
        width: 50px;
        margin: 0 auto;
        border-radius: 50%;
        overflow: hidden;
    }
    .avatar>img {
        display: block;
        width: inherit;
    }
    .path {
        width: 300px;
        height: 300px;
        padding: 20px;
        border-radius: 50%;
        background: #fb3;
    }
</style>