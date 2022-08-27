import logo from './logo.svg';
import './App.css';
import Registration from './Component/Registration';
import Login from './Component/Login';
import Header from './Component/Header';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Users from './Component/Users';
import Product from './Component/Product';
function App() {
  return (
    <div className="App">
     
     
       <BrowserRouter>
      <Header />
      
      <Routes>
      {/* <Route path='/' element={<Login/>}/> */}
        <Route path="/registration" element={<Registration />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/product/:id" element={<Product />}/>
        
   </Routes>
  
    </BrowserRouter>
    </div>
  );
}

export default App;
