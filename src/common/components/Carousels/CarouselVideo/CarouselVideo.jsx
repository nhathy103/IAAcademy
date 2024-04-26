import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function CarouselVideo() {
  const options = {
    items: 1,
    loop: true,
    animateOut: 'sliderOutUp',
    nav: true,
    dots: false,
    margin: 0,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /> </svg>'
    ],
    responsive: {
      1400: {
        items: 3
      },
      1100: {
        items: 3
      },
      724: {
        items: 2
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
    <div className="card-carousel mx-auto max-w-screen-lg">
      <OwlCarousel className='owl-theme' {...options}>
        <div className='px-[15px] item rounded-md overflow-hidden'>
          <iframe width="350" height="200" src="https://www.youtube.com/embed/-Q2varC7To8?si=c8qad-bzW1uO8obX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className='px-[15px] item rounded-md overflow-hidden'>
          <iframe width="350" height="200" src="https://www.youtube.com/embed/MZkkXTljGLw?si=BfZOeSP3cgMpzaRq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className='px-[15px] item rounded-md overflow-hidden'>
          <iframe width="350" height="200" src="https://www.youtube.com/embed/AK6fUKrGGm8?si=TdYGq2ZtdNw0mxj7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className='px-[15px] item rounded-md overflow-hidden'>
          <iframe width="350" height="200" src="https://www.youtube.com/embed/2GHVrIjFTkQ?si=SEr4g2bJRQgPY8Gr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </OwlCarousel>
    </div>
  )
}
