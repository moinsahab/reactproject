import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import BarGraph from "./Graph/Bar";
import LineGraph from "./Graph/Line";
import AreaChart from "./Graph/Area";
import { fetchTableData } from "../utils";

const Analysis = () => {
  const { ticker } = useParams();
  const history = useHistory();
  const [enteredTicker, setEnteredTicker] = useState(null);
  const [finalTicker, setFinalticker] = useState(null);
  const [allTickers, setAllTickers] = useState();

  useEffect(async () => {
    const res = await fetchTableData("daily");
    const { data } = res;
    setAllTickers(data);
  }, []);

  const onSearch = async (e) => {
    e.preventDefault();
    if (enteredTicker) {
      const allTickeNames = Object.keys(allTickers);
      const isTicker = allTickeNames.filter(
        (ticName) => ticName === enteredTicker.toUpperCase()
      );
      if (isTicker[0]) {
        setFinalticker(isTicker[0]);
        setEnteredTicker("");
      } else {
        alert("No data found");
      }
    } else {
      alert("Enter ticker name");
    }
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto" }}>
      {history.location.pathname === "/analysis" && (
        <div className="d-flex justify-content-end mt-5">
          <div className="d-flex justify-content-center">
            <input
              type="text"
              name="ticker"
              className="form-control"
              value={enteredTicker}
              placeholder="Enter ticker name"
              onChange={(e) => setEnteredTicker(e.target.value)}
            />
            <button className="btn btn-primary ml-1" onClick={onSearch}>
              Search
            </button>
          </div>
        </div>
      )}
      {(ticker || finalTicker) && (
        <>
          <div className="mb-5 mt-5">
            <BarGraph ticker={ticker ? ticker : finalTicker} />
          </div>
          <div className="mb-5">
            <LineGraph ticker={ticker ? ticker : finalTicker} />
          </div>
          <div className="mb-5">
            <AreaChart ticker={ticker ? ticker : finalTicker} width={700} />
          </div>
        </>
      )}
    </div>
  );
};

export default Analysis;
