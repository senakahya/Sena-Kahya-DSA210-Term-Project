const sections = [...document.querySelectorAll("main section, header.hero")];
const revealSections = [...document.querySelectorAll(".reveal")];
const navLinks = [...document.querySelectorAll(".navbar a")];

const representationCharts = {
  roles: {
    title: "Female directors are associated with stronger on-screen visibility",
    note:
      "The left panel shows how rare women are in key creative roles. The right panel compares movies with and without a female director.",
    badge: "Roles + impact",
    type: "combo",
    takeaway:
      "Female directors are uncommon, but movies with a female director show higher female presence among top cast members and leads.",
    roles: [
      { label: "Female<br>writer", hoverLabel: "Female writer", value: 6.4 },
      { label: "Female<br>producer", hoverLabel: "Female producer", value: 5.7 },
      { label: "Female<br>director", hoverLabel: "Female director", value: 4.1 },
      { label: "Female<br>editor", hoverLabel: "Female editor", value: 4.0 },
      { label: "Female<br>cinematographer", hoverLabel: "Female cinematographer", value: 0.7 },
    ],
    comparisons: [
      {
        title: "Women among<br>top-5 cast",
        hoverLabel: "Women among top-5 cast",
        femaleDirector: 49.3,
        noFemaleDirector: 34.5,
        difference: 14.8,
      },
      {
        title: "Movies with<br>female lead",
        hoverLabel: "Movies with female lead",
        femaleDirector: 47.1,
        noFemaleDirector: 20.2,
        difference: 26.9,
      },
    ],
  },
  distribution: {
    title: "Most movies stay below balanced top-cast representation",
    note: "Bar chart of movies by female share among the top-5 billed cast members. The median is 33.3%.",
    badge: "Bar chart",
    type: "histogram",
    median: 33.3,
    takeaway:
      "Top-billed casts are often far from gender-balanced; the median movie has about one-third women among the top five cast members.",
    bins: [
      { label: "0-20%", start: 0, end: 20, center: 10, count: 8958 },
      { label: "20-40%", start: 20, end: 40, center: 30, count: 11770 },
      { label: "40-60%", start: 40, end: 60, center: 50, count: 11103 },
      { label: "60-80%", start: 60, end: 80, center: 70, count: 5008 },
      { label: "80-100%", start: 80, end: 100, center: 90, count: 2838 },
    ],
  },
  genres: {
    title: "Representation changes clearly across genres",
    note:
      "Average female share among the top-5 billed cast members by primary genre. The y-axis uses the full 0–100% range.",
    badge: "Genre view",
    type: "bar",
    takeaway:
      "Representation is not evenly distributed across genres; romance, horror, and drama show higher top-cast female share than action and documentary.",
    bars: [
      { label: "Romance", value: 44.1 },
      { label: "Horror", value: 40.8 },
      { label: "Drama", value: 39.8 },
      { label: "Comedy", value: 36.2 },
      { label: "Thriller", value: 35.5 },
      { label: "Action", value: 25.9 },
      { label: "Documentary", value: 19.8 },
    ],
  },
  budget: {
    title: "Budget level does not guarantee stronger representation",
    note:
      "Movies with valid budget and revenue data are grouped into budget quartiles. Each color shows a different representation measure.",
    badge: "Budget context",
    type: "budget",
    takeaway:
      "The highest-budget group has the lowest female director share and lower top-5 female cast share, while female crew ratio increases modestly.",
    groups: ["Q1 lowest", "Q2", "Q3", "Q4 highest"],
    series: [
      { name: "Female director", values: [4.4, 6.5, 3.7, 2.9], color: "#6f9edc" },
      { name: "Top-5 female cast", values: [34.3, 35.8, 34.6, 29.7], color: "#b279d6" },
      { name: "Female crew ratio", values: [13.8, 18.2, 19.2, 19.3], color: "#5bb8a8" },
    ],
  },
};

const successMetrics = [
  {
    key: "imdbRating",
    label: "IMDb rating",
    family: "Rating",
    baseline: 6.639,
    sampleKey: "movies",
    sampleLabel: "Movies",
    decimals: 2,
    axisRange: [0, 10],
  },
  {
    key: "logImdbVotes",
    label: "Log IMDb votes",
    family: "Engagement",
    baseline: 10.206,
    sampleKey: "movies",
    sampleLabel: "Movies",
    decimals: 3,
    axisRange: [0, 14],
  },
  {
    key: "medianLogRevenue",
    label: "Log revenue",
    family: "Financial",
    baseline: 17.214,
    sampleKey: "financialMovies",
    sampleLabel: "Financial-data movies",
    decimals: 3,
    axisRange: [0, 20],
  },
];

