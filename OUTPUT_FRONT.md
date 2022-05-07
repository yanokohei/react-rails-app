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

# React で CSS をあてる

React で CSS を適用させる方法は大きく分けて３つ
①JSX に対して class(className)を使って CSS をあてる方法
②CSS を module 化する方法
③CSS in JS

## CSS in JS ライブラリ styled-components

- コンポーネントで import styled from 'styled-components';などでインポートする。
- const 任意のコンポーネントを定義する。ドット記法でスタイルコンポーネントが持つプロパティ(タグ)を呼び出し CSS を追加する
  - const コンポーネント名 = styled.タグの種類`styleを羅列`

# ReactHooks

クラスを書かなくてもクラス機能(state やライフサイクル)を Functional Component で使用出来る。
React からインポートすることでコンポーネント内で使用できる

## useState

状態管理が出来るようになる。
[変数, 変数を更新する関数] = useState(初期値)

- 例えば初期値に数字を持たせてカウントボタンを実装することができる。
  - 関数コンポーネント内で useState を定義
  - return のボタンコンポーネントに onClick イベント内で setCount などに更新する処理を書く

他にもオブジェクトに複数のデータを持たせてプロパティの状態に応じてボタンの色を変えるなどの状態管理が実現できる。

## useReducer

useState ではあくまで state を定義して状態管理するだけ。
state や setter 関数に関わるロジックを複数コンポーネントで共通で使いたい場合は useReducer が適切。

useState との違いは以下の通り。

- 扱える state の type がオブジェクトと配列のみ(useState は数値や文字列なども扱えるが配列はサポートしていなかった)
- state を複数同時に扱うことが出来る(useState は同時に扱えない)
- useContext & useReducer で redux と同じようにグローバルで state 管理ができる

#### useReducer の実装の流れ(例)

① 初期値を先に定義(直接指定しても良い)
② reducer を先に定義

- 第一引数に state、第二引数に action という reducer で条件分岐などに使うためのデータを定義
- 状態を更新するための条件分岐を書く(case 文など)
- 返り値は新しい関数を返すように設定する

③ 関数コンポーネント内で `const [state, dispatch] = useReducer(定義した reducer, 定義した初期値)`を定義する

- useReducer は state と dispatch をペアで返す関数のため分割代入でそれぞれ受け取る
- 分割代入で定義した状態"state"と状態を変える関数"dispatch"はコンポーネントの中で呼び出す

④ コンポーネント内で `<Button onClick={()=>dispatch('increment')}>increment</Button>`などと呼び出す

# API から一覧を表示させるコンポーネントを実装する流れをざっと復習

#### インポート

- React や useEffect をインポート
- 画像を使う場合は画像をインポート
- styled-component をインポート
- API 関数をインポート

#### スタイルを定義

- const コンポーネント名 = styled.タグの種類`styleを羅列`
- コンポーネントでラップするだけで CSS を適用出来るようになる

#### エクスポートする関数コンポーネントを実装

- export const 関数コンポーネント名でアロー関数内に関数と return するコンポーネントを書く
- API 関数を useEffect の引数に渡す。第二引数に[]を書くことで第一引数のコールバックが render 時のみ実行されるように制御出来る
- return(<><>)内にはコンポーネントや HTML を記述していくことで UI を作ることができる
- 画像のコンポーネントは インポートした画像を src={MainCoverImage}などと指定すると<img src="...">に変換される
