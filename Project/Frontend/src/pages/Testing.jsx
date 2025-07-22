import { useState } from "react"

export default function Testing(){
    const [number,setnumber] = useState(0)
    const [states,setstates] = useState("Pending")

    function increces(){
        let newNumber = number+1
        setnumber(newNumber)
    }

    function decreces(){
        let newNumber = number-1
        setnumber(newNumber)
    }

    function setPass(){
        let states = "Pass"
        setstates(states)
    }

    function setFail(){
        let states = "Fail"
        setstates(states)
    }

    return(
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <span className="text-2xl font-bold">{number}</span>
            <div>
                <button onClick={increces} className="bg-blue-600 rounded-[5px] text-white w-[60px] mr-[2px]">+</button>
                <button onClick={decreces} className="bg-blue-600 rounded-[5px] text-white w-[60px] ml-[2px]">-</button>
            </div>
            <span className="text-2xl font-bold">{states}</span>
            <div>
                <button onClick={setPass} className="bg-blue-600 rounded-[5px] text-white w-[60px] mr-[2px]">pass</button>
                <button onClick={setFail} className="bg-blue-600 rounded-[5px] text-white w-[60px] ml-[2px]">Fail</button>
            </div>

        </div>
    )
}