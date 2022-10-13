import './Design.css';
import Header from '../../components/Header';
import Editor from '../../components/Design/Editor';

function Design(props) {
  
  return (
    <>
      <Header />
      <div className='design-page'>
        <div className="design-preview">
          <h1>Model S</h1>
          <p>Plaid</p>
          <button>ORDER NOW</button>
        </div>
        <div className="design-select">
          <p>Cyber Truck</p>
          <p>Model 3</p>
          <p>Model S</p>
          <p>Roadster</p>
        </div>
        <div className="design-display">
          <img src="/icons/placeholder.png" alt="design-display" />
        </div>
        <div className="design-specs">
          
          <div className="specs-item">
            <h3>390 mi</h3>
            <p>Range (est.)</p>
          </div>
          <div className="specs-item">
            <h3>1.99 s</h3>
            <p>0-60 mph*</p>
          </div>
          <div className="specs-item">
            <h3>200 mph</h3>
            <p>Top Speed</p>
          </div>
          <div className="specs-item">
            <h3>1,020 hp</h3>
            <p>Peak Power</p>
          </div>
          
        </div>
        <div className="design-controls">
          <div className="options"><div className="options-motor"></div></div>
          <div className="options"><div className="options-paint"></div></div>
          <div className="options"><div className="options-wheel"></div></div>
          <div className="options"><div className="options-interior"></div></div>
          <div className="options"><div className="options-enhanced-autopilot"></div></div>
          <div className="options"><div className="options-full-autopilot"></div></div>
        </div>
      </div>
      
    </>
  )
}

export default Design;