const successCharts = {
  cast: {
    title: "Success outcomes by top-5 female cast share",
    note:
      "Movies are grouped by the female share among the top-5 billed cast members. Y-axes start at zero; dashed lines show full-sample reference values.",
    badge: "Cast",
    takeaway:
      "Cast representation is compared with rating, engagement, and financial outcomes separately, without turning success into one combined score.",
    groups: [
      {
        label: "0-20%",
        color: "#9eb7dd",
        movies: 2424,
        financialMovies: 2079,
        values: { imdbRating: 6.786, logImdbVotes: 10.709, medianLogRevenue: 17.437 },
      },
      {
        label: "20-40%",
        color: "#8fb7de",
        movies: 2450,
        financialMovies: 1927,
        values: { imdbRating: 6.601, logImdbVotes: 10.398, medianLogRevenue: 17.221 },
      },
      {
        label: "40-60%",
        color: "#7fb8d8",
        movies: 1650,
        financialMovies: 962,
        values: { imdbRating: 6.573, logImdbVotes: 9.92, medianLogRevenue: 16.911 },
      },
      {
        label: "60-80%",
        color: "#71b8c9",
        movies: 677,
        financialMovies: 256,
        values: { imdbRating: 6.47, logImdbVotes: 9.508, medianLogRevenue: 16.9 },
      },
      {
        label: "80-100%",
        color: "#63b8b8",
        movies: 364,
        financialMovies: 96,
        values: { imdbRating: 6.476, logImdbVotes: 8.932, medianLogRevenue: 16.175 },
      },
    ],
    regression: {
      title: "Movie-level regression trends by top-5 female cast share",
      note: "Dots are movie-level observations from the full available data; lines are fitted regression trends.",
      xTitle: "Top-5 female cast share (%)",
      xRange: [0, 100],
      tickvals: [0, 20, 40, 60, 80, 100],
      ticktext: ["0%", "20%", "40%", "60%", "80%", "100%"],
      pointsX: [10, 30, 50, 70, 90],
      lines: {
        imdbRating: { x: [0, 100], y: [6.816, 6.352], n: 7565 },
        logImdbVotes: { x: [0, 100], y: [10.755, 9.431], n: 7565 },
        medianLogRevenue: { x: [0, 100], y: [16.935, 16.466], n: 5320 },
      },
      stats: {
        imdbRating: { rho: -0.13, n: 7565 },
        logImdbVotes: { rho: -0.19, n: 7565 },
        medianLogRevenue: { rho: -0.06, n: 5320 },
      },
    },
  },
  director: {
    title: "Success outcomes by female director presence",
    note:
      "Each panel uses that metric's natural units with the y-axis starting at zero so small gaps are not exaggerated. Dashed lines show full-sample reference values.",
    badge: "Director",
    takeaway:
      "Female-directed movies show a different success profile: engagement is higher, while ratings and financial outcomes need a more careful interpretation.",
    groups: [
      {
        label: "No female director",
        color: "#b8c4d8",
        movies: 7201,
        financialMovies: 5144,
        values: { imdbRating: 6.653, logImdbVotes: 10.249, medianLogRevenue: 17.224 },
      },
      {
        label: "Female director",
        color: "#5d8fd7",
        movies: 508,
        financialMovies: 231,
        values: { imdbRating: 6.446, logImdbVotes: 9.601, medianLogRevenue: 16.693 },
      },
    ],
    regression: {
      title: "Movie-level regression trends by female director presence",
      note: "Dots are movie-level observations from the full available data; the fitted line connects movies without and with a female director.",
      xTitle: "Female director presence",
      xRange: [-0.15, 1.15],
      tickvals: [0, 1],
      ticktext: ["No female<br>director", "Female<br>director"],
      pointsX: [0, 1],
      lines: {
        imdbRating: { x: [0, 1], y: [6.653, 6.446], n: 7709 },
        logImdbVotes: { x: [0, 1], y: [10.249, 9.601], n: 7709 },
        medianLogRevenue: { x: [0, 1], y: [16.768, 16.184], n: 5375 },
      },
      stats: {
        imdbRating: { rho: -0.07, n: 7709 },
        logImdbVotes: { rho: -0.09, n: 7709 },
        medianLogRevenue: { rho: -0.05, n: 5375 },
      },
    },
  },
  crew: {
    title: "Success outcomes by female crew ratio",
    note:
      "Movies are grouped by female crew ratio. Y-axes start at zero; dashed lines show full-sample reference values.",
    badge: "Crew",
    takeaway:
      "Crew representation is read separately for rating, engagement, and financial outcomes; the trend is strongest for engagement and log revenue.",
    groups: [
      {
        label: "0-5%",
        color: "#b8c4d8",
        movies: 2818,
        financialMovies: 1586,
        values: { imdbRating: 6.673, logImdbVotes: 9.531, medianLogRevenue: 16.402 },
      },
      {
        label: "5-15%",
        color: "#8fb7de",
        movies: 1061,
        financialMovies: 970,
        values: { imdbRating: 6.786, logImdbVotes: 11.045, medianLogRevenue: 17.577 },
      },
      {
        label: "15-30%",
        color: "#55b7a5",
        movies: 1813,
        financialMovies: 1612,
        values: { imdbRating: 6.676, logImdbVotes: 11.173, medianLogRevenue: 17.861 },
      },
      {
        label: "30%+",
        color: "#b279d6",
        movies: 1599,
        financialMovies: 1052,
        values: { imdbRating: 6.496, logImdbVotes: 10.286, medianLogRevenue: 17.289 },
      },
    ],
    regression: {
      title: "Movie-level regression trends by female crew ratio",
      note: "Dots are movie-level observations from the full available data; lines are fitted regression trends.",
      xTitle: "Female crew ratio (%)",
      xRange: [0, 100],
      tickvals: [0, 20, 40, 60, 80, 100],
      ticktext: ["0%", "20%", "40%", "60%", "80%", "100%"],
      pointsX: [2.5, 10, 22.5, 65],
      lines: {
        imdbRating: { x: [0, 100], y: [6.72, 6.339], n: 7291 },
        logImdbVotes: { x: [0, 100], y: [10.271, 10.572], n: 7291 },
        medianLogRevenue: { x: [0, 100], y: [16.678, 17.476], n: 5220 },
      },
      stats: {
        imdbRating: { rho: -0.09, n: 7291 },
        logImdbVotes: { rho: 0.24, n: 7291 },
        medianLogRevenue: { rho: 0.18, n: 5220 },
      },
    },
  },
};

