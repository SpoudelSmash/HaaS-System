import './App.css';
import Tabs from './components/Tabs';
import LoginPage from './components/LoginPage';
import HWSetPage from './components/HWSetPage';
import DatasetsPage from './components/DatasetsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './components/SignUpPage';
import JoinProjects from './components/JoinProjectsPage';

function App() {
  return (
    <div>
      <Router>
        {/* <Tabs/> */}
        <Routes>
          <Route exact path='/' element={<LoginPage/>}/>

          {/* VERY LIKELY TO CHANGE DEPENDENT ON GETTING PROJECT/ACCOUNT INFO*/}
          <Route exact path='/hwset' element={<HWSetPage/>}/> 

          <Route exact path='/datasets' element={<DatasetsPage/>}/>
          <Route exact path='/signup' element={<SignUpPage/>}/>
          
          <Route exact path='/joinProjects' element={<JoinProjects/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
