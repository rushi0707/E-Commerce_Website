import './CSS/Admin.css';
import Sidebar from '../components/Sidebar/Sidebar'
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import AddProduct from '../components/Addproduct/Addproduct';
import ListProduct from '../components/Listproduct/Listproduct';

function Admin(){
    return <div className='admin'>
        <Sidebar></Sidebar>
    </div>
}
export default Admin;