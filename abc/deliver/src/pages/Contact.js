import React from "react";
import { Link } from "react-router-dom";

class Contact extends React.Component {
  render() {
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
            <div
              className="page-content"
              style={{
                display: "flex",
                flexFlow: "column",
                alignItems: "space-between",
              }}
            >
              <div className="row">
                <div className="col-lg-6 grid-margin">
                  <div className="card" id="myalign">
                    <div className="card-body">
                      <h4 className="card-title">Contact Us</h4>
                      <p className="card-description">
                        Read the{" "}
                        <a href="https://jqueryvalidation.org/" target="_blank">
                          {" "}
                          Official jQuery Validation Documentation{" "}
                        </a>
                        for a full list of instructions and other options.
                      </p>
                      <form
                        className="cmxform"
                        id="signupForm"
                        method="get"
                        action="#"
                      >
                        <fieldset>
                          <div className="form-group">
                            <label for="name">Name</label>
                            <input
                              id="name"
                              className="form-control"
                              name="name"
                              type="text"
                            />
                          </div>
                          <div className="form-group">
                            <label for="email">Email</label>
                            <input
                              id="email"
                              className="form-control"
                              name="email"
                              type="email"
                            />
                          </div>
                          <div className="form-group">
                            <label for="password">Password</label>
                            <input
                              id="password"
                              className="form-control"
                              name="password"
                              type="password"
                            />
                          </div>
                          <div className="form-group">
                            <label for="confirm_password">
                              Confirm password
                            </label>
                            <input
                              id="confirm_password"
                              className="form-control"
                              name="confirm_password"
                              type="password"
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
  }
}

export default Contact;
