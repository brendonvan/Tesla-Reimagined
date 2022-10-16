import './DesignCybertruck.css';
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from '../../components/Header';

function Design() {

  const [design, setDesign] = useState({
    name: "Cybertruck",
    range: 300,
    top_speed: 120,
    zero_to_sixty: 4.5,
    motor_options: "Dual Motor",
    paint_options: "Stainless Steel",
    wheel_options: "Default",
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
        range: 500,
        top_speed: 130,
        zero_to_sixty: 2.9,
        motor_options: design.motor_options,
        paint_options: "Stainless Steel",
        wheel_options: "Default",
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
          <h1>Cybertruck</h1>
          <p>{ design.motor_options }</p>
          <button onClick={ () => { handleOrder() } }>ORDER NOW</button>
        </div>
        <div className="design-select">
          <Link to="/cybertruck/design"><p id="selected-design">Cybertruck</p></Link>
          <Link to="/model3/design"><p>Model 3</p></Link>
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
            <h3>800 hp</h3>
            <p>Peak Power</p>
          </div>
        </div>
        <div className="design-controls">
          <div className="options">
            <div className="options-motor">
              <p>Dual Motor All-Wheel Drive</p>
              <div onClick={ () => { setDesign({ ...design, motor_options: "Dual Motor" }) } } className="motor-option-1" id={ design.motor_options === "Dual Motor" ? "option-selected" : "" }><p>Cybertruck</p><p>$49,900</p></div>
              <p>Tri Motor All-Wheel Drive</p>
              <div onClick={ () => { setDesign({ ...design, motor_options: "Tri Motor" }) } } className="motor-option-2" id={ design.motor_options === "Tri Motor" ? "option-selected" : ""  }><p>Performance</p><p>$69,900</p></div>
            </div>  
          </div>
          <div className="options">
            <div className="options-paint">
              <h2>Paint</h2>
              <div className="paint-selection">
                <img id="multi-option-selected" src="/icons/paint-midnight-silver-metallic.png" alt="paint-midnight-silver-metallic.png" />
              </div>
              <div className="paint-details"><p>Stainless Steel</p><p>Included</p></div>
            </div>
          </div>
          <div className="options">
            <div className="options-wheel">
              <h2>Wheels</h2>
              <div className="wheel-selection">
                <img id="multi-option-selected" src="/icons/wheel-19-tempest.png" alt="wheel-19-tempest.png" />
              </div>
              <div className="wheel-details"><p>Default Wheels</p><p>Included</p></div>
            </div>
          </div>
          <div className="options">
            <div className="options-interior">
              <h2>Interior</h2>
              <div className="interior-selection">
                <img onClick={ () => { setDesign({ ...design, interior_options: "All Black" }) } } id={ design.interior_options === "All Black" ? "multi-option-selected" : ""  } src="/icons/interior-all-black.png" alt="interior-all-black.png" />
                <img onClick={ () => { setDesign({ ...design, interior_options: "Black and White" }) } } id={ design.interior_options === "Black and White" ? "multi-option-selected" : ""  } src="/icons/interior-black-and-white.png" alt="interior-black-and-white.png" />
                <img onClick={ () => { setDesign({ ...design, interior_options: "Cream" }) } } id={ design.interior_options === "Cream" ? "multi-option-selected" : ""  } src="/icons/interior-cream.png" alt="interior-cream.png" />
              </div>
              <div className="interior-details"><p>All Black</p><p>Included</p></div>
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
                <button onClick={ () => { setDesign({...design, enhanced_autopilot: !design.enhanced_autopilot}) }}>{ design.enhanced_autopilot ? "Added" : "Add" }</button>
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
                <button onClick={ () => { setDesign({...design, full_autopilot: !design.full_autopilot}) }}>{ design.full_autopilot ? "Added" : "Add" }</button>
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