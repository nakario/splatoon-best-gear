<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          ロングブラスターネクロ サブ2回使用後メイン回数
        </h2>
        <v-data-table :headers="headers" :items="values"></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mainInkUsePercentage, subInkUsePercentage } from "@/system";
import { combinations } from "@/combinations";

export default Vue.extend({
  name: "Table",

  data: () => ({
    headers: [
      {
        text: "メイン効率",
        value: "main"
      },
      {
        text: "サブ効率",
        value: "sub"
      },
      {
        text: "合計",
        value: "sum"
      },
      {
        text: "回数",
        value: "repeat"
      }
    ],
    values: (() => {
      const vs = [];
      for (const p of combinations()) {
        let ink = 100;
        const subUsed = subInkUsePercentage(40, p.sub, 4) * 2;
        ink -= subUsed;
        vs.push({
          main: p.main,
          sub: p.sub,
          sum: p.main + p.sub,
          repeat: ink / mainInkUsePercentage(11, p.main, 2)
        });
      }
      return vs;
    })()
  })
});
</script>
