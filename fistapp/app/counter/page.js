"use client"

import { useState } from "react";

export default function count() {
    const [count, setCount] = useState(0);

    const handalclick = (opretion) => {
        opretion == "+" ? setCount(count + 1) : setCount(count-1)
    }

    return (
        <>
            <div className="flex flex-col  items-center justify-center h-screen">
                <h1 className="text-3xl font-bold">Counter</h1>
                <div className=" items-center justify-center flex  p-3 font-bold text-3xl">
                    <button onClick={()=>
                        handalclick("-")} className="cursor-pointer h-10 w-25 bg-blue-600 rounded-md">-</button>
                    <h1 className="font-bold text-6xl m-10">{count}</h1>

                    <button onClick={()=>handalclick("+")} className="cursor-pointer h-10 w-25 bg-blue-600 rounded-md">+</button>



                </div>

            </div>
        </>
    )
}
