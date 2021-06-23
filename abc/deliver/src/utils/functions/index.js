import axios from "../axios";

export const fetchDonutData = () => {
  return axios.get("donut", {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const fetchGraphData = (ticker) => {
  return axios.get(
    `centiment?stepSize=5&step=1${ticker ? `&ticker=${ticker}` : ""}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const fetchTableData = (mode) => {
  return axios.get(`table?unit=${mode}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const fetchBarData = (unit, ticker) => {
  return axios.get(`bar?unit=${unit}&ticker=${ticker}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const fetchAreaData = (unit) => {
  return axios.get(`votes?unit=${unit} , {
    headers: {
      "Content-Type": "application/json",
    },
  }`);
};

export const addTicker = (data) => {
  return axios.post("add_ticker", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteTicker = (data) => {
  return axios.post("delete_ticker", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
