import React, { Component } from "react";
import Chart from "react-apexcharts";

import { fetchTableData } from "../../utils";

class LineBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          // height: 300,
          type: "line",
          parentHeightOffset: 0,
        },
        colors: ["#727cf5", "#7ee5e5", "#4d8af0"],
        grid: {
          borderColor: "rgba(77, 138, 240, .1)",
          padding: {
            bottom: -15,
          },
        },
        xaxis: {
          type: "datetime",
          categories: ["2015", "2016", "2017", "2018"],
        },
        markers: {
          size: 0,
        },
        stroke: {
          width: 3,
          curve: "smooth",
          lineCap: "round",
        },
        legend: {
          show: true,
          position: "top",
          horizontalAlign: "left",
          containerMargin: {
            top: 30,
          },
        },
        responsive: [
          {
            breakpoint: 500,
            options: {
              legend: {
                fontSize: "11px",
              },
            },
          },
        ],
      },
      series: [],
    };
  }

  componentDidMount() {
    const fetcher = async (mode) => {
      try {
        const res = await fetchTableData(mode);
        const data = res.data;
        const allValues = [];
        for (const key in data) {
          allValues.push({
            name: key,
            data: data[key].map((el) => Number(el).toFixed(2)),
          });
        }
        console.log(allValues);
        if (this.props.ticker) {
          this.setState({
            series: allValues.filter(
              (ticker) => ticker.name === this.props.ticker
            ),
          });
        } else {
          this.setState({
            series: allValues.slice(0, 3),
          });
        }
      } catch (error) {
        console.log("Table error = ", error);
      }
    };
    fetcher("daily");
  }

  componentDidUpdate() {
    const fetcher = async (mode) => {
      try {
        const res = await fetchTableData(mode);
        const data = res.data;
        const allValues = [];
        for (const key in data) {
          allValues.push({
            name: key,
            data: data[key].map((el) => Number(el).toFixed(2)),
          });
        }
        console.log(allValues);
        if (this.props.ticker) {
          this.setState({
            series: allValues.filter(
              (ticker) => ticker.name === this.props.ticker
            ),
          });
        } else {
          this.setState({
            series: allValues.slice(0, 3),
          });
        }
      } catch (error) {
        console.log("Table error = ", error);
      }
    };
    fetcher("daily");
  }

  render() {
    console.log("Line props = ", this.props);
    return (
      <>
        {this.state.series.length > 0 && (
          <Chart
            options={this.state.options}
            series={this.state.series}
            width="100%"
            height="300"
          />
        )}
      </>
    );
  }
}

export default LineBar;
