import React from "react";
import { Navbar } from "../components/Navbar/Navbar";

import { Input } from "../components/InputComponent/InputComp";
import { Keyboard } from "../components/keyboardComponent/Keyboard";

import { useState, useEffect, useMemo } from "react";
import { Timer } from "../components/timerComponent/Timer";
import { Modal } from "../components/modalComponent/Modal";
import { Hand } from "../components/handComponent/Hand";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../hooks/useReducer";
import { useAction } from "../hooks/useAction";
export interface ItemType {
  x: number;
  y: number;
}
export const Lesson = () => {
  const { id } = useParams();

  const lessonsStore = useTypedSelector((store) => store.lessonReducer);

  const { fetchLesson } = useAction();

  let [lessonStrings, setSessonStrings] = useState(""); //основной текст урока

  let [newStr, setNewStr] = useState(""); //перпеменная для основого текста, чтобы можно было ее изменять

  const [currentText, setCurrentText] = useState(""); // текст который показывается в строке

  let [start, setStart] = useState(false); // переменная переключатель, для старта ввода текста

  let [bool, setBool] = useState(false); // переменная для начала работы таймера

  let [current, setCurrent] = useState(0); // переменная для подчета колличесва символов
  let [error, setError] = useState(0);
  let [pause, setPause] = useState(false);
  const [prevText, setPrevText] = useState(""); // перменная для установки текста, который мы уже ввели

  let [time, setTime] = useState(0);

  const [obj, setObj] = useState<ItemType[]>([]);
  const objHandler = (sec: number) => {
    setObj((prev) => [...prev, { x: sec, y: current / (sec / 60) }]);
  };

  //функция для получения обрезанного текста
  const changeString = (lenght: number): string => {
    // debugger;
    let strB = newStr;
    strB = strB.slice(1, strB.length);
    setNewStr(strB);
    return strB.slice(lenght, strB.length);
  };

  useMemo(() => {
    setCurrentText(lessonStrings.slice(0, 28));
    setNewStr(lessonStrings);
    // setStringLen(lessonStrings.length);
  }, [lessonStrings]);

  //Установка гланого текста урока
  const setString = () => {
    setSessonStrings(lessonsStore.selectedLesson.text);
  };

  //Получаем текст урока
  useEffect(() => {
    fetchLesson(Number(id));
  }, []);

  useEffect(() => {
    setString();
  }, [lessonsStore]);

  useEffect(() => {
    console.log(time);
  }, [time]);

  //Изменение основного текста, доабвление к нему новых символов
  const changeText = () => {
    setCurrent((prev) => prev + 1);
    setBool(true);
    // debugger;
    let strb = currentText;
    strb = strb.slice(1, strb.length); //обрезаем оновной текст на один символ
    let n = changeString(strb.length)[0];
    if (n) {
      setCurrentText(strb + n);
    } else {
      setCurrentText(strb + "");
    }
    if (current + 1 === lessonStrings.length) {
      setBool(false);
      changeStart(false);
    }
  };

  //Установка текста, котороый мы уже написали
  const changePrevText = (e: string) => {
    setPrevText((prev) => prev + e);
  };

  //Обрезка текста, который уже написали на один элемент
  if (prevText.length > 30) {
    // debugger;
    setPrevText((prev) => prev.slice(1, prev.length));
  }
  let erorrHandler = () => {
    // debugger;

    let err = error;
    err = err + 1;
    setError(err);
  };
  let pauseHendler = () => {
    setBool(false);
    setPause((prev) => !prev);
  };
  // console.log(pause);
  let changeStart = (boolStart: boolean) => {
    if (boolStart !== start) {
      setStart(false);
    }
  };
  let totalAccuracy = () => {
    let accuracy = 100 - (error * 100) / current;
    return accuracy;
  };
  let totalResult = (): number => {
    console.log(current);
    let result = current / (time / 60);

    return result;
  };

  if (lessonStrings === "") {
    return <div>Loadd.....</div>;
  }

  let viewResult = (): React.JSX.Element => {
    return (
      <Modal
        time={time}
        current={current}
        totalResult={totalResult}
        totalAccuracy={totalAccuracy}
        obj={obj}
      />
    );
  };
  return (
    <>
      <Navbar />
      <div className="lesson_container">
        {(current === lessonStrings.length || pause) && viewResult()}
        <Timer
          bool={bool}
          setTime={setTime}
          time={time}
          objHandler={objHandler}
        />
        <Input text={currentText} prevText={prevText} start={start} />

        <Keyboard
          changeText={changeText}
          changePrevText={changePrevText}
          text={currentText}
          start={start}
          setStart={setStart}
          erorrHandler={erorrHandler}
          error={error}
          pauseHendler={pauseHendler}
        />
      </div>
    </>
  );
};
