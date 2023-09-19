import './App.css';

import Nav from './component/Home/Nav/Nav';

import Data from './Data/Data.json'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './component/Pages/Login/Login';
import Indexhome from './component/Home/Indexhome/Indexhome';
import Signup from './component/Pages/Signup/Signup';
import Singleproduct from './component/Pages/Singleproduct/Singleproduct';
import ContextProvider from './Context/Context';
import Cart from './component/Pages/Cart/Cart';
import { useEffect } from 'react';
import Moreproduct from './component/Pages/Moreproduct/Moreproduct';
function App() {
  const { Catogrycard } = Data
  const discound = Catogrycard.filter(i => i.type === 'discound')
  const mostseller = Catogrycard.filter(i => i.type === 'mostseller')
  
  return (
    
      <ContextProvider>
      <BrowserRouter>
      <Nav />
        <Routes>
       
        <Route path='/cart' Component={Cart}/>
          <Route path='/Login' Component={Login}/>
          <Route path='/Signup' Component={Signup}/>
          <Route path='/' Component={Indexhome}/>
          <Route path='/Singleproduct/:id' Component={Singleproduct} Filter/>
          <Route path='/Moreproduct/:id' Component={Moreproduct}/>
        
          

        </Routes>
      </BrowserRouter>
      </ContextProvider>
  
  );
}

export default App;
