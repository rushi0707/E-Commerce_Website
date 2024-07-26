/*
    We use Navbar and Footer inside App.jsx so that they will be available on 
    entire application.

    In men,women and kid in ele we pass 2 porps with our component.
    1. banner image of category
    2. category in string format , which will help to sort data based on category.

    Shop is the Home page (bydefault when open) on our Application
*/

import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./components/Footer/Footer";

import men_banner from './components/assets/banner_mens.png';
import women_banner from './components/assets/banner_women.png';
import kid_banner from './components/assets/banner_kids.png';


function App(){

  return <div>
      <BrowserRouter>
        <Navbar></Navbar>
          <Routes>

            {/* This all are navbar Routes */}
            {/* Its Links added in Navbar.jsx */}
            <Route path='/' element={<Shop/>}></Route>
            <Route path='/men' element={ <ShopCategory banner = {men_banner} category='men'/> }></Route>
            <Route path='/women' element={<ShopCategory banner = {women_banner} category='women' />}></Route>
            <Route path='/kid' element={<ShopCategory banner = {kid_banner} category='kid' />}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/login' element={<LoginSignup/>}></Route>

            {/* This Route is for when we click on perticular item image then it open that item on next page And its Link added in Item.jsx */}
            <Route path='/product' element={<Product/>}>
                <Route path=':productId' element={<Product/>}></Route>
            </Route>

          </Routes>
        <Footer></Footer>
      </BrowserRouter>
  </div>
}

export default App;