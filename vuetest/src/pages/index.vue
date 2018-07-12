<template>
   
    <div>
        <div id="app" >
            <heads/>
            <middle/>
            <boot/>
        </div>
    </div>
</template>

<script>
    import heads from '../components/broadcast/heads.vue'
    import middle from '../components/broadcast/middle.vue'
    import boot from '../components/broadcast/boot.vue'

    export default {
        components: {
            heads,
            middle,
            boot
        },
         data() {
            return {
               
                 BootSongmessage:'',
                 createSingAudio:''
            }
        },

        created(){
           
        },
        methods:{
             Kans: function() {
                //var audios = document.getElementById('audios');

                // store.commit('increment')
                if (!this.$store.state.isborast) {
                    audios.play();
                    console.log("play");
                     this.$store.commit('increment')
                } else {
                    audios.pause();
                    console.log("pause");
                     this.$store.commit('decrement')
                }
            },
        }
    }
</script>


<style scoped>

</style>