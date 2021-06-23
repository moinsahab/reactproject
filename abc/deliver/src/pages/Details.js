import React from "react";
import { Link } from "react-router-dom";

class Detail extends React.Component {
  render() {
    return (
      <div>
        <div class="main-wrapper">
          <div class="page-wrapper">
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
            
            <div class="page-content">
              <div class="row">
                <div class="col-md-12">
                  <div class="card">
                    <div class="card-body">
                      <h6 class="card-title">Frequently Asked Questions</h6>
                      <div id="accordion" class="accordion" role="tablist">
                        <div class="card">
                          <div class="card-header" role="tab" id="headingOne">
                            <h6 class="mb-0">
                              <a
                                data-toggle="collapse"
                                href="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                              >
                                Why is the moon sometimes out during the day?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseOne"
                            class="collapse show"
                            role="tabpanel"
                            aria-labelledby="headingOne"
                            data-parent="#accordion"
                          >
                            <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header" role="tab" id="headingTwo">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                              >
                                Why is the sky blue?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseTwo"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="headingTwo"
                            data-parent="#accordion"
                          >
                            <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header" role="tab" id="headingThree">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Will we ever discover aliens?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseThree"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="headingThree"
                            data-parent="#accordion"
                          >
                            <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header" role="tab" id="headingFour">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                              >
                                How much does the Earth weigh?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseFour"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="headingFour"
                            data-parent="#accordion"
                          >
                            <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header" role="tab" id="headingFive">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapseFive"
                                aria-expanded="false"
                                aria-controls="collapseFive"
                              >
                                How do airplanes stay up?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseFive"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="headingFive"
                            data-parent="#accordion"
                          >
                            <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </div>
                          </div>
                        </div>
                        <div class="card">
                          <div class="card-header" role="tab" id="headingSix">
                            <h6 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapseSix"
                                aria-expanded="false"
                                aria-controls="collapseSix"
                              >
                                How can go to star?
                              </a>
                            </h6>
                          </div>
                          <div
                            id="collapseSix"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="headingSix"
                            data-parent="#accordion"
                          >
                            <div class="card-body">
                              Anim pariatur cliche reprehenderit, enim eiusmod
                              high life accusamus terry richardson ad squid. 3
                              wolf moon officia aute, non cupidatat skateboard
                              dolor brunch. Food truck quinoa nesciunt laborum
                              eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                              put a bird on it squid single-origin coffee nulla
                              assumenda shoreditch et. Nihil anim keffiyeh
                              helvetica, craft beer labore wes anderson cred
                              nesciunt sapiente ea proident. Ad vegan excepteur
                              butcher vice lomo. Leggings occaecat craft beer
                              farm-to-table, raw denim aesthetic synth nesciunt
                              you probably haven't heard of them accusamus
                              labore sustainable VHS.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

export default Detail;
