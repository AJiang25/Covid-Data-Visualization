export const CFG = {
  displayModeBar: false,
  responsive: true
};

export function buildLayout(overrides = {}) {
  return Object.assign(
    {
      paper_bgcolor: "transparent",
      plot_bgcolor: "#172238",
      font: {
        family: "DM Sans",
        color: "#c4cee0",
        size: 12
      },
      margin: {
        t: 12,
        b: 44,
        l: 52,
        r: 18
      },
      xaxis: {
        gridcolor: "#34435d",
        zerolinecolor: "#34435d",
        tickfont: { size: 11 }
      },
      yaxis: {
        gridcolor: "#34435d",
        zerolinecolor: "#34435d",
        tickfont: { size: 11 }
      },
      hoverlabel: {
        bgcolor: "#172238",
        bordercolor: "#34435d",
        font: {
          family: "DM Sans",
          color: "#f5f7fb",
          size: 12
        }
      },
      showlegend: false
    },
    overrides
  );
}
