import Link from 'next/link'

function about() {
  return (<>
    <div> about</div>
    <Link href="/about/contact"> go to Contact page</Link><br/>
    <Link href="/"> go tot Home page</Link>
    </>
  )
}

export default about