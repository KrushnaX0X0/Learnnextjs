import ProductCart from "../components/ProductCart"

const LoadCategory = async (category) => {
  const res = await fetch(`https://dummyjson.com/products/category/${category}`)
  const data = await res.json()
  return data
}

const page =async ({params}) => {
  const {category} = params 

  const data = await LoadCategory(category)
  console.log(data.products)
 
   
  return (
    <div>
          
  { data.length === 0 ? "category not found" :
    <div className='h-screen w-full flex flex-wrap  gap-10 iteam-center justify-center'>
      {
        data.products.map((item, index) => (
          <div key={index}>
            <ProductCart key={index} iteam={item} />
          </div>
        ))
      }
    </div>
  }
    </div>
  )
}

export default page
