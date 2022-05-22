<template>
 <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!-- menu-left-navigation -->
      <MenuLeftNavigation />
    </v-navigation-drawer>

    <v-app-bar app color="yellow">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>AmbrSoft</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

    </v-app-bar>

    <v-main>
      <!-- Main -->
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  import MenuLeftNavigation from '@/components/MenuLeftNavigation.vue'

  export default {
    name: 'App',
    components: {
      MenuLeftNavigation
    },

    data: () => ({ drawer: null }),
  }
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
