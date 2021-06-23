import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Graph from "./Graph";
import LineBar from "./Graph/Line";
import BarChart from "./Graph/Bar";
import Donut from "./Graph/Donut";
import Area from "./Graph/Area";
import ProjectsTable from "../components/common/projectsTable/projectsTable";
import "./Style.css";

import { addTicker, deleteTicker } from "../utils";

const Admin = () => {
  const history = useHistory();
  const [state, setState] = useState({
    Symbol: "",
    name: "",
    exchange: "",
    country: "",
    sector: "",
    industry: "",
  });

  const [deleteTickerSymbol, setDeleteTickerSymbol] = useState(null);

  if (!localStorage.getItem("user")) {
    history.push("/login");
    return null;
  }

  const onAddnewTicker = async (e) => {
    e.preventDefault();
    try {
      const res = await addTicker(state);
      const { data } = res;
      if (data.inserted === 0) {
        alert("Ticker already exists.");
      } else {
        alert("Ticker successfully added.");
        setState({
          Symbol: "",
          name: "",
          exchange: "",
          country: "",
          sector: "",
          industry: "",
        });
      }
    } catch (error) {
      console.log("Add ticker error = ", error);
    }
  };

  const onAddDeleteTicker = async (e) => {
    e.preventDefault();
    try {
      const res = await deleteTicker({ Symbol: deleteTickerSymbol });
      const { data } = res;
      if (data.deleted === 1) {
        alert("Ticker deleted successfully.");
        setDeleteTickerSymbol(null);
      }
    } catch (error) {
      console.log("Delete ticker error = ", error);
    }
  };

  return (
    <div>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <nav className="navbar">
            <a href="#" className="sidebar-toggler">
              <i data-feather="menu" />
            </a>
            <div className="navbar-content">
              <form className="search-form">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i data-feather="search" />
                    </div>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="navbarForm"
                    placeholder="Search here..."
                  />
                </div>
              </form>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="languageDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="flag-icon flag-icon-us mt-1" title="us" />
                    <span className="font-weight-medium ml-1 mr-1">
                      English
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="page-content">
            <div className="row">
              <div className="col-lg-7 grid-margin">
                <div className="card" id="myalign">
                  <div className="card-body">
                    <h4 className="card-title">Add New Ticker</h4>
                    <form
                      onSubmit={onAddnewTicker}
                      className="cmxform"
                      id="addNewTickerForm"
                    >
                      <fieldset>
                        <div className="form-group">
                          <label htmlFor="name">Symbol</label>
                          <input
                            value={state.Symbol}
                            id="symbol"
                            className="form-control"
                            name="symbol"
                            type="text"
                            required
                            onChange={(e) =>
                              setState((prev) => ({
                                ...prev,
                                Symbol: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input
                            value={state.name}
                            id="name"
                            className="form-control"
                            name="name"
                            type="text"
                            required
                            onChange={(e) =>
                              setState((prev) => ({
                                ...prev,
                                name: e.target.value,
                              }))
                            }
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="exchange">Exchange</label>
                          <input
                            value={state.exchange}
                            id="exchange"
                            className="form-control"
                            name="exchange"
                            type="text"
                            required
                            onChange={(e) =>
                              setState((prev) => ({
                                ...prev,
                                exchange: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="country">Country</label>
                          <input
                            value={state.country}
                            id="country"
                            className="form-control"
                            name="country"
                            type="text"
                            required
                            onChange={(e) =>
                              setState((prev) => ({
                                ...prev,
                                country: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="sector">Sector</label>
                          <input
                            value={state.sector}
                            id="sector"
                            className="form-control"
                            name="sector"
                            type="text"
                            required
                            onChange={(e) =>
                              setState((prev) => ({
                                ...prev,
                                sector: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="industry">Industry</label>
                          <input
                            value={state.industry}
                            id="industry"
                            className="form-control"
                            name="industry"
                            type="text"
                            required
                            onChange={(e) =>
                              setState((prev) => ({
                                ...prev,
                                industry: e.target.value,
                              }))
                            }
                          />
                        </div>
                        <input
                          className="btn btn-primary"
                          type="submit"
                          value="Submit"
                        />
                      </fieldset>
                    </form>
                  </div>
                </div>

                <div className="card mt-3" id="myalign">
                  <div className="card-body">
                    <h4 className="card-title">Delete Ticker</h4>
                    <form
                      onSubmit={onAddDeleteTicker}
                      className="cmxform"
                      id="deleteTickerForm"
                    >
                      <fieldset>
                        <div className="form-group">
                          <label htmlFor="name">Symbol</label>
                          <input
                            value={deleteTickerSymbol}
                            id="symbol"
                            className="form-control"
                            name="symbol"
                            type="text"
                            required
                            onChange={(e) =>
                              setDeleteTickerSymbol(e.target.value)
                            }
                          />
                        </div>
                        <input
                          className="btn btn-danger"
                          type="submit"
                          value="Delete"
                        />
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 grid-margin">
                <ProjectsTable />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-1 grid-margin"></div>
              <div className="col-lg-10 grid-margin">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "1rem 0",
                  }}
                >
                  <Graph className="flot-chart mygraph" width="400%" />
                </div>
                <div className="row">
                  <div className="col-lg-6 grid-margin">
                    <div style={{ marginBottom: "1rem" }}>
                      <LineBar />
                    </div>
                  </div>
                  <div className="col-lg-6 grid-margin">
                    <div style={{ marginBottom: "1rem" }}>
                      <BarChart />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 grid-margin">
                    <div style={{ marginBottom: "1rem" }}>
                      <Donut />
                    </div>
                  </div>
                  <div className="col-lg-6 grid-margin">
                    <div>
                      <Area />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer className="footer d-flex flex-column flex-md-row align-items-center justify-content-between">
              <p className="text-muted text-center text-md-left">
                Use is subject to full acceptance of Terms of Use and Privacy
                Policy, bar none. Investing is risky and can result in huge
                losses.
                <br /> Information provided is not financial advice and we do
                not warrant or guarantee the contents are accurate, up-to-date
                or reliable.{" "}
              </p>
              <p className="text-muted text-center text-md-left mb-0 d-none d-md-block">
                StockApe ©{" "}
                <a href="https://twitter.com/stock_ape">
                  <img src="twitter.svg" style={{ height: "20px" }} />
                </a>{" "}
                <a href="https://www.reddit.com/r/StockApeAI/">
                  <img
                    src="reddit1.svg"
                    id="redditbg"
                    style={{ height: "20px" }}
                  />
                </a>{" "}
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
