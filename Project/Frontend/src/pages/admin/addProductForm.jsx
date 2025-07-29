import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast"
import axios from "axios";
import MediaUplod from "../../Utils/MediaUpload";

export default function AddProductFrom(){

    const[productId,setProductId] = useState("")
    const[name,setName] = useState("")
    const[altName,setAltName] = useState("")
    const[price,setPrice] = useState("")
    const[labeledPrice,setLabeledPrice] = useState("")
    const[description,setDescription] = useState("")
    const[stock,setStock] = useState("")
    const[images,setImages] = useState([])
    const navigate = useNavigate()

    async function handleSubmit(){

        
        const promisArray = []
        for(let i=0;i<images.length; i++){
            const promise = MediaUplod(images[i])
            promisArray[i] = promise
        }
            const result = await Promise.all(promisArray)
        
        const altNamesInArray = altName.split(",")
        const product = {
            productId : productId,
            name : name,
            altName : altNamesInArray,
            price : price,
            labeledPrice : labeledPrice,
            description : description,
            stock : stock,
            images : result
        }

        const token = localStorage.getItem("token")
        console.log("Token being sent:", token);

        await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/product", product, {
            headers: {
						Authorization: "Bearer " + token,
					},
        }).then((response)=>{
            console.log("Product saved",response.data)
            console.log(token)
            console.log(product)
            toast.success("Product saved")

        }).catch((error)=>{
            console.log("Product not saved",error)
            toast.error("product not saved")
        })

        navigate("/admin/products")
    }

    return(
        <div className="w-full h-full rounded-lg flex justify-center items-center bg-[url(/addproducts-bg.png)] bg-cover bg-center">
            <div className="w-[500px] h-[800px] bg-white rounded-lg flex flex-col shadow-2xl justify-center items-center">
                <div className="w-[500px] h-[100px] flex items-center justify-center rounded-lg relative top-[5px]">
                    <h1 className="font-bold text-2xl">Add Product</h1>
                </div>

                <input 
                    value={productId}
                    onChange={(event)=>{setProductId(event.target.value)}} 
                    className="w-[450px] h-[45px] rounded-md border border-gray m-[5px] text-center" 
                    placeholder="Product ID"/>

                <input
                    value={name}
                    onChange={(event)=>{setName(event.target.value)}}
                    
                    className="w-[450px] h-[45px] rounded-md border border-gray m-[5px] text-center" 
                    placeholder="Name"/>

                <input
                    value={altName}
                    onChange={(event)=>{setAltName(event.target.value)}}
                    
                    className="w-[450px] h-[45px] rounded-md border border-gray m-[5px] text-center" 
                    placeholder="Altname"/>

                <input
                    value={price}
                    onChange={(event)=>{setPrice(event.target.value)}}
                    type="number"
                    className="w-[450px] h-[45px] rounded-md border border-gray m-[5px] text-center" 
                    placeholder="Price"/>

                <input
                    value={labeledPrice}
                    onChange={(event)=>{setLabeledPrice(event.target.value)}}
                    type="number"
                    className="w-[450px] h-[45px] rounded-md border border-gray m-[5px] text-center" 
                    placeholder="LabelPrice"/>

                <div className="w-[450px] min-h-[80px] border border-gray m-[5px] rounded-md p-2">
                    <input 
                        onChange={(event) => setImages(event.target.files)}
                        type="file"
                        multiple
                        className="mb-2"
                    />

                    <div className="flex gap-2 flex-wrap">
                        {[...images].length > 0 ? (
                        [...images].map((img, i) => (
                            <img 
                            key={i} 
                            src={URL.createObjectURL(img)} 
                            alt={`preview-${i}`} 
                            className="w-[45px] h-[45px] object-cover rounded-md border"
                            />
                        ))
                        ) : (
                        <div className="text-gray-400 text-sm">No images selected</div>
                        )}
                    </div>
                    </div>
    

                <textarea
                    value={description}
                    onChange={(event)=>{setDescription(event.target.value)}}
                    className="w-[450px] h-[100px] rounded-md border border-gray m-[5px] p-[5px]" 
                    placeholder="Description"/>

                <input
                    value={stock}
                    onChange={(event)=>{setStock(event.target.value)}}
                    type="number"
                    className="w-[450px] h-[45px] rounded-md border border-gray m-[5px] text-center" 
                    placeholder="Stock"/>

                <div className="w-[450px] h-[100px] flex items-center justify-between rounded-lg">
                    <Link to={"/admin/products"} className="w-[180px] h-[45px] bg-red-600 text-white text-center p-[10px] rounded-md hover:bg-red-700">
                    Cancel
                    </Link>
                    <button onClick={handleSubmit} className="w-[180px] h-[45px] bg-green-600 text-white text-center p-[10px] rounded-md hover:bg-green-700 cursor-pointer">
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    )
}

//https://jcskpgvzqejeeghtxntj.supabase.co

// anon key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impjc2twZ3Z6cWVqZWVnaHR4bnRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4MzMzNzYsImV4cCI6MjA2MTQwOTM3Nn0.NbwPVoGrsRJ68baeB_uiXtDp6jsAL0gsPSuYhr9qe5A