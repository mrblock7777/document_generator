<template>
    <div>
        <div class="head"></div>
        <div class="body">
            <div class="left-hand"></div>
            <div class="torso"></div>
            <div class="right-hand"></div>
        </div>
        <div class="legs">
            <div class="left-leg"></div>
            <div class="right-leg"></div>
        </div>
    </div>
</template>
<style scoped>
    .head{
        border: 1px solid black;
        border-radius: 50%;
        width: auto;
        height: 75px;
        max-height: 100%;
    }
    .body{
        position: relative;
        height: 100px;
    }
    .body .left-hand, .body .right-hand{
        border: 1px solid black;
        position: absolute;
        width:30px;
        height:100px;
        top: 80px;
        border-bottom-color: transparent;
    }
    .body .right-hand{
        left: 36px;
        border-top-right-radius: 100%;
        border-left-color: transparent;
    }
    .body .left-hand{
        left: 8px;
        border-top-left-radius: 100%;
        border-right-color: transparent;
    }
    .body .torso{
        position: absolute;
        border: 1px solid black;
        left: 36px;
        top: 75px;
        height:120px;
        width: 1px;
    }
    .legs{
        position: relative;
        height: 100px;
    }
    .legs .left-leg, .legs .right-leg{
        border: 1px solid black;
        width:30px;
        height:120px;
        position: absolute;
        border-bottom-color: transparent;
        top: 95px;
    }
    .legs .right-leg{
        left: 36px;
        border-top-right-radius: 100%;
        border-left-color: transparent;
    }
    .legs .left-leg{
        left: 8px;
        border-top-left-radius: 100%;
        border-right-color: transparent;
    }
</style>

