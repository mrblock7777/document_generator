<template>
    <div>
        <Actor/>
    </div>
</template>
<script>
import Actor from './sequence/Actor';
import Entity from './sequence/Entity';
export default {
    components:{
        Actor,
        Entity
    }
}
</script>
<style scoped>
    div{
        display: inline;
    }
</style>


