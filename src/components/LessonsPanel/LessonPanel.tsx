import React from "react";
import style from "./LessonPanel.module.scss";
import { LanguageCards } from "../LanguageCardsComponent/LanguageCards";
import { LessonCards } from "../LessonCardsComponent/LessonCards";
export const LessonPanel = () => {
  return (
    <div>
      <div className={style.main}>
        <div className="container">
          <div className={style.main__inner}>
            <LanguageCards />
            <LessonCards />
          </div>
        </div>
      </div>
    </div>
  );
};
