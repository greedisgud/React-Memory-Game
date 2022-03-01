import React from "react";

function Card(props) {
  const {
    card: { src, title },
    handleGameLogic,
  } = props;

  return (
    <>
      <img
        className="img"
        src={src}
        alt={title}
        onClick={handleGameLogic.bind(this, title)}
      />
      <h4>{title}</h4>
    </>
  );
}

export default Card;
