import React from 'react'
import img1 from '@/images/slide_1_img.png';
import post1 from '@/images/courses/post1.png';
import post2 from '@/images/courses/post2.png';
import post3 from '@/images/courses/post3.png';
import post4 from '@/images/courses/post4.png';
import { Link } from 'react-router-dom';

export default function Course() {
  return (
    <div>
      <main className='w-full flex-col'>

        <div className="mb-[60px] mt-[105px]">
          <div className="relative banner-carousel">
            <div className='owl-theme' >
              <div className='h-[430px] item'>
                <img className="bg-cover bg-center h-full w-full" src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div id="diemNoiBatCuaKhoaHoc" className="">
          <div className="mx-auto max-w-6xl my-[60px] pb-[50px]">
            <div className="pb-12">
              <span className="px-3 text-[38px] font-semibold border-l-[4px] border-l-blue-600">Chương trình học</span>
            </div>
            <div className="grid grid-cols-3 gap-8">

              <div className='rounded-xl overflow-hidden border-[2px] border-gray-300 border-solid hover:shadow-lg'>
                <Link to='/IAAcademy/courses/post1'>
                  <div className="overflow-hidden h-[200px] w-full">
                    <img className="object-cover h-full w-full" src={post1} alt="" />
                  </div>
                </Link>
                <div className='p-4 '>
                  <Link to='/IAAcademy/courses/post1'>
                    <div className='text-[18px] mt-1 line-clamp-2 font-semibold '>
                      TUYỂN SINH KHÓA HỌC FIGMA DÀNH CHO DESIGNER / DEVELOPER
                    </div>
                  </Link>
                  <div className='h-[2px] my-6 w-[97%] mx-auto bg-slate-800'></div>
                  <button className='group rounded-full border-[1px] border-solid border-gray-200 bg-[#3b82f6] text-[#fff]'>
                    <Link to="/IAAcademy/courses/post1" className='flex flex-row gap-4 text- items-center justify-start py-2 px-6'>
                      <div className='text-[18px]' >Tìm hiểu thêm</div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 duration-200 transform ease-out group-hover:translate-x-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </button>
                </div>
              </div>
              <div className='rounded-xl overflow-hidden border-[2px] border-gray-300 border-solid hover:shadow-lg'>
                <Link to='/IAAcademy/courses/post2'>
                  <div className="overflow-hidden h-[200px] w-full">
                    <img className="object-cover h-full w-full" src={post2} alt="" />
                  </div>
                </Link>
                <div className='p-4 '>
                  <Link to='/IAAcademy/courses/post2'>
                    <div className='text-[18px] mt-1 line-clamp-2 font-semibold '>
                      TUYỂN SINH KHÓA HỌC FIGMA DÀNH CHO DESIGNER / DEVELOPER
                    </div>
                  </Link>
                  <div className='h-[2px] my-6 w-[97%] mx-auto bg-slate-800'></div>
                  <button className='group rounded-full border-[1px] border-solid border-gray-200 bg-[#3b82f6] text-[#fff]'>
                    <Link to="/IAAcademy/courses/post2" className='flex flex-row gap-4 text- items-center justify-start py-2 px-6'>
                      <div className='text-[18px]' >Tìm hiểu thêm</div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 duration-200 transform ease-out group-hover:translate-x-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </button>
                </div>
              </div>
              <div className='rounded-xl overflow-hidden border-[2px] border-gray-300 border-solid hover:shadow-lg'>
                <Link to='/IAAcademy/courses/post3'>
                  <div className="overflow-hidden h-[200px] w-full">
                    <img className="object-cover h-full w-full" src={post3} alt="" />
                  </div>
                </Link>
                <div className='p-4 '>
                  <Link to='/IAAcademy/courses/post3'>
                    <div className='text-[18px] mt-1 line-clamp-2 font-semibold '>
                      TUYỂN SINH KHÓA HỌC FIGMA DÀNH CHO DESIGNER / DEVELOPER
                    </div>
                  </Link>
                  <div className='h-[2px] my-6 w-[97%] mx-auto bg-slate-800'></div>
                  <button className='group rounded-full border-[1px] border-solid border-gray-200 bg-[#3b82f6] text-[#fff]'>
                    <Link to="/IAAcademy/courses/post3" className='flex flex-row gap-4 text- items-center justify-start py-2 px-6'>
                      <div className='text-[18px]' >Tìm hiểu thêm</div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 duration-200 transform ease-out group-hover:translate-x-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </button>
                </div>
              </div>
              <div className='rounded-xl overflow-hidden border-[2px] border-gray-300 border-solid hover:shadow-lg'>
                <Link to='/IAAcademy/courses/post4'>
                  <div className="overflow-hidden h-[200px] w-full">
                    <img className="object-cover h-full w-full" src={post4} alt="" />
                  </div>
                </Link>
                <div className='p-4 '>
                  <Link to='/IAAcademy/courses/post4'>
                    <div className='text-[18px] mt-1 line-clamp-2 font-semibold '>
                      TUYỂN SINH KHÓA HỌC FIGMA DÀNH CHO DESIGNER / DEVELOPER
                    </div>
                  </Link>
                  <div className='h-[2px] my-6 w-[97%] mx-auto bg-slate-800'></div>
                  <button className='group rounded-full border-[1px] border-solid border-gray-200 bg-[#3b82f6] text-[#fff]'>
                    <Link to="/IAAcademy/courses/post4" className='flex flex-row gap-4 text- items-center justify-start py-2 px-6'>
                      <div className='text-[18px]' >Tìm hiểu thêm</div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 duration-200 transform ease-out group-hover:translate-x-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </Link>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div id="diemNoiBatCuaKhoaHoc" className="bg-[#2c2b2b]">
          <div className="mx-auto max-w-6xl my-[60px] py-[40px] text-[#fff]">
            <div className="pb-7">
              <span className="px-3 text-[38px] font-semibold border-l-[4px] border-l-blue-600">
                MindX - Hệ sinh thái học công nghệ dành cho sinh viên và người đi làm
              </span>
            </div>
            <div className='text-[18px]'>
              Sau <span className='font-semibold'>8</span> năm hoạt động, <span className='font-semibold'>MindX Technology School</span> đã đồng hành cùng hơn 35,000 học viên - 200 đối tác trong và ngoài nước. Chúng tôi hiểu và nhìn nhận được tiềm năng của thế hệ Công dân số Việt Nam. Vậy nên hệ sinh thái đào tạo công nghệ MindX đã được xây dựng dành riêng cho sinh viên và người đi làm. Mục đích của hệ sinh thái này là giúp các bạn tối ưu thời gian học tập mà vẫn trang bị đầy đủ kiến thức và được thực chiến với nhiều bài tập - dự án từ doanh nghiệp, trong môi trường thực tế nhất.
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
