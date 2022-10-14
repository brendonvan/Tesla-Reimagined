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
          <div className="options">
            <div className="options-motor">
              <p>Dual Motor All-Wheel Drive</p>
              <div className="motor-option-1"><p>Tesla S</p><p>$96,590</p></div>
              <p>Tri Motor All-Wheel Drive</p>
              <div className="motor-option-2"><p>Plaid</p><p>$127,590</p></div>
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
              <div className="paint-details"><p>Pearl White Multi-Coat</p><p>Included</p></div>
            </div>
          </div>
          <div className="options">
            <div className="options-wheel">
              <h2>Wheel</h2>
              <div className="wheel-selection">
                <img src="/icons/wheel-19-tempest.png" alt="wheel-19-tempest.png" />
                <img src="/icons/wheel-21-arachnid.png" alt="wheel-21-arachnid.png" />
              </div>
              <div className="wheel-details"><p>19" Tempest Wheels</p><p>Included</p></div>
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
              <div className="interior-details"><p>All Black</p><p>Included</p></div>
            </div>
          </div>
          <div className="options"><div className="options-enhanced-autopilot"></div></div>
          <div className="options"><div className="options-full-autopilot"></div></div>
        </div>
      </div>
      
    </>
  )
}

export default Design;