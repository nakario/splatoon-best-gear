<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2 class="headline font-weight-bold">
          最適ギア数シミュレーター
        </h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">共有</span>
        <v-icon>mdi-share</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Table />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Table from "./components/Table.vue";

export default Vue.extend({
  name: "App",

  components: {
    Table
  },

  data: () => ({
    //
  })
});
</script>
