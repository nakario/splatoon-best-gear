<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">
          ロングブラスターネクロ サブ2回使用後メイン回数
        </h2>
        <v-switch v-model="showAll" label="全件表示"></v-switch>
        <v-data-table :headers="headers" :items="filtered"></v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { mainInkUsePercentage, subInkUsePercentage } from "@/system";
import { combinations } from "@/combinations";

interface ColumnItem {
  main: number;
  sub: number;
  sum: number;
  repeat: number;
  repeatFloor: number;
  best: boolean;
}

export default Vue.extend({
  name: "Table",

  data: () => ({
    showAll: false,
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
      },
      {
        text: "回数（切り捨て）",
        value: "repeatFloor"
      }
    ],
    values: (() => {
      const vs: ColumnItem[] = [];
      for (const p of combinations()) {
        let ink = 100;
        const subUsed = subInkUsePercentage(40, p.sub, 4) * 2;
        ink -= subUsed;
        const repeat = ink / mainInkUsePercentage(11, p.main, 2);
        const repeatFloor = Math.floor(repeat);
        vs.push({
          main: p.main,
          sub: p.sub,
          sum: p.main + p.sub,
          repeat: repeat,
          repeatFloor: repeatFloor,
          best: false
        });
      }
      vs.sort((a: ColumnItem, b: ColumnItem): number => {
        if (a.repeatFloor > b.repeatFloor) return -1;
        if (a.repeatFloor < b.repeatFloor) return 1;
        if (a.sum < b.sum) return -1;
        if (a.sum > b.sum) return 1;
        if (a.repeat > b.repeat) return -1;
        if (a.repeat < b.repeat) return 1;
        if (a.main < b.main) return -1;
        if (a.main > b.main) return 1;
        if (a.sub < b.sub) return -1;
        if (a.sub > b.sub) return 1;
        return 0;
      });
      let best = undefined;
      for (let i = 0; i < vs.length; i++) {
        if (best != vs[i].repeatFloor) {
          console.log(i, best, vs[i].repeatFloor);
          best = vs[i].repeatFloor;
          vs[i].best = true;
        }
      }
      return vs;
    })()
  }),
  computed: {
    filtered: function() {
      return this.showAll ? this.values : this.values.filter(v => v.best);
    }
  }
});
</script>
