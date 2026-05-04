# プレミアムウイスキーアフィリエイトサイト デザインアイデア

## ターゲットユーザー
- 30〜60代の男性、ウイスキー愛好家
- ギフト探し中のユーザー（父の日、誕生日、お歳暮）
- 投資・コレクター目的のユーザー
- 海外からのジャパニーズウイスキーファン

---

<response>
<probability>0.07</probability>
<text>

## アイデア1: 「蒸溜所の静寂」— ジャパニーズ・ミニマリズム

**Design Movement**: 日本の侘び寂び（Wabi-Sabi）× スイスグラフィックデザイン

**Core Principles**:
1. 余白を「沈黙の美」として扱う — コンテンツは画面の40%以下
2. 非対称グリッド — 左寄せの縦組みテキストと右側の大判写真
3. 素材感の表現 — 樽の木目・琥珀色の液体感をテクスチャで再現
4. 一色の深みで語る — 単色グラデーションの重なりで奥行きを表現

**Color Philosophy**:
- Primary: 琥珀色 `#B5651D` — ウイスキーの液体そのもの
- Background: 深い墨色 `#1A1208` — 蒸溜所の夜
- Accent: 和紙白 `#F5F0E8` — 月光のような清潔感
- 感情意図: 「静謐な高級感」と「職人の誠実さ」

**Layout Paradigm**:
- 縦スクロール型の章立て構成（スクロールで「旅」を体験）
- 左3割：縦書き風の見出し（横書きだが縦書き感のある配置）
- 右7割：全幅の製品写真・蒸溜所写真
- セクション間は斜め切りのdivider

**Signature Elements**:
1. 琥珀色の液体が流れるようなCSS animationのヘッダー背景
2. 製品カードは「ラベル模倣デザイン」— 実際のボトルラベルを再現した枠組み
3. 和紙テクスチャのオーバーレイ（SVGノイズフィルター）

**Interaction Philosophy**:
- スクロール連動のパララックス — ボトル画像が浮かび上がる
- ホバー時に製品情報が「霧が晴れるように」フェードイン
- CTAボタンは「印鑑」風のスタンプアニメーション

**Animation**:
- Hero: 琥珀色の液体がゆっくり満ちていくアニメーション（CSS clip-path）
- 製品カード: 下からゆっくりスライドイン（stagger: 0.15s）
- ページ遷移: 横スワイプのフェード

**Typography System**:
- 見出し: Noto Serif JP (700) — 格調ある日本語表現
- 英語見出し: Playfair Display (400 italic) — クラシックな洋酒感
- 本文: Noto Sans JP (400) — 読みやすさ優先

</text>
</response>

<response>
<probability>0.06</probability>
<text>

## アイデア2: 「バーカウンターの夜」— ノワール・ラグジュアリー

**Design Movement**: アール・デコ × モダンダーク

**Core Principles**:
1. 暗闇の中の光 — 黒背景に金のラインで輪郭を描く
2. 幾何学的な秩序 — 六角形・菱形モチーフの繰り返し
3. 金属光沢 — ゴールドグラデーションのテキストとボーダー
4. 劇的なコントラスト — 暗い背景に鮮明な製品写真

**Color Philosophy**:
- Background: 漆黒 `#0D0D0D`
- Gold: `#C9A84C` → `#F0D080` グラデーション
- Deep Red: `#8B0000` — 情熱とリスクのアクセント
- 感情意図: 「夜の高級バーでの体験」

**Layout Paradigm**:
- 全幅ヒーローに斜め45度のゴールドラインパターン
- 製品を「展示ケース」スタイルで横並び
- セクション区切りはアール・デコ風の幾何学ボーダー

**Signature Elements**:
1. ゴールドのグラデーションテキスト（webkit-background-clip）
2. 六角形グリッドの製品カード
3. バーカウンターの木目テクスチャ背景

**Interaction Philosophy**:
- ホバーでゴールドの光が走るshimmerエフェクト
- CTAボタンは金属的なプレス感（inset shadow）

**Animation**:
- Hero: ゴールドのパーティクルが舞い落ちる
- カード: 回転しながらフリップ（製品詳細表示）

**Typography System**:
- 見出し: Cormorant Garamond (700) — 貴族的な優雅さ
- 本文: EB Garamond (400) — 古典的な読みやすさ
- 数字: Playfair Display — 年号・価格の強調

</text>
</response>

<response>
<probability>0.05</probability>
<text>

## アイデア3: 「山の朝霧」— ナチュラル・プレミアム

**Design Movement**: スカンジナビアン・ナチュラル × 日本の里山美学

**Core Principles**:
1. 自然素材の質感 — 石・木・水の触感をデジタルで再現
2. 霧のような透明感 — frosted glass効果の多用
3. 大地の色彩 — アースカラーの段階的グラデーション
4. 有機的な形 — 直線を避け、緩やかな曲線で構成

**Color Philosophy**:
- Forest Green: `#2D5016` — 白州蒸溜所の森
- Mist White: `#F8F6F2` — 朝霧
- Amber: `#D4A017` — 熟成の琥珀
- Stone: `#8B7355` — 山の岩肌
- 感情意図: 「自然の恵みと職人の技」

**Layout Paradigm**:
- 波打つsection divider（SVG wave）
- 左右交互のコンテンツ配置（zigzag layout）
- 背景に薄い山の稜線シルエット

**Signature Elements**:
1. 霧のfrosted glass製品カード
2. 木の年輪をモチーフにした円形グラフィック
3. 葉っぱのSVGアニメーション（風に揺れる）

**Interaction Philosophy**:
- スクロールで霧が晴れるrevealアニメーション
- ホバーで葉が舞うパーティクル

**Animation**:
- Hero: 朝霧が晴れていくfade-in
- 製品: 木が育つように下から伸びるreveal

**Typography System**:
- 見出し: Zen Old Mincho — 日本の伝統と自然
- 本文: Noto Sans JP — 清潔感
- 英語: Lora (italic) — 自然な曲線

</text>
</response>

---

## 選択: アイデア1「蒸溜所の静寂」を採用

理由: プレミアムウイスキーの本質的な価値（職人技、熟成の時間、日本の美意識）を最も忠実に表現できる。
SEO的にも「深みのあるコンテンツ」として評価されやすい構成。
