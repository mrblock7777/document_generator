<template>
    <div>
        <v-card
            max-width="500"
            class="mx-auto px-5"
        >
            <v-card-title>Cover Page</v-card-title>
            
            <v-text-field label="Title" v-model="content.title"></v-text-field>
            <v-text-field label="Version" v-model="content.version"></v-text-field>
            <br>
            <p class="body-1">Contributors</p>
            <v-text-field label="Name" v-for="x in contributorsNo" v-model="content.contributors[x-1]" :key="x['id']"></v-text-field>
            <v-btn color="primary" right absolute @click="contributorsNo++">Add</v-btn>
            <br>
            <v-text-field label="Organisation" v-model="content.organisation"></v-text-field>
            <p class="body-1">Date</p>
            <br>
            <v-date-picker v-model="content.publishedDate"></v-date-picker>
            <v-card-actions>
                <v-btn @click="openDialog()">Click</v-btn>
            </v-card-actions>
        </v-card>
    <Modal :modal="modal" @updateModal="modal = false" @generatePDF="getPDF">
        <div slot="title">Cover Page preview</div>
        <PdfCoverPage ref="coverPage" :content="content"></PdfCoverPage>
    </Modal>
  </div>
</template>
<script>
import Modal from '@/components/PdfModal';
import PdfCoverPage from '@/views/pdf/PdfCoverPage';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
export default {
    data(){
        return{
            contributorsNo: 1,
            publishedDate:'',
            modal: false,
            content:{
                title:'',
                version: '',
                contributors: [],
                organisation: '',
                publishedDate: ''
            }
        }
    },
    components:{
        Modal,
        PdfCoverPage
    },
    methods:{
        openDialog(){
            this.modal = true;
        },
        getPDF(){
            console.log(this.$refs.coverPage.savePDF());
        }
    }
}
</script>