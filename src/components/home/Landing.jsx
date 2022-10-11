import './Landing.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Landing() {
    return (
      <>
        <div className='landing-content-wrapper'>
          
          <div className='landing-content'>

            {/* TODO: */}
            {/* This content will be dynamic */}
            <h1>CYBER TRUCK</h1>
            <p>Better utility than a truck with more performance than a sports car</p>
            {/* This content will be dynamic */}
            
            <div className='landing-buttons'>

              {/* TODO: */}
              {/* This link will be dynamic */}
              <Link to="/cybertruck/design"><button className='order'><h3 className='order-text'>ORDER NOW</h3></button></Link>
              <Link to="/cybertruck"><button className='learn-more'><img src="/icons/learn-more-arrow.svg" alt="learn-more" /><p className='learn-more-text'>Learn More</p></button></Link>
              {/* This link will be dynamic */}
            </div>

            {/* TODO: */}
            {/* This specs will be dynamic */}
            <div className='landing-specs'>
              <div className='mph-spec'>
                <div className="spec"><img src="/icons/mph.svg" alt="mpg-icon" /><h2>0.0 s</h2></div>
                <div className='spec'><p>0-60 mph*</p></div>
              </div>
              <div className='range-spec'>
                <div className='spec'><h2>000 mi</h2></div>
                <div className='spec'><p>Range (EPA est.)</p></div>
              </div>
              <div className='motor-spec'>
                <div className='spec'><h2>AWD</h2></div>
                <div className='spec'><p>Dual Motor</p></div> 
              </div>
            </div>
            {/* This specs will be dynamic */}
          </div>

          {/* TODO: */}
          {/* Car choices will be dynamic */}
          <div className='landing-car-options'>
            <a href="#first-option">
              <div className='first-option'>
                <div className="option"><h2>Model 3</h2></div>
                <div className="option"><p>view</p></div>
              </div>
            </a>
            <a href="#second-option">
              <div className='second-option'>
                <div className="option"><h2>Model S</h2></div>
                <div className="option"><p>view</p></div>
              </div>
            </a>

            <a href="#third-option">
              <div className='third-option'>
                <div className="option"><h2>Roadster</h2></div>
                <div className="option"><p>view</p></div>
              </div>
            </a>
          </div>
          {/* Car choices will be dynamic */}
        </div>
      </>
        
    )
}

export default Landing;


