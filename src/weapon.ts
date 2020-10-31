import { Action, MainAction, SubAction } from "@/action";

export interface Weapon {
  readonly text: string;
  readonly inkCapacity: number;
  actions(): Action[];
}

class WeaponImpl implements Weapon {
  readonly text: string;
  readonly inkCapacity: number;
  readonly main: () => Action[];
  readonly sub: () => Action;
  constructor(
    text: string,
    main: () => Action[],
    sub: () => Action,
    capacity = 100
  ) {
    this.text = text;
    this.inkCapacity = capacity;
    this.main = main;
    this.sub = sub;
  }
  actions(): Action[] {
    return [...this.main(), this.sub()];
  }
}

// main weapons
// シューター

function bold(): Action[] {
  return [new MainAction("メイン", 0.8, 2)];
}

function wakaba(): Action[] {
  return [new MainAction("メイン", 0.43, 2)];
}

function sharp(): Action[] {
  return [new MainAction("メイン", 0.8, 2)];
}

function modeler(): Action[] {
  return [new MainAction("メイン", 0.55, 2)];
}

function sushi(): Action[] {
  return [new MainAction("メイン", 0.92, 2)];
}

function gallon52(): Action[] {
  return [new MainAction("メイン", 1.3, 2)];
}

function zap(): Action[] {
  return [new MainAction("メイン", 0.8, 2)];
}

function prime(): Action[] {
  return [new MainAction("メイン", 2, 2)];
}

function gallon96(): Action[] {
  return [new MainAction("メイン", 2.5, 2)];
}

function jet(): Action[] {
  return [new MainAction("メイン", 1.6, 2)];
}

// ブラスター

function hot(): Action[] {
  return [new MainAction("メイン", 10, 2)];
}

function long(): Action[] {
  return [new MainAction("メイン", 11, 2)];
}

function rapid(): Action[] {
  return [new MainAction("メイン", 7, 2)];
}

function elite(): Action[] {
  return [new MainAction("メイン", 8, 2)];
}

function nova(): Action[] {
  return [new MainAction("メイン", 7.5, 2)];
}

function crash(): Action[] {
  return [new MainAction("メイン", 4, 2)];
}

// リールガン

function l3(): Action[] {
  return [new MainAction("メイン", 3.45, 2)];
}

function h3(): Action[] {
  return [new MainAction("メイン", 5.4, 2)];
}

// ボトルガイザー

function bottle(): Action[] {
  return [
    new MainAction("メイン初弾", 2.2, 2),
    new MainAction("メインオート", 0.9, 2)
  ];
}

// ローラー

function roller(): Action[] {
  return [new MainAction("メイン", 9, 2)];
}

function carbon(): Action[] {
  return [new MainAction("メイン", 3.96, 2)];
}

function variable(): Action[] {
  return [new MainAction("横振り", 8, 2), new MainAction("縦振り", 12, 2)];
}

function dynamo(): Action[] {
  return [new MainAction("メイン", 18, 2)];
}

// フデ

function pablo(): Action[] {
  return [new MainAction("メイン", 2, 2)];
}

function hokusai(): Action[] {
  return [new MainAction("メイン", 3.2, 2)];
}

// チャージャー

function charger(): Action[] {
  return [
    new MainAction("フルチャージ", 18, 2),
    new MainAction("ノンチャージ", 2.25, 2)
  ];
}

function liter(): Action[] {
  return [
    new MainAction("フルチャージ", 25, 2),
    new MainAction("ノンチャージ", 2.25, 2)
  ];
}

function soy(): Action[] {
  return [
    new MainAction("フルチャージ", 15, 2),
    new MainAction("ノンチャージ", 2, 2)
  ];
}

function squiffer(): Action[] {
  return [
    new MainAction("フルチャージ", 10.5, 2),
    new MainAction("ノンチャージ", 1.867, 2)
  ];
}

function take(): Action[] {
  return [
    new MainAction("フルチャージ", 8.4, 2),
    new MainAction("ノンチャージ", 3.36, 2)
  ];
}

// スロッシャー

function bucket(): Action[] {
  return [new MainAction("メイン", 7, 2)];
}

function hissen(): Action[] {
  return [new MainAction("メイン", 6, 2)];
}

