"use strict";

import * as Chart from "chart.js";

Chart.defaults.timebar = Chart.defaults.bar;

if (Chart.defaults.global.datasets && Chart.defaults.global.datasets.bar) {
  Chart.defaults.global.datasets.timebar = {
    ...Chart.defaults.global.datasets.bar,
  };
}

export const TimeBar = Chart.controllers.horizontalBar.extend({
  dataElementType: Chart.elements.HorisontalBarOnTime,

  // updateElement(elem, index, reset) {
  //   Chart.controllers.bar.prototype.updateElement.call(
  //     this,
  //     elem,
  //     index,
  //     reset
  //   );
  // },
});

Chart.controllers.timebar = TimeBar;
