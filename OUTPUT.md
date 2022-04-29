## Rails について

#### Model

DB に入っているデータの定義を行います。Rails のモデルファイルにはモデルに関するコールバックや、クラス/インスタンスメソッドなどが定義します。ここでは API は関係なく、モデルそのものがどういう振る舞いをするか？のみに関心があります。

#### Controller

Rails では View のテンプレートを返す役割も担いますが、今回のような API モードではパラメーターで受け取った値をもとに DB のデータの取得を担当し、それに対応するデータを JSON 形式で出力します。

#### View

通常の Rails アプリケーションでは画面にデータを表示する部分を担当しています。erb や haml などの形式で書かれることが多いです。

#### Migration

DB のカラムやそのカラムの型(string や interger など)を定義します。Migration ファイルは指示書のようなもので、コマンドを実行することで、ファイル内で定義された通りに DB が作られます。

## フロントエンドの開発について

#### JSX

React では JSX という記法で element(div や button など)を記述していきます。JSX は一見 HTML そのもののように見えますが、JSX は一度 JavaScript に内部的に変換されます。その後、JavaScript が createElement つまり、element を生成するという仕組みです。

#### CORS

CORS は Cross Origin Resource Sharing の略称です。異なるオリジン(URL と言い換えると分かりやすいかもしれません)のリソースに対してアクセスできるようにな受け付ける側の設定のことを指します。

## React のコンポーネント設計の種類分け

再利用性を高めるために、コンポーネント設計が分けることが一般的です。

containers/\*.jsx
components/\*.jsx (必要に応じて Buttons などディレクトリを分ける)

#### 『Container Component』

データを扱うコンポーネントです。
Container Component はデータを持ち、親コンポーネントとして複数の子コンポーネントにデータを渡す役割を持ちます。

#### 『Presentational Component』

受け取ったデータを表示させるだけのコンポーネントです。
(ボタンやモーダルなど)

#### API を呼ぶ関数

React のコンポーネントはあくまでレイアウトやデータを保持することを担当させ、
API を呼び出す部分は関数化して、他のファイルに分けて関心を分離させるほうが好ましいです。

apis/\*.js

#### reducer

React の組み込み API である React Hooks でシンプルにデータを保持できるようにします。
React Hooks の機能である useReducer はカプセル化の手段として最適です。
reducer もコンポーネント内に定義せずに分けてしまう方が良いです。

reducers/\*.js
