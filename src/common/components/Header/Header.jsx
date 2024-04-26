import Navbar from '../Navbar'
import { useEffect, useState } from 'react';
import logo from "@/images/logo.png";
import { Link } from 'react-router-dom';
export default function Header({ isFixedHeader }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const isCurrentlyScrolled = scrollTop > 594;

      setIsScrolled(isCurrentlyScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`flex flex-col top-0 z-50 w-full bg-gray-50 mx-auto duration-500 ease-out shadow-lg ${isScrolled && !isFixedHeader ? 'relative' : 'fixed'}`} >
      <div className='pt-[15px] pb-[10px]'>
        <div className='w-ful mr-auto ml-auto'>
          <div class=" flex flex-row items-center justify-between lg:justify-start lg:gap-[40px] min-h-[64px] md:min-h-[80px] px-[16px] lg:px-0 mx-auto max-w-screen-lg">
            <div className="w-2/12 pl-3">
              <div className="min-w-[180px] max-w-[200px]" itemScope itemType="http://schema.org/Organization">
                <Link to="/IAAcademy" className='w-full'>
                  <img itemProp="logo" src={logo} alt="IA Academy" className=" " />
                </Link>
              </div>
            </div>

            <Navbar />

          </div>
        </div>
      </div>
    </header>
  )
}
