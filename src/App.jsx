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
import Sell from './Pages/Sell'
import AddProduct from "./components/Addproduct/Addproduct";
import ListProduct from "./components/Listproduct/Listproduct";


function App(){

  return <div>
      <BrowserRouter>
        <Navbar></Navbar>
          <Routes>

            {/* This all are navbar Routes */}
            {/* Its Links added in Navbar.jsx */}
            <Route path='/' element={<Shop/>}></Route>
            
            <Route path='/appliances' element={ <ShopCategory banner = {men_banner} category='appliances'/> }></Route>
            <Route path='/electronics' element={<ShopCategory banner = {women_banner} category='electronics' />}></Route>
            <Route path='/sports' element={<ShopCategory banner = {kid_banner} category='sports' />}></Route>
            <Route path='/others' element={<ShopCategory banner = {kid_banner} category='others' />}></Route>

            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/login' element={<LoginSignup/>}></Route>

            {/* This Route is for when we click on perticular item image then it open that item on next page And its Link added in Item.jsx */}
            <Route path='/product' element={<Product/>}>
                <Route path=':productId' element={<Product/>}></Route>
            </Route>

            <Route path='/sell' element={<Sell/>}></Route>
            <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
            <Route path='/listproduct' element={<ListProduct></ListProduct>}></Route>

          </Routes>
        <Footer></Footer>
      </BrowserRouter>
  </div>
}

export default App;