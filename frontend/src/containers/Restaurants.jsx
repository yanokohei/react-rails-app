import React, { useEffect, useReducer } from "react";
import styled from "styled-components";

// apis
import { fetchRestaurants } from "../apis/restaurants";

// images
import MainLogo from "../images/logo.png";
import MainCoverImage from "../images/main-cover-image.png";

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

const YanoWrapper = styled.div`
  text-align: center;
`;

const initialState = 0;

function reducer(countState, action) {
  switch (action) {
    case "increment":
      return countState + 1;
    case "decrement":
      return countState - 1;
    case "reset":
      return initialState;
    default:
      return countState;
  }
}

export const Restaurants = () => {
  useEffect(() => {
    fetchRestaurants().then((data) => console.log(data));
  }, []);

  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <HeaderWrapper>
        <MainLogoImage src={MainLogo} alt="main logo" />
      </HeaderWrapper>
      <YanoWrapper>
        <h2>カウント{count}</h2>
        <button onClick={() => dispatch("increment")}>➕</button>
        <button onClick={() => dispatch("decrement")}>➖</button>
      </YanoWrapper>

      <MainCoverImageWrapper>
        <MainCover src={MainCoverImage} alt="main cover" />
      </MainCoverImageWrapper>
    </>
  );
};
