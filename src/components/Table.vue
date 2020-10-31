<template>
  <v-container class="d-flex flex-wrap">
    <v-card class="flex-grow-1 ma-2">
      <v-card-text>
        <v-select
          v-model="weapon"
          :items="weapons"
          return-object
          v-on:change="resetActions(weapon)"
        ></v-select>
        <p v-for="action in actions" :key="action.text" class="text-button">
          {{ `${action.text}：${action.base}%` }}
        </p>
      </v-card-text>
    </v-card>
    <v-card class="flex-grow-1 ma-2">
      <v-card-title>事前行動</v-card-title>
      <v-card-text>
        <v-row v-for="action in actions" :key="action.text">
          <v-col md="auto" class="text-button">
            {{ action.text }}：{{ action.count }}回
          </v-col>
          <v-col md="auto" class="ml-auto text-end">
            <v-btn small v-on:click="action.increment()">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn small v-on:click="action.decrement()">
              <v-icon>mdi-minus</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-card class="flex-grow-1 text-start ma-2">
      <v-card-text>
        <v-btn-toggle v-model="headGear" mandatory>
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
        <v-slider
          v-model="remainingCount"
          min="30"
          max="51"
          :disabled="headGear != 1"
        ></v-slider>
      </v-card-text>
    </v-card>
    <v-card class="flex-grow-1 ma-2">
      <v-card-title>
        <v-row>
          <v-col md="auto">
            <v-select
              v-model="action"
              :items="actions"
              return-object
            ></v-select>
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
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import { lastSpurtPoint } from "@/system";
import { combinations } from "@/combinations";
import { allWeapons, Weapon } from "@/weapon";

interface ColumnItem {
  main: number;
  sub: number;
  sum: number;
  repeat: number;
  repeatFloor: number;
  best: boolean;
}

const weapons = allWeapons();
const actions = weapons[0].actions();

export default Vue.extend({
  name: "Table",

  data: () => ({
    showAll: false,
    weapon: weapons[0],
    weapons: weapons,
    action: actions[0],
    actions: actions,
    headGear: 0,
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
        let ink = this.weapon.inkCapacity;
        let additional = 0;
        if (this.headGear == 1) {
          additional = lastSpurtPoint(this.remainingCount);
        } else if (this.headGear == 2) {
          additional = 10;
        }
        for (const a of this.actions) {
          ink -= a.inkUsePercentage(p, additional) * a.count;
        }
        if (ink < 0) {
          continue;
        }
        const repeat = ink / this.action.inkUsePercentage(p, additional);
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
    },
    resetActions: function(weapon: Weapon) {
      this.actions = weapon.actions();
      this.action = this.actions[0];
    }
  }
});
</script>
