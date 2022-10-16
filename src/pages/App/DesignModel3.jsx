import './DesignModel3.css';
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from '../../components/Header';

function Design(props) {

  const [design, setDesign] = useState({
    name: "Model 3",
    range: 267,
    top_speed: 140,
    zero_to_sixty: 5.8,
    motor_options: "Rear-Wheel Motor",
    paint_options: "Pearl White Multi-Coat",
    wheel_options: "19\" Tempest Wheels",
    interior_options: "All Black",
    enhanced_autopilot: false,
    full_autopilot: false
  })
  
  // ADD DESIGN TO DATABASE
  function handleOrder() {
    const configs = {
      method: "POST",
      body: JSON.stringify({
        name: design.name,
        range: design.range,
        top_speed: design.top_speed,
        zero_to_sixty: design.zero_to_sixty,
        motor_options: design.motor_options,
        paint_options: design.paint_options,
        wheel_options: design.wheel_options,
        interior_options: design.interior_options,
        enhanced_autopilot: design.enhanced_autopilot,
        full_autopilot: design.full_autopilot
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }

    fetch(`http://localhost:8080/design`, configs)
    .then((res)=> res.json())
    .then((json) => {
        console.log(json);
    })
    .catch(console.error)
  }

  return (
    <>
      <Header />
      <div className='design-page'>
        <div className="design-preview">
          <h1>Model 3</h1>
          <p>{ design.motor_options }</p>
          <button onClick={ () => { handleOrder() } }>ORDER NOW</button>
        </div>
        <div className="design-select">
          <Link to="/cybertruck/design"><p>Cyber Truck</p></Link>
          <Link to="/model3/design"><p id="selected-design">Model 3</p></Link>
          <Link to="/models/design"><p>Model S</p></Link>
          <Link to="/roadster/design"><p>Roadster</p></Link>
        </div>
        <div className="design-display">
          <img src="/icons/placeholder.png" alt="design-display" />
        </div>
        <div className="design-specs">
          
          <div className="specs-item">
            <h3>{ design.range }+ mi</h3>
            <p>Range (est.)</p>
          </div>
          <div className="specs-item">
            <h3>{ design.zero_to_sixty } s</h3>
            <p>0-60 mph*</p>
          </div>
          <div className="specs-item">
            <h3>{ design.top_speed } mph</h3>
            <p>Top Speed</p>
          </div>
          <div className="specs-item">
            <h3>271 hp</h3>
            <p>Peak Power</p>
          </div>
          
        </div>
        <div className="design-controls">
          <div className="options">
            <div className="options-motor">
              <p>Dual Motor All-Wheel Drive</p>
              <div className="motor-option-1"><p>Model 3</p><p>$40,390</p></div>
              <p>Tri Motor All-Wheel Drive</p>
              <div className="motor-option-2"><p>Model Performance</p><p>$56,390</p></div>
            </div>  
          </div>
          <div className="options">
            <div className="options-paint">
              <h2>Paint</h2>
              <div className="paint-selection">
                <img src="/icons/paint-pearl-white-multi-coat.png" alt="paint-pearl-white-multi-coat.png" />
                <img src="/icons/paint-solid-black.png" alt="paint-solid-black.png" />
                <img src="/icons/paint-midnight-silver-metallic.png" alt="paint-midnight-silver-metallic.png" />
                <img src="/icons/paint-deep-blue-metalic.png" alt="paint-deep-blue-metalic.png" />
                <img src="/icons/paint-red-multi-coat.png" alt="paint-red-multi-coat.png" />
              </div>
              <div className="paint-details"><p>{ design.paint_options }</p><p>Included</p></div>
            </div>
          </div>
          <div className="options">
            <div className="options-wheel">
              <h2>Wheels</h2>
              <div className="wheel-selection">
                <img src="/icons/wheel-19-tempest.png" alt="wheel-19-tempest.png" />
                <img src="/icons/wheel-21-arachnid.png" alt="wheel-21-arachnid.png" />
              </div>
              <div className="wheel-details"><p>{ design.wheel_options }</p><p>Included</p></div>
            </div>
          </div>
          <div className="options">
            <div className="options-interior">
              <h2>Interior</h2>
              <div className="interior-selection">
                <img src="/icons/interior-all-black.png" alt="interior-all-black.png" />
                <img src="/icons/interior-black-and-white.png" alt="interior-black-and-white.png" />
                <img src="/icons/interior-cream.png" alt="interior-cream.png" />
              </div>
              <div className="interior-details"><p>{ design.interior_options }</p><p>Included</p></div>
            </div>
          </div>
          <div className="options">
            <div className="options-enhanced-autopilot">
              <h2>Enhanced Autopilot</h2>
              
              <div>
                <ul>
                  <li><p>Navigate on Autopilot</p></li>
                  <li><p>Auto Lane Change</p></li>
                  <li><p>Autopark</p></li>
                  <li><p>Summon</p></li>
                  <li><p>Smart Summon</p></li>
                </ul>
              </div>
              <div className="options-enhanced-autopilot-add">
                <button>Add</button>
                <p>$6,000</p>
              </div>
            </div>
          </div>
          <div className="options">
          <div className="options-full-autopilot">
              <h2>Full Self-Driving Capability</h2>
              
              <div>
                <ul>
                  <li><p>All functionality of Basic Autopilot and Enhanced Autopilot</p></li>
                  <li><p>Traffic Light and Stop Sign Control</p></li>
                </ul>
              </div>
              <div className="options-full-autopilot-add">
                <button>Add</button>
                <p>$15,000</p>
              </div>
            </div>  
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Design;