function screw(): Action[] {
  return [new MainAction("メイン", 8.4, 2)];
}

function furo(): Action[] {
  return [new MainAction("メイン", 8, 2)];
}

function exp(): Action[] {
  return [new MainAction("メイン", 11.7, 2)];
}

// スピナー

function barrel(): Action[] {
  return [new MainAction("フルチャージ", 22.5, 2)];
}

function spinner(): Action[] {
  return [new MainAction("フルチャージ", 17.25, 2)];
}

function hydra(): Action[] {
  return [new MainAction("フルチャージ", 35, 2)];
}

function kugel(): Action[] {
  return [new MainAction("フルチャージ", 25, 2)];
}

function nautilus(): Action[] {
  return [new MainAction("フルチャージ", 15, 2)];
}

// マニューバー

function maneuver(): Action[] {
  return [new MainAction("メイン", 0.76, 2), new MainAction("スライド", 9, 2)];
}

function sputtery(): Action[] {
  return [new MainAction("メイン", 0.697, 2), new MainAction("スライド", 5, 2)];
}

function dual(): Action[] {
  return [new MainAction("メイン", 1.2, 2), new MainAction("スライド", 8, 2)];
}

function kelvin(): Action[] {
  return [new MainAction("メイン", 1.5, 2), new MainAction("スライド", 8, 2)];
}

function quad(): Action[] {
  return [new MainAction("メイン", 0.8, 2), new MainAction("スライド", 3, 2)];
}

// シェルター

function para(): Action[] {
  return [new MainAction("メイン", 6.325, 2), new MainAction("パージ", 30, 2)];
}

function camp(): Action[] {
  return [new MainAction("メイン", 11, 2), new MainAction("パージ", 30, 2)];
}

function spy(): Action[] {
  return [new MainAction("メイン", 4, 2)];
}

// sub weapons

function beacon(): Action {
  return new SubAction("ジャンプビーコン", 75, 1);
}

function sprinkler(): Action {
  return new SubAction("スプリンクラー", 60, 1);
}

function trap(): Action {
  return new SubAction("トラップ", 60, 1);
}

function splash(): Action {
  return new SubAction("スプラッシュボム", 70, 2);
}

function kyuban(): Action {
  return new SubAction("キューバンボム", 70, 2);
}

function curling(): Action {
  return new SubAction("カーリングボム", 70, 2);
}

function torpedo(): Action {
  return new SubAction("トーピード", 65, 2);
}

function shield(): Action {
  return new SubAction("スプラッシュシールド", 60, 2);
}

function mist(): Action {
  return new SubAction("ポイズンミスト", 60, 3);
}

function tansan(): Action {
  return new SubAction("タンサンボム", 60, 3);
}

function robot(): Action {
  return new SubAction("ロボットボム", 55, 3);
}

function sensor(): Action {
  return new SubAction("ポイントセンサー", 45, 3);
}

function quick(): Action {
  return new SubAction("クイックボム", 40, 4);
}

// all weapons

