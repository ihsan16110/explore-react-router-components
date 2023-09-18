import logo from './logo.svg';
import './App.css';
import { Route, Router, RouterProvider, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Header from './components/Header';
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/products' element={<Products></Products>}></Route>
      <Route path='/contacts' element={<Contacts></Contacts>}></Route>

    </Routes>
    </div>
  );
}

export default App;
