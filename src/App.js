import './App.css'
import Home from './pages/Home';
import MoreInfo from './pages/MoreInfo'
import Design from './pages/Design';
import { Routes, Route } from 'react-router-dom';

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
    </Routes>
  );
}

export default App;
