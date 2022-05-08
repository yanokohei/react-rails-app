// APIリクエストの状態を表す定数をインポート
import { REQUEST_STATE } from "../constants";

// 初期のステートを定義する。APIリクエストしてレストランのリストのレスポンスを受け取るため空配列とする
export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  restaurantsList: [],
};

// 取得に関する状態を定義する。
export const restaurantsActionTypes = {
  FETCHING: "FETCHING",
  FETCH_SUCCESS: "FETCH_SUCCESS",
};

// dispatchにFETCHINGが渡ってきた場合はstateをLOADINGに変更し
// FETCH_SUCCESSを受け取った場合は200とレスポンス結果をオブジェクトで返す。
export const restaurantsReducer = (state, action) => {
  switch (action.type) {
    case restaurantsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case restaurantsActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        restaurantsList: action.payload.restaurants,
      };
    default:
      throw new Error();
  }
};
