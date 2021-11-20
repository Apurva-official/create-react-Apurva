import React from 'react'
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return ( <>
    <section id="header" className="brand-name">
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 content">
              <h1>
                {props.name}
                <br />
                
                 <strong className="highlight">Apurva's ReactApp</strong>
              </h1>
              <h2 className="my-3">
                We are the team of talented web developers.
              </h2>
              <div className="mt-3">
                <NavLink className="btn-get-started" to={props.visit}>{props.btname}</NavLink>
              </div>
            </div>
            <div className="col-lg-6 pt-3 order-1 order-lg-2 content">
              <img src={props.imgsrc} className="img-fluid animated" alt="Common pic"/>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Common;