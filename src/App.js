import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/App/Home';
import Dashboard from './pages/App/Dashboard';
import MoreInfo from './pages/App/MoreInfo'
import DesignCybertruck from './pages/App/DesignCybertruck';
import DesignModel3 from './pages/App/DesignModel3';
import DesignModelS from './pages/App/DesignModelS';
import DesignRoadster from './pages/App/DesignRoadster';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>

      <Route path='/cybertruck' element={<MoreInfo/>}></Route>
      <Route path='/model3' element={<MoreInfo/>}></Route>
      <Route path='/models' element={<MoreInfo/>}></Route>
      <Route path='/roadster' element={<MoreInfo/>}></Route>

      <Route path='/cybertruck/design' element={<DesignCybertruck/>}></Route>
      <Route path='/model3/design' element={<DesignModel3/>}></Route>
      <Route path='/models/design' element={<DesignModelS/>}></Route>
      <Route path='/roadster/design' element={<DesignRoadster/>}></Route>

      <Route path='/oauth2/v1/fakeauthorize/' element={<Login/>}></Route>
      <Route path='/oauth2/v1/fakeregister/' element={<Register/>}></Route>
    </Routes>
  );
}

export default App;
