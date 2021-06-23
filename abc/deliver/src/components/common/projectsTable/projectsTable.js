import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { fetchTableData } from "../../../utils";

const ProjectsTable = () => {
  const history = useHistory();
  const [daily, setDaily] = useState(null);
  const [hourly, setHourly] = useState(null);

  useEffect(() => {
    const fetcher = async (mode) => {
      try {
        const res = await fetchTableData(mode);
        const data = res.data;
        if (mode === "daily") {
          const allDailyValues = [];
          for (const key in data) {
            const sum =
              data[key].reduce((acc, curr) => acc + curr, 0) / data[key].length;
            allDailyValues.push({
              company: key,
              value: Number(sum.toFixed(2)),
            });
          }
          setDaily(allDailyValues);
        } else {
          const allHourlyValues = [];
          for (const key in data) {
            const value = Number(data[key][0]?.toFixed(2));
            allHourlyValues.push(value);
          }
          setHourly(allHourlyValues);
        }
      } catch (error) {
        console.log("Table error = ", error);
      }
    };
    fetcher("daily");
    fetcher("hourly");
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title " style={{ textAlign: "left" }}>
          Projects
        </h6>
        <div className="table-responsive">
          <table id="dataTableExample" className="table">
            <thead>
              <tr>
                <th>
                  <p id="myfont">Ticker</p>
                </th>
                <th>
                  <p id="myfont" style={{ color: "yellow", width: "20px" }}>
                    Hourly
                  </p>
                </th>
                <th>
                  <p id="myfont" style={{ color: "yellow", width: "15px" }}>
                    Daily
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {hourly &&
                daily?.map((item, i) => (
                  <tr
                    key={i}
                    onClick={() => history.push(`/${item.company}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <td>
                      <span className="badge badge-danger">{item.company}</span>
                    </td>
                    <td>
                      <div className="d-flex align-items-baseline">
                        <p
                          className={
                            hourly[i] > 0 ? "text-success" : "text-danger"
                          }
                        >
                          <span>{hourly[i]}</span>
                          {/*<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-down icon-sm mb-1"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                           */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-arrow-down icon-sm mb-1"
                          >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <polyline points="19 12 12 19 5 12"></polyline>
                          </svg>
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-baseline">
                        <p
                          className={
                            item.value > 0 ? "text-success" : "text-danger"
                          }
                        >
                          <span> {item.value} </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-arrow-down icon-sm mb-1"
                          >
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <polyline points="19 12 12 19 5 12"></polyline>
                          </svg>
                        </p>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProjectsTable;
