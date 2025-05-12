
  
export default async function  page ({params}) {
   const {userid, hobbies} = params

    console.log(await params)
    
  return (
    <div>
       <h1>userid : {userid}</h1>
         <h1>hobbies : {hobbies}</h1>

         
    </div>
  )
}
