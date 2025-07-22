import { Link } from "react-router-dom";

export default function AddProductFrom(){
    return(
        <div className="w-full h-full rounded-lg flex justify-center items-center bg-[url(/addproducts-bg.png)] bg-cover bg-center">
            <div className="w-[500px] h-[600px] bg-white rounded-lg flex flex-col shadow-2xl justify-center items-center">
                <div className="w-[450px] h-[100px] flex items-center justify-center rounded-lg">
                    <h1 className="font-bold text-2xl">Add Product</h1>
                </div>

                <input className="w-[450px] h-[45px] rounded-md border border-gray m-[5px] text-center" placeholder="Product ID"></input>
                <input className="w-[450px] h-[45px] rounded-md border border-gray m-[5px] text-center" placeholder="Name"></input>
                <input className="w-[450px] h-[45px] rounded-md border border-gray m-[5px] text-center" placeholder="Altname"></input>
                <input className="w-[450px] h-[45px] rounded-md border border-gray m-[5px] text-center" placeholder="Price"></input>
                <textarea className="w-[450px] h-[100px] rounded-md border border-gray m-[5px] text-center" placeholder="Description"></textarea>
                <input className="w-[450px] h-[45px] rounded-md border border-gray m-[5px] text-center" placeholder="Stock"></input>

                <div className="w-[450px] h-[100px] flex items-center justify-between rounded-lg">
                    <Link to={"/admin/products"} className="w-[180px] h-[45px] bg-red-600 text-white text-center p-[10px] rounded-md hover:bg-red-700">
                    Cancel
                    </Link>
                    <button className="w-[180px] h-[45px] bg-green-600 text-white text-center p-[10px] rounded-md hover:bg-green-700 cursor-pointer">
                        Submit
                    </button>
                </div>
            </div>
            
        </div>
    )

}