import React, { useState } from "react";
import style from "./SingUpFrom.module.scss";
import { Link } from "react-router-dom";
import { singUpUser } from "../../Store/actionCreators/user";

export const SingUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitFormHandle = (e: any) => {
    debugger;
    e.preventDefault();
    singUpUser(email, password);
  };

  return (
    <>
      <div className={style.main}>
        <div className={"container"}>
          <div className={style.main__inner}>
            <div className={style.main__title}>Регистрация</div>
            <form
              className={`${style.main__from} ${style.form}`}
              onSubmit={submitFormHandle}
            >
              <div className={style.form__item}>
                <input
                  type="email"
                  required
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  value={email}
                />
                <label htmlFor="">Почта:</label>
              </div>
              <div className={style.form__item}>
                <input
                  type="password"
                  required
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  value={password}
                />
                <label htmlFor="">Пароль:</label>
              </div>
              <Link to={"/login"} className={style.regLink}>
                Авторизация
              </Link>
              <button className={style.form__btn} type="submit">
                Зарегестрироваться
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
