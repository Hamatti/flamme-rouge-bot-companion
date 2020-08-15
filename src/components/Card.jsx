import React from "react";

export const Card = (props) => {
  return (
    <img alt={`${props.image}`} src={props.image} className="card-image" />
  );
};
