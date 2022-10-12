import './Home.css';
import Header from '../../components/Header';
import Landing from '../../components/Home/Landing';

function Home() {

  return (
    <>
      <Header />
      <div className='home-page'>
        {/* <iframe src="/icons/temp-background.jpg" height="100vh" width="100vw"></iframe>  */}
        <Landing />
      </div>
  
    </>
  )
}

export default Home;