import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div>
        <footer id="footerBottom" className="flex flex-col z-10 bg-[#adbcf7] px-20">
          <div className="w-full h-[257px]">
            <div className="container-fluid">
              <div className="flex flex-row justify-between py-[14px]">
                <div className="w-1/4">
                  <h4 className="text-[15px] font-semibold pt-[10px] pb-[15px] mb-[15px]">
                    HOTLINE
                  </h4>
                  <div className="font-regular text-[#222] py-[4px]">
                    <a href="tel:0392919888" className="hotline-footer">039 291 9888</a>
                  </div>
                  <div className="text-[15px] mt-[32px]">
                    Thời gian làm việc: 09:00 - 18:00 (T2 - T6)
                  </div>
                </div>
                <div className="w-1/4">
                  <h4 className="text-[15px] font-semibold pt-[10px] pb-[15px] mb-[15px]">
                    HỖ TRỢ KHÁCH HÀNG
                  </h4>
                  <div className="text-[15px]">
                    <ul className="">
                      <li className="text-[#222] py-[4px]">
                        <a href="/pages/chinh-sach-doi-tra">Chính sách đổi trả</a>
                      </li>
                      <li className="text-[#222] py-[4px]">
                        <a href="/pages/chinh-sach-bao-mat">Chính sách bảo mật</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-1/4">
                  <h4 className="text-[15px] font-semibold pt-[10px] pb-[15px] mb-[15px]">
                    VỀ IA ACADEMY
                  </h4>
                  <div className="text-[15px]">
                    <ul className="linklists-footer">
                      <li className="text-[#222] py-[4px]">
                        <Link to="/IAAcademy">Giới thiệu</Link>
                      </li>
                      <li className="text-[#222] py-[4px]">
                      <Link to="#">Liên hệ</Link>
                      </li>
                      <li className="text-[#222] py-[4px]">
                        <Link to="#">Đăng ký đối tác</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-1/4">
                  <h4 className="text-[15px] font-semibold pt-[10px] pb-[15px] mb-[15px]">
                    PHƯƠNG THỨC THANH TOÁN
                  </h4>
                  <div className="">
                    <a href="javascript:void(0)">
                      <img className="h-[35px]" src="https://file.hstatic.net/200000073977/file/untitled_design__1__a29f308da9f649c180c1ad2b3ad7e1d0.png" alt="icon-payment" />
                    </a>
                  </div>
                  <h4 className="mt-[25px] mb-3 font-medium">
                    Theo dõi tại
                  </h4>
                  <ul className="flex flex-row gap-6">
                    <li>
                      <a href="https://www.facebook.com/iaacademytechschool/">
                        <img className="w-[30px] h-[30px]" src="https://file.hstatic.net/200000073977/file/ico_facebook_c4c3d96ae23e451ab150d37996021194.png" alt="icon-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/@iaacademy.official">
                        <img className="w-[30px] h-[30px]" src="https://e7.pngegg.com/pngimages/163/425/png-clipart-youtube-computer-icons-logo-subscribe-angle-desktop-wallpaper.png" alt="icon-youtube" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.tiktok.com/@iaacademy.official">
                        <img className="w-[30px] h-[30px]" src="https://file.hstatic.net/200000073977/file/ico_tik-tok_32c22bec029243ffbf5797eb87cdebc1.png" alt="icon-tiktok" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="bg-[#adbcf7] border border-solid border-t-2">
          <div className="p-[20px]">
            <div className="flex flex-row px-[20px] justify-between items-center">
              <div className="col-xs-12 col-sm-8">
                <div className="desBottom">
                  <b>Bản quyền của CÔNG TY CỔ PHẦN TRƯỜNG HỌC CÔNG NGHỆ IA ACADEMY. </b><br />Bảo lưu mọi bản quyền. Giấy chứng nhận đăng ký kinh doanh số 039 291 9888 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 01/04/2024
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="imgBottom">
                  <a href="http://online.gov.vn/Home/WebDetails/47372" target="_blank">
                    <img src="https://file.hstatic.net/200000073977/file/moi-cosmetics-dang-ky-bo-cong-thuong_28922d51dec547f4af82b60a4afd060a.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>

  )
}
