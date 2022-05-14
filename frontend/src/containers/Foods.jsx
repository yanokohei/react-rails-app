import React, { useEffect, useReducer } from "react";
import {
  initialState as foodsInitialState,
  foodsActionTypes,
  foodsReducer,
} from "../reducers/foods";
import { fetchFoods } from "../apis/foods";
import { REQUEST_STATE } from "../constants";

export const Foods = ({ match }) => {
  const [foodsState, dispatch] = useReducer(foodsReducer, foodsInitialState);

  // ロード時に実行。useReducerの関数にFETCHINGを渡して実行(16行目では状態をまず宣言しておく)
  // 次にfetchFoodsでapiにfoodsのIDを渡してJSONデータを取得。
  // 成功時に再度reducerをFETCH_SUCCESSで呼び出して状態を変更 & 取得したAPIをreducer内でrestaurantsListとして状態を更新。
  useEffect(() => {
    dispatch({ type: foodsActionTypes.FETCHING });
    fetchFoods(match.params.restaurantsId).then((data) => {
      dispatch({
        type: foodsActionTypes.FETCH_SUCCESS,
        payload: {
          foods: data.foods,
        },
      });
    });
  }, []);
  return (
    <>
      {" "}
      {foodsState.fetchState === REQUEST_STATE.LOADING ? (
        <>
          <p>ロード中...</p>
        </>
      ) : (
        foodsState.foodsList.map((food) => <div key={food.id}>{food.name}</div>)
      )}
    </>
  );
};
