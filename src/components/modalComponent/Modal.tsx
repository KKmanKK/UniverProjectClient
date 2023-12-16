import React, { useEffect, useState } from "react";
import style from "./Modal.module.scss";
import { Line } from "react-chartjs-2";
import { ItemType } from "../../pages/Lesson";
import {} from "chart.js";
import {
  Chart as ChartJs,
  // LineElement,
  // PointElement,
  // CategoryScale,
  // Tooltip,
  // Legend,
  registerables,
} from "chart.js";
import { rand } from "../../assets/js/utils";

interface IModalProps {
  totalResult(): number;
}
ChartJs.register(...registerables);

export const Modal = (props: any) => {
  let [charResult, setCharResult] = useState(0);
  useEffect(() => {}, []);

  const generateLabels = (): ItemType[] => {
    let arr: number[] = [];
    for (let i = 1; i < props.time + 1; i++) {
      arr.push(i);
    }
    // console.log(props.obj);
    return props.obj;
  };

  const generateData = () => {
    let arr: number[] = [];

    for (let i = 0; i < 100; i++) {
      arr.push(i);
    }

    return arr;
  };
  const data = {
    labels: generateLabels().map((el) => el.x),
    datasets: [
      {
        label: "Dataset",
        data: generateData(),
        borderColor: "rgb(212, 19, 106)",
        backgroundColor: "rgba(212, 19, 106, 0.3)",
        fill: "start",
      },
    ],
  };

  var options = {
    scales: {
      x: {
        // type: "linear",
        ticks: {
          autoSkip: false,
          callback: function (value: any, index: any, values: any) {
            // console.log(
            //   (data.labels as ItemType[]).filter((el) => el !== undefined)
            // );
            // console.log( generateLabels().map((el) => el.x)[index]);
            console.log(value);
            return generateLabels().map((el) => el.x)[index] !== undefined
              ? generateLabels().map((el) => el.x)[index]
              : "";
          },
        },
      },
      //   y: {
      //     ticks: {
      //       callback: function (value: any, index: any, values: any) {
      //         return value;
      //       },
      //     },
      //   },
    },
  };

  return (
    <div className={style.popap}>
      <div className={style.modal}>
        <div className={style.resultName}>Результаты</div>
        <div className={style.result}>
          <div className={style.resultList}>
            <div className={style.resultItem}>
              <div>logo</div>
              <div className={style.resultText}>
                <span>Время</span>
                <span>{props.time}</span>
              </div>
            </div>
            <div className={style.resultItem}>
              <div>logo</div>
              <div className={style.resultText}>
                <span>Набрано</span>
                <span>{props.current}</span>
              </div>
            </div>
            <div className={style.resultItem}>
              <div>logo</div>
              <div className={style.resultText}>
                <span>Скорость</span>
                <span>{props.totalResult()}</span>
              </div>
            </div>
            <div className={style.resultItem}>
              <div>logo</div>
              <div className={style.resultText}>
                <span>Точность</span>
                <span>{props.totalAccuracy()}</span>
              </div>
            </div>
          </div>
          <div className={style.resultMetriks}>
            <Line data={data} options={options}></Line>
          </div>
        </div>
        <div className={style.btns}>
          <button type="button">Повторить</button>
          <button type="button">Следующий</button>
          <button type="button">Завершить</button>
        </div>
      </div>
    </div>
  );
};
