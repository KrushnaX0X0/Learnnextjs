import React from 'react'


function ProductCart({iteam}) {
    console.log(iteam)

    const {id, title, price, description, images,tags} = iteam


  return (
 <>

 <div className='h-[450px] w-[280px] bg-white text-center flex flex-wrap  flex-col rounded-lg shadow-lg shadow-gray-500 mt-8 relative mb-3'>
         <div className='h-[45%] w-full flex justify-center items-center  overflow-hidden bg-gradient-to-l to bg-gray-800 from-blue-300 p-4 rounded-t-lg'>
                <img src={images[0]} alt="" className='h-full w-full object-cover  drop-shadow-black' />
         </div>
         <div className='h-[56%] w-full rounded-4xl bg-white mx-auto  absolute bottom-4  '>
          <h2 className='font-bold  text-md'>{title}</h2>

           <div className='flex gap-4 items-center mt-2 pl-2  '>
            <p className='border-2 border-gray-300 p-2 rounded-md'>{tags[0]}</p>
            <p className='border-2 border-gray-300 p-2 rounded-md'>{tags[1]}</p>
           </div>
              <p className='text-gray-500 text-sm mt-2 p-2'>{description}</p>

              <div className='flex justify-evenly items-center   mt-2'>
                <div className='text-gray-500 text-md mt-2 pl-4 font-bold w-[40%] '>$ {price} </div>
                <div className='h-[40px] w-[60%]'><button className=' bg-blue-400 py-2 px-10 rounded-md mr-4 text-white'>Bay Now</button></div>
              </div>



         </div>
 </div>
 
 </>
  )
}

export default ProductCart