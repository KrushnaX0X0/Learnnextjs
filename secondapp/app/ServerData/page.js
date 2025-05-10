import Userbtn from "../components/Userbtn"
// This is a server component
const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    return data
}

export default async function ServerData() {
    const data = await fetchData(); 

    return (
        <div>
            <h1>Server Data Fetching</h1>

            <div className='flex gap-4 flex-wrap justify-evenly'>
                {data.map((item) => (  
                    <div key={item.id} className='bg-gray-900 h-34 w-60 p-4 rounded-2xl text-gray-400'>
                        <h2>{item.name}</h2>
                        <p>{item.phone}</p>
                        <p>{item.website}</p>
                        <Userbtn name={item.name}  />
                    </div>
                ))}
            </div>
        </div>
    )
}
