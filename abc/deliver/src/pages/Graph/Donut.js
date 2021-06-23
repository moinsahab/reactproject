import React, { Component } from "react";
import Chart from "react-apexcharts";

import { fetchDonutData } from "../../utils";

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        dataLabels: {
          enabled: false,
        },
        stroke: {
          colors: ["rgba(0,0,0,0)"],
        },
        colors: ["#3b06fb", "#947ef7", "#7ee5e5", "#4d8af0", "#fb0637"],
        legend: {
          position: "top",
          horizontalAlign: "center",
        },
        labels: [],
      },
      series: [],
    };
  }

  componentDidMount() {
    (async () => {
      const values = [];
      const labels = [];
      try {
        const res = await fetchDonutData();
        res.data.forEach((dt) => {
          for (const key in dt) {
            labels.push(key);
            values.push(dt[key]);
          }
        });
        this.setState((prevState) => ({
          series: values,
          options: { ...prevState, labels: labels },
        }));
      } catch (error) {
        console.log("Donut error = ", error);
      }
    })();
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="donut"
        width="100%"
        height="300"
      />
    );
  }
}

export default Donut;
