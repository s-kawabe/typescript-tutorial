# 2020年代、使う技術はどう選ぶ？

## 2010年代のまとめ
- 宣言的UIが出てきた
- TypeScriptが普及
- WEB標準の進化が加速

## Q. 新しい技術はなぜ生まれる？
A. 新しい問題を解決するために生まれる。
ライブラリやフレームワークはあくまで問題解決の手段。

## ２大新技術の分析
問題：フロントエンド開発の大規模化
- 命令的なDOM操作が辛い
  → **宣言的UI**（React,Vue,Angularが誕生）
- ソースコードの読解や更新のコストが大きくて辛い
  → **静的型システム**(TypeScript,Flowが誕生) 

同じ解決策に対して複数の問題解決が誕生している。
それらは設計の点で異なり、どれかを選ばなければならないが、
選定理由を聞かれるパターンが多い。
モダンフロントエンドで登場したReact,Vue,Angularは設計が違うだけで
メインの目的となる問題解決としてはどれも同じなのである程度好みで選んでもいい。

## どうすれば新しい問題や解決策を知ることができるか
パラダイムを大きく変化させるほどの**解決策**は稀。
それでもフロントエンドの進化が早いと言われる理由は
**より小さな問題解決サイクルを回しているから**

**問題と解決策の例**

---
Q. 命令的なDOM操作はスケールする設計が困難
A. 宣言的UI・仮想DOM

Q. コンポーネントの設計が辛い（ステートフルになりがち）
A. React Hooks

Q. 非同期処理の設計が辛い（命令的・ステートフルになりがち）
A. React Concurrent Mode

Q. バンドルサイズ削減のために計算をサーバー側に
  移すとアプリの設計がややこしくなる
A. React Server Components

---

## Reactの推しポイント
さまざまな問題と解決策が出ているが、どれも一貫性のある目的意識があり
この先の方向性が予測しやすい。
**→　使っているライブラリの目的意識、存在理由を考えることが大事。★**

## 技術選定について
中長期的な技術における選択は**新しい技術**を採用すべき。
→ 新しい問題を解決してくれるから。

## Googleが一強
Web標準といいつつ、Googleのシェアが圧倒的すぎて、
それはGoogleのものになってしまうという現実。
(Mozilaはこの前大量のレイオフがあった)

issueを辿ることは大事。
→ 同じ問題意識を持つ人を探すなど
→ 可能であればPoCとして完璧でなくともPRを投げて提案をする。

## 期待している技術とその理由
### resource bundle
たくさんのファイルを一つのファイルにまとめる

Googleに優遇してもらうために採用するというパターンも少なくない？
WEB標準 ≒ Googleに従う

### コアウェブバイタルによるインセンティブ

### HTMLとロジックの分業
Svelteが有用。
Svelteはバンドルサイズの軽量化にも寄与する。


