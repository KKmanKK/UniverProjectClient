import React, { FC, useEffect, useMemo, useState } from "react";
import style from "./Timer.module.css";

interface ITimerProps {
  bool: Boolean;
  setTime(time: number): void;
  time: number;
  objHandler(sec: number): void;
}
export const Timer: FC<ITimerProps> = ({ bool, setTime, time, objHandler }) => {
  let [myTime, setMyTime] = useState(0);
  let [second, setSecond] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let mySec = time;
  let sec = time;
  let min = 0;
  let [idInterval, setIdInterval] = useState(0);
  useEffect(() => {
    objHandler(second);
  }, [second]);
  let changeTime = () => {
    mySec++;
    sec += 1;
    setSecond(sec);
    setMyTime(mySec);
    if (sec > 60) {
      min++;
      setMinutes(min);
      sec = 0;
      setSecond(0);
    }
  };
  let timer = () => {
    setIdInterval(
      setInterval(() => {
        changeTime();
      }, 1000)
    );
  };
  useMemo(() => {
    if (bool === true) {
      timer();
    } else {
      setTime(myTime);
      clearInterval(idInterval);
    }
  }, [bool]);

  return (
    <div className={style.timer}>{`${
      minutes >= 10 ? `${minutes}` : `0${minutes}`
    }:${second >= 10 ? `${second}` : `0${second}`}`}</div>
  );
};
