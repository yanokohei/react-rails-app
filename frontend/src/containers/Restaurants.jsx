import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
// <Link to={`パス`}>を使えるようにする。パスの部分をオブジェクトにすることでプロパティにクエリを設定することもできる。
import { Link } from "react-router-dom";
// ロード状態のUIコンポーネントを使用。参考演算子などでローディング中か否かで表示状態を変えたりする。
import Skeleton from "@material-ui/lab/Skeleton";

// apis
import { fetchRestaurants } from "../apis/restaurants";

// reducers
import {
  initialState,
  restaurantsActionTypes,
  restaurantsReducer,
} from "../reducers/restaurants";

import { REQUEST_STATE } from "../constants";

// images
import MainLogo from "../images/logo.png";
import MainCoverImage from "../images/main-cover-image.png";
import RestaurantImage from "../images/restaurant-image.jpg";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px 32px;
`;

const MainLogoImage = styled.img`
  height: 90px;
`;

const MainCoverImageWrapper = styled.div`
  text-align: center;
`;

const MainCover = styled.img`
  height: 600px;
`;

// コンテンツのリスト全体のスタイル(横並び、下部の余白)
const RestaurantsContentsList = styled.div`
  display: flex;
  margin-bottom: 150px;
`;

// レストランのコンテンツ一つ一つのスタイル
const RestaurantsContentWrapper = styled.div`
  width: 300px;
  height: 150px;
  padding: 48px;
`;

const RestaurantsImageNode = styled.img`
  width: 100%;
`;

// レストラン名のテキストを少しだけ調整
const MainText = styled.p`
  color: black;
  font-size: 18px;
`;

// サブテキストを少しだけ調整
const SubText = styled.p`
  color: black;
  font-size: 12px;
`;

export const Restaurants = () => {
  const [state, dispatch] = useReducer(restaurantsReducer, initialState);

  useEffect(() => {
    dispatch({ type: restaurantsActionTypes.FETCHING });
    fetchRestaurants().then((data) =>
      dispatch({
        type: restaurantsActionTypes.FETCH_SUCCESS,
        payload: {
          restaurants: data.restaurants,
        },
      })
    );
  }, []);

  return (
    <>
      <HeaderWrapper>
        <MainLogoImage src={MainLogo} alt="main logo" />
      </HeaderWrapper>

      <MainCoverImageWrapper>
        <MainCover src={MainCoverImage} alt="main cover" />
      </MainCoverImageWrapper>
      {/* {state.restaurantsList.map((restaurant) => (
        <div key={restaurant.id}>{restaurant.name}</div>
      ))} */}
      <RestaurantsContentsList>
        {state.fetchState === REQUEST_STATE.LOADING ? (
          <>
            <Skeleton variant="rect" width={450} height={300} />
            <Skeleton variant="rect" width={450} height={300} />
            <Skeleton variant="rect" width={450} height={300} />
          </>
        ) : (
          state.restaurantsList.map((item) => (
            <Link
              to={`/restaurants/${item.id}/foods`}
              key={item.id}
              style={{ textDecoration: "none" }}
            >
              <RestaurantsContentWrapper>
                <RestaurantsImageNode src={RestaurantImage} />
                <MainText>{item.name}</MainText>
                <SubText>{`配送料：${item.fee}円 ${item.time_required}分`}</SubText>
              </RestaurantsContentWrapper>
            </Link>
          ))
        )}
      </RestaurantsContentsList>
    </>
  );
};
