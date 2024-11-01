import Image from "next/image"
import namelogoImage from"../public/namelogo.jpg";
const Header = () => {
    return (
      <header  className=" " >
      
        
          <nav className='grid-cols-1 sm:grid-col-3 lg:grid-col-4'>
          <ul className ="display: flex  text-lg text-align:center bg-orange-600 justify-evenly font-light items-start gap-3 p-10 mx-auto felx">
        
         <div className="text-2xl text-gray-700 font-bold text-left hover:bg-teal-500">Kulsum Jahnzaib</div>
          <li className=" hover:bg-gray-600 rounded-md  "><b>Home</b></li>
          <li className=" hover:bg-gray-600 rounded-md  "><b>About</b></li>
          <li className=" hover:bg-gray-600 rounded-md  "><b>Contact us</b></li>
          <li className=" hover:bg-gray-600 rounded-md  "><b>Skills</b></li>
        </ul>
        </nav>
        
      </header>
    );
  };
  
  export default Header