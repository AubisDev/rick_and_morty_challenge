import logo from './../../assets/images/logo.webp';
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <div className='bg-gray-800 border-b border-white/10 flex flex-rw  h-[10vh] items-center justify-center m-auto w-screen  md:justify-evenly '>
      <Link to="/" className='' >
        <img alt="logo" src={logo} className='w-52'/>
      </Link>
      <ul className='flex flex-row font-serif text-white text-xl'>
        { 
          ['Home', 'Characters', 'Locations', 'Episodes'].map( (page:string) => (
            <Link 
              key={page}
              className="cursor-pointer duration-300 font-light hidden md:block px-3 hover:text-blue-400  "
              to={  page === 'Home' ? '/' : `/${page.toLowerCase()}` } 
            >
              {page} 
            </Link>
          ))
        }
      </ul>
    </div>
  )
}

export default Navbar