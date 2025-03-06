import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { BsGraphUp, BsBoxSeam, BsCart4, BsPeopleFill, BsPeople } from "react-icons/bs";
import AdminProductsPage from "./admin/adminProductsPage";
import AddProductForm from "./admin/addProductForm";
import EditProductForm from "./admin/editProductForm";
import AdminOrdersPage from "./admin/adminOrderPage";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { MdPostAdd } from "react-icons/md";
import AdminUsers from "./admin/adminUsers";
import AdminDashboard from "./admin/adminDashbord";

export default function AdminHomePage() {
 
  return (
    <div className="bg-blue-200 w-full h-screen flex">
      <div className="w-[25%] h-screen bg-blue-500 flex flex-col items-center py-4">
      <Link className="flex items-center space-x-3 hover:bg-blue-500 px-4 py-2 rounded transition" to="/TN">
                        <BsGraphUp size={20} />
                        <span>Dashboard</span>
                      </Link>
                      <Link className="flex items-center space-x-3 hover:bg-blue-500 px-4 py-2 rounded transition" to="/TN/products">
                        <MdPostAdd size={20} />
                        <span>Posts</span>
                      </Link>
                      <Link className="flex items-center space-x-3 hover:bg-blue-500 px-4 py-2 rounded transition" to="/TN/customers">
                        <BsPeople size={20} />
                        <span>Users</span>
                      </Link>
      </div>

      <div className="w-[80%] h-screen ">
          <Routes path="/*">
          <Route path="/" element={<AdminDashboard/>} />
          <Route path="/products" element={<AdminProductsPage/>} />
          <Route path="/products/addProduct" element={<AddProductForm/>} />
          <Route path="/products/editProduct" element={<EditProductForm/>} />
          <Route path="/customers" element={<AdminUsers/>} />
          
        </Routes>
        
      </div>
    </div>
  );
}
