<template>
    <div class="fixed">
        <div class="bboot_class">
            <div class="bboot_left_class" @click="clickme">
                <div class="bboot_left_picture"></div>
                <div>
                    <p class="bboot_left_content" v-html="songname"></p>
                </div>
            </div>
            <button v-on:click="downKan">
                        <div class="bboot_right_class">
                        </div>
                    </button>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Vuex from 'vuex'
    import VueBus from '../../components/common/vue-bus.js'
    import {
        strategies,
        Validator,
        EventUtil,
        Events,
        getSingle,
        EventTarget,
        serializeObject
    } from '../../components/common/commonFunction.js'
    Vue.use(VueBus)
    Vue.use(Vuex)
    export default {
        data() {
            return {
                songlists: '',
                isShow: false,
                songname: 'mySong',
                BootSongmessage: '',
                createSinLeAudios: ''
            }
        },
        props: {
        },
        created() {
            var _that = this;
            _that.$bus.on('sendsongToboot', function(songmessage, createSinLeAudios) {
                console.log("boot。vue接收到了");
                _that.BootSongmessage = songmessage;
                _that.createSinLeAudios = createSinLeAudios;
                console.log("boot" + _that.BootSongmessage);
            });
        },
        methods: {
            downKan: function() {
                var _that = this;
                var audios = document.getElementById('audios');
                var audio = _that.createSinLeAudios();
                // store.commit('increment')
                if (!this.$store.state.isborast) {
                    audio.play();
                    console.log("play");
                    this.$store.commit('increment')
                } else {
                    audio.pause();
                    console.log("pause");
                    this.$store.commit('decrement')
                }
            },
            clickme: function() {
                var _that=this;
                //用户点击这个div进入播放界面，给播放界面赋值啊。
                console.log("boot传值了，" + this.BootSongmessage + this.createSinLeAudios);
                //this.$router.push('/index');
              //  this.$bus.emit('addSong', this.BootSongmessage, this.createSinLeAudios);
               
              
               this.$router.push({
                    path: '/index',
                   query: {
                        bootsongmessage: _that.BootSongmessage,
                        created: _that.createSinLeAudios
                    }
                });
            }
        }
    }
</script>
<style>
    #bboot {
        flex: 1;
        left: 0rem;
        top: auto;
        width: 10rem;
        height: 1.6rem;
        background-color: rgba(81, 76, 76, 1);
        box-shadow: 0rem 0rem 0rem 0rem rgba(255, 255, 255, 0);
        display: block;
        position: absolute;
        bottom: 0;
    }
    .bboot_class {
        left: 0rem;
        top: auto;
        width: 10rem;
        height: 1.6rem;
        background-color: rgba(81, 76, 76, 1);
        box-shadow: 0rem 0rem 0rem 0rem rgba(255, 255, 255, 0);
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
        background: url(../../assets/images/sing.jpg) no-repeat;
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
    hr {
        width: 100%;
    }
    .fixed {
        position: fixed;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 50px;
        background-color: #000;
        z-index: 9999;
    }
</style>