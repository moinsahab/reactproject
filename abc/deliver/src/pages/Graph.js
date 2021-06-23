import React, { Component } from "react";
import Chart from "react-apexcharts";

import { fetchGraphData } from "../utils/functions";

class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "bar",
          type: "line",
          background:
            "linear-gradient(180deg, rgba(0, 255, 76,0.3) 10%, rgba(255, 0, 0,0.3) 100%)",
        },
        colors: [
          "#94d0cc",
          "#907fa4",
          "#de8971",
          "#f21170",
          "#727cf5",
          "#ff6701",
        ],
        xaxis: {
          show: true,
          categories: [
            "1 Jan",
            "2 Jan",
            "3 Jan",
            "4 Jan",
            "5 Jan",
            "6 Jan",
            "7 Jan",
            "8 Jan",
          ],
          labels: {
            style: {
              colors: "#f5f2f3",
            },
          },
          style: {
            color: "#f1ecee",
          },
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#f8f7f8",
            },
            labels: {
              style: {
                colors: "#f5f2f3",
              },
            },
            title: {
              style: {
                color: "#f1ecee",
              },
            },
          },
        ],

        grid: {
          borderColor: "rgba(77, 138, 240, .1)",
        },
        stroke: {
          curve: "smooth",
        },
      },
      series: [],
    };
  }

  componentDidMount() {
    (async () => {
      try {
        const res = await fetchGraphData(this.props.ticker);
        const series = [];
        for (const key in res.data) {
          const data = res.data[key].map((nums) =>
            Number(nums.toFixed(2) * 100)
          );
          series.push({
            name: key,
            data: data,
            dataLabels: {
              enabled: false,
            },
          });
        }
        this.setState({ series: series });
      } catch (error) {
        console.log("Graph error = ", error);
      }
    })();
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              width={this.props.width}
              height="400"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;
