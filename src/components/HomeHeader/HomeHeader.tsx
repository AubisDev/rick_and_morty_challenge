import { motion } from "framer-motion";
import logo from './../../assets/images/logo.png';
import { useMediaQuery } from 'react-responsive'


const HomeHeader = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1600px)' });
  return (
    <header className={` w-96 flex flex-col  mt-[25rem] md:mt-[18rem] lg:mt-[25rem] xl:mt-20 text-4xl ${ isBigScreen && 'text-5xl'}`}>
      <motion.img src={logo} alt="logo" className="-mt-14 -mb-14"  />
      <h1 className="font-bold text-center ">Challenge</h1>
    </header>
  )
}

export default HomeHeader