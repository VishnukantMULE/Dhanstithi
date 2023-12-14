
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import Landing from './pages/Home/Landing';
import StudentLogin from './Auth/Student/Login/StudentLogin';
import StudentRegister from './Auth/Student/Register/StudentRegister';
import StudentHome from './pages/students/Home/StudentHome';

function App() {
  return (
    <Router>
     
          <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path='/studentlogin' element={<StudentLogin/>}/>
            <Route path='/studentregister' element={<StudentRegister/>}/>
            <Route path='/studenthome' element={<StudentHome/>}/>


          </Routes>
      
    </Router>
  );
}

export default App;
