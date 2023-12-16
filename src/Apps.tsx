import React from "react";
import { Input } from "./components/InputComponent/InputComp";
import { Keyboard } from "./components/keyboardComponent/Keyboard";
import "./app.css";
// import { useSelector, useDispatch } from "react-redux/es/exports";
import { useState, useEffect, useMemo } from "react";
// import { useTypedSelector } from "./hooks/useReducer";
// import { StringActionTypes } from "./types/strings";
import { Timer } from "./components/timerComponent/Timer";
import { Modal } from "./components/modalComponent/Modal";
import { Hand } from "./components/handComponent/Hand";
// import { Modal } from "./components/modalComponent/Modal";
function App() {
  // let strings: string = useTypedSelector(
  //   (state) => state.stringReducers.strings
  // );
  let [strings, setStrings] = useState("");
  let [newStr, setNewStr] = useState("");
  // let [newColor, setNewColor] = useState("");
  const changeString = (lenght: number): string => {
    let strB = newStr;
    strB = strB.slice(1, strB.length);
    setNewStr(strB);

    // setNewStr((prevText) => prevText.slice(1, newStr.length));
    return strB.slice(lenght, strB.length);
  };
  let [bool, setBool] = useState(false);
  let [current, setCurrent] = useState(0);

  const [text, setText] = useState("");
  const [prevText, setPrevText] = useState("");
  useMemo(() => {
    setText(strings.slice(0, 28));
    setNewStr(strings);
  }, [strings]);
  // const setColorHand = (color: string) => {
  //   setNewColor(color);
  // };
  const setString = () => {
    // dispatch({
    //   type: StringActionTypes.FETCH_STRINGS,
    //   payload:
    //     "вввооо ввово оввоо вовов оовов ааооо ввово оввоо ",
    // });
    setStrings("вввооо ввово оввоо вовов оовов ааооо ввово оввоо ".trim());
    // debugger
    // setText(
    //   "вввооо ввово оввоо вовов оовов ааооо ввово оввоо ".slice(
    //     0,
    //     28
    //   )
    // );
    // setNewStr(
    //   "вввооо ввово оввоо вовов оовов ааооо ввово оввоо "
    // );
  };
  useEffect(() => {
    setString();
    // debugger
  }, []);

  // useEffect(()=>{
  //   debugger
  //   setText(
  //     strings.slice(
  //       0,
  //       28
  //     )
  //   );
  //   setNewStr(
  //     strings
  //   );
  // },[strings])

  const changeText = () => {
    // debugger
    setCurrent((prev) => prev + 1);
    setBool(true);
    let strb = text;
    strb = strb.slice(1, strb.length);
    let n = changeString(strb.length)[0];
    if (n) {
      setText(strb + n);
    } else {
      setText(strb + "");
    }
    if (current + 1 === strings.length) {
      // debugger
      changeStart(false);
    }
  };
  const changePrevText = (e: string) => {
    setPrevText((prev) => prev + e);
  };

  if (prevText.length > 30) {
    // debugger;
    setPrevText((prev) => prev.slice(1, prev.length));
  }

  let [start, setStart] = useState(false);
  let changeStart = (bool: boolean) => {
    if (bool !== start) {
      setStart(false);
    }
  };
  let [time, setTime] = useState(0);

  let totalResult = (): number => {
    return current / (time * 60);
  };

  if (strings.length === 0) {
    return <div>Loadd.....</div>;
  }
  let viewResult = (): React.JSX.Element => {
    return <Modal />;
  };
  return (
    <div className="container">
      {current === strings.length && viewResult()}
      <Timer bool={bool} />
      <Input text={text} prevText={prevText} start={start} />

      <Keyboard
        changeText={changeText}
        changePrevText={changePrevText}
        text={text}
        start={start}
        setStart={setStart}
      />
    </div>
  );
}

export default App;
