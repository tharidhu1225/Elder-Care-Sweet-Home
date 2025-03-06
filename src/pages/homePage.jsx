import { Route, Routes } from 'react-router-dom';
import Header from '../components/header';
import LoginPage from './loginPage';
import ProductOverview from './home/productOverview';
import ProductPage from './home/product';
import Cart from './home/cart';
import ShippingPage from './home/shipping';
import MyOrdersPage from './home/orders';
import PlacesPage from './home/places';
import Home from './home/home';
import ContactUs from './home/contact';
import ServicesPage from './home/sevices';
export default function HomePage() {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className='w-full h-[calc(100vh-100px)] '>
        <Routes path="/*">
          <Route path="/" element={<Home/>} />
          <Route path="/gallery" element={<ProductPage/>} />
          <Route path="/login" element={<LoginPage/>} />   
          <Route path='/places' element={<PlacesPage/>}/>      
          <Route path="/productInfo/:id" element={<ProductOverview/>} />
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
        </Routes>  
      </div>
        
    </div>
  ); 
}
