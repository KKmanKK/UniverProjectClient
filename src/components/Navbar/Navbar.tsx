import React from "react";
import { FC } from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";
import { useTypedSelector } from "../../hooks/useReducer";

export const Navbar: FC = () => {
  const user = useTypedSelector((state) => state.userReducer);

  return (
    <>
      <header className={`${style.header} `}>
        <div className={"container"}>
          <div className={style.header__inner}>
            <Link to={"/"} className={style.header__logo}>
              My Stamina
            </Link>

            <nav className={`${style.header__info} ${style.list}`}>
              <Link
                to={"/lessons"}
                className={`${style.list__item} ${style.list__link}`}
              >
                Уроки
              </Link>

              {user.isAuth ? (
                <div className={`${style.list__item} ${style.list__link}`}>
                  Выйти
                </div>
              ) : (
                <Link
                  to={"/login"}
                  className={`${style.list__item} ${style.list__link}`}
                >
                  Войти
                </Link>
              )}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
