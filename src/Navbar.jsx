import React from "react"
import { NavLink } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


const Navbar = () => {
  return (
  <>
    <div className="container-fluid">
      <div className="row">
        <div className="mx-auto">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid col-lg-10">
            
              <NavLink className="navbar-brand" to="/">ReactApp</NavLink>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">+</span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink activeClassName="active" exact className="nav-link" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="active" className="nav-link" to="/service" >Service</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink activeClassName="active" className="nav-link" to="/contact" >Contact</NavLink>
                  </li>
                </ul>

              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>


  </>
  )
}

export default Navbar;