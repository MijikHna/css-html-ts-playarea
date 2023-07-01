const getData = (): { x: string; y: string; heat: number }[] => [
  {
    x: "Monday",
    y: "Midnight–3:59 a.m.",
    heat: 705,
  },
  {
    x: "Monday",
    y: "4:00–7:59 a.m.",
    heat: 713,
  },
  {
    x: "Monday",
    y: "8:00–11:59 a.m.",
    heat: 657,
  },
  {
    x: "Monday",
    y: "Noon–3:59 p.m.",
    heat: 957,
  },
  {
    x: "Monday",
    y: "4:00–7:59 p.m.",
    heat: 1137,
  },
  {
    x: "Monday",
    y: "8:00–11:59 p.m.",
    heat: 956,
  },
  {
    x: "Tuesday",
    y: "Midnight–3:59 a.m.",
    heat: 482,
  },
  {
    x: "Tuesday",
    y: "4:00–7:59 a.m.",
    heat: 641,
  },
  {
    x: "Tuesday",
    y: "8:00–11:59 a.m.",
    heat: 631,
  },
  {
    x: "Tuesday",
    y: "Noon–3:59 p.m.",
    heat: 905,
  },
  {
    x: "Tuesday",
    y: "4:00–7:59 p.m.",
    heat: 1137,
  },
  {
    x: "Tuesday",
    y: "8:00–11:59 p.m.",
    heat: 986,
  },
  {
    x: "Wednesday",
    y: "Midnight–3:59 a.m.",
    heat: 465,
  },
  {
    x: "Wednesday",
    y: "4:00–7:59 a.m.",
    heat: 616,
  },
  {
    x: "Wednesday",
    y: "8:00–11:59 a.m.",
    heat: 627,
  },
  {
    x: "Wednesday",
    y: "Noon–3:59 p.m.",
    heat: 914,
  },
  {
    x: "Wednesday",
    y: "4:00–7:59 p.m.",
    heat: 1159,
  },
  {
    x: "Wednesday",
    y: "8:00–11:59 p.m.",
    heat: 1066,
  },
  {
    x: "Thursday",
    y: "Midnight–3:59 a.m.",
    heat: 584,
  },
  {
    x: "Thursday",
    y: "4:00–7:59 a.m.",
    heat: 718,
  },
  {
    x: "Thursday",
    y: "8:00–11:59 a.m.",
    heat: 660,
  },
  {
    x: "Thursday",
    y: "Noon–3:59 p.m.",
    heat: 966,
  },
  {
    x: "Thursday",
    y: "4:00–7:59 p.m.",
    heat: 1161,
  },
  {
    x: "Thursday",
    y: "8:00–11:59 p.m.",
    heat: 1186,
  },
  {
    x: "Friday",
    y: "Midnight–3:59 a.m.",
    heat: 715,
  },
  {
    x: "Friday",
    y: "4:00–7:59 a.m.",
    heat: 747,
  },
  {
    x: "Friday",
    y: "8:00–11:59 a.m.",
    heat: 738,
  },
  {
    x: "Friday",
    y: "Noon–3:59 p.m.",
    heat: 1056,
  },
  {
    x: "Friday",
    y: "4:00–7:59 p.m.",
    heat: 1426,
  },
  {
    x: "Friday",
    y: "8:00–11:59 p.m.",
    heat: 1631,
  },
  {
    x: "Saturday",
    y: "Midnight–3:59 a.m.",
    heat: 1383,
  },
  {
    x: "Saturday",
    y: "4:00–7:59 a.m.",
    heat: 641,
  },
  {
    x: "Saturday",
    y: "8:00–11:59 a.m.",
    heat: 635,
  },
  {
    x: "Saturday",
    y: "Noon–3:59 p.m.",
    heat: 1034,
  },
  {
    x: "Saturday",
    y: "4:00–7:59 p.m.",
    heat: 1400,
  },
  {
    x: "Saturday",
    y: "8:00–11:59 p.m.",
    heat: 1593,
  },
  {
    x: "Sunday",
    y: "Midnight–3:59 a.m.",
    heat: 1486,
  },
  {
    x: "Sunday",
    y: "4:00–7:59 a.m.",
    heat: 695,
  },
  {
    x: "Sunday",
    y: "8:00–11:59 a.m.",
    heat: 564,
  },
  {
    x: "Sunday",
    y: "Noon–3:59 p.m.",
    heat: 932,
  },
  {
    x: "Sunday",
    y: "4:00–7:59 p.m.",
    heat: 1292,
  },
  {
    x: "Sunday",
    y: "8:00–11:59 p.m.",
    heat: 1211,
  },
];

import "anychart";

// Chart 1
const chart1 = anychart.heatMap(getData());

chart1.title("Fatal Car Crashes in U.S. in 2021 by Time of Day and Day of Week");

chart1.container("heatmap-container-1");
chart1.draw();

// Chart 2
const chart2: anychart.charts.HeatMap = anychart.heatMap(getData());

const colorScale = anychart.scales.ordinalColor();

colorScale.ranges([
  { less: 500, color: "#B0D8A4" },
  { from: 500, to: 900, color: "#FEE191" },
  { from: 900, to: 1300, color: "#FD8060" },
  { greater: 1300, color: "#CC333F" },
]);

chart2.colorScale(colorScale);

chart2
  .hovered()
  .labels(false)
  .fill(function(this: any): string {
    return <string>anychart.color.darken(this.sourceColor, 0.25);
  });

chart2.labels().useHtml(true);

// configure the labels
chart2.labels().format(function(this: any) {
  const heat: number = this.heat;
  if (heat < 500) return "Low";
  if (heat < 1000) return "Medium";
  if (heat < 1500) return "<span style='font-weight:bold'>High</span>";
  if (heat >= 1500) return "<span style='font-weight:bold'>Extreme</span>";
});

chart2.tooltip().title().useHtml(true);
chart2
  .tooltip()
  .useHtml(true)
  .titleFormat(function(this: any): string {
    return "Accidents - " + this.heat;
  })
  .format(function(this: any): string {
    return `<span style="color: #CECECE">Day: </span> ${this.x} <br/> <span style="color: #CECECE">Time: </span> + ${this.y}`;
  });

chart2
  .title()
  .enabled(true)
  .text("Fatal Car Crashes in U.S. in 2021 by Time of Day and Day of Week")
  .padding([0, 20, 20, 0]);

chart2.xAxis().stroke(undefined);
chart2.yAxis().stroke(undefined);
chart2.yAxis().labels().padding([0, 10, 0, 0]);
chart2.xAxis().labels().padding([0, 0, 10, 0]);

chart2.container("heatmap-container-2");
chart2.draw();
