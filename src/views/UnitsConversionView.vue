<template>
   
    <v-row>
        <v-col
        cols="12"
        sm="7"
        class="py-2"
        >

        <v-btn-toggle
            v-for="nameOfUnit in nameOfUnits" :key="nameOfUnit"
            v-model="text"
            tile
            color="deep-purple accent-3"
            group
        >
            <v-btn :value="nameOfUnit" @click="getUnit(nameOfUnit)">
                {{ nameOfUnit }}
            </v-btn>
        </v-btn-toggle>
        </v-col>
    </v-row>


    <br><hr>
    <v-container
        fluid
        class="pa-0 text-center"
    >
        <UnitsCalculator msg="send name of units" :parameterUnit="unitJson" :nameUnit="defaultUnits"/>
    </v-container>


   


</template>

<script>
 import { nameOfUnits } from '@/data/unitsConversion/unitsName.js'
 import { getUnitsJson } from '@/data/unitsConversion/unitsParametars.js'
 import UnitsCalculator from '@/components/UnitsCalculator.vue'

 //console.log(nameOfUnits)
 console.log(getUnitsJson)

export default ({
    setup() {
        
    },

    components: {
        UnitsCalculator,
    },

    data() {
        return {
            getUnitJson: getUnitsJson,
            unitJson: '',
            nameOfUnits: nameOfUnits,
            defaultUnits: nameOfUnits[0],
           
            
            text: 'center',
            icon: 'justify',
            toggle_none: null,
            toggle_one: 0,
            toggle_exclusive: 2,
            toggle_multiple: [0, 1, 2],
        }  
    }, 

    methods: {
        getUnit(unit) {
            console.log(unit)
            this.defaultUnits = unit

            this.unitJson = this.getUnitJson[unit]
            console.log(this.getUnitJson[unit]) // show json unit
        }
    },

})

</script>


