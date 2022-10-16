import './Home.css';
import Header from '../../components/Header';
import Landing from '../../components/Home/Landing';
import { useEffect, useRef } from 'react';

function Home() {

  
  return (
    <>
      <Header />
      <div className='home-page'>
        <iframe src='https://my.spline.design/untitled-eb762bd2132363d96653a462b6124bf5/' frameborder='0' width='100%' height='100%'></iframe>
        
        <Landing />
      </div>
  
    </>
  )
}

export default Home;