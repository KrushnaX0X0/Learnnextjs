import Link from "next/link"

function CategoreCart({ iteam }) {
    return (
        <>
        <Link href={`${iteam}`}> 
        
            <div className='h-20 w-[20vw] bg-blue-400 text-center flex justify-center items-center rounded-lg shadow-lg shadow-gray-500'>

                {iteam}

            </div>

        </Link>

        </>
    )
}

export default CategoreCart