<template>
    <div>
    
        <div id="app">
    
            <h1>My Todo App!</h1>
    
            <register/>
    
            <login/>
    
        </div>
    
    
    
    </div>
</template>

<script>
    import register from '../components/login/register.vue'
    
    import login from '../components/login/login.vue'
    
    
    
    export default {
    
        components: {
    
           register,
    
            login
    
        }
    
    }
</script>
   
     
        
<style>
    html {
    
        font-size: 1rem
    
    }
</style>
   



