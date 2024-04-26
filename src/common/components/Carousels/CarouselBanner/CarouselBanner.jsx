import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import img1 from '@/images/slide_1_img.png';
import img2 from '@/images/slide_2_img.png';
import img3 from '@/images/slide_3_img.png';

export default function CarouselBanner() {
  const options = {
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 20000,
    animateOut: 'fadeOut',
    nav: true,
    dots: false,
    margin: 0,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>',
    ],
    responsive: {
      1100: {
        items: 1
      },
      724: {
        items: 1
      },
      500: {
        items: 1
      },
      370: {
        items: 1,
        innerWidth: "100%",
        outerWidth: "100%",
      },
    }
  }


  return (
    <div className="relative banner-carousel">
      <OwlCarousel className='owl-theme' {...options}>
        <div className='h-[430px] item'>
          <img className="bg-cover bg-center h-full w-full" src={img1} alt="" />
        </div>
        <div className='h-[430px] item'>
          <img className="bg-cover bg-center h-full w-full" src={img2} alt="" />
        </div>
        <div className='h-[430px] item'>
          <img className="bg-cover bg-center h-full w-full" src={img3} alt="" />
        </div>
      </OwlCarousel>
    </div>
  )
}
