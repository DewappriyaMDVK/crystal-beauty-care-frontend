import axios from "axios"
import { useEffect, useState,} from "react"
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import toast from "react-hot-toast";
import Loding from "../../components/Loding";


export default function AdminProductPage(){

    const [products,setProducts] = useState([]);
    const [loaded,setLoaded] = useState(false);

    useEffect(()=>{

        if(!loaded){
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product")
            .then((response)=>{
            console.log(response.data)
            setProducts(response.data.products)
            setLoaded(true)
            })
        }
    },[loaded])

    async function DeleteProduct(id){
        const token = localStorage.getItem("token")
        if(token==null){
            toast.error("Please login first");
            return
        }
        try{
            await axios.delete(import.meta.env.VITE_BACKEND_URL+"/api/product/"+id,{
                headers : {
                    Authorization:"Bearer "+token
                }
            })
            setLoaded(false)
            toast.success("Product Deleted Successfull")
        }
        catch(error){
            toast.error("Product not Deleted");
            console.error("Delete Error:", error);
        }
    }

    return(
        <div className="w-full h-full rounded-lg">
            {loaded&&<div className="w-full h-full rounded-lg relative">
                 <table className="w-full rounded-lg">
                <thead>
                    <tr className="bg-emerald-400">
                        <td className="font-bold p-2">Product ID</td>
                        <td className="font-bold p-2">Name</td>
                        <td className="font-bold p-2">Price</td>
                        <td className="font-bold p-2">Lable Price</td>
                        <td className="font-bold p-2">Stoke</td>
                        <td className="font-bold p-2">Action</td>
                    </tr>
                </thead>
                <tbody>
                    
                        {products.map((product,index)=>{
                            return (
                            <tr key={index} className="hover:bg-gray-200 border-b-1 border-gray-200 cursor-pointer">
                            <td className="p-2">{product.productId}</td>
                            <td className="p-2">{product.name}</td>
                            <td className="p-2">{product.price}</td>
                            <td className="p-2">{product.labeledPrice}</td>
                            <td className="p-2">{product.stock}</td>

                            <td className="p-2">
                                <div className="w-full h-full flex justify-center">
                                    <RiDeleteBinLine onClick={()=>{DeleteProduct(product.productId)}} className="text-[25px] m-[10px] hover:text-red-500"/>
                                    <GrEdit className="text-[25px] m-[10px] hover:text-blue-500"/>
                                </div>
                            </td>


                            </tr>
                            )
                        })}

                </tbody>
            </table>
            <Link to={"/admin/addproduct"} className="bg-gray-700 absolute p-2 rounded-full hover:bg-gray-300 border-gray-700 right-5 bottom-5 cursor-pointer text-white text-2xl hover:text-gray-700">
                <FaPlus/>
            </Link>
            </div>
            }
           

            {
            !loaded&&<Loding/>
            }
            
        </div>
    )
}