import axios from "axios"
import { useEffect, useState } from "react"
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function AdminProductPage(){

    const [products,setProducts] = useState([])

    useEffect(()=>{

        axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then((response)=>{
        console.log(response.data)
        setProducts(response.data.products)
    })

    },[])

    return(
        <div className="w-full h-full rounded-lg relative">
            <table className="w-full rounded-lg">
                <thead>
                    <tr className="bg-emerald-400">
                        <td className="font-bold p-2">Product ID</td>
                        <td className="font-bold p-2">Name</td>
                        <td className="font-bold p-2">Price</td>
                        <td className="font-bold p-2">Lable Price</td>
                        <td className="font-bold p-2">Stoke</td>
                    </tr>
                </thead>
                <tbody>
                    
                        {products.map((product,index)=>{
                            return (
                            <tr key={index} className="hover:bg-gray-300 border-b-1 cursor-pointer">
                            <td className="p-2">{product.productId}</td>
                            <td className="p-2">{product.name}</td>
                            <td className="p-2">{product.price}</td>
                            <td className="p-2">{product.labeledPrice}</td>
                            <td className="p-2">{product.stock}</td>

                            </tr>
                            )
                        })}

                </tbody>
            </table>
            <Link to={"/admin/addproduct"} className="bg-gray-700 absolute p-2 rounded-full hover:bg-gray-300 border-gray-700 right-5 bottom-5 cursor-pointer text-white text-2xl hover:text-gray-700">
                <FaPlus/>
            </Link>
        </div>
    )
}