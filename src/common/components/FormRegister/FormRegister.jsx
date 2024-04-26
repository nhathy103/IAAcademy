import React from 'react'
import background1 from "@/images/tips-for-improving.png";

export default function FormRegister({ handleShow, handleSubmit, setFormSubmitted, formSubmitted }) {
  return (
    <div className='fixed top-0 left-0 w-full h-screen flex z-50 flex-row justify-center'>
      <div className='required'>
        <div className='absolute top-[18%] left-0 w-full h-full flex flex-row justify-center'>
          <div className='relative'>
            <div className='absolute top-3 right-3'>
              <button onClick={handleShow} className='h-8 w-8'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-row border border-solid shadow-inner  items-center w-[768px] h-[484px] bg-white rounded-2xl">
              <div className="w-1/2">
                <img className="object-cover" src={background1} alt="" />
              </div>
              <div className="w-1/2 ">
                <div className="text-center text-[20px] mb-4 font-medium">
                  Nhập thông tin đăng ký
                </div>
                <div className="flex flex-row justify-center">
                  <div className="w-3/4">
                    <div className="mb-[12px] relative">
                      <input type="text"
                        className="h-[42px] text-[12px] outline-none w-full border-[1px] border-solid border-gray-300 px-4 py-2 bg-white rounded-sm shadow-inner"
                        placeholder='Họ và Tên'
                        onChange={(e) => setFormSubmitted((prev) => ({ ...prev, fullName: e.target.value }))}
                        name="fullname"
                        value={formSubmitted.fullName}
                        required="required"
                      />
                    </div>
                    <div className="mb-[12px] relative">
                      <input
                        placeholder='Email'
                        type="email"
                        value={formSubmitted.email}
                        onChange={(e) => setFormSubmitted((prev) => ({ ...prev, email: e.target.value }))}
                        className="h-[42px] text-[12px] outline-none w-full border-[1px] border-solid border-gray-300 px-4 py-2 bg-white rounded-sm shadow-inner"
                        required="required"
                      />
                    </div>
                    <div className="mb-[12px] relative">
                      <input
                        placeholder='Số điện thoại'
                        type="text"
                        value={formSubmitted.phoneNumber}
                        onChange={(e) => setFormSubmitted((prev) => ({ ...prev, phoneNumber: e.target.value }))}
                        className="h-[42px] text-[12px] outline-none w-full border-[1px] border-solid border-gray-300 px-4 py-2 bg-white rounded-sm shadow-inner"
                        name="phone"
                        required="required"
                      />
                    </div>
                    <div className="mb-[12px] relative">
                      <input
                        placeholder='Bạn đang ở tỉnh/thành phố nào?'
                        type="text"
                        value={formSubmitted.address}
                        onChange={(e) => setFormSubmitted((prev) => ({ ...prev, address: e.target.value }))}
                        className="h-[42px] text-[12px] outline-none w-full border-[1px] border-solid border-gray-300 px-4 py-2 bg-white rounded-sm shadow-inner"
                        name="address"
                        required="required"
                      />
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="w-full h-[42px] px-[28px] mt-3 tracking-widest text-[#fff] overflow-hidden rounded-md font-medium text-[13px] text-center uppercase bg-[#3b82f6] outline-none"
                    >
                      Đăng ký ngay
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
