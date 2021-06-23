import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="sidebar">
        <div className="sidebar-header">
          <a href="#" className="sidebar-brand">
            <img src="stockape_logo.png" width="130px" />
          </a>
          <div className="sidebar-toggler not-active">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="sidebar-body">
          <ul className="nav">
            <li className="nav-item nav-category" style={{ textAlign: "left" }}>
              Main
            </li>
            <Link to="/">
              <li className="nav-item">
                <a href="" className="nav-link">
                  {/* <i className="link-icon" data-feather="box"></i> */}
                  <svg
                    style={{ color: "white" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-box link-icon"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                    <line x1="12" y1="22.08" x2="12" y2="12" />
                  </svg>
                  <span className="link-title">Dashboard</span>
                </a>
              </li>
            </Link>
            <li className="nav-item nav-category" style={{ textAlign: "left" }}>
              Featured
            </li>
            <Link to="/chart">
              <li className="nav-item">
                <a href="" className="nav-link">
                  {/* <i className="link-icon" data-feather="pie-chart"></i> */}
                  <svg
                    style={{ color: "white" }}
                    className="link-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-pie-chart link-icon"
                  >
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                    <path d="M22 12A10 10 0 0 0 12 2v10z" />
                  </svg>
                  <span className="link-title">Chart</span>
                </a>
              </li>
            </Link>

            <Link to="/analysis">
              <li className="nav-item">
                <a href="" className="nav-link">
                  {/* <i className="link-icon" data-feather="pie-chart"></i> */}
                  <svg
                    style={{ color: "white" }}
                    className="link-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-pie-chart link-icon"
                  >
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                    <path d="M22 12A10 10 0 0 0 12 2v10z" />
                  </svg>
                  <span className="link-title">Analysis</span>
                </a>
              </li>
            </Link>

            <Link to="/contact">
              <li className="nav-item">
                <a href="" className="nav-link">
                  {/* <i className="link-icon" data-feather="message-square"></i> */}
                  <svg
                    style={{ color: "white" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-message-square link-icon"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="link-title">Contact</span>
                </a>
              </li>
            </Link>
            <Link to="/details">
              <li className="nav-item">
                <a href="" className="nav-link">
                  {/* <i className="link-icon" data-feather="layout"></i> */}
                  <svg
                    style={{ color: "white" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-layout link-icon"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                  <span className="link-title">Details</span>
                </a>
              </li>
            </Link>
            <Link to="/privacy">
              <li className="nav-item">
                <a href="" className="nav-link">
                  {/* <i className="link-icon" data-feather="unlock"></i> */}
                  <svg
                    style={{ color: "white" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-unlock link-icon"
                  >
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 9.9-1" />
                  </svg>
                  <span className="link-title">Privacy</span>
                </a>
              </li>
            </Link>
            <Link to="/login">
              <li className="nav-item">
                <a href="" className="nav-link">
                  {/* <i className="link-icon" data-feather="unlock"></i> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 172 172"
                    style={{ fill: "#000000" }}
                  >
                    <g
                      fill="none"
                      fill-rule="nonzero"
                      stroke="none"
                      stroke-width="1"
                      stroke-linecap="butt"
                      stroke-linejoin="miter"
                      stroke-miterlimit="10"
                      stroke-dasharray=""
                      stroke-dashoffset="0"
                      font-family="none"
                      font-weight="none"
                      font-size="none"
                      text-anchor="none"
                      style={{ mixBlendMode: "normal" }}
                    >
                      <path d="M0,172v-172h172v172z" fill="none"></path>
                      <g fill="#ecf0f1">
                        <path d="M86,14.33333c-30.67022,0 -56.91611,19.31134 -67.11751,46.48535c-0.7016,1.80386 -0.37929,3.84562 0.84384,5.34564c1.22314,1.50003 3.15824,2.2267 5.06639,1.90254c1.90816,-0.32416 3.49473,-1.64909 4.15389,-3.46889c8.66127,-23.07149 30.89193,-39.51465 57.05339,-39.51465c33.70588,0 60.91667,27.21079 60.91667,60.91667c0,33.70588 -27.21079,60.91667 -60.91667,60.91667c-26.16145,0 -48.39212,-16.44316 -57.05339,-39.51465c-0.65916,-1.81979 -2.24574,-3.14473 -4.15389,-3.46889c-1.90816,-0.32416 -3.84326,0.40251 -5.06639,1.90254c-1.22314,1.50003 -1.54544,3.54179 -0.84384,5.34564c10.2014,27.17401 36.4473,46.48535 67.11751,46.48535c39.51595,0 71.66667,-32.15071 71.66667,-71.66667c0,-39.51595 -32.15071,-71.66667 -71.66667,-71.66667zM84.15234,59.06901c-2.18814,0.00053 -4.1576,1.32735 -4.98006,3.35504c-0.82245,2.0277 -0.33375,4.35156 1.23575,5.87624l12.31771,12.31771l-73.01042,-0.06299c-1.93831,-0.02982 -3.74253,0.98629 -4.72184,2.65927c-0.97932,1.67298 -0.98201,3.74365 -0.00706,5.41918c0.97496,1.67552 2.77653,2.69633 4.7149,2.67156l73.03841,0.06299l-12.3317,12.3317c-1.40412,1.34815 -1.96971,3.35005 -1.47866,5.23364c0.49105,1.88359 1.96202,3.35456 3.84561,3.84561c1.88359,0.49105 3.88549,-0.07455 5.23364,-1.47866l21.5,-21.5c2.09823,-2.0991 2.09823,-5.50149 0,-7.60059l-21.5,-21.5c-1.01222,-1.0424 -2.4033,-1.63064 -3.85628,-1.6307z"></path>
                      </g>
                    </g>
                  </svg>
                  <div>
                    <span className="link-title">Login</span>
                  </div>
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
