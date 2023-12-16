import React, { FC, useEffect, useMemo, useState } from "react";
import style from "./Keyboard.module.css";
import { Hand } from "../handComponent/Hand";

interface IPropKeyboard {
  changeText(e: string): void;
  changePrevText(e: string): void;
  text: string;
  start: boolean;
  setStart(isStart: boolean): void;
  erorrHandler(): void;
  error: number;
  pauseHendler(): void;
}

export const Keyboard: FC<IPropKeyboard> = ({
  changeText,
  changePrevText,
  text,
  start,
  setStart,
  erorrHandler,

  pauseHendler,
}) => {
  let bool = false;
  const arr =
    "Ё,1,2,3,4,5,6,7,8,9,0,-,=,Backspace,Tab,Й,Ц,У,К,Е,Н,Г,Ш,Щ,З,Х,Ъ,\\,CapsLock,Ф,Ы,В,А,П,Р,О,Л,Д,Ж,Э,Enter,Shift,Я,Ч,С,М,И,Т,Ь,Б,Ю,.,Shift,Control,OS,Alt, ,Alt,OS,Control"; //все значения на клавиатуре
  const red = "Ё,1,2,Й,Ф,Я";
  const yello = "3,Ц,Ы,Ч";
  const lgreen = "4,У,В,С";
  const blue = "5,6,К,Е,А,П,М,И";
  const pinck = "7,Н,Г,Р,О,Т,Ь";
  const dred = "8,Ш,Л,Б";
  const lyello = "9,Щ,Д,Ю";
  const green = "0,-,=,З,Х,Ъ,\\,Ж,Э,.,";
  const gray = "Backspace,Tab,Shift,Control,OS,Alt,Enter,CapsLock";
  const purple = " ";

  //Функция для отлавливания нажатого символа и проверки его на совпадение с первым символом текста
  const changeChar = (char: string): void => {
    if (text !== "" && char === " " && start === false) {
      //При нажатие на пробел, разрешается ввод текста
      setStart(true);
    }

    // debugger;
    if (char === text[0] && start === true) {
      //если символ равен первому символу в тексте, то вызываются функции для изменения текста
      changePrevText(char);
      changeText(char);
      bool = false;
    }
    if (char !== text[0] && start === true && bool === false) {
      bool = true;
      erorrHandler();
    }

    if (char === "Escape") {
      pauseHendler();
    }

    // console.log(char);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Обработка нажатия клавиши
      // debugger;

      changeChar(event.key);
    };

    // Добавление обработчика события при монтировании компонента
    window.addEventListener("keydown", handleKeyDown);

    // Удаление обработчика события при размонтировании компонента
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [text, start]);

  let [newColor, setNewColor] = useState(""); //переменная для цвета клавиши

  const handleColorChange = (color: string) => {
    if (newColor !== color) {
      setNewColor(color);
    }
  };

  return (
    <div className="keboardLine">
      <div className="hand leftH">
        <div className={`point ${newColor === "red" ? "red" : ""} `}></div>
        <div className={`point ${newColor === "yello" ? "yellow" : ""} `}></div>
        <div
          className={`point ${newColor === "lgreen" ? "lightGreen" : ""}`}
        ></div>
        <div className={`point ${newColor === "blue" ? "blue" : ""} `}></div>
        <div
          className={`point ${newColor === "purple" ? "purpleL" : ""} `}
        ></div>
      </div>
      <div className={style.keyboard}>
        {/* <div className="key"> */}
        {/* <div className={style.line}> */}
        {arr.split(",").map((el) => {
          if (red.split(",").includes(el)) {
            if (start === true && text[0].toUpperCase() === el.toUpperCase()) {
              handleColorChange("red");
            }
            return (
              <div
                className={`${style.btn} ${style.btn__red} ${
                  start === true && text[0].toUpperCase() === el.toUpperCase()
                    ? style.active
                    : ""
                }`}
              >
                {el}
              </div>
            );
            // setBorder(`${style.btn} ${style.btn__red}`);
          }
          if (yello.split(",").includes(el)) {
            if (start === true && text[0].toUpperCase() === el.toUpperCase()) {
              handleColorChange("yello");
            }
            return (
              <div
                className={`${style.btn} ${style.btn__yellow} ${
                  start === true && text[0].toUpperCase() === el.toUpperCase()
                    ? style.active
                    : ""
                }`}
              >
                {el}
              </div>
            );
          }
          if (lgreen.split(",").includes(el)) {
            if (start === true && text[0].toUpperCase() === el.toUpperCase()) {
              handleColorChange("lgreen");
            }
            return (
              <div
                className={`${style.btn}  ${style.btn__lightGreen} ${
                  start === true && text[0].toUpperCase() === el.toUpperCase()
                    ? style.active
                    : ""
                }`}
              >
                {el}
              </div>
            );
          }
          if (blue.split(",").includes(el)) {
            if (start === true && text[0].toUpperCase() === el.toUpperCase()) {
              handleColorChange("blue");
            }
            return (
              <div
                className={`${style.btn} ${style.btn__blue} ${
                  start === true && text[0].toUpperCase() === el.toUpperCase()
                    ? style.active
                    : ""
                }`}
              >
                {el}
              </div>
            );
          }
          if (pinck.split(",").includes(el)) {
            if (start === true && text[0].toUpperCase() === el.toUpperCase()) {
              handleColorChange("pinck");
            }
            return (
              <div
                className={`${style.btn} ${style.btn__pinc} ${
                  start === true && text[0].toUpperCase() === el.toUpperCase()
                    ? style.active
                    : ""
                }`}
              >
                {el}
              </div>
            );
          }
          if (dred.split(",").includes(el)) {
            if (start === true && text[0].toUpperCase() === el.toUpperCase()) {
              handleColorChange("dred");
            }
            return (
              <div
                className={`${style.btn} ${style.btn__darkRed} ${
                  start === true && text[0].toUpperCase() === el.toUpperCase()
                    ? style.active
                    : ""
                }`}
              >
                {el}
              </div>
            );
          }
          if (lyello.split(",").includes(el)) {
            if (start === true && text[0].toUpperCase() === el.toUpperCase()) {
              handleColorChange("lyello");
            }
            return (
              <div
                className={`${style.btn} ${style.btn__lightYellow} ${
                  start === true && text[0].toUpperCase() === el.toUpperCase()
                    ? style.active
                    : ""
                }`}
              >
                {el}
              </div>
            );
          }
          if (green.split(",").includes(el)) {
            if (start === true && text[0].toUpperCase() === el.toUpperCase()) {
              handleColorChange("green");
            }
            if (el === "\\") {
              return (
                <div
                  className={`${style.btn} ${style.btn__green} ${
                    style.greenWidth
                  } ${
                    start === true && text[0].toUpperCase() === el.toUpperCase()
                      ? style.active
                      : ""
                  }`}
                >
                  {el}
                </div>
              );
            }
            return (
              <div
                className={`${style.btn} ${style.btn__green} ${
                  start === true && text[0].toUpperCase() === el.toUpperCase()
                    ? style.active
                    : ""
                }`}
              >
                {el}
              </div>
            );
          }
          if (gray.split(",").includes(el)) {
            if (el === "Backspace") {
              return (
                <div
                  className={`${style.btn} ${style.btn__gray} ${style.back} ${
                    start === true && text[0].toUpperCase() === el.toUpperCase()
                      ? style.active
                      : ""
                  }`}
                >
                  {el}
                </div>
              );
            }
            if (el === "Tab") {
              return (
                <div
                  className={`${style.btn} ${style.btn__gray} ${style.tab} ${
                    start === true && text[0].toUpperCase() === el.toUpperCase()
                      ? style.active
                      : ""
                  }`}
                >
                  {el}
                </div>
              );
            }
            if (el === "Shift") {
              return (
                <div
                  className={`${style.btn} ${style.btn__gray} ${style.shiftL} ${
                    start === true && text[0].toUpperCase() === el.toUpperCase()
                      ? style.active
                      : ""
                  }`}
                >
                  {el}
                </div>
              );
            }
            if (el === "CapsLock") {
              return (
                <div
                  className={`${style.btn} ${style.btn__gray} ${style.caps} ${
                    start === true && text[0].toUpperCase() === el.toUpperCase()
                      ? style.active
                      : ""
                  }`}
                >
                  {el}
                </div>
              );
            }

            if (el === "Enter") {
              return (
                <div
                  className={`${style.btn} ${style.btn__gray} ${style.enter} ${
                    start === true && text[0].toUpperCase() === el.toUpperCase()
                      ? style.active
                      : ""
                  }`}
                >
                  {el}
                </div>
              );
            }
            return (
              <div
                className={`${style.btn} ${style.btn__gray} ${
                  start === true && text[0].toUpperCase() === el.toUpperCase()
                    ? style.active
                    : ""
                }`}
              >
                {el}
              </div>
            );
          }
          if (purple.includes(el)) {
            if (start === true && text[0].toUpperCase() === el.toUpperCase()) {
              handleColorChange("purple");
            }
            return (
              <div
                className={`${style.btn} ${style.btn__purple} ${
                  start === true && text[0].toUpperCase() === el.toUpperCase()
                    ? style.active
                    : ""
                }`}
              >
                {el}
              </div>
            );
          }
          if (start === false) {
            handleColorChange("");
          }
        })}
      </div>
      <div className="hand rightH ">
        <div
          className={`point ${newColor === "purple" ? "purpleR" : ""} `}
        ></div>
        <div className={`point ${newColor === "pinck" ? "pinck" : ""}`}></div>
        <div className={`point ${newColor === "lgreen" ? "" : ""} `}></div>
        <div className={`point ${newColor === "lgreen" ? "" : ""} `}></div>
        <div className={`point ${newColor === "lgreen" ? "" : ""} `}></div>
      </div>
    </div>
  );
};
