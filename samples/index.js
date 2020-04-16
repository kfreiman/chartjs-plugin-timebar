// import _ from "lodash";
import printMe from "./print.js";
import Chart from "chart.js";

import TimeBarPlugin, { TimeBar } from "../src/index.js";

printMe();

window.onload = function () {
  var ctx = document.getElementById("canvas").getContext("2d");
  new Chart(ctx, {
    type: "line",
    plugins: [TimeBarPlugin],
    data: {
      datasets: [
        {
          type: "line",
          backgroundColor: "rgba(40,167,69, 0.2)",
          data: [
            { t: new Date(2020, 3, 2), y: 0 },
            { t: new Date(2020, 3, 3, 10), y: 2 },
            { t: new Date(2020, 3, 4), y: 0 },
          ],
        },
        {
          // test only line as bars
          type: "line",
          fill: false,
          spanGaps: false,
          borderCapStyle: "square",
          borderWidth: 10,
          backgroundColor: "rgba(40,167,69, 0.2)",
          data: [
            { t: new Date(2020, 3, 0, 6), y: 1 },
            { t: new Date(2020, 3, 1), y: 1 },
            { t: new Date(2020, 3, 1), y: null },
            { t: new Date(2020, 3, 1), y: 1 },
            { t: new Date(2020, 3, 1, 5), y: 1 },
            { t: new Date(2020, 3, 1, 5), y: null },
            { t: new Date(2020, 3, 2), y: 1 },
            { t: new Date(2020, 3, 3, 10), y: 1 },
            { t: new Date(2020, 3, 4), y: 1 },
          ],
        },
        {
          // test only time+bar
          type: "bar",
          // type: "bar",
          maxBarThickness: 23.555555,
          barPercentage: 30.555555,
          backgroundColor: "rgba(0, 123, 255, 0.2)",
          data: [
            // { t: [new Date(2020, 3, 1), new Date(2020, 3, 2)], y: 0 },
            { t: new Date(2020, 3, 3), y: 0.5 },
          ],
        },
        {
          // test only time+bar
          type: "timebar",
          // type: "bar",
          maxBarThickness: 23.555555,
          barPercentage: 30.555555,
          backgroundColor: "rgba(255, 123, 0, 0.6)",
          data: [
            // { t: [new Date(2020, 3, 1), new Date(2020, 3, 2)], y: 0 },
            { t: new Date(2020, 3, 1), y: 1 },
            // { t: [new Date(2020, 3, 1), new Date(2020, 3, 2)], y: 1 },
          ],
        },
      ],
    },
    options: {
      animation: false,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            type: "time",
            display: true,
            ticks: {
              // use initial padding_percent
              min: new Date(2020, 3, 0),
              max: new Date(2020, 3, 5),
              maxRotation: 0,
              autoSkip: true,
              autoSkipPadding: 30,
              major: {
                enabled: true,
                fontColor: "#777",
              },
            },
            position: "bottom",
            // offset: true,
            time: {
              displayFormats: {
                millisecond: "HH:mm:ss.SSS",
                second: "HH:mm:ss",
                minute: "HH:mm",
                hour: "MMM D HH:mm",
                day: "MMM D",
              },
            },
          },
        ],
      },
    },
  });

  // new Chart(ctx, {
  //   type: "horizontalBar",
  //   data: data,
  //   options: options,
  // });
};
