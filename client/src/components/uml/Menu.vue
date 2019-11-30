<template>
    <v-navigation-drawer right permanent absolute width="400" :mini-variant="mini">
      <v-list-item>
          <v-list-item-content v-if="!mini">
              <v-list-item-title>
                  Class Diagram
              </v-list-item-title>
              
          </v-list-item-content>
              <v-btn
                  v-else
                  icon
                  @click.stop="mini = !mini"
              >
                  <v-icon>mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn
                  icon
                  @click.stop="mini = !mini"
              >
                  <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list v-show="!mini">
          <v-list-item v-if="!isObjectEmpty(selectedUML)">
              <v-text-field label="Class Name" v-model="selectedUML.class_name"></v-text-field>
          </v-list-item>
          <v-list-item v-if="!isObjectEmpty(selectedUML)">
              <v-text-field label="Attribute" v-model="selectedUML.attribute"></v-text-field>
              <v-select :items="type_item" v-model="selectedUML.attribute_type" label="Attribute Type"></v-select>
          </v-list-item>
          <v-list-item v-if="!isObjectEmpty(selectedUML)">
              <v-btn>Add Attribute</v-btn>
          </v-list-item>
          <v-list-item v-if="!isObjectEmpty(selectedUML)">
              <v-text-field label="Function" v-model="selectedUML.functions"></v-text-field>
          </v-list-item>
          <v-list-item v-if="!isObjectEmpty(selectedUML)">
              <v-btn>Add Functions</v-btn>
          </v-list-item>
          <v-list-item>
              <v-btn @click="addClass()">Add Class</v-btn>
          </v-list-item>
          <v-list-item>
              <v-btn @click="connecting = !connecting" :class="connecting? 'green': ''">Connect</v-btn>
          </v-list-item>
          <v-list-item>
              <v-btn @click="$emit('zoomOut')">Zoom Out</v-btn>
              <v-btn @click="$emit('zoomIn')">Zoom In</v-btn>
          </v-list-item>
      </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
    props:['selectedUML'],
    data(){
        return{
            connecting: false,
            mini: false,
            type_item:[
                {
                    text: 'Private',
                    value: '-'
                },
                {
                    text: 'Public',
                    value: '+'
                }
            ]    
        }
    },
    methods:{
      isObjectEmpty(object){
        for(var key in object){
            if(object.hasOwnProperty(key)){
                return false;
            }
        }
        return true;
      },
      addClass(){
        // this.umlCount++;
        this.$store.commit('addClass',
            {
                class_name:'',
                attribute:'',
                attribute_type:'',
                functions:'',
                left:'',
                top: '',
                connecting: false,
                connectedTo: {
                    index: -1,
                    left: '',
                    top: ''
                }
            }
        )
        console.log(this.$store.state.uml);
      }
    }
}
</script>