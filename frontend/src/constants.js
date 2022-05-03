// APIリクエストに関して必要になる定数 複数コンポーネントあるいは関数内で「状態」の定義がバラバラになるためまとめる
// 複数のコンポーネント、関数、モジュールから参照される値は別ファイルに定義しておくこと
export const REQUEST_STATE = {
  INITIAL: "INITIAL",
  LOADING: "LOADING",
  OK: "OK",
};

export const HTTP_STATUS_CODE = {
  NOT_ACCEPTABLE: 406,
};
