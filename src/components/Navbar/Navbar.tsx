import logo from './../../assets/images/logo.png';
import { Link } from 'react-router-dom'

const Navbar = () => {
  

  return (
    <div className='h-[10vh] w-screen m-auto flex flex-row items-center justify-center bg-gray-800 md:justify-evenly border-b border-white/10'>
      <Link to="/" className='' >
        <img src={logo} alt="logo"  className='w-52 '/>
      </Link>
      <ul className='flex flex-row  font-serif text-white text-xl'>
        { 
          ['Home', 'Characters', 'Locations', 'Episodes'].map( (page:string) => (
            <Link 
              key={page} 
              to={  page === 'Home' ? '/' : `/${page.toLowerCase()}` } 
              className="hidden md:block px-3 hover:text-blue-400 duration-300 cursor-pointer font-light"
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