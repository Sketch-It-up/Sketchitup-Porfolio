import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import newlogo from '@/assets/Sketchitup-logon.jpg' ;
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';
import Link from 'next/link';



export const Header = () => {
  return <header className='sticky top-0 backdrop-blur-sm z-20'>

    <div className='py-5'>
      <div className='px-20'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
          <Image src={newlogo} alt='logo' height={40} width={40}></Image>
          <Link href="/"> <h6 className='text-3xl font-bold '>SketchitUp</h6></Link>
          </div>          
          <MenuIcon className ="h-5 w-5 md:hidden"></MenuIcon>
          <nav className='hidden md:flex gap-6 text-black items-center'>
            <a href="#home">Home</a>
            <a href="#services">Our Servies</a>
            <a href="#">Contact</a>
            <a href="#">About</a>

            <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight'>Get in touch </button>
          </nav>
        </div>
      </div>
    </div>
  </header>;
};
