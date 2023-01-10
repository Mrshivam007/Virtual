import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './component/Header';
import Colorplate from './pages/colorplate';
import Home from './pages/Home';
import Living from './pages/living';
import Product from './pages/product.jsx';
import Login from './pages/login.jsx';
import Signup from './pages/signup';
import Visualize from './pages/Visualize';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/living' element={<Living />}></Route>
          <Route path='/colorplate' element={<Colorplate />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/visualize' element={<Visualize />}></Route>
          
        </Routes>

      </BrowserRouter>
      


      




    </div>
  );
}

export default App;
