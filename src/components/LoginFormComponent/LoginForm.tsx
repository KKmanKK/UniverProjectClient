import React from "react";
import style from "./LoginForm.module.scss";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  return (
    <>
      <div className={style.main}>
        <div className={"container"}>
          <div className={style.main__inner}>
            <div className={style.main__title}>Авторизация</div>
            <form className={`${style.main__from} ${style.form}`}>
              <div className={style.form__item}>
                <input type="text" required />
                <label htmlFor="">Почта:</label>
              </div>
              <div className={style.form__item}>
                <input type="password" required />
                <label htmlFor="">Пароль:</label>
              </div>
              <Link to={"/singUp"} className={style.regLink}>
                Резистрация
              </Link>
              <button className={style.form__btn} type="submit">
                Авторизоваться
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
