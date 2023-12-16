import React from "react";
import style from "./Info.module.scss";
import { Link } from "react-router-dom";

export const Info = () => {
  return (
    <>
      <div className={style.main}>
        <div className="container">
          <div className={style.main__inner}>
            <div className={style.main__info}>
              <div className={style.main__text}>
                <div className={style.main__title}>Мой курсовой проект</div>
                <div className={style.main__textInfo}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur temporibus expedita dolor eligendi commodi
                  mollitia? Dolor tenetur obcaecati aperiam, libero temporibus
                  nostrum officiis consequatur sapiente eos repellat impedit
                  placeat dicta.
                </div>
              </div>
              <div className={style.main__btns}>
                <Link to={"/lessons"} className={style.main__btn}>
                  Начать обучение
                </Link>
              </div>
            </div>
            <div className={style.main__img}></div>
          </div>
        </div>
      </div>
    </>
  );
};
