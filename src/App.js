import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/App/Home';
import MoreInfo from './pages/App/MoreInfo'
import Design from './pages/App/Design';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      
      <Route path='/cybertruck' element={<MoreInfo/>}></Route>
      <Route path='/model3' element={<MoreInfo/>}></Route>
      <Route path='/models' element={<MoreInfo/>}></Route>
      <Route path='/roadster' element={<MoreInfo/>}></Route>

      <Route path='/cybertruck/design' element={<Design/>}></Route>
      <Route path='/model3/design' element={<Design/>}></Route>
      <Route path='/models/design' element={<Design/>}></Route>
      <Route path='/roadster/design' element={<Design/>}></Route>

      <Route path='/oauth2/v1/fakeauthorize/' element={<Login/>}></Route>
      <Route path='/oauth2/v1/fakeregister/' element={<Register/>}></Route>
    </Routes>
  );
}

export default App;
