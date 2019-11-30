<template>
    <div class="container">
        <Actor id="actor"/>
        <div class="box">
            <h2>Test</h2>
            <div class="usecase"></div>
            <div class="usecase"></div>
        </div>
    </div>
</template>
<script>
import Actor from '@/components/sequence/Actor';
export default {
    components:{
        Actor
    }
}
</script>
<style scoped>
    .container{
        position: relative;
    }
    #actor{
        position: absolute;
        left: 200px;
    }
    .box{
        text-align: center;
        border: 1px solid grey;
        height: 500px;
        width: 350px;
        align-items: center;
        margin: 0 350px;
    }
    .usecase{
        text-align: center;
        border: 1px solid black;
        height: 100px;
        width: 200px;
        border-radius: 50%;
        padding-top: 30px;
        margin: 20px 70px;
        overflow-wrap: break-word;
    }
</style>
