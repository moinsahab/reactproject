import React, { useState, useEffect, useContext } from "react";

import UnitContext from "../../context/context";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import { fetchAreaData } from "../../utils";

export default function AreaChart({ ticker, width }) {
  const { state } = useContext(UnitContext);
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const temp = [];
    (async (unit) => {
      try {
        const res = await fetchAreaData(unit);
        const { data } = res;
        for (const key in data) {
          const bar = {
            name: key,
            uv: data[key].upVotes,
            dv: data[key].downvotes,
          };
          temp.push(bar);
        }
        if (ticker) {
          setChartData(temp.filter((tickr) => tickr.name === ticker));
        } else {
          setChartData(temp);
        }
      } catch (error) {
        console.log("Area chart error = ", error);
      }
    })(state.unit);
  }, [state.unit, ticker]);

  return (
    <BarChart width={width} height={300} data={chartData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="dv" stackId="a" fill="red" />
      <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
    </BarChart>
  );
}
