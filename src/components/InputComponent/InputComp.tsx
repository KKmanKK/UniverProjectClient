import React from "react";
import { useState } from "react";

import style from "./Input.module.css";

interface IInputProps {
  text: string;
  prevText: string;
  start:boolean
}
export const Input = (props: IInputProps) => {
  

  if (!props.start) {
    return (
      <div className={`${style.wrapper} ${style.textAreaDefault}`}>
        <div className={style.blur}></div>
        <div className={`${style.TextArea} `}></div>
        <div className={style.textItem}>Пробел - СТАРТ</div>
        <div className={style.textItem}>Esc - СТОП/Выход</div>
      </div>
    );
  }
  return (
    <div className={style.wrapper}>
      <div className={style.blur}>
        <div className={style.textItem}>{props.prevText}</div>
      </div>
      <div className={style.TextArea}>
        <div className={style.textItem}>{props.text}</div>
      </div>
    </div>
  );
};
