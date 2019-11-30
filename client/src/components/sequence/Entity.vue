<template>
    <div>
        <div class="box">
            <span class="entity">{{entity}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            entity: ''
        }
    }
}
</script>

<style scoped>
    .box{
        border: 1px solid black;
        width: 150px;
        height: 70px;
        text-align: center;
    }
    .entity{
        padding: 5px 10px;
    }
</style>

