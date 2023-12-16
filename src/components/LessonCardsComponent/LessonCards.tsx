import React, { useEffect } from "react";
import style from "./Cards.module.scss";
import { LessonCard } from "../LessonCardComponent/LessonCard";
import { useTypedSelector } from "../../hooks/useReducer";
import { useDispatch } from "react-redux";
import { fetchLessons } from "../../Store/actionCreators/lesson";
import { useAction } from "../../hooks/useAction";

export const LessonCards = () => {
  const lessonsStore = useTypedSelector((store) => store.lessonReducer);

  const { fetchLessons } = useAction();
  useEffect(() => {
    fetchLessons();
  }, []);

  return (
    <>
      <div className={style.main}>
        <div className={style.main__inner}>
          {lessonsStore.lessons.map((lesson) => (
            <LessonCard key={lesson.id} {...lesson} />
          ))}
        </div>
      </div>
    </>
  );
};
