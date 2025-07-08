import { Link, Route, Routes } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa6";
import { MdWarehouse } from "react-icons/md";

export default function AdminPage(){
    return(
        <div className="w-full h-screen bg-gray-200 flex p-2">
            <div className="w-[300px] h-full">
                <Link to="/admin/users" className="flex p-2 items-center"><FaUsers className="mr-[5px]"/>User</Link>
                <Link to="/admin/products" className="flex p-2 items-center"><MdWarehouse className="mr-[5px]"/>Products</Link>
                <Link to="/admin/orders" className="flex p-2 items-center"><FaFileInvoice className="mr-[5px]"/>Orders</Link>
            </div>
            <div className="w-[calc(100vw-300px)] h-full rounded-lg bg-white">
                <Routes path="/*">
                    <Route path="/users" element={<h1>User</h1>}/>
                    <Route path="/products" element={<h1>Products</h1>}/>
                    <Route path="/orders" element={<h1>Orders</h1>}/>
                </Routes>
            </div>

        </div>
    )
}