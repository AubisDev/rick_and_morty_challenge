import { motion } from "framer-motion";
import logo from './../../assets/images/logo.webp';
import { useMediaQuery } from 'react-responsive'


const HomeHeader = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1600px)' });
  return (
    <header className={` flex flex-col text-4xl w-96  mt-[25rem] md:mt-[18rem] lg:mt-[25rem] xl:mt-20  ${ isBigScreen && 'text-5xl'}`}>
      <motion.img src={logo} alt="logo" className="-mb-14 -mt-14"  />
      <h1 className="font-bold text-center ">Challenge</h1>
    </header>
  )
}

export default HomeHeader