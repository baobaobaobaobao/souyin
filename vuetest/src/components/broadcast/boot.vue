<template>
    <div id="bbootem">
        <div class="bbootem">
            <hr></hr>
            <div class="bbootem_left">
            </div>
            <div class="bbootem_center" @click="kans">
            </div>
            <div class="bbootem_right">
            </div>
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
        props: {
            value: {
                type: String,
                default: '',
            },
            
        },
        data() {
            return {
                BootSongmessage: '',
                createSingAudio: ''
            }
        },
       
        created() {
            this. BootSongmessage = this.$router.query.bootsongmessage; 
            this.createSingAudio=this.$router.query.createSingAudio;
        },
       
        methods: {
            kans: function() {

              
                console.log("我要接受了");
                var _that = this;
                var audios = document.getElementById('audios');
                alert(_that.createSingAudio);
                var audio = _that.createSingAudio();
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
            }
        }
    }
</script>

<style>
    /*底部实现*/
    #bbootem {
        margin-bottom: 0%;
        width: 100%;
        height: 2.133333rem;
    }
    .bbootem_left {
        float: left;
        height: .8rem;
        width: .8rem;
        background: url(../../assets/images/postSing.jpg) no-repeat;
        margin-left: 2.133333rem;
        margin-top: .533333rem;
    }
    .bbootem_center {
        float: left;
        height: 1.866667rem;
        width: 1.866667rem;
        background: url(../../assets/images/begin.jpg) no-repeat;
        margin-top: .266667rem;
        margin-left: 1.066667rem;
    }
    .bbootem_right {
        float: left;
        height: .8rem;
        width: .8rem;
        background: url(../../assets/images/nextSing.jpg) no-repeat;
        margin-top: .533333rem;
        margin-left: 1.066667rem;
    }
</style>