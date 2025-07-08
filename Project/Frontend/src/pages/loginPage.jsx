export default function LoginPage(){
    return(
        <div className="w-full h-screen bg-[url(/login-bg.jpg)] bg-cover bg-center flex">

            <div className="w-[50%] h-full">
 

            </div>

            <div className="flex w-[50%] h-full items-center justify-center">
                <div className=" w-[450px] h-[600px] backdrop-blur-md shadow-xl rounded-[10px] flex flex-col justify-center items-center">
                    <h1 className="text-black text-2xl top-[50px]">Login</h1>
                    <input className="w-[400px] h-[45px] border border-white rounded-xl text-center m-[5px]" type="email" placeholder="E-mail"></input>
                    <input className="w-[400px] h-[45px] border border-white rounded-xl text-center m-[5px]" type="password" placeholder="Password"></input>
                    <button className="w-[400px] h-[45px] bg-green-600 rounded-xl text-white cursor-pointer">Login</button>

                </div>

            </div>
        </div>
    )
}