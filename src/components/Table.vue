<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="8">
        <v-card>
          <v-card-text>
            <v-select v-model="weapon" :items="weapons"></v-select>
            <p v-for="action in actions" :key="action.text" class="text-start">
              {{ `${action.text}：${action.base}%` }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="text-start">
          <v-card-text>
            <v-btn-toggle v-model="headGear">
              <v-btn>
                なし
              </v-btn>
              <v-btn>
                ラストスパート
              </v-btn>
              <v-btn>
                カムバック
              </v-btn>
            </v-btn-toggle>
            <v-container class="pl-1 pb-0">
              <p class="mt-2 mb-0">残りカウント：{{ remainingCount }}</p>
            </v-container>
            <v-slider v-model="remainingCount" min="30" max="51"></v-slider>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>事前行動</v-card-title>
          <v-card-text>
            サブ：1回<br />
            横振り：2回
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col class="mb-5" cols="12">
        <v-card>
          <v-card-title>
            <v-row>
              <v-col md="auto">
                <v-select v-model="action" :items="actions"></v-select>
              </v-col>
              <v-spacer></v-spacer>
              <v-col md="auto">
                <v-switch v-model="showAll" label="全件表示"></v-switch>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="filtered(values)"
            ></v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import {
  mainInkUsePercentage,
  subInkUsePercentage,
  lastSpurtPoint
} from "@/system";
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
    weapon: "ヴァリアブルローラーフォイル",
    weapons: ["ヴァリアブルローラーフォイル"],
    action: "縦振り",
    actions: [
      { text: "縦振り", base: 12 },
      { text: "横振り", base: 8 },
      { text: "サブ（キューバンボム）", base: 70 }
    ],
    headGear: 1,
    remainingCount: 51,
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
    ]
  }),
  computed: {
    values: function() {
      const vs: ColumnItem[] = [];
      for (const p of combinations()) {
        let ink = 100;
        let additional = 0;
        if (this.headGear == 1) {
          additional = lastSpurtPoint(this.remainingCount);
        } else if (this.headGear == 2) {
          additional = 10;
        }
        const subUsed = subInkUsePercentage(70, p.sub + additional, 2);
        ink -= subUsed;
        const yokoUsed = mainInkUsePercentage(8, p.main + additional, 2) * 2;
        ink -= yokoUsed;
        const repeat = ink / mainInkUsePercentage(12, p.main + additional, 2);
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
      if (this.headGear != 0) {
        return vs.filter(v => v.sum <= 47);
      }
      return vs;
    }
  },
  methods: {
    filtered: function(values: { best: boolean }[]) {
      return this.showAll ? values : values.filter(v => v.best);
    }
  }
});
</script>
