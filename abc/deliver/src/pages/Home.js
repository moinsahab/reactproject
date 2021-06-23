import React, { useContext } from "react";
import Graph from "./Graph";
import Donut from "./Graph/Donut";

import UnitContext from "../context/context";

import ProjectsTable from "../components/common/projectsTable/projectsTable";

const Home = () => {
  const { dispatch, state } = useContext(UnitContext);

  return (
    <div>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <nav className="navbar">
            <a href="#" className="sidebar-toggler">
              <i data-feather="menu"></i>
            </a>
            <div className="navbar-content">
              <form className="search-form">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <i data-feather="search"></i>
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
                    <i className="flag-icon flag-icon-us mt-1" title="us"></i>{" "}
                    <span className="font-weight-medium ml-1 mr-1">
                      English
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="page-content">
            <div className="d-flex justify-content-between align-items-center flex-wrap grid-margin">
              <div>
                <h4 className="mt-0 mb-md-0">Welcome to Dashboard</h4>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-3 grid-margin stretch-card">
                <ProjectsTable />
              </div>
              <div className="col-xl-9 ">
                <div className="card overflow-hidden" id="myheight">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-baseline mb-4 mb-md-3">
                      <h6 className="card-title mb-0">
                        Live Sentiment Analysis
                      </h6>
                      <div className="dropdown">
                        <button
                          className="btn p-0"
                          type="button"
                          id="dropdownMenuButton3"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i
                            className="icon-lg text-muted pb-3px"
                            data-feather="more-horizontal"
                          />
                        </button>
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          aria-labelledby="dropdownMenuButton3"
                        >
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <i data-feather="eye" className="icon-sm mr-2" />{" "}
                            <span className="">View</span>
                          </a>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <i data-feather="edit-2" className="icon-sm mr-2" />{" "}
                            <span className="">Edit</span>
                          </a>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <i data-feather="trash" className="icon-sm mr-2" />{" "}
                            <span className="">Delete</span>
                          </a>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <i
                              data-feather="printer"
                              className="icon-sm mr-2"
                            />{" "}
                            <span className="">Print</span>
                          </a>
                          <a
                            className="dropdown-item d-flex align-items-center"
                            href="#"
                          >
                            <i
                              data-feather="download"
                              className="icon-sm mr-2"
                            />{" "}
                            <span className="">Download</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row align-items-start mb-2">
                      <div className="col-md-7">
                        <p
                          className="text-muted tx-13 mb-3 mb-md-0"
                          style={{ textAlign: "left" }}
                        >
                          StockApe uses deep learning analysis on multiple live
                          data points to generate a trending aggregate sentiment
                          score. Graph will auto update every interval.
                        </p>
                      </div>

                      <div className="col-md-5 d-flex justify-content-md-end">
                        <div
                          className="btn-group mb-3 mb-md-0"
                          role="group"
                          aria-label="Basic example"
                        >
                          {["WEEKLY", "DAILY", "HOURLY"].map((unit) => (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                dispatch({ type: unit });
                              }}
                              key={unit}
                              type="button"
                              className={`btn btn-outline-primary ${
                                state.unit === unit.toLowerCase() && "active"
                              }`}
                            >
                              {unit}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <h6
                        id="newfont"
                        style={{ color: "green", margin: "10px 0" }}
                      >
                        Bullish
                      </h6>
                    </div>

                    <div className="flot-wrapper" style={{ height: "400px" }}>
                      <Graph className="flot-chart mygraph" width="860px" />
                    </div>
                    <div className="row">
                      <h6 id="newfont" style={{ color: "red", marginLeft: "" }}>
                        Bearish
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row" />
            <br />
            <div className="row">
              <div className="col-xl-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-title">MOST ACTIVE</h6>
                    {/* <div id="apexDonut" /> */}
                    <Donut />
                  </div>
                </div>
              </div>
              <div className="col-xl-6 grid-margin stretch-card" />
            </div>
          </div>
          <footer className="footer d-flex flex-column flex-md-row align-items-center justify-content-between">
            <p className="text-muted text-center text-md-left">
              Use is subject to full acceptance of Terms of Use and Privacy
              Policy, bar none. Investing is risky and can result in huge
              losses.
              <br /> Information provided is not financial advice and we do not
              warrant or guarantee the contents are accurate, up-to-date or
              reliable.{" "}
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
  );
};

export default Home;
