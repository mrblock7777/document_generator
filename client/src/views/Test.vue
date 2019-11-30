<template>
    <div>
        <Menu :selectedUML="selectedUML" @zoomOut="zoomOut" @zoomIn="zoomIn"/>
        <div class="container" :style="'-moz-transform: scale('+zoom+'); transform: scale('+zoom+')'">
            <span v-if="$store.state.umlCount > 0">
                <Moveable
                    v-for="(item, index) in $store.state.uml"
                    :key="item['id']"
                    class="moveable"
                    :draggable="true"
                    v-bind="moveable"
                    @drag="handleDrag"
                >
                    <Uml 
                        class="uml"
                        :uml="item"
                        @click.native="selectUML(item, index)"
                    />
                </Moveable>
            </span>
        </div>
    </div>
</template>
<script>
import Uml from '@/components/Uml';
import Moveable from 'vue-moveable';
import Menu from '@/components/uml/Menu';
export default {
    data(){
        return{
            zoom: 1,
            clicks: 0,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            currentIndex: -1,
            selectedUML: {},
            attrCount: 1,
            funcCount: 1,
            moveable:{
                throttleDrag: 1,
                resizable: false,
                throttleResize: 1,
                keepRatio: false,
                scalable: false,
                throttleScale: 0.01,
                rotatable: false,
                throttleRotate: 0.2,
                pinchable: true
            },
        }
    },
    components:{
        Uml,
        Moveable,
        Menu
    },
    methods: {
        zoomOut(){
            this.zoom -= 0.01;
        },
        zoomIn(){
            this.zoom += 0.01;
        },
        selectUML(data, index){
            console.log(data);
            this.selectedUML = data;
            console.log(this.selectedUML);
            if(this.connecting){
                if(this.clicks == 0){
                    this.x1 = this.selectedUML.left;
                    this.y1 = this.selectedUML.top;
                    this.currentIndex = index;
                }
                else{
                    this.x2 = this.selectedUML.left;
                    this.y2 = this.selectedUML.top;
                    this.selectedUML.connectedTo.index = this.currentIndex;
                    this.selectedUML.connectedTo.left = this.x1;
                    this.selectedUML.connectedTo.top = this.y1;
                    this.uml[this.currentIndex].connectedTo.index = index;
                    this.uml[this.currentIndex].connectedTo.left = this.x2;
                    this.uml[this.currentIndex].connectedTo.top = this.y2;
                }
            }
        },
        handleDrag({ target, left, top }) {
            // console.log('onDrag left, top', left, top);
            target.style.left = `${left}px`;
            target.style.top = `${top}px`;
            this.selectedUML.left = left;
            this.selectedUML.top = top;
            console.log(this.selectedUML.left);
        },
        handleResize({target, width, height, delta}) {
            console.log('onResize', width, height);
            delta[0] && (target.style.width = `${width}px`);
            delta[1] && (target.style.height = `${height}px`);
        }
    }
}
</script>
<style>
    .container {
        /* position: relative; */
        top: 50%;
        left: 50%;
        width: 100vw;
        /* transform: translate(-50%, -50%); */
        transform-origin: center center;
    }
    .moveable {
        position: relative;
        margin: 0;
        width: 200px;
        display: flex;
    }
    span{
        all: unset;
    }
</style>