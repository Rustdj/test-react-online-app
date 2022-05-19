import React from "react";


export const LayoutCartPage = ({page, getOut}) => {
  
  return (
    <div className="game-page">
      <h1 className="game-page__title">{page.title}</h1>
      <div className="game-page__content">
        <div className="game-page__left"></div>
        <div className="game-page__right">
          <img className="game-page__img" src={page.image} alt="photo" />
          <p>{page.text}</p>
          <p className="secondary-text">Popular tags for this product:</p>
          <div className="game-page__buy-game">
            <button onClick={getOut}>out</button>
          </div>
        </div>
      </div>
    </div>
  );
};
