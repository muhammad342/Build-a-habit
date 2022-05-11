import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './Screen/Login';
import HomeScreen from './Screen/HomeScreen';
import FirstPage from './Screen/FirstPage';
import SecondPage from './Screen/SecondPage';
import HealthBeauty from './Screen/HealthBeauty';
import Study from './Screen/Study'
import Social from './Screen/Social'
import Happy from './Screen/Happy'
import Details from './Screen/Details';
import CreateHabit from './Screen/CreateHabit';


function App({children}) {
  return (
    <>
    
    <Router>
    <main>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route  path='/home' element={<HomeScreen />} />
        <Route  path='/FirstPage' element={<FirstPage />} />
        <Route  path='/SecondPage' element={<SecondPage/>} />
        <Route  path='/health' element={<HealthBeauty/>} />
        <Route  path='/study' element={<Study/>} />
        <Route  path='/social' element={<Social/>} />
        <Route  path='/happy' element={<Happy/>} />
        <Route  path='/details' element={<Details/>} />
        <Route  path='/CreateHabit' element={<CreateHabit/>} />
      </Routes>
    </main>
  </Router>
  </>
  );
}

export default App;
