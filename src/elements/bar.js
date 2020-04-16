// import defaults from "../core/core.defaults";
import * as Chart from "chart.js";
// import { Element } from "chart.js";

Chart.defaults.global.elements.timebar = {
  ...Chart.defaults.global.elements.rectangle,
  // borderWidth: 1,
  // outlierRadius: 2,
  // outlierColor: Chart.defaults.global.elements.rectangle.backgroundColor,
  // lowerColor: Chart.defaults.global.elements.rectangle.lowerColor,
  // medianColor: null,
  // itemRadius: 0,
  // itemStyle: "circle",
  // itemBackgroundColor: Chart.defaults.global.elements.rectangle.backgroundColor,
  // itemBorderColor: Chart.defaults.global.elements.rectangle.borderColor,
  // hitPadding: 2,
  // outlierHitRadius: 4,
  // tooltipDecimals: 2,
};

const HorisontalBarOnTime = (Chart.elements.HorisontalBarOnTime = Chart.Element.extend(
  {
    draw() {
      const ctx = this._chart.ctx;
      // const options = this.options;
      // const { inner, outer } = boundingRects(this);
      window.console.log(this);
      ctx.save();

      // if (outer.w !== inner.w || outer.h !== inner.h) {
      //   ctx.beginPath();
      //   ctx.rect(outer.x, outer.y, outer.w, outer.h);
      //   ctx.clip();
      //   ctx.rect(inner.x, inner.y, inner.w, inner.h);
      //   ctx.fillStyle = options.borderColor;
      //   ctx.fill("evenodd");
      // }

      // ctx.fillStyle = options.backgroundColor;
      ctx.fillRect(100, 100, 100, 100);

      ctx.restore();
    },
  }
));

export default HorisontalBarOnTime;
