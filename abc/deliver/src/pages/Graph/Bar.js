import React, { Component } from "react";
import Chart from "react-apexcharts";

import UnitContext from "../../context/context";
import { fetchBarData } from "../../utils";

class BarChart extends Component {
  static contextType = UnitContext;
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: "bar",
          // height: "320",
          parentHeightOffset: 0,
        },
        colors: ["#f77eb9"],
        grid: {
          borderColor: "rgba(77, 138, 240, .1)",
          padding: {
            bottom: -10,
          },
        },
        xaxis: {
          type: "range",
          categories: ["-1", "0", " 1"],
        },
      },
      series: [],
    };
  }

  componentDidMount() {
    (async (unit, ticker) => {
      try {
        const res = await fetchBarData(unit, ticker);
        const { data } = res;
        const { occurence, average } = data;
        let seriesData = [0, occurence, 0];
        switch (Number(average.toFixed())) {
          case 1:
            seriesData = [0, 0, occurence];
            break;
          case -1:
            seriesData = [occurence, 0, 0];
            break;
          default:
            break;
        }
        this.setState({
          series: [
            {
              name: ticker,
              data: seriesData,
            },
          ],
        });
      } catch (error) {
        console.log("Bar error = ", error);
      }
    })(this.context.state.unit, this.props.ticker ? this.props.ticker : "PACB");
  }

  componentDidUpdate() {
    (async (unit, ticker) => {
      try {
        const res = await fetchBarData(unit, ticker);
        const { data } = res;
        const { occurence, average } = data;
        let seriesData = [0, occurence, 0];
        switch (Number(average.toFixed())) {
          case 1:
            seriesData = [0, 0, occurence];
            break;
          case -1:
            seriesData = [occurence, 0, 0];
            break;
          default:
            break;
        }
        this.setState({
          series: [
            {
              name: ticker,
              data: seriesData,
            },
          ],
        });
      } catch (error) {
        console.log("Bar error = ", error);
      }
    })(this.context.state.unit, this.props.ticker ? this.props.ticker : "PACB");
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        width="100%"
        height="300"
      />
    );
  }
}

export default BarChart;
