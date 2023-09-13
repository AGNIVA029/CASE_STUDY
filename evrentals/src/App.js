import LoginForm from './loginpage/loginform';
import RegistrationForm from './registratn_comp/registrationform';
import HomePage from './homepage/home';
import Aboutus from './aboutus';
import {Routes,Route, BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="*" element={<HomePage />} />
      {/* <Route path="signup" element={<RegistrationForm />} /> */}
      <Route path='/signup' element={<RegistrationForm></RegistrationForm>}/> 
      <Route exact path="/login" element={<LoginForm />} />
      <Route path='/aboutus' element={<Aboutus/>}></Route>
        </Routes>
      </Router>
    
  );
}

export default App;
