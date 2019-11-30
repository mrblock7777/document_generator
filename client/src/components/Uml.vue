<template>
    <div class="box">
        <div class="uml class-name">
            {{ uml.class_name }}
        </div>
        <div class="uml attribute">
           {{ uml.attribute_type }} {{ uml.attribute }}
        </div>
        <div class="uml function">
            {{ uml.functions }}()
        </div>
    </div>
</template>
<script>
export default {
    props:['uml'],
    data(){
        return{
            
        }
    }
}
</script>
<style scoped>
    .box{
        border: 1px solid black;
        width: 200px;
        height: 225px;
    }
    .box .class-name{
        border-bottom:1px solid black;
        height: 40px;
        text-align:center;
    }
    .box .attribute{
        border-bottom:1px solid black;
        height: 120px;
    }
</style>