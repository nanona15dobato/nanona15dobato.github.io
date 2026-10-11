# GitHub Pages（GitHub Pages）

github.nanona.me で公開している静的サイト。GitHub Actions（.github/workflows/pages.yml）で nanona-ui を差し込んでから公開する。

- 各ページの HTML には `<!-- nn:head -->`（<head> 内）・`<!-- nn:header -->`・`<!-- nn:footer -->` の目印だけを書く。ヘッダー・フッターを直接書かない
- github.nanona.me の 3 リポジトリ（GitHub Pages のトップ・中毒テスト・100の質問）はヘッダー・フッターを共通にしている。サイト名・メニュー・フッターの中身は nanona15dobato.github.io リポジトリの `nanona.site.json` 1 か所で決め、各リポジトリの `nanona.config.json` は `extends` でそれを読む（他のリポジトリでは https://github.nanona.me/nanona.site.json を取得）
- ローカルで他リポジトリをビルドするときは `--extends ../nanona15dobato.github.io/nanona.site.json` で手元の共通設定を使える
- 公開時に `node scripts/nn-pages.mjs` が目印を nanona-ui のテンプレート（https://ui.nanona.me/v1/templates/）で置き換え、`_site/` に出力する（sitemap.xml も作る）
- ローカル確認：`node scripts/nn-pages.mjs --serve 4400`（nanona-ui も手元のものを使うなら `--ui <nanona-ui の dist/v1 のパス>`）
- `scripts/nn-pages.mjs` と `.github/workflows/pages.yml` の元は nanona-ui リポジトリ（tools/・templates/）。直すときは元を直して写す
- 出典・ライセンス表記などページ固有のフッター文は `<!-- nn:footer-note -->` 〜 `<!-- /nn:footer-note -->` で囲む（公開時にフッターへ移る。それを触るスクリプトは DOMContentLoaded 以降に動かす）
- 新しいページを足したら、目印 3 つと `<html lang="ja" data-nn-site="github">`、`<main id="content" class="nn-page">` を入れる

## デザイン

このサイトは nanona15dobato の共通スタイル **nanona-ui** を使う。UI を作る・直すときは次を守ること。

- ルールの全文：https://ui.nanona.me/ と nanona-ui リポジトリの `DESIGN.md`。見本は https://ui.nanona.me/
- 共通 CSS / JS：`https://ui.nanona.me/v1/nanona.css`、`https://ui.nanona.me/v1/nanona.js`（Toolforge では同梱版）
- `<html data-nn-site="…">` と、nanona-ui のテンプレートどおりのヘッダー・フッターを置く。ヘッダーは 1 つだけ。サイト名・メニュー・道具・フッターの中身だけをサイトごとに書く
- 他サイト同士へのリンク一覧は置かない（行き来はメインホームページ nanona.me 経由）
- ヘッダー・フッターの共通部分（ホームへのリンク・テーマ切替・ハンバーガー・フッター最下段）は nanona-ui の `templates/header.html`・`templates/footer.html` のまま HTML に書く（JS で後から足すと表示がずれる）。`nanona.js` は `<head>` で `defer` 読み込み
- メニューの現在地は HTML で `aria-current="page"`。太字にしない
- ページ遷移（View Transitions）は nanona.css で有効。共有要素には `view-transition-name`（1 ページ内で重複禁止）と `view-transition-class: nn-shared` を付け、`display: inline-block` にする
- **色は `var(--nn-*)` だけ。** 16進数・rgb()・Tailwind の既定色は使わない
- システムフォントのみ。Web フォントを足さない
- 角丸 2px（カード 4px）、影なし、罫線で区切る
- 動きは 100ms の色変化だけ。例外は共通ヘッダーのハンバーガーメニュー開閉とテーマ切替のアニメーションのみ（独自に作らない）。ローディング画面・フェードイン・スクロール演出・ホバーで浮く動きは禁止
- 水色（`--nn-sky`）は線・帯・面のみ。黄色（`--nn-yellow`）は「現在地」「強調」「新着」のみで、1画面 1〜2か所
- グラデーション、すりガラス、紫系、絵文字アイコン、英語の飾り見出し、キャッチコピー、架空の数値は禁止
- 見出し・ボタンは日本語で内容をそのまま書く
- ダークモードとスマホ幅（360px）で表示を確認する
- 外部から来る文字列は `textContent` で入れる
