import Link from "next/link"

const page =async ({params}) => {
    const {userid} = params
    console.log(await params)
        
  return (
    <div>
             <h1>user hobbies</h1>

        <Link href={`../${userid}/hobbies/reding `}>go to hobbies reding</Link> <br/>

        <Link href={`../${userid}/hobbies/sports `}>go to hobbies sports</Link><br/>

        <Link href={`../${userid}/hobbies/cooking `}>go to hobbies cooking</Link><br/>

        <Link href={`../${userid}/hobbies/other `}>go to hobbies other</Link>
    </div>
  )
}

export default page