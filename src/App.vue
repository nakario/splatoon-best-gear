<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h3 class="text-xs-h3 font-weight-bold">
          最適ギア数シミュレーター
        </h3>
      </div>

      <v-spacer></v-spacer>

      <div>v5.5.0</div>

      <v-btn
        href="https://github.com/nakario/splatoon-best-gear"
        target="_blank"
        text
      >
        <v-icon>mdi-github</v-icon>
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
