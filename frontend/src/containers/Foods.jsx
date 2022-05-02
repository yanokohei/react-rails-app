import React, { Fragment } from "react";

export const Foods = ({ match }) => {
  <Foods match={match} />;
  console.log(match);
  return (
    <Fragment>
      フード一覧 <p>restaurantsIdは {match.params.restaurantsId} です</p>
    </Fragment>
  );
};
