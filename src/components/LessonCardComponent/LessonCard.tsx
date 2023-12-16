import React from "react";
import style from "./Cards.module.scss";
import { Link } from "react-router-dom";
import { ILesson } from "../../types/lesson";
import { useTypedSelector } from "../../hooks/useReducer";
export const LessonCard = (prop: any) => {
  // const lessonsStore = useTypedSelector((store) => store.lessonReducer);
  // console.log(lessonsStore);
  return (
    <Link to={`/lessons/${prop.id}`} className={style.main}>
      <div className={style.main__inner}>
        <div className={style.main__text}>{prop.name}</div>
        <div className={style.main__countContainer}>
          <div className={style.countContainer__cercle}>
            <div className={style.countContainer__cercle_2}>
              <div className={style.countContainer__number}>1</div>
            </div>
          </div>
        </div>
        <div className={style.main__info}>
          <div className={style.main__time}>00:00</div>
          <div className={style.main__current}>0%</div>
        </div>
      </div>
    </Link>
  );
};
