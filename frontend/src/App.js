import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Shop } from './Pages/Shop';
import {ShopCategory} from './Pages/ShopCategory';
import {Products} from './Pages/Products';
import { Cart } from './Pages/Cart';
import {Footer} from './Components/Footer/Footer';
import ShopContextProvider from './Context/ShopContext';
import men_banner from './Assets/banner_mens.png';
import women_banner from './Assets/banner_women.png';
import kids_banner from './Assets/banner_kids.png';
import { Shipping } from './Components/Shipping/Shipping';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>

    
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route  path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route  path='/women' element={<ShopCategory  banner ={women_banner} category="women"/>}/>
        <Route  path='/kids' element={<ShopCategory  banner={kids_banner} category="kid"/>}/>
        <Route path='/product'element={<Products/>}>
          <Route path=':productId' element={<Products/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/> 
        <Route path='/shipping' element={<Shipping/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
