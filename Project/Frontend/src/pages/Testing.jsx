import { useState } from "react"
import toast from "react-hot-toast"
import MediaUplod from "../Utils/MediaUpload"

export default function Testing(){

    const [file,setFile] = useState(null)

    function uploadHandler(){

        MediaUplod(file).then((url)=>{
            console.log(url)
            toast.success("File Upload successfull")
        })
        .catch((error) => {
            console.log(error)
            toast.error("File not uploaded")
        })
    }
    return(
        <div className="w-full h-screen flex justify-center items-center">
            <input className="bg-blue-200 p-[5px] border border-black rounded-md m-[5px]" onChange={(e) => setFile(e.target.files[0])} type="file"></input>
            <button className="bg-black text-white hover:bg-white hover:text-black border border-black p-[5px] rounded-md" onClick={uploadHandler}>Upload</button>
        </div>
    )
}