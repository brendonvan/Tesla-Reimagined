import Header from '../components/home/Header';
import Landing from '../components/home/Landing';

function Home() {

  return (
    <div className='home-page'>
      {/* <iframe src="/icons/temp-background.jpg" height="100vh" width="100vw"></iframe>  */}
      <Header />
      <Landing />
    </div>
  )
}

export default Home;