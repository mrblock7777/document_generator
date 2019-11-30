<template>
    <v-dialog width="210mm" :value="modal" @input="closeModal">
        <v-card class="pa-5" height="297mm">
            <v-card-title>
                <slot name="title"></slot>
            </v-card-title>
            <v-divider></v-divider>
            <slot></slot>
        </v-card>
        <v-btn color="primary" @click="$emit('generatePDF')">Generate</v-btn>
    </v-dialog>
</template>
<script>
export default {
    props:['modal', 'page'],
    data(){
        return{
            
        }
    },
    methods:{
        closeModal(){
            this.$emit('updateModal');
        }
    }
}
</script>
<style scoped>
.header{
    font-size: 13px;
    font-family: 'Times New Roman', Times, serif;
    padding: 1cm 2cm;
}
</style>