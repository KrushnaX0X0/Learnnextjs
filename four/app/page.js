import CategoreCart from './components/CategoreCart'

const LoadData = async () => {
  const res = await fetch('https://dummyjson.com/products/category-list')
  const data = await res.json()
  console.log(data)
  return data
}

const page = async () => {
  const data = await LoadData()

  return (
    <div>
      <h1 className='text-center text-4xl font-bold text-black pb-4'>Product Category LIst</h1>
      {data.length === 0 ? "server problem" : null}
      <div className='h-screen w-full flex flex-wrap justify-center items-center gap-4'>
      
        {
          data.map((item, index) => (
            <div key={index}>
             
            <CategoreCart key={index} iteam={item} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default page