const mlFeatureGroups = [
  { label: "Controls only", shortLabel: "Controls only" },
  { label: "Controls + cast", shortLabel: "Controls + cast" },
  { label: "Controls + crew", shortLabel: "Controls + crew" },
  { label: "Controls + cast + crew + Bechdel", shortLabel: "Controls + cast + crew<br>+ Bechdel" },
];

const mlOutcomeResults = {
  rating: {
    badge: "Rating",
    title: "High IMDb rating prediction",
    note: "Random Forest and Logistic Regression are compared across the same feature groups.",
    task: "High IMDb rating",
    bestGroup: "Controls only",
    bestModel: "Random Forest",
    baselineScore: 0.816,
    range: [0.773, 0.882],
    result:
      "Controls-only models achieve the highest ROC-AUC scores for IMDb rating prediction. Adding cast, crew, and Bechdel representation variables provides little to no improvement in predictive performance.",
    scores: {
      "Random Forest": [0.816, 0.811, 0.814, 0.812],
      "Logistic Regression": [0.808, 0.812, 0.81, 0.814],
    },
  },
  engagement: {
    badge: "Engagement",
    title: "High popularity prediction",
    note: "Popularity prediction improves most when cast, crew, and Bechdel variables are combined.",
    task: "High popularity",
    bestGroup: "Controls + cast + crew + Bechdel",
    bestModel: "Logistic Regression",
    baselineScore: 0.799,
    range: [0.758, 0.91],
    result:
      "Representation-related variables significantly improve popularity prediction, with the full feature set achieving the highest ROC-AUC performance.",
    scores: {
      "Logistic Regression": [0.799, 0.814, 0.82, 0.845],
      "Random Forest": [0.795, 0.814, 0.818, 0.842],
    },
  },
  financial: {
    badge: "Financial Outcomes",
    title: "Profitability prediction",
    note: "Financial prediction uses the valid budget and revenue subset.",
    task: "Profitability",
    bestGroup: "Controls + cast + crew + Bechdel",
    bestModel: "Random Forest",
    baselineScore: 0.69,
    range: [0.59, 0.805],
    result:
      "Adding cast, crew, and Bechdel variables together produces the best profitability prediction results, increasing ROC-AUC from 0.690 to 0.744.",
    scores: {
      "Random Forest": [0.69, 0.688, 0.696, 0.744],
      "Logistic Regression": [0.635, 0.622, 0.634, 0.713],
    },
  },
};

const mlModelColors = {
  "Random Forest": "#c48955",
  "Logistic Regression": "#3d6c8c",
};

const mlAddedValueData = [
  {
    name: "cast",
    color: "#84a889",
    values: [-0.004, -0.003, 0.015],
  },
  {
    name: "crew",
    color: "#3d6c8c",
    values: [-0.002, 0.005, 0.02],
  },
  {
    name: "cast + crew + Bechdel",
    color: "#c48955",
    values: [-0.002, 0.054, 0.046],
  },
];

