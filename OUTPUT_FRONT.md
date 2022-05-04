# api リクエストの実装

- constants.js(ts)で API リクエストの定数を作成
- style_constants.js(ts)でスタイルの定数を作成
- URL を文字列でまとめたファイルを作るのが一般的(frontend/src/urls/index.js)
  - origin は定数で定義しておくと、各 URL の定義に使うことができる
- axios をインストールする。
  - API を呼ぶ関数を apis ディレクトリに作成していく
- src/apis/restaurants.js(ts)という感じ
  - url と axios をインポートして、api 関数を export 定義する
  - axios のリクエストメソッドの引数に urls で定義した url を渡すイメージ
- 後はコンポーネント内でこの関数をインポートして使えばサーバーサイドの API を叩いて、JSON 形式のデータを受け取れる

#### CORS エラー

- スキーム・ホスト・ポート番号のいずれかが異なれば"Cross-Origin"、異なるオリジンとなりエラーが発生する。
  (localhost:3000 と localhost:3001)
- API は知らないサイトからのリクエストには対応しない。まさに"知らないサイト"からのリクエストとされているためエラーが発生しているためサーバー側で設定しておく必要がある。
- rails では gem 'rack-cors'があるため gemfile のコメントアウトを外してインストールする。
- initializer のコメントアウトを外して許可するサイトの orizin を追記するだけで良い
