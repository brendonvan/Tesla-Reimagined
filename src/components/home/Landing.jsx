import './Landing.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from 'react';

function Landing() {
  // Initialize current display view
  let initialDisplayView = { 
    name: 'CYBER TRUCK',
    description: 'Better utility than a truck with more performance than a sports car',
    orderPath: '/cybertruck/design',
    learnMorePath: '/cybertruck',
    zeroToSixty: '2.9 s',
    range: '500+ mi',
    motor: 'AWD',
    carOptions: { 
      firstOption: { 
        name: 'Model 3',
        path: 'model3'
       },
       secondOption: { 
        name: 'Model S',
        path: 'models'
       },
       thirdOption: { 
        name: 'Roadster',
        path: 'roadster'
       },
    }
  };
  const [displayView, setDisplayView] = useState(initialDisplayView);

  // Display View (name, description, pathName, zeroToSixty, range, motor, carOptions)

  function setViewToCyberTruck() {
    setDisplayView({ 
      name: 'CYBER TRUCK',
      description: 'Better utility than a truck with more performance than a sports car',
      orderPath: '/cybertruck/design',
      learnMorePath: '/cybertruck',
      zeroToSixty: '2.9 s',
      range: '500+ mi',
      motor: 'AWD',
      carOptions: { 
        firstOption: { 
          name: 'Model 3',
          path: 'model3'
         },
         secondOption: { 
          name: 'Model S',
          path: 'models'
         },
         thirdOption: { 
          name: 'Roadster',
          path: 'roadster'
         },
      }
    });
  }

  function setViewToModel3() {
    setDisplayView({ 
      name: 'MODEL 3',
      description: `The Model 3 is now Tesla’s most affordable model and has the range to convert electric-car skeptics.`,
      orderPath: '/model3/design',
      learnMorePath: '/model3',
      zeroToSixty: '3.1 s',
      range: '381 mi',
      motor: 'AWD',
      carOptions: { 
        firstOption: { 
          name: 'Cyber Truck',
          path: 'cybertruck'
         },
         secondOption: { 
          name: 'Model S',
          path: 'models'
         },
         thirdOption: { 
          name: 'Roadster',
          path: 'roadster'
         },
      }
    })
  }

  function setViewToModelS() {
    setDisplayView({ 
      name: 'MODEL S',
      description: `The Model S is an electric luxury sedan that makes many of its premium-badged rivals seem fussy and old fashioned.`,
      orderPath: '/models/design',
      learnMorePath: '/models',
      zeroToSixty: '1.99 s',
      range: '396 mi',
      motor: 'AWD',
      carOptions: { 
        firstOption: { 
          name: 'Cyber Truck',
          path: 'cybertruck'
         },
         secondOption: { 
          name: 'Model 3',
          path: 'model3'
         },
         thirdOption: { 
          name: 'Roadster',
          path: 'roadster'
         },
      }
    })
  }

  function setViewToRoadster() {
    setDisplayView({ 
      name: 'ROADSTER',
      description: `Roadster The quickest car in the world, with record-setting acceleration, range and performance.`,
      orderPath: '/roadster/design',
      learnMorePath: '/roadster',
      zeroToSixty: '1.9 s',
      range: '620 mi',
      motor: 'AWD',
      carOptions: { 
        firstOption: { 
          name: 'Cyber Truck',
          path: 'cybertruck'
         },
         secondOption: { 
          name: 'Model 3',
          path: 'model3'
         },
         thirdOption: { 
          name: 'Model S',
          path: 'models'
         },
      } 
    })
  }
  // OnClick() car options, (cybertruck, model3, models, roadster), will change carOptions
  function viewOption(path) {
    switch(path) {
      case 'cybertruck':
        setViewToCyberTruck();
        break;
      case 'model3':
        setViewToModel3();
        break;
      case 'models':
        setViewToModelS();
        break;
      case 'roadster':
        setViewToRoadster();
      break;
      default:
        setViewToCyberTruck();
    }
  }
  
  return (
    <>
      <div className='landing-content-wrapper'>
        
        <div className='landing-content'>
          <h1>{ displayView.name }</h1>
          <p>{ displayView.description }</p>
          
          <div className='landing-buttons'>
            <Link to={ displayView.orderPath }><button className='order'><h3 className='order-text'>ORDER NOW</h3></button></Link>
            <Link to={ displayView.learnMorePath }><button className='learn-more'><img src="/icons/learn-more-arrow.svg" alt="learn-more" /><p className='learn-more-text'>Learn More</p></button></Link>

          </div>

          <div className='landing-specs'>
            <div className='mph-spec'>
              <div className="spec"><img src="/icons/mph.svg" alt="mpg-icon" /><h2>{ displayView.zeroToSixty }</h2></div>
              <div className='spec'><p>0-60 mph*</p></div>
            </div>
            <div className='range-spec'>
              <div className='spec'><h2>{ displayView.range }</h2></div>
              <div className='spec'><p>Range (EPA est.)</p></div>
            </div>
            <div className='motor-spec'>
              <div className='spec'><h2>{ displayView.motor }</h2></div>
              <div className='spec'><p>Motor</p></div> 
            </div>
          </div>
        </div>

        <div className='landing-car-options'>
          <a href="#first-option" onClick={ () => { viewOption(displayView.carOptions.firstOption.path) }}>
            <div className='first-option'>
              <div className="option"><h2>{ displayView.carOptions.firstOption.name }</h2></div>
              <div className="option"><p>view</p></div>
            </div>
          </a>
          <a href="#second-option" onClick={ () => { viewOption(displayView.carOptions.secondOption.path) } }>
            <div className='second-option'>
              <div className="option"><h2>{ displayView.carOptions.secondOption.name }</h2></div>
              <div className="option"><p>view</p></div>
            </div>
          </a>
          <a href="#third-option" onClick={ () => { viewOption(displayView.carOptions.thirdOption.path) } }>
            <div className='third-option'>
              <div className="option"><h2>{ displayView.carOptions.thirdOption.name }</h2></div>
              <div className="option"><p>view</p></div>
            </div>
          </a>
        </div>
      </div>
    </>
      
  )
}

export default Landing;


