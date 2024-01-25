
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import Landing from './pages/Home/Landing';
import StudentLogin from './Auth/Student/Login/StudentLogin';
import StudentRegister from './Auth/Student/Register/StudentRegister';
import StudentHome from './pages/students/Home/StudentHome';
import Login from './Auth/Mentor/Login/Login';
import Thanks from './Auth/Student/Register/Thanks';

function App() {
  return (
    <Router>
     
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path='/studentlogin' element={<StudentLogin/>}/>
            <Route path='/studentregister' element={<StudentRegister/>}/>
            <Route path='/thanks' element={<Thanks/>}/>
            <Route path='/studenthome' element={<StudentHome/>}/>
            <Route path='/menter' element={<Login/>}/>


          </Routes>
      
    </Router>
  );
}

export default App;
