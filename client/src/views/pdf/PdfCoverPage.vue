<template>
    <div ref="docs" id="docs">
        <div class="header font-weight-bold font-italic">
            Software Requirements Specification
        </div>
        <h4 class="display font-weight-bold intro">
            Software Requirement <br>
            Specification
        </h4>
        <p class="title intro font-weight-bold">for</p>
        <p class="display font-weight-bold intro">{{ content.title }}</p>
        
        <p class="headline break font-weight-bold">Version {{ content.version }}</p>
        <p class="headline font-weight-bold">Prepared By</p>
        <p class="headline font-weight-bold" v-for="contributor in content.contributors" :key="contributor['id']">
            {{ contributor }}
        </p>
        <p class="intro font-weight-bold">{{ content.organisation }}</p>
        <p class="headline font-weight-bold">{{ content.publishedDate }}</p>
    </div>
</template>
<script>
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
export default {
    props:['content'],
    data(){
        return{
            doc: ''
        }
    },
    methods:{
        savePDF(){
            html2canvas(this.$refs.docs,{scrollX: 0, scrollY: 0}).then((canvas)=>{
                let img = canvas.toDataURL('image/png');
                this.doc = new jsPDF('p', 'mm', 'a4'); //'p', 'mm', 'a4'
                this.doc.addImage(img,'JPEG',0,0);
                this.doc.save('Test.pdf');
            })
        }
    },
    mounted(){
        // this.savePDF();
    }
}
</script>
<style scoped>
    #docs{
        text-align: right; 
        padding: 0 2cm;
        font-family: Arial, Helvetica, sans-serif;
    }
    .intro{
        line-height: 2 !important;
    }
    .display{
        font-size: 42px;
        padding-top: 2cm;
    }
    .display:first-child{
        border-top: 5px solid black;
        padding-top: 1cm;
    }
    .break + p{
        line-height: 4 !important;
    }
</style>