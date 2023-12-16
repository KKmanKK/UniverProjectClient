import React from "react";
import style from "./LanguageCards.module.scss";

export const LanguageCards = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.main__inner}>
          <div className={`${style.card} ${style.active}`}>
            Русская раскладка
          </div>
          <div className={style.card}>Русская раскладка</div>
          <div className={style.card}>Русская раскладка</div>
        </div>
      </div>
    </>
  );
};
