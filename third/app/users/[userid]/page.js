import React from 'react'
import Link from 'next/link'

export default function page({params}) {
  const {userid} = params
    console.log(userid)
  return (
    <div>hellow  i am user {userid}


      <Link href={`./${userid}/hobbies `}>go to hobbies page</Link> <br/>
    
    </div>
    

  )
}
