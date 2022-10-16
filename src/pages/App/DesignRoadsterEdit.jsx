import './DesignRoadster.css';
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import Header from '../../components/Header';

function Design() {
  const params = useParams();

  const [design, setDesign] = useState({
    name: "Roadster",
    range: 620,
    top_speed: 250,
    zero_to_sixty: 1.9,
    motor_options: "Tri Motor",
    paint_options: "Pearl White Multi-Coat",
    wheel_options: "19\" Tempest Wheels",
    interior_options: "All Black",
    enhanced_autopilot: false,
    full_autopilot: false
  })
  
  // ADD DESIGN TO DATABASE
  function initializeDesign() {
    const configs = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
    fetch(`http://localhost:8080/dashboard/${params.id}`, configs)
    .then((res)=> res.json())
    .then((json) => {
        setDesign(json);
    })
    .catch(console.error)
  }

  function handleOrder() {
    const configs = {
      method: "PUT",
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

    fetch(`http://localhost:8080/design/${params.id}`, configs)
    .then((res)=> res.json())
    .then((json) => {
        console.log(json);
    })
    .catch(console.error)
  }

  useEffect(() => {
    initializeDesign()
  }, []);

  return (
    <>
      <Header />
      <div className='design-page'>
        <div className="design-preview">
          <h1>Roadster</h1>
          <p>{ design.motor_options }</p>
          <Link to="/dashboard"><button onClick={ () => { handleOrder() } }>UPDATE DESIGN</button></Link>
        </div>
        <div className="design-select">
          <Link to={`/cybertruck/design/${ params.id }`}><p id="selected-design">Cybertruck</p></Link>
          <Link to={`/model3/design/${ params.id }`}><p>Model 3</p></Link>
          <Link to={`/models/design/${ params.id }`}><p>Model S</p></Link>
          <Link to={`/roadster/design/${ params.id }`}><p>Roadster</p></Link>
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
            <h3>1242 hp</h3>
            <p>Peak Power</p>
          </div>
          
        </div>
        <div className="design-controls">
          <div className="options">
            <div className="options-motor">
              <p>Tri Motor All-Wheel Drive</p>
              <div id="option-selected" className="motor-option-1"><p>Roadster</p><p>$200,000</p></div>
            </div>  
          </div>
          <div className="options">
            <div className="options-paint">
              <h2>Paint</h2>
              <div className="paint-selection">
                <img onClick={ () => { setDesign({ ...design, paint_options: "Pearl White Multi-Coat" }) } } id={ design.paint_options === "Pearl White Multi-Coat" ? "multi-option-selected" : ""  } src="/icons/paint-pearl-white-multi-coat.png" alt="paint-pearl-white-multi-coat.png" />
                <img onClick={ () => { setDesign({ ...design, paint_options: "Midnight Silver Metallic" }) } } id={ design.paint_options === "Midnight Silver Metallic" ? "multi-option-selected" : ""  } src="/icons/paint-solid-black.png" alt="paint-solid-black.png" />
                <img onClick={ () => { setDesign({ ...design, paint_options: "Deep Blue Metallic" }) } } id={ design.paint_options === "Deep Blue Metallic" ? "multi-option-selected" : ""  } src="/icons/paint-midnight-silver-metallic.png" alt="paint-midnight-silver-metallic.png" />
                <img onClick={ () => { setDesign({ ...design, paint_options: "Solid Black" }) } } id={ design.paint_options === "Solid Black" ? "multi-option-selected" : ""  } src="/icons/paint-deep-blue-metalic.png" alt="paint-deep-blue-metalic.png" />
                <img onClick={ () => { setDesign({ ...design, paint_options: "Red Multi-Coat" }) } } id={ design.paint_options === "Red Multi-Coat" ? "multi-option-selected" : ""  } src="/icons/paint-red-multi-coat.png" alt="paint-red-multi-coat.png" />
              </div>
              <div className="paint-details"><p>{ design.paint_options }</p><p>Included</p></div>
            </div>
          </div>
          <div className="options">
            <div className="options-wheel">
              <h2>Wheels</h2>
              <div className="wheel-selection">
                <img onClick={ () => { setDesign({ ...design, wheel_options: "19\" Tempest Wheels" }) } } id={ design.wheel_options === "19\" Tempest Wheels" ? "multi-option-selected" : ""  } src="/icons/wheel-19-tempest.png" alt="wheel-19-tempest.png" />
                <img onClick={ () => { setDesign({ ...design, wheel_options: "21\" Arachnid Wheels" }) } } id={ design.wheel_options === "21\" Arachnid Wheels" ? "multi-option-selected" : ""  } src="/icons/wheel-21-arachnid.png" alt="wheel-21-arachnid.png" />
              </div>
              <div className="wheel-details"><p>{ design.wheel_options }</p><p>Included</p></div>
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