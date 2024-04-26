import { Link } from 'react-router-dom';

export default function Navbar() {


  return (
    <div className="w-full justify-center">
      <div className="w-11/12 m-auto">
        <div id="main-nav-menu" className=''>
          <nav className="">
            <ul className="flex flex-row">

              <li className="hover:bg-gray-300 px-10 rounded-md mx-3">
                <Link to="/IAAcademy" title="ƯU ĐÃI" className='flex flex-row text-[16px] tracking-wide gap-2  font-medium py-[12px] items-center justify-center'>
                  Giới thiệu
                </Link>
                {/* tham khảo: https://skillking.fpt.edu.vn/gioi-thieu-fpt-skillking/ */}
              </li>

              <li className="hover:bg-gray-300 px-10 rounded-md mx-3">
                <a href="https://moicosmetics.vn/pages/page-dang-ky-tro-thanh-doi-tac-moi" title="ĐĂNG KÝ KINH DOANH" className='flex flex-row text-[16px] tracking-wide gap-2  font-medium py-[12px] items-center justify-center'>
                  Giảng viên
                </a>
                {/* tham khảo: https://skillking.fpt.edu.vn/danh-sach-giang-vien/ */}
              </li>

              <li className="hover:bg-gray-300 px-10 rounded-md mx-3">
                <Link to="/IAAcademy/courses" title="ĐĂNG KÝ KINH DOANH" className='flex flex-row text-[16px] tracking-wide gap-2  font-medium py-[12px] items-center justify-center'>
                  Tuyển sinh
                </Link>
              </li>

              <li className="hover:bg-[#659af1] px-12 rounded-md bg-[#3b82f6] text-[#fff] mx-3">
                <a href="#dangkicourse" title="ĐĂNG KÝ KINH DOANH" className='flex flex-row text-[16px] tracking-wide gap-2  font-medium py-[12px] items-center justify-center'>
                  Đăng kí
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

  )
}