function renderRepresentationChart(chartKey) {
  const chart = representationCharts[chartKey];
  const container = document.querySelector("#representation-plot");
  if (!chart || !container) return;

  document.querySelector("#representation-chart-title").textContent = chart.title;
  document.querySelector("#representation-chart-note").textContent = chart.note;
  document.querySelector("#representation-chart-badge").textContent = chart.badge;
  document.querySelector("#representation-chart-takeaway").textContent = chart.takeaway;

  if (!window.Plotly) {
    container.innerHTML = "<p>Interactive chart loading...</p>";
    return;
  }

  const baseLayout = {
    paper_bgcolor: "white",
    plot_bgcolor: "#eef3f9",
    font: {
      family: "Inter, Roboto, Helvetica, Arial, sans-serif",
      color: "#1d2430",
      size: 13,
    },
    margin: { t: 24, r: 34, b: 96, l: 72 },
    hoverlabel: {
      bgcolor: "#263142",
      bordercolor: "#263142",
      font: { color: "white" },
    },
    xaxis: {
      title: "",
      ticksuffix: "%",
      range: [0, 100],
      gridcolor: "rgba(31,42,58,0.12)",
      zeroline: false,
    },
    yaxis: {
      title: "",
      gridcolor: "rgba(31,42,58,0.08)",
      automargin: true,
    },
    showlegend: false,
    bargap: 0.28,
  };

  const config = {
    responsive: true,
    displaylogo: false,
    modeBarButtonsToRemove: ["lasso2d", "select2d"],
  };

  if (chart.type === "histogram") {
    Plotly.react(
      container,
      [
        {
          x: chart.bins.map((bin) => bin.center),
          y: chart.bins.map((bin) => bin.count),
          type: "bar",
          name: "Number of movies",
          width: 18,
          marker: {
            color: ["#8fb7de", "#7fb8d8", "#71b8c9", "#63b8b8", "#55b7a5"],
            line: { color: "rgba(31,42,58,0.08)", width: 1 },
          },
          text: chart.bins.map((bin) => bin.count.toLocaleString()),
          textposition: "top center",
          customdata: chart.bins.map((bin) => bin.label),
          hovertemplate: "Top-5 female cast share: %{customdata}<br>Number of movies: %{y:,}<extra></extra>",
        },
      ],
      {
        ...baseLayout,
        title: { text: "" },
        margin: { t: 58, r: 34, b: 110, l: 84 },
        xaxis: {
          title: "Top-5 female cast share (%)",
          range: [0, 100],
          tickvals: [0, 20, 40, 60, 80, 100],
          ticktext: ["0%", "20%", "40%", "60%", "80%", "100%"],
          ticksuffix: "",
          automargin: true,
          gridcolor: "rgba(31,42,58,0.12)",
          zeroline: false,
        },
        yaxis: {
          title: "Number of movies",
          range: [0, 13800],
          tickformat: "~s",
          gridcolor: "rgba(31,42,58,0.12)",
          zeroline: false,
        },
        showlegend: false,
        bargap: 0.08,
        shapes: [
          {
            type: "line",
            xref: "x",
            yref: "y",
            x0: chart.median,
            x1: chart.median,
            y0: 0,
            y1: 13220,
            line: {
              color: "rgba(66,80,105,0.45)",
              width: 1.5,
              dash: "dot",
            },
          },
        ],
        annotations: [
          {
            x: chart.median,
            y: 13420,
            text: `Median = ${chart.median.toFixed(1)}%`,
            showarrow: false,
            xanchor: "center",
            yanchor: "middle",
            font: { color: "#425069", size: 13 },
            bgcolor: "rgba(255,255,255,0.72)",
            bordercolor: "rgba(31,42,58,0.12)",
            borderpad: 5,
          },
        ],
      },
      config,
    );
    return;
  }

  if (chart.type === "combo") {
    const stackedCombo = container.clientWidth < 980;

    Plotly.react(
      container,
      [
        {
          x: chart.roles.map((item) => item.label),
          y: chart.roles.map((item) => item.value),
          type: "bar",
          name: "Female creative role share",
          xaxis: "x",
          yaxis: "y",
          marker: { color: "#5d8fd7" },
          text: chart.roles.map((item) => `${item.value.toFixed(1)}%`),
          textposition: "outside",
          cliponaxis: false,
          customdata: chart.roles.map((item) => item.hoverLabel),
          hovertemplate: "%{customdata}<br>%{y:.1f}% of movies<extra></extra>",
        },
        {
          x: chart.comparisons.map((item) => item.title),
          y: chart.comparisons.map((item) => item.noFemaleDirector),
          type: "bar",
          name: "Without female director",
          xaxis: "x2",
          yaxis: "y2",
          marker: { color: "#c4c9d6" },
          text: chart.comparisons.map((item) => `${item.noFemaleDirector.toFixed(1)}%`),
          textposition: "outside",
          cliponaxis: false,
          customdata: chart.comparisons.map((item) => [item.hoverLabel, item.difference]),
          hovertemplate:
            "%{customdata[0]}<br>Without female director: %{y:.1f}%<br>" +
            "Gap when director is female: +%{customdata[1]:.1f} pts<extra></extra>",
        },
        {
          x: chart.comparisons.map((item) => item.title),
          y: chart.comparisons.map((item) => item.femaleDirector),
          type: "bar",
          name: "With female director",
          xaxis: "x2",
          yaxis: "y2",
          marker: { color: "#b279d6" },
          text: chart.comparisons.map((item) => `${item.femaleDirector.toFixed(1)}%`),
          textposition: "outside",
          cliponaxis: false,
          customdata: chart.comparisons.map((item) => [item.hoverLabel, item.difference]),
          hovertemplate:
            "%{customdata[0]}<br>With female director: %{y:.1f}%<br>" +
            "Gap vs without female director: +%{customdata[1]:.1f} pts<extra></extra>",
        },
      ],
      {
        ...baseLayout,
        height: stackedCombo ? 760 : 540,
        margin: { t: stackedCombo ? 96 : 74, r: 34, b: 132, l: 74 },
        xaxis: {
          title: "",
          tickangle: 0,
          automargin: true,
          domain: stackedCombo ? [0, 1] : [0, 0.46],
          anchor: "y",
        },
        xaxis2: {
          title: "",
          tickangle: 0,
          automargin: true,
          domain: stackedCombo ? [0, 1] : [0.57, 1],
          anchor: "y2",
        },
        yaxis: {
          title: "Percent (%)",
          ticksuffix: "%",
          domain: stackedCombo ? [0.58, 1] : [0, 1],
          range: [0, 100],
          gridcolor: "rgba(31,42,58,0.12)",
          zeroline: true,
          zerolinecolor: "rgba(31,42,58,0.14)",
        },
        yaxis2: {
          title: "Percent (%)",
          ticksuffix: "%",
          domain: stackedCombo ? [0.1, 0.42] : [0, 1],
          range: [0, 60],
          gridcolor: "rgba(31,42,58,0.12)",
          zeroline: true,
          zerolinecolor: "rgba(31,42,58,0.14)",
        },
        showlegend: false,
        barmode: "group",
        annotations: [
          {
            text: "Share of movies with a woman<br>in the creative role",
            x: stackedCombo ? 0.5 : 0.22,
            y: stackedCombo ? 1.1 : 1.08,
            xref: "paper",
            yref: "paper",
            showarrow: false,
            xanchor: "center",
            align: "center",
            font: { size: 13, color: "#1d2430" },
          },
          {
            text: "On-screen representation<br>by director presence",
            x: stackedCombo ? 0.5 : 0.79,
            y: stackedCombo ? 0.51 : 1.08,
            xref: "paper",
            yref: "paper",
            showarrow: false,
            xanchor: "center",
            align: "center",
            font: { size: 13, color: "#1d2430" },
          },
          {
            text: "<span style='color:#5d8fd7'>&#9632;</span> Female creative role share",
            x: stackedCombo ? 0.02 : 0.08,
            y: -0.22,
            xref: "paper",
            yref: "paper",
            showarrow: false,
            xanchor: "left",
            font: { size: 12, color: "#1d2430" },
          },
          {
            text: "<span style='color:#c4c9d6'>&#9632;</span> Without female director",
            x: stackedCombo ? 0.42 : 0.58,
            y: -0.22,
            xref: "paper",
            yref: "paper",
            showarrow: false,
            xanchor: "left",
            font: { size: 12, color: "#1d2430" },
          },
          {
            text: "<span style='color:#b279d6'>&#9632;</span> With female director",
            x: stackedCombo ? 0.72 : 0.77,
            y: -0.22,
            xref: "paper",
            yref: "paper",
            showarrow: false,
            xanchor: "left",
            font: { size: 12, color: "#1d2430" },
          },
        ],
      },
      config,
    );
    return;
  }

  if (chart.type === "budget") {
    Plotly.react(
      container,
      chart.series.map((series) => ({
        x: chart.groups,
        y: series.values,
        type: "bar",
        name: series.name,
        marker: { color: series.color },
        text: series.values.map((value) => `${value.toFixed(1)}%`),
        textposition: "outside",
        cliponaxis: false,
        hovertemplate:
          "<b>%{x}</b><br>" +
          series.name +
          ": %{y:.1f}%<extra></extra>",
      })),
      {
        ...baseLayout,
        title: { text: "" },
        margin: { t: 82, r: 34, b: 108, l: 74 },
        xaxis: {
          title: { text: "Budget quartile", standoff: 18 },
          tickangle: 0,
          automargin: true,
        },
        yaxis: {
          title: "Mean share (%)",
          ticksuffix: "%",
          range: [0, 60],
          gridcolor: "rgba(31,42,58,0.12)",
          zeroline: true,
          zerolinecolor: "rgba(31,42,58,0.14)",
        },
        showlegend: true,
        legend: {
          orientation: "h",
          x: 0.5,
          xanchor: "center",
          y: 1.18,
          yanchor: "bottom",
          font: { size: 12, color: "#1d2430" },
          bgcolor: "rgba(255,255,255,0.78)",
          bordercolor: "rgba(31,42,58,0.10)",
          borderwidth: 1,
        },
        barmode: "group",
        bargap: 0.34,
        bargroupgap: 0.08,
      },
      config,
    );
    return;
  }

  Plotly.react(
    container,
    [
      {
        x: chart.bars.map((bar) => bar.label),
        y: chart.bars.map((bar) => bar.value),
        type: "bar",
        marker: {
          color: chart.bars.map((_, index) => `rgba(${93 + index * 12}, ${143 - index * 6}, 215, 0.78)`),
        },
        text: chart.bars.map((bar) => `${bar.value.toFixed(1)}%`),
        textposition: "outside",
        cliponaxis: false,
        hovertemplate: "%{x}<br>%{y:.1f}%<extra></extra>",
      },
    ],
    {
      ...baseLayout,
      title: { text: "" },
      margin: { ...baseLayout.margin, b: chartKey === "genres" ? 138 : 110 },
      xaxis: {
        title: "",
        tickangle: chartKey === "genres" ? -22 : -18,
        automargin: true,
      },
      yaxis: {
        title: "Share of movies (%)",
        ticksuffix: "%",
        range: [0, 100],
        gridcolor: "rgba(31,42,58,0.12)",
        zeroline: true,
        zerolinecolor: "rgba(31,42,58,0.14)",
      },
    },
    config,
  );
}

