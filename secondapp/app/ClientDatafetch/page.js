"use client"
import React, { useEffect, useState } from 'react'


export default function ClientDatafetch() {
    const [user, setUser] = useState([])

    const getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await res.json()
        
        setUser(data) 
        console.log(data)  
    }
    useEffect(()=>{
        getData()
    },[]) 
  return (
    <div>
        <h1>Client Data Fetching</h1>
        <div className='flex  gap-4 flex-wrap justify-evenly'>
            {user.map((item) => (
                <div key={item.id} className=' bg-gray-500 h-30  w-50  p-4 rounded-2xl'>
                    <h2>{item.username}</h2>
                    <p>{item.phone}</p>
                    <p>{item.website}</p>
                </div>
            ))}

            </div>
        

    </div>
  )
}

