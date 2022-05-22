<template>
    <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          
        <v-icon>{{ item.icon }}</v-icon>
          

          <v-list-item-content>
            <v-list-item-title class="ml-4">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
</template>


<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-home', to: '/' },
          { title: 'Units Conversion', icon: 'mdi-arrow-left-right', to: '/units-conversion' },
          { title: 'About', icon: 'mdi-math-compass', to: '/about' },
        ],
        right: null,
      }
    },
  }
</script>