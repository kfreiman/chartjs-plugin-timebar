"use strict";

import * as Chart from "chart.js";

Chart.defaults.timebar = Chart.defaults.bar;

if (Chart.defaults.global.datasets && Chart.defaults.global.datasets.bar) {
  Chart.defaults.global.datasets.timebar = {
    ...Chart.defaults.global.datasets.bar,
    height: 1,
  };
}

export const TimeBar = Chart.controllers.bar.extend({
  dataElementType: Chart.elements.Rectangle,

  update(reset) {
    Chart.controllers.bar.prototype.update.call(this, reset);
    const me = this;
    const meta = me.getMeta();
    const xScale = this._getIndexScale();
    const yScale = this._getValueScale();

    const getModel = (meta, index, defaultValue) => {
      if (!meta) {
        return defaultValue;
      }
      const dataset = this.getDataset();
      const element = dataset.data[index];

      const width =
        xScale.getPixelForValue(element.t[1]) -
        xScale.getPixelForValue(element.t[0]);
      const x = xScale.getPixelForValue(element.t[0]) + width / 2;
      const height =
        yScale.height * (this._config.height / (yScale.max - yScale.min));
      const base = yScale.getPixelForValue(
        dataset.data[index],
        index,
        meta.index
      );

      const y = yScale.getPixelForValue(element.y + this._config.height);

      return { x, y, width, height, base };
    };

    for (let i = 0; i < meta.data.length; i++) {
      const model = getModel(meta, i);
      Object.assign(meta.data[i]._model, model);
    }
  },
});

Chart.controllers.timebar = TimeBar;
