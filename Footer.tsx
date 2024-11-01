import { Children } from "react"

export default function Footer()  {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow">
        <h1 className="text-center text-3xl font-bold p-0">My Portfolio</h1>

      </main>
      
      <footer className='bg-red-700  text-white  py-8 text-center   ' >&copy;Kulsum Jahanzaib

      <ul className="flex gap-4 justify-center font-bold">
        
        <li>Gmail:kulsumkhananii93@gmail.com</li>
        <li> Linkedin:Kulsum Jahanzaib</li>
        <li> Instagram:kulsum.khanani</li>
      </ul>
    
      </footer>
       
      
      
       
    </div>
  )
}