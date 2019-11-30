<template>
  <div>
    <v-stepper v-model="stepper">
      <v-stepper-header>
        <div v-for="(section, x) in sections" :key="section['id']">
          <v-stepper-step :step="x+1" :editable="true">{{ section.name }}</v-stepper-step>
          <v-divider></v-divider>
        </div>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content v-for="(section, x) in sections" :key="section['id']" :step="x+1">
          <component :is="section.view"></component>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import Sequence from '@/components/Sequence';
import Uml from '@/components/Uml';
import CoverPage from '@/views/editors/CoverPage';
import Overall from '@/views/editors/Overall';
import ExInterface from '@/views/editors/ExInterface';

export default {
  data(){
    return{
      stepper: 0,
      sections:[
        {
          name: 'Cover Page',
          view: 'CoverPage'
        },
        {
          name: 'Overall Description',
          view: 'Overall'
        },
        {
          name: 'External Interface Requirements',
          view: 'ExInterface'
        },
        // {
        //   name: 'System Features',
        //   view: 'Features'
        // },
        // {
        //   name: 'Other Nonfunctional Requirements',
        //   view: 'NonFunctional'
        // },
      ]
    }
  },
  components:{
    Sequence,
    Uml,
    CoverPage,
    Overall,
    ExInterface
  },
  methods:{
    
  }
};
</script>
