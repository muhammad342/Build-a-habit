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
import HabitList from './Screen/HabitList';
import MarkHabit from './Screen/MarkHabit';
import WeeklyTracker from './Screen/WeeklyTracker';
import MonthlyTracker from './Screen/MonthlyTracker';


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
        <Route  path='/habitList' element={<HabitList/>} />
        <Route  path='/Completed' element={<MarkHabit/>} />
        <Route  path='/WeeklyTracker' element={<WeeklyTracker/>} />
        <Route  path='/MonthlyTracker' element={<MonthlyTracker/>} />
      </Routes>
    </main>
  </Router>
  </>
  );
}

export default App;
