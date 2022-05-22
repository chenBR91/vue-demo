<template>
    <h1>{{ nameUnit }}</h1>
    <br>
    {{ parameterUnit }}

<v-form>
    <v-container>
      <v-row>
        <v-col
          v-for="parameter in parameterUnit"
          :key="parameter"
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            :label="parameter.nameUnitParameter"
            variant="outlined"
            v-model="test"
            @input="calc"
            color="purple"
            
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
</v-form>


</template>


<script>



export default ({
    setup() {
        
    },

    props: {
        msg: String,
        nameUnit: String,
        parameterUnit: Object,
    },

    data() {
        return {
            test: 'test'
            

        }
    },

    methods: {
        calc: function() {
            // console.log(event.target.value)
            console.log(this.parameterUnit)
            for(let i in this.parameterUnit) {
                console.log(this.parameterUnit[i].baseConversionValue)
               
            }

        }
    }

   
})
</script>