export function allWeapons(): Weapon[] {
  return [
    // シューター
    new WeaponImpl("ボールドマーカー", bold, curling),
    new WeaponImpl("ボールドマーカーネオ", bold, beacon),
    new WeaponImpl("ボールドマーカー7", bold, splash),
    new WeaponImpl("わかばシューター", wakaba, splash, 110),
    new WeaponImpl("もみじシューター", wakaba, robot, 110),
    new WeaponImpl("おちばシューター", wakaba, torpedo, 110),
    new WeaponImpl("シャープマーカー", sharp, mist),
    new WeaponImpl("シャープマーカーネオ", sharp, quick),
    new WeaponImpl("プロモデラーMG", modeler, kyuban),
    new WeaponImpl("プロモデラーRG", modeler, sprinkler),
    new WeaponImpl("プロモデラーPG", modeler, quick),
    new WeaponImpl("スプラシューター", sushi, quick),
    new WeaponImpl("スプラシューターコラボ", sushi, splash),
    new WeaponImpl("スプラシューターベッチュー", sushi, kyuban),
    new WeaponImpl(".52ガロン", gallon52, sensor),
    new WeaponImpl(".52ガロンデコ", gallon52, curling),
    new WeaponImpl(".52ガロンベッチュー", gallon52, shield),
    new WeaponImpl("N-ZAP85", zap, kyuban),
    new WeaponImpl("N-ZAP89", zap, robot),
    new WeaponImpl("N-ZAP83", zap, sprinkler),
    new WeaponImpl("プライムシューター", prime, sensor),
    new WeaponImpl("プライムシューターコラボ", prime, kyuban),
    new WeaponImpl("プライムシューターベッチュー", prime, splash),
    new WeaponImpl(".96ガロン", gallon96, sprinkler),
    new WeaponImpl(".96ガロンデコ", gallon96, shield),
    new WeaponImpl("ジェットスイーパー", jet, mist),
    new WeaponImpl("ジェットスイーパーカスタム", jet, quick),
    // ブラスター
    new WeaponImpl("ホットブラスター", hot, mist),
    new WeaponImpl("ホットブラスターカスタム", hot, robot),
    new WeaponImpl("ロングブラスター", long, kyuban),
    new WeaponImpl("ロングブラスターカスタム", long, curling),
    new WeaponImpl("ロングブラスターネクロ", long, quick),
    new WeaponImpl("ラピッドブラスター", rapid, trap),
    new WeaponImpl("ラピッドブラスターデコ", rapid, kyuban),
    new WeaponImpl("ラピッドブラスターベッチュー", rapid, torpedo),
    new WeaponImpl("Rブラスターエリート", elite, mist),
    new WeaponImpl("Rブラスターエリートデコ", elite, shield),
    new WeaponImpl("ノヴァブラスター", nova, splash),
    new WeaponImpl("ノヴァブラスターネオ", nova, trap),
    new WeaponImpl("ノヴァブラスターベッチュー", nova, tansan),
    new WeaponImpl("クラッシュブラスター", crash, splash),
    new WeaponImpl("クラッシュブラスターネオ", crash, curling),
    // リールガン
    new WeaponImpl("L3リールガン", l3, curling),
    new WeaponImpl("L3リールガンD", l3, quick),
    new WeaponImpl("L3リールガンベッチュー", l3, shield),
    new WeaponImpl("H3リールガン", h3, sensor),
    new WeaponImpl("H3リールガンD", h3, kyuban),
    new WeaponImpl("H3リールガンチェリー", h3, shield),
    // ボトルガイザー
    new WeaponImpl("ボトルガイザー", bottle, shield),
    new WeaponImpl("ボトルガイザーフォイル", bottle, splash),
    // ローラー
    new WeaponImpl("スプラローラー", roller, curling),
    new WeaponImpl("スプラローラーコラボ", roller, beacon),
    new WeaponImpl("スプラローラーベッチュー", roller, splash),
    new WeaponImpl("カーボンローラー", carbon, robot),
    new WeaponImpl("カーボンローラーデコ", carbon, quick),
    new WeaponImpl("ヴァリアブルローラー", variable, shield),
    new WeaponImpl("ヴァリアブルローラーフォイル", variable, kyuban),
    new WeaponImpl("ダイナモローラー", dynamo, trap),
    new WeaponImpl("ダイナモローラーテスラ", dynamo, splash),
    new WeaponImpl("ダイナモローラーベッチュー", dynamo, sprinkler),
    // フデ
    new WeaponImpl("パブロ", pablo, splash),
    new WeaponImpl("パブロ・ヒュー", pablo, trap),
    new WeaponImpl("パーマネント・パブロ", pablo, sprinkler),
    new WeaponImpl("ホクサイ", hokusai, robot),
    new WeaponImpl("ホクサイ・ヒュー", hokusai, beacon),
    new WeaponImpl("ホクサイベッチュー", hokusai, kyuban),
    // チャージャー
    new WeaponImpl("スプラチャージャー", charger, splash),
    new WeaponImpl("スプラスコープ", charger, splash),
    new WeaponImpl("スプラチャージャーコラボ", charger, shield),
    new WeaponImpl("スプラスコープコラボ", charger, shield),
    new WeaponImpl("スプラチャージャーベッチュー", charger, sprinkler),
    new WeaponImpl("スプラスコープベッチュー", charger, sprinkler),
    new WeaponImpl("リッター4K", liter, trap),
    new WeaponImpl("4Kスコープ", liter, trap),
    new WeaponImpl("リッター4Kカスタム", liter, beacon),
    new WeaponImpl("4Kスコープカスタム", liter, beacon),
    new WeaponImpl("ソイチューバー", soy, kyuban),
    new WeaponImpl("ソイチューバーカスタム", soy, curling),
    new WeaponImpl("スクイックリンα", squiffer, sensor),
    new WeaponImpl("スクイックリンβ", squiffer, robot),
    new WeaponImpl("スクイックリンγ", squiffer, kyuban),
    new WeaponImpl("14式竹筒銃・甲", take, curling),
    new WeaponImpl("14式竹筒銃・乙", take, mist),
    new WeaponImpl("14式竹筒銃・丙", take, tansan),
    // スロッシャー
    new WeaponImpl("バケットスロッシャー", bucket, kyuban),
    new WeaponImpl("バケットスロッシャーデコ", bucket, sprinkler),
    new WeaponImpl("バケットスロッシャーソーダ", bucket, splash),
    new WeaponImpl("ヒッセン", hissen, quick),
    new WeaponImpl("ヒッセン・ヒュー", hissen, splash),
    new WeaponImpl("スクリュースロッシャー", screw, robot),
    new WeaponImpl("スクリュースロッシャーネオ", screw, sensor),
    new WeaponImpl("スクリュースロッシャーベッチュー", screw, tansan),
    new WeaponImpl("オーバーフロッシャー", furo, shield),
    new WeaponImpl("オーバーフロッシャーデコ", furo, sprinkler),
    new WeaponImpl("エクスプロッシャー", exp, sprinkler),
    new WeaponImpl("エクスプロッシャーカスタム", exp, sensor),
    // スピナー
    new WeaponImpl("バレルスピナー", barrel, sprinkler),
    new WeaponImpl("バレルスピナーデコ", barrel, shield),
    new WeaponImpl("バレルスピナーリミックス", barrel, sensor),
    new WeaponImpl("スプラスピナー", spinner, quick),
    new WeaponImpl("スプラスピナーコラボ", spinner, curling),
    new WeaponImpl("スプラスピナーベッチュー", spinner, mist),
    new WeaponImpl("ハイドラント", hydra, robot),
    new WeaponImpl("ハイドラントカスタム", hydra, trap),
    new WeaponImpl("クーゲルシュライバー", kugel, mist),
    new WeaponImpl("クーゲルシュライバー・ヒュー", kugel, beacon),
    new WeaponImpl("ノーチラス47", nautilus, sensor),
    new WeaponImpl("ノーチラス79", nautilus, kyuban),
    // マニューバー
    new WeaponImpl("スプラマニューバー", maneuver, quick),
    new WeaponImpl("スプラマニューバーコラボ", maneuver, curling),
    new WeaponImpl("スプラマニューバーベッチュー", maneuver, kyuban),
    new WeaponImpl("スパッタリー", sputtery, beacon),
    new WeaponImpl("スパッタリー・ヒュー", sputtery, mist),
    new WeaponImpl("スパッタリークリア", sputtery, torpedo),
    new WeaponImpl("デュアルスイーパー", dual, sensor),
    new WeaponImpl("デュアルスイーパーカスタム", dual, splash),
    new WeaponImpl("ケルビン525", kelvin, trap),
    new WeaponImpl("ケルビン525デコ", kelvin, shield),
    new WeaponImpl("ケルビン525ベッチュー", kelvin, tansan),
    new WeaponImpl("クアッドホッパーブラック", quad, robot),
    new WeaponImpl("クアッドホッパーホワイト", quad, sprinkler),
    // シェルター
    new WeaponImpl("パラシェルター", para, sprinkler),
    new WeaponImpl("パラシェルターソレーラ", para, robot),
    new WeaponImpl("キャンピングシェルター", camp, beacon),
    new WeaponImpl("キャンピングシェルターソレーラ", camp, shield),
    new WeaponImpl("キャンピングシェルターカーモ", camp, trap),
    new WeaponImpl("スパイガジェット", spy, trap),
    new WeaponImpl("スパイガジェットソレーラ", spy, splash),
    new WeaponImpl("スパイガジェットベッチュー", spy, torpedo)
  ];
}
