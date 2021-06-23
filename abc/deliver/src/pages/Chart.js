import React from "react";
import Line from "./Graph/Line";
import Bar from "./Graph/Bar";
import Donut from "./Graph/Donut";
import Area from "./Graph/Area";

class Chart extends React.Component {
  render() {
    return (
      <div>
        <div className="main-wrapper">
          <div className="page-wrapper">
            <nav class="navbar">
              <a href="#" class="sidebar-toggler">
                <i data-feather="menu"></i>
              </a>
              <div class="navbar-content">
                <form class="search-form">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i data-feather="search"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      id="navbarForm"
                      placeholder="Search here..."
                    />
                  </div>
                </form>
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="languageDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="flag-icon flag-icon-us mt-1" title="us"></i>{" "}
                      <span class="font-weight-medium ml-1 mr-1">English</span>
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <div className="page-content">
              <div className="row">
                <div className="col-xl-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title">Line chart</h6>
                      {/* <div id="apexLine" /> */}
                      <Line />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title">Bar chart</h6>
                      {/* <div id="apexBar" /> */}
                      <Bar />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title">Donut chart</h6>
                      {/* <div id="apexArea" /> */}
                      <Donut />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title">Area chart</h6>
                      {/* <div id="apexMixed" /> */}
                      <Area width={500} />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="row">
                <div className="col-xl-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title">Donut chart</h6>
                      <div id="apexDonut" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title">Pie chart</h6>
                      <div id="apexPie" />
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="row">
                <div className="col-xl-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title">HeatMap chart</h6>
                      <div id="apexHeatMap" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title">Radar chart</h6>
                      <div id="apexRadar" />
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="row">
                <div className="col-xl-6 grid-margin grid-margin-xl-0 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title">Scatter chart</h6>
                      <div id="apexScatter" />
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title">RadialBar chart</h6>
                      <div id="apexRadialBar" />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            <footer class="footer d-flex flex-column flex-md-row align-items-center justify-content-between">
              <p class="text-muted text-center text-md-left">
                Use is subject to full acceptance of Terms of Use and Privacy
                Policy, bar none. Investing is risky and can result in huge
                losses.
                <br /> Information provided is not financial advice and we do
                not warrant or guarantee the contents are accurate, up-to-date
                or reliable.{" "}
              </p>
              <p class="text-muted text-center text-md-left mb-0 d-none d-md-block">
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
  }
}

export default Chart;
