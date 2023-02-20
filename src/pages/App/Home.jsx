import './Home.css';
import Header from '../../components/Header';
import Landing from '../../components/Home/Landing';

function Home() {
  return (
    <>
      <Header />
      <div className='home-page'>
        <iframe src="/icons/background.png" alt="background-cybertruck" frameborder='0' width='120%' height='120%'></iframe>
        <Landing />
      </div>
    </>
  )
}

export default Home;