function renderSuccessChart(chartKey) {
  const chart = successCharts[chartKey];
  const container = document.querySelector("#success-plot");
  const regressionContainer = document.querySelector("#success-regression-plot");
  if (!chart || !container) return;

  document.querySelector("#success-chart-title").textContent = chart.title;
  document.querySelector("#success-chart-note").textContent = chart.note;
  document.querySelector("#success-chart-badge").textContent = chart.badge;
  document.querySelector("#success-chart-takeaway").textContent = chart.takeaway;
  document.querySelector("#success-regression-title").textContent = chart.regression.title;
  document.querySelector("#success-regression-note").textContent = chart.regression.note;

  if (!window.Plotly) {
    container.innerHTML = "<p>Interactive chart loading...</p>";
    if (regressionContainer) regressionContainer.innerHTML = "<p>Interactive chart loading...</p>";
    return;
  }

  const groupLabels = chart.groups.map((group) => group.label);
  const colors = chart.groups.map((group) => group.color);
  const traces = successMetrics.map((metric, index) => {
    const rawValues = chart.groups.map((group) => group.values[metric.key]);
    const sampleCounts = chart.groups.map((group) => group[metric.sampleKey]);
    const decimals = metric.decimals ?? 3;

    return {
      x: groupLabels,
      y: rawValues,
      customdata: sampleCounts,
      type: "bar",
      name: metric.label,
      xaxis: index === 0 ? "x" : `x${index + 1}`,
      yaxis: index === 0 ? "y" : `y${index + 1}`,
      marker: { color: colors },
      text: rawValues.map((value) => value.toFixed(decimals)),
      textposition: "outside",
      cliponaxis: false,
      hovertemplate:
        `<b>${metric.label}</b> (${metric.family})<br>` +
        `Group: %{x}<br>` +
        `Value: %{y:.${decimals}f}<br>` +
        `Dataset reference: ${metric.baseline.toFixed(decimals)}<br>` +
        `${metric.sampleLabel}: %{customdata}<extra></extra>`,
    };
  });

  const xSpanStart = groupLabels[0];
  const xSpanEnd = groupLabels[groupLabels.length - 1];

  Plotly.react(
    container,
    traces,
    {
      paper_bgcolor: "white",
      plot_bgcolor: "#eef3f9",
      font: {
        family: "Inter, Roboto, Helvetica, Arial, sans-serif",
        color: "#1d2430",
        size: 12,
      },
      shapes: successMetrics.map((metric, index) => ({
        type: "line",
        xref: index === 0 ? "x" : `x${index + 1}`,
        yref: index === 0 ? "y" : `y${index + 1}`,
        x0: xSpanStart,
        x1: xSpanEnd,
        y0: metric.baseline,
        y1: metric.baseline,
        line: { color: "rgba(212,93,63,0.45)", width: 2, dash: "dash" },
      })),
      margin: { t: 42, r: 28, b: 92, l: 58 },
      grid: { rows: 1, columns: 3, pattern: "independent" },
      showlegend: false,
      bargap: 0.28,
      hoverlabel: {
        bgcolor: "#263142",
        bordercolor: "#263142",
        font: { color: "white" },
      },
      xaxis: { title: "", tickangle: chart.groups.length > 2 ? -18 : 0, automargin: true, domain: [0, 0.29] },
      xaxis2: { title: "", tickangle: chart.groups.length > 2 ? -18 : 0, automargin: true, domain: [0.355, 0.645] },
      xaxis3: { title: "", tickangle: chart.groups.length > 2 ? -18 : 0, automargin: true, domain: [0.71, 1] },
      yaxis: {
        title: successMetrics[0].label,
        range: successMetrics[0].axisRange,
        gridcolor: "rgba(31,42,58,0.12)",
        zeroline: true,
        zerolinecolor: "rgba(31,42,58,0.14)",
      },
      yaxis2: {
        title: successMetrics[1].label,
        range: successMetrics[1].axisRange,
        gridcolor: "rgba(31,42,58,0.12)",
        zeroline: true,
        zerolinecolor: "rgba(31,42,58,0.14)",
      },
      yaxis3: {
        title: successMetrics[2].label,
        range: successMetrics[2].axisRange,
        gridcolor: "rgba(31,42,58,0.12)",
        zeroline: true,
        zerolinecolor: "rgba(31,42,58,0.14)",
      },
      annotations: successMetrics.map((metric, index) => ({
        text: `${metric.label}<br>${metric.family}`,
        x: [0.145, 0.5, 0.855][index],
        y: 1.12,
        xref: "paper",
        yref: "paper",
        showarrow: false,
        font: { size: 13, color: "#1d2430" },
      })),
    },
    {
      responsive: true,
      displaylogo: false,
      modeBarButtonsToRemove: ["lasso2d", "select2d"],
    },
  );

  if (!regressionContainer) return;

  const regressionTraces = successMetrics.flatMap((metric, index) => {
    const axisSuffix = index === 0 ? "" : `${index + 1}`;
    const line = chart.regression.lines[metric.key];
    const fullPoints = window.successRegressionSamples?.[chartKey]?.[metric.key] ?? [];

    return [
      {
        x: fullPoints.map((point) => point[0]),
        y: fullPoints.map((point) => point[1]),
        type: "scattergl",
        mode: "markers",
        name: "Movie observations",
        xaxis: `x${axisSuffix}`,
        yaxis: `y${axisSuffix}`,
        marker: {
          color: "rgba(93, 143, 215, 0.22)",
          size: 5,
          line: { color: "rgba(93, 143, 215, 0.18)", width: 0.5 },
        },
        showlegend: index === 0,
        hovertemplate:
          `<b>${metric.label}</b><br>` +
          `${chart.regression.xTitle}: %{x:.1f}<br>` +
          `Value: %{y:.3f}<extra></extra>`,
      },
      {
        x: line.x,
        y: line.y,
        type: "scatter",
        mode: "lines",
        name: "Regression line",
        xaxis: `x${axisSuffix}`,
        yaxis: `y${axisSuffix}`,
        line: { color: "#d45d3f", width: 3 },
        showlegend: index === 0,
        hovertemplate:
          `<b>${metric.label}</b><br>` +
          "Fitted regression line<br>" +
          `n = ${line.n.toLocaleString()}<extra></extra>`,
      },
    ];
  });

  Plotly.react(
    regressionContainer,
    regressionTraces,
    {
      paper_bgcolor: "white",
      plot_bgcolor: "#eef3f9",
      font: {
        family: "Inter, Roboto, Helvetica, Arial, sans-serif",
        color: "#1d2430",
        size: 12,
      },
      margin: { t: 54, r: 28, b: 104, l: 58 },
      grid: { rows: 1, columns: 3, pattern: "independent" },
      showlegend: false,
      legend: {
        orientation: "h",
        x: 0.5,
        xanchor: "center",
        y: -0.25,
        font: { size: 12 },
      },
      hoverlabel: {
        bgcolor: "#263142",
        bordercolor: "#263142",
        font: { color: "white" },
      },
      xaxis: {
        title: "",
        range: chart.regression.xRange,
        tickvals: chart.regression.tickvals,
        ticktext: chart.regression.ticktext,
        automargin: true,
        domain: [0, 0.29],
        gridcolor: "rgba(31,42,58,0.10)",
      },
      xaxis2: {
        title: { text: chart.regression.xTitle, standoff: 18 },
        range: chart.regression.xRange,
        tickvals: chart.regression.tickvals,
        ticktext: chart.regression.ticktext,
        automargin: true,
        domain: [0.355, 0.645],
        gridcolor: "rgba(31,42,58,0.10)",
      },
      xaxis3: {
        title: "",
        range: chart.regression.xRange,
        tickvals: chart.regression.tickvals,
        ticktext: chart.regression.ticktext,
        automargin: true,
        domain: [0.71, 1],
        gridcolor: "rgba(31,42,58,0.10)",
      },
      yaxis: {
        title: successMetrics[0].label,
        range: successMetrics[0].axisRange,
        gridcolor: "rgba(31,42,58,0.12)",
        zeroline: true,
        zerolinecolor: "rgba(31,42,58,0.14)",
      },
      yaxis2: {
        title: successMetrics[1].label,
        range: successMetrics[1].axisRange,
        gridcolor: "rgba(31,42,58,0.12)",
        zeroline: true,
        zerolinecolor: "rgba(31,42,58,0.14)",
      },
      yaxis3: {
        title: successMetrics[2].label,
        range: successMetrics[2].axisRange,
        gridcolor: "rgba(31,42,58,0.12)",
        zeroline: true,
        zerolinecolor: "rgba(31,42,58,0.14)",
      },
      annotations: [
        ...successMetrics.map((metric, index) => ({
          text: `${metric.label}<br>${metric.family}`,
          x: [0.145, 0.5, 0.855][index],
          y: 1.12,
          xref: "paper",
          yref: "paper",
          showarrow: false,
          font: { size: 13, color: "#1d2430" },
        })),
        ...successMetrics.map((metric, index) => {
          const stats = chart.regression.stats[metric.key];
          return {
            text: `rho=${stats.rho.toFixed(2)}<br>n=${stats.n.toLocaleString()}`,
            x: [0.02, 0.375, 0.73][index],
            y: 0.98,
            xref: "paper",
            yref: "paper",
            showarrow: false,
            align: "left",
            xanchor: "left",
            yanchor: "top",
            font: { size: 11, color: "#1d2430" },
            bgcolor: "rgba(255,255,255,0.72)",
            bordercolor: "rgba(31,42,58,0.08)",
            borderpad: 4,
          };
        }),
      ],
    },
    {
      responsive: true,
      displaylogo: false,
      modeBarButtonsToRemove: ["lasso2d", "select2d"],
    },
  );
}

function renderMLOutcomeChart(outcomeKey) {
  const outcome = mlOutcomeResults[outcomeKey];
  const container = document.querySelector("#ml-outcome-plot");
  if (!outcome || !container) return;

  document.querySelector("#ml-chart-title").textContent = outcome.title;
  document.querySelector("#ml-chart-note").textContent = outcome.note;
  document.querySelector("#ml-chart-badge").textContent = outcome.badge;
  document.querySelector("#ml-result-text").textContent = outcome.result;

  if (!window.Plotly) {
    container.innerHTML = "<p>Interactive chart loading...</p>";
    return;
  }

  const groupLabels = mlFeatureGroups.map((group) => group.shortLabel);
  const models = Object.keys(outcome.scores);
  const bestScore = Math.max(...models.flatMap((model) => outcome.scores[model]));
  const modelTraces = models.map((model) => {
    const scores = outcome.scores[model];
    return {
      y: groupLabels,
      x: scores,
      type: "bar",
      orientation: "h",
      name: model,
      marker: {
        color: mlModelColors[model],
        opacity: 0.92,
        line: { color: "rgba(31,42,58,0.08)", width: 1 },
      },
      text: scores.map((score) => score.toFixed(3)),
      textposition: "outside",
      cliponaxis: false,
      customdata: scores.map((score, index) => [
        mlFeatureGroups[index].label,
        model,
        outcome.task,
        score - outcome.baselineScore,
        score === bestScore ? "Best score" : "",
      ]),
      hovertemplate:
        "<b>%{customdata[0]}</b><br>" +
        "Model: %{customdata[1]}<br>" +
        "Task: %{customdata[2]}<br>" +
        "ROC-AUC: %{x:.3f}<br>" +
        "Gain vs controls-only RF baseline: %{customdata[3]:+.3f}<extra></extra>",
    };
  });

  Plotly.react(
    container,
    modelTraces,
    {
      paper_bgcolor: "white",
      plot_bgcolor: "white",
      font: { family: "Inter, Roboto, Helvetica, Arial, sans-serif", color: "#1d2430", size: 12 },
      margin: { t: 28, r: 150, b: 66, l: 174 },
      showlegend: true,
      legend: {
        title: { text: "Model" },
        x: 1.02,
        y: 0.5,
        xanchor: "left",
        yanchor: "middle",
        bgcolor: "rgba(255,255,255,0)",
        font: { size: 13 },
      },
      barmode: "group",
      bargap: 0.32,
      bargroupgap: 0.12,
      xaxis: {
        title: "ROC-AUC",
        range: outcome.range,
        tickformat: ".3f",
        gridcolor: "rgba(31,42,58,0.1)",
        zeroline: false,
        automargin: true,
      },
      yaxis: {
        title: "",
        categoryorder: "array",
        categoryarray: [...groupLabels].reverse(),
        automargin: true,
      },
      hoverlabel: { bgcolor: "#263142", bordercolor: "#263142", font: { color: "white" } },
    },
    { responsive: true, displaylogo: false, modeBarButtonsToRemove: ["lasso2d", "select2d"] },
  );
}

