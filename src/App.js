import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import Employee from './screens/Employee';
import Login from './screens/Login';
import Register from './screens/Register';
import Header from './screens/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
<Route path="home" element={<Home/>}/>
<Route path="employee" element={<Employee/>}/>
<Route path="login" element={<Login/>}/>
<Route path="register" element={<Register/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
 