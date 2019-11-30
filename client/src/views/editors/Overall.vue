<template>
    <div>
        <v-card
            max-width="500"
            class="mx-auto px-5"
        >
            <v-card-title>Overall Description</v-card-title>
            <v-textarea label="Product Perspective"></v-textarea>
            <v-textarea label="Product Functions"></v-textarea>
            <v-textarea label="User Classes and Characteristics"></v-textarea>
            <v-textarea label="Operating Environment"></v-textarea>
            <v-textarea label="Design and Implementation Constraints"></v-textarea>
            <v-card-actions>
                <v-btn text @click="modal = true">Click</v-btn>
            </v-card-actions>
        </v-card>
        <Modal :modal="modal" @updateModal="modal = false">
            <div slot="title">Overall Description preview</div>
            <PdfOverall/>
        </Modal>
    </div>
</template>
<script>
import Modal from '@/components/PdfModal';
import PdfOverall from '@/views/pdf/PdfOverall';
export default {
    data(){
        return{
            modal: false
        }
    },
    components:{
        Modal,
        PdfOverall
    }
}
</script>