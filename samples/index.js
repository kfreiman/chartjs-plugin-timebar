import Chart from "chart.js";

import TimeBarPlugin from "../src/index.js";

window.onload = function () {
  var ctx = document.getElementById("canvas").getContext("2d");
  new Chart(ctx, {
    type: "line",
    plugins: [TimeBarPlugin],
    data: {
      datasets: [
        {
          type: "timebar",
          height: 0.5,
          backgroundColor: "rgba(255, 123, 0, 0.6)",
          data: [
            {
              t: [new Date(2020, 3, 1), new Date(2020, 3, 2, 22)],
              y: 0.5,
            },
            {
              t: [new Date(2020, 3, 3), new Date(2020, 3, 4)],
              y: 0.5,
            },
          ],
        },
      ],
    },
    options: {
      animation: false,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0.3,
              max: 1.5,
            },
          },
        ],
        xAxes: [
          {
            type: "time",
            display: true,
            ticks: {
              min: new Date(2020, 3, 0).valueOf(),
              max: new Date(2020, 3, 5).valueOf(),
              maxRotation: 0,
              autoSkip: true,
              autoSkipPadding: 30,
              major: {
                enabled: true,
                fontColor: "#777",
              },
            },
            position: "bottom",
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
};
