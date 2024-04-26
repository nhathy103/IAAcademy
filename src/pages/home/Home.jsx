import CarouselBanner from "@/common/components/Carousels/CarouselBanner";
import CarouselVideo from "@/common/components/Carousels/CarouselVideo";
import FlyoutLink from "@/common/components/DropDowns/FlyoutLink";
import FormRegister from "@/common/components/FormRegister";
import background1 from "@/images/tips-for-improving.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const fieldForm = {
  fullName: "",
  email: "",
  phoneNumber: "",
  address: ""
}

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(fieldForm);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      console.log(scrollTop);
      const isCurrentlyScrolled = scrollTop > 594;

      setIsScrolled(isCurrentlyScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleShowForm = () => {
    setShowForm(!showForm);
    if (!showForm) {
      setFormSubmitted(fieldForm);
    }
    console.log("oke");
  }

  useEffect(() => {
    setTimeout(() => {
      setShowForm(true)
    }, 3000);
  }, []);

  const handleSubmit = () => {
    let isSubmit = true;
    if (formSubmitted.fullName == '') {
      isSubmit = false;
    }
    if (formSubmitted.email == '') {
      isSubmit = false;
    }
    if (formSubmitted.phoneNumber == '') {
      isSubmit = false;
    }
    if (formSubmitted.address == '') {
      isSubmit = false;
    }
    console.log(isSubmit);

    if (isSubmit) {
      setIsScrolled(false);
      handleShowForm();
      Swal.fire({
        title: "Đăng ký thành công",
        text: "Cảm ơn bạn đã tin tưởng vào hệ thống đào tạo của chúng tôi.",
        icon: "success"
      });
    } else {
      Swal.fire({
        title: "Đăng ký không thành công",
        text: "Vui lòng nhập lại thông tin.",
        icon: "error"
      });
    }

  }



  // nhấn ctrl + F để tìm kiếm nội dung trong code

  return (
    <>
      {showForm && <FormRegister formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted} handleSubmit={handleSubmit} handleShow={handleShowForm} />}
      <main className='w-full flex-col'>

        <div className="mb-[60px] mt-[105px]">
          <CarouselBanner />
        </div>

        {/* không đươc sửa */}
        <div className={`bg-[#f1f3f4] w-full z-30 shadow-lg duration-500 ease-out ${isScrolled ? 'fixed top-0 left-0' : 'relative'}`}>
          <div className="mx-auto max-w-screen-lg pt-[15px] pb-[10px]">
            <div class=" flex flex-row items-center justify-between min-h-[64px] md:min-h-[80px] px-[16px] lg:px-0">
              <a href="#diemNoiBatCuaKhoaHoc" title="ƯU ĐÃI" className='text-[16px] tracking-wide font-normal py-[10px]'>
                Điểm nổi bật của <br />khóa học
              </a>
              <a href="#chuongTrinhHoc" title="ƯU ĐÃI" className='text-[16px] tracking-wide font-normal py-[10px]'>
                Sau khóa học <br /> nhận được gì
              </a>
              <a href="#" title="ƯU ĐÃI" className='text-[16px] tracking-wide font-normal py-[10px]'>
                Chương trình <br /> học chi tiết
              </a>
              <a href="#sanPhamHocVien" title="ƯU ĐÃI" className='text-[16px] tracking-wide font-normal py-[10px]'>
                Sản phẩm <br /> của học viên
              </a>
              <a href="#" title="ƯU ĐÃI" className='text-[16px] tracking-wide font-normal py-[10px]'>
                Tại sao nên <br /> học ở IA Academy
              </a>

            </div>
          </div>
        </div>

        {/* Mục lục */}
        <div className="mx-auto max-w-screen-lg my-[60px]">
          <div className="pb-5">
            <span className="px-3 text-[34px] font-semibold border-l-[4px] border-l-blue-600">Tổng quan khoá học</span>
          </div>
          <div className="text-[#000000] font-light">
            <div className="flex flex-col gap-2 leading-6 tracking-wide">
              <p className="text-[20px] "> <b>Ngành nghề "hot" với mức lương cao và cơ hội rộng mở</b></p>
              <p className="text-[15px] ">- Mức lương trung bình của UI UX Designer năm 2023 đạt ngưỡng $1000/tháng, cao hơn 105% so với năm 2022.</p>
              <p className="text-[15px] ">- UI/UX Design Lọt Top 11 vị trí IT tuyển dụng nhiều, thứ hạng cao nhất trong 5 năm trở lại đây. </p>
              <p className="text-[15px] ">Có thể thấy, UI UX Designer ngày càng được săn đón.</p>
            </div>

            <div className="flex flex-row gap-2 mt-4">
              <div className="w-3/5 flex flex-col gap-2 leading-6 tracking-wide">
                <p className="text-justify [15px] ">Sự phát triển mạnh mẽ của công nghệ số kéo theo nhu cầu ngày càng cao về các sản phẩm kỹ thuật số.
                  Do đó, UI/UX Designer đóng vai trò then chốt trong việc tạo ra những trải nghiệm người dùng tuyệt vời, thu hút và giữ chân khách hàng.
                  Nắm bắt cơ hội này, bạn sẽ có cơ hội làm việc tại các công ty hàng đầu, tham gia vào những dự án sáng tạo và gặt hái nhiều thành công trong sự nghiệp.</p>
                <p className="text-justify [15px] ">Để tăng tính cạnh tranh, mỗi
                  <span className="font-medium">UI UX Designer cần trang bị tốt chuyên môn,
                    giỏi kiến thức liên ngành, linh hoạt trong kỹ năng làm việc, giao tiếp hằng ngày. </span>
                  Và ở IA Academy, chúng mình sẽ đồng hành cùng bạn chinh phục điều này.
                  Để được tư vấn lộ trình học chi tiết, bạn có thể đăng ký nhận thông tin ngay tại đây.</p>
                <span className="mx-auto">
                  {/* ko đc xóa onclick */}
                  <button onClick={handleShowForm} className="text-[14px] font-medium px-5 py-2 text-[#fff] bg-blue-500 w">
                    Đăng ký nhận tư vấn khóa học ngay!
                  </button>
                </span>
              </div>

              <div className="px-4 ">
                <div className="w-full">
                  <img className="object-cover" src="https://service.keyframe.vn/uploads/filecloud/2023/October/27/7331-MD056-Banner-UXUI%20Product%20Design-R04-1280x720.jpg" alt="" width="800" height="600" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phần điểm nổi bật */}
        <div id="diemNoiBatCuaKhoaHoc" className="bg-[#f1f3f4]">
          <div className="mx-auto max-w-screen-lg my-[60px] pb-[50px]">
            <div className="text-center font-bold text-[34px] pt-[60px] pb-[40px]">
              Cùng IA Academy, chinh phục thị trường tuyển dụng với
            </div>
            <div className="grid grid-cols-4 gap-8">
              <div className="">
                <div className="rounded-md overflow-hidden h-[150px] w-full">
                  <img className="object-cover h-full w-full" src="https://media.designrush.com/articles/244412/conversions/what-is-ui-ux-details.jpg" alt="" />
                </div>
                <div className="text-center text-[17px] font-semibold pt-3 pb-5">
                  Mô hình học T-shaped rộng kiến thức, sâu chuyên môn
                </div>
                <div className="text-justify [14px]">
                  Trang bị kiến thức chuyên môn từ <span className="font-medium">cơ bản đến nâng cao;</span> Đào sâu những kỹ năng quan trọng có tính ứng dụng cao; <span className="font-medium">Mở rộng kiến thức liên ngành</span> cùng kỹ năng mềm giúp học viên tăng tính cạnh tranh khi ứng tuyển việc làm.
                </div>
              </div>
              <div className="">
                <div className="rounded-md overflow-hidden h-[150px] w-full">
                  <img className="object-cover h-full w-full" src="https://www.thestatesman.com/wp-content/uploads/2019/04/iStock-1006445904.jpg" alt="" />
                </div>
                <div className="text-center text-[17px] font-semibold pt-3 pb-5">
                  “On job training” - Học thực tế, làm thực tiễn
                </div>
                <div className="text-justify [14px]">
                  Thời gian thực hành chiếm hơn 50% thời lượng khóa học;
                  Tham gia <span className="font-medium">1 - 3 dự án thực tế</span>, ứng dụng kiến thức và kỹ năng
                  để tạo ra sản phẩm có tính thuyết phục cao nhất theo yêu cầu doanh nghiệp;
                  <span className="font-medium"> Được hướng dẫn sát sao từ đội ngũ mentor</span>
                  và được giảng dạy, chữa sản phẩm chi tiết từ giảng viên,
                  là các senior nhiều năm kinh nghiệm trong ngành.
                </div>
              </div>
              <div className="">
                <div className="rounded-md overflow-hidden h-[150px] w-full">
                  <img className="object-cover h-full w-full" src="https://t3.ftcdn.net/jpg/03/38/27/82/360_F_338278255_94DntUhPoettHCxHyBSl0kffSWQJhI4h.jpg" alt="" />
                </div>
                <div className="text-center text-[17px] font-semibold pt-3 pb-5">
                  Lộ trình học cá nhân hoá cho từng học viên
                </div>
                <div className="text-justify [14px]">
                  Lộ trình đào tạo được xây dựng <span className="font-medium">dựa trên nền tảng kiến thức và nhu cầu học tập của từng học viên.</span>
                  Nội dung kiến thức và kỹ năng được định hướng cho học viên từ đầu, giúp học viên có mục tiêu học tập
                  và đầu ra rõ ràng, từ đó mục tiêu công việc cũng được xác định cụ thể hơn, tăng khả năng ứng tuyển việc
                  làm thành công cao hơn.
                </div>
              </div>
              <div className="">
                <div className="rounded-md overflow-hidden h-[150px] w-full">
                  <img className="object-cover h-full w-full" src="https://outwitly.com/wp-content/uploads/2023/02/02-06-2023-920x540.jpg" alt="" />
                </div>
                <div className="text-center text-[17px] font-semibold pt-3 pb-5">
                  Hỗ trợ việc làm trọn đời
                </div>
                <div className="text-justify [14px]">
                  Sau khi kết thúc khoá học, học viên được MindX giới thiệu danh sách
                  các công ty đang tuyển dụng; <span className="font-medium">tư vấn làm CV/Portfolio; luyện phỏng vấn thử</span>
                  với giảng viên, mentor; tham gia sự kiện X-Hunting để gặp gỡ các nhà tuyển dụng và hỗ trợ lên chiến lược xin việc thành công.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phần người tham gia khóa học */}
        <div className="">
          <div className="mx-auto max-w-screen-lg my-[60px] pb-[30px]">
            <div className="text-center font-bold text-[34px] pb-[40px]">
              Ai nên tham gia khóa học này ???
            </div>
            <div className="flex flex-row gap-8 justify-center">
              <div className="w-[216px]">
                <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <div className="text-[17px] pt-5 text-center">
                  Sinh viên và người đi làm muốn chuyển ngành qua UI UX Designer.
                </div>
              </div>
              <div className="w-[216px]">
                <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <div className="text-[17px] pt-5 text-center">
                  Nhân sự làm việc trong lĩnh vực Phát triển sản phẩm (Developer, BA, PO/PM,...) và lĩnh vực Marketing (Graphic Designer, Content, Brand,...)
                </div>
              </div>
              <div className="w-[216px]">
                <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-red-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <div className="text-[17px] pt-5 text-center">
                  Fresher/Junior UI UX Designer
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chương trình học */}
        <div id="chuongTrinhHoc" className="">
          <div className="mx-auto max-w-screen-lg">
            <div className="w-[1000px] mx-auto">
              <div className="text-[24px] flex items-center justify-center font-semibold  rounded-t-md px-5 py-2 text-[#fff] bg-blue-500 w">
                <span>CHƯƠNG TRÌNH HỌC</span>
              </div>
              <div className="flex flex-row justify-between items-center mt-7">
                <p className="text-[24px] font-semibold">TỔNG QUAN KHOÁ HỌC</p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-6 h-6 text-[#ff416c]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </div>

              <div className="w-11/12 mx-auto text-[17px] font-light py-4 flex flex-col gap-4">
                <div>
                  <p className="text-justify leading-6 tracking-wide">Khóa học UX/UI Design cung cấp những kiến thức và kỹ năng để thiết kế giao diện và trải nghiệm người dùng Web/ App. Các kiến thức được dạy sẽ là các kiến thức thực tế nhất để có thể áp dụng được NGAY, bằng phương pháp truyền đạt dễ nhớ chứ không dàn trải, lý thuyết.</p>
                </div>
                <div>
                  <p className="text-justify leading-6 tracking-wide">Lộ trình được chia thành 4 giai đoạn:</p>
                  <p className="text-justify leading-6 tracking-wide">   - Giai đoạn 1: Học chuyên sâu về công cụ (Figma) và quy tắc chung trong thiết kế, là cách tiếp cận UI/UX tốt nhất với người mới bắt đầu (chưa có background về thiết kế). </p>
                  <p className="text-justify leading-6 tracking-wide">   - Giai đoạn 2: Học chuyên sâu về UI Design.</p>
                  <p className="text-justify leading-6 tracking-wide">   - Giai đoạn 3: Học chuyên sâu UX Design.</p>
                  <p className="text-justify leading-6 tracking-wide">   - Giai đoạn 4: Tích lũy kinh nghiệm thông qua làm dự án do doanh nghiệp trực tiếp đề ra và chuẩn bị các kỹ năng mềm cần thiết để đi xin việc.</p>
                </div>
              </div>
            </div>

            {/* Sổ xuống */}
            <div className="flex flex-col gap-3 mt-4">
              <FlyoutLink title={"LEVEL 1: UI DESIGN BASIC"}>
                <div className="flex flex-col gap-4 text-[17px]">
                  <p className="font-semibold">Tổng quan kỳ học:</p>
                  <ul className="list-disc pl-8 font-light">
                    <li>
                      Trong khóa học này, học viên sẽ được tiếp cận với các kỹ năng thiết kế UI căn bản và làm quen với công cụ Figma.
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-4 text-[17px]">
                  <p className="font-semibold">Mục tiêu:</p>
                  <ul className="list-disc pl-8 font-light">
                    <li>
                      Có khả năng sử dụng các tính năng chính của Figma để thiết kế các thành phần căn bản trên 1 web/app.
                    </li>
                    <li>
                      Áp dụng tốt các nguyên lý thiết kế UI cốt lõi để đảm bảo thiết kế nhất quán, dễ nhìn.
                    </li>
                    <li>
                      Nắm bắt, hiểu và biết cách lựa chọn, điều chỉnh màu sắc, font chữ phù hợp với sản phẩm.
                    </li>
                    <li>
                      Có khả năng thiết kế các yếu tố tương tác căn bản của 1 web/app như button, form,...
                    </li>
                    <li>
                      Đọc hiểu bố cục web/app trên wireframe cho sẵn, và có thể dựa vào đó thể thiết kế giao diện người dùng hoàn chỉnh.
                    </li>
                    <li>
                      Xác định được task flow của sản phẩm, và từ đó thiết kế ra bản mẫu (prototype) thể hiện được cách người dùng tương tác và sử dụng sản phẩm.
                    </li>
                  </ul>
                </div>
                <br></br>
              </FlyoutLink>
              <FlyoutLink title={"LEVEL 2: UX DESIGN BASIC"}>
                <div className="flex flex-col gap-4 text-[17px]">
                  <p className="font-semibold">Tổng quan kỳ học:</p>
                  <ul className="list-disc pl-8 font-light">
                    <li>
                      Trong khóa học này, học viên sẽ được tiếp cận với các kỹ năng thiết kế UI căn bản và làm quen với công cụ Figma.
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4 text-[17px]">
                  <p className="font-semibold">Mục tiêu:</p>
                  <ul className="list-disc pl-8 font-light">
                    <li>
                      Có khả năng sử dụng các tính năng chính của Figma để thiết kế các thành phần căn bản trên 1 web/app.
                    </li>
                    <li>
                      Áp dụng tốt các nguyên lý thiết kế UI cốt lõi để đảm bảo thiết kế nhất quán, dễ nhìn.
                    </li>
                    <li>
                      Nắm bắt, hiểu và biết cách lựa chọn, điều chỉnh màu sắc, font chữ phù hợp với sản phẩm.
                    </li>
                    <li>
                      Có khả năng thiết kế các yếu tố tương tác căn bản của 1 web/app như button, form,...
                    </li>
                    <li>
                      Đọc hiểu bố cục web/app trên wireframe cho sẵn, và có thể dựa vào đó thể thiết kế giao diện người dùng hoàn chỉnh.
                    </li>
                    <li>
                      Xác định được task flow của sản phẩm, và từ đó thiết kế ra bản mẫu (prototype) thể hiện được cách người dùng tương tác và sử dụng sản phẩm.
                    </li>
                  </ul>
                </div>
                <br></br>
              </FlyoutLink>
              <FlyoutLink title={"LEVEL 3: UI UX DESIGN INTENSIVE"}>
                <div className="flex flex-col gap-4 text-[17px]">
                  <p className="font-semibold">Tổng quan kỳ học:</p>
                  <ul className="list-disc pl-8 font-light">
                    <li>
                      Trong khóa học này, học viên sẽ được tiếp cận với các kỹ năng thiết kế UI căn bản và làm quen với công cụ Figma.
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4 text-[17px]">
                  <p className="font-semibold">Mục tiêu:</p>
                  <ul className="list-disc pl-8 font-light">
                    <li>
                      Có khả năng sử dụng các tính năng chính của Figma để thiết kế các thành phần căn bản trên 1 web/app.
                    </li>
                    <li>
                      Áp dụng tốt các nguyên lý thiết kế UI cốt lõi để đảm bảo thiết kế nhất quán, dễ nhìn.
                    </li>
                    <li>
                      Nắm bắt, hiểu và biết cách lựa chọn, điều chỉnh màu sắc, font chữ phù hợp với sản phẩm.
                    </li>
                    <li>
                      Có khả năng thiết kế các yếu tố tương tác căn bản của 1 web/app như button, form,...
                    </li>
                    <li>
                      Đọc hiểu bố cục web/app trên wireframe cho sẵn, và có thể dựa vào đó thể thiết kế giao diện người dùng hoàn chỉnh.
                    </li>
                    <li>
                      Xác định được task flow của sản phẩm, và từ đó thiết kế ra bản mẫu (prototype) thể hiện được cách người dùng tương tác và sử dụng sản phẩm.
                    </li>
                  </ul>
                </div>
                <br></br>
              </FlyoutLink>
              <FlyoutLink title={"LEVEL 4: UI UX CAREER KICKSTART"}>
                <div className="flex flex-col gap-4 text-[17px]">
                  <p className="font-semibold">Tổng quan kỳ học:</p>
                  <ul className="list-disc pl-8 font-light">
                    <li>
                      Trong khóa học này, học viên sẽ được tiếp cận với các kỹ năng thiết kế UI căn bản và làm quen với công cụ Figma.
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-4 text-[17px]">
                  <p className="font-semibold">Mục tiêu:</p>
                  <ul className="list-disc pl-8 font-light">
                    <li>
                      Có khả năng sử dụng các tính năng chính của Figma để thiết kế các thành phần căn bản trên 1 web/app.
                    </li>
                    <li>
                      Áp dụng tốt các nguyên lý thiết kế UI cốt lõi để đảm bảo thiết kế nhất quán, dễ nhìn.
                    </li>
                    <li>
                      Nắm bắt, hiểu và biết cách lựa chọn, điều chỉnh màu sắc, font chữ phù hợp với sản phẩm.
                    </li>
                    <li>
                      Có khả năng thiết kế các yếu tố tương tác căn bản của 1 web/app như button, form,...
                    </li>
                    <li>
                      Đọc hiểu bố cục web/app trên wireframe cho sẵn, và có thể dựa vào đó thể thiết kế giao diện người dùng hoàn chỉnh.
                    </li>
                    <li>
                      Xác định được task flow của sản phẩm, và từ đó thiết kế ra bản mẫu (prototype) thể hiện được cách người dùng tương tác và sử dụng sản phẩm.
                    </li>
                  </ul>
                </div>
                <br></br>
              </FlyoutLink>
            </div>

            <div className="text-center my-[60px]">
              <p className="font-semibold text-[24px] mb-[30px]">Cùng IA Academy thiết kế lộ trình học <span className="text-[blue]">cho cá nhân bạn</span></p>


              <button onClick={handleShowForm} className="text-[20px] font-medium rounded-lg px-5 py-2 text-[#fff] bg-blue-600 w">
                Đăng ký khóa học ngay
              </button>
            </div>

          </div>
        </div>

        <div id="sanPhamHocVien" className="bg-cover bg-center "
          style={{ backgroundImage: `url('https://www.uxdesigninstitute.com/blog/wp-content/uploads/2022/03/102_what_is_ui_design_image_blog.jpg')` }}>
          <div className="mx-auto max-w-screen-2xl py-10">
            <div className="text-center text-[#fff]">
              <p className="text-[24px] font-semibold mb-5">SẢN PHẨM HỌC VIÊN</p>
              <p className="text-[20px] font-light">Các sản phẩm nổi bật được chính <br />
                các học viên tại IA Academy thiết kế sau khi kết thúc mỗi kỳ học.</p>
            </div>

            <div className="py-[15px]">
              {/* <CarouselVideo /> */}
            </div>

            <div className="text-center my-[60px]">
              <button onClick={handleShowForm} className="text-[18px] font-semibold rounded-lg px-5 py-2 bg-[#fff] text-blue-600">
                Đăng ký nhận tư vấn khóa học
              </button>
            </div>
          </div>
        </div>

        <div className="" id="dangkicourse">
          <div className="mx-auto max-w-screen-md py-[50px] ">
            <div className="flex flex-row">
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

      </main>
    </>
  )
}