function renderMLAddedValueChart() {
  const container = document.querySelector("#ml-added-value-plot");
  if (!container) return;

  if (!window.Plotly) {
    container.innerHTML = "<p>Interactive chart loading...</p>";
    return;
  }

  const tasks = ["High IMDb rating", "Profitability", "High popularity"];
  const traces = mlAddedValueData.map((feature) => ({
    y: tasks,
    x: feature.values,
    type: "bar",
    orientation: "h",
    name: feature.name,
    marker: {
      color: feature.color,
      opacity: 0.92,
      line: { color: "rgba(31,42,58,0.08)", width: 1 },
    },
    text: feature.values.map((value) => `${value >= 0 ? "+" : ""}${value.toFixed(3)}`),
    textposition: "outside",
    cliponaxis: false,
    hovertemplate:
      "<b>%{fullData.name}</b><br>" +
      "Task: %{y}<br>" +
      "ROC-AUC gain over controls: %{x:+.3f}<extra></extra>",
  }));

  Plotly.react(
    container,
    traces,
    {
      paper_bgcolor: "white",
      plot_bgcolor: "white",
      font: { family: "Inter, Roboto, Helvetica, Arial, sans-serif", color: "#1d2430", size: 12 },
      margin: { t: 22, r: 230, b: 64, l: 154 },
      showlegend: true,
      legend: {
        title: { text: "Representation features" },
        x: 1.03,
        y: 0.5,
        xanchor: "left",
        yanchor: "middle",
        bgcolor: "rgba(255,255,255,0)",
        font: { size: 13 },
      },
      barmode: "group",
      bargap: 0.34,
      bargroupgap: 0.14,
      shapes: [
        {
          type: "line",
          xref: "x",
          yref: "paper",
          x0: 0,
          x1: 0,
          y0: 0,
          y1: 1,
          line: { color: "rgba(31,42,58,0.72)", width: 1.5 },
        },
      ],
      xaxis: {
        title: "ROC-AUC gain over controls-only baseline",
        range: [-0.012, 0.065],
        tickformat: ".2f",
        gridcolor: "rgba(31,42,58,0.1)",
        zeroline: false,
      },
      yaxis: {
        title: "",
        categoryorder: "array",
        categoryarray: [...tasks].reverse(),
        automargin: true,
      },
      hoverlabel: { bgcolor: "#263142", bordercolor: "#263142", font: { color: "white" } },
    },
    { responsive: true, displaylogo: false, modeBarButtonsToRemove: ["lasso2d", "select2d"] },
  );
}
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("active");
    });
  },
  { threshold: 0.12 },
);

revealSections.forEach((section) => revealObserver.observe(section));

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-42% 0px -52% 0px" },
);

sections.forEach((section) => navObserver.observe(section));

document.querySelectorAll(".chart-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".chart-button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderRepresentationChart(button.dataset.chart);
  });
});

document.querySelectorAll(".success-chart-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".success-chart-button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderSuccessChart(button.dataset.successChart);
  });
});

document.querySelectorAll(".ml-outcome-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".ml-outcome-button").forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderMLOutcomeChart(button.dataset.mlOutcome);
  });
});

let representationResizeTimer;
window.addEventListener("resize", () => {
  window.clearTimeout(representationResizeTimer);
  representationResizeTimer = window.setTimeout(() => {
    const activeChart = document.querySelector(".chart-button.is-active")?.dataset.chart || "distribution";
    renderRepresentationChart(activeChart);
  }, 120);
});

renderRepresentationChart("distribution");
renderSuccessChart("cast");
renderMLOutcomeChart("rating");
renderMLAddedValueChart();
