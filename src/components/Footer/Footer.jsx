function Footer() {
  return (
    <>
      <div className="bg-[#09121d]">
        <div
          className="pt-[90px] px-[7.5px]   lg:mx-auto lg:max-w-[1320px]
        lg:grid lg:grid-cols-4  "
        >
          <div>
            <div className="text-[#ff9601] text-[16px] font-bold mt-5">
              Về Chúng tôi
            </div>
            <p className="mt-4 text-white text-sm opacity-80 ">
              Website chính thức và duy nhất của PhimChill. Hiện tại chúng mình
              chỉ có duy nhất một website chứ không có website nào khác nhé!
            </p>
          </div>
          <div>
            <div className="text-[#ff9601] text-[16px] font-bold mt-5">
              Phim mới
            </div>
            <a href="/" className=" block mt-4 text-white text-sm opacity-80">
              Phim lẻ
            </a>
            <a href="/" className=" block mt-4 text-white text-sm opacity-80">
              Phim hoạt hình
            </a>
            <a href="/" className=" block mt-4 text-white text-sm opacity-80">
              Phim bộ
            </a>
            <a href="/" className=" block mt-4 text-white text-sm opacity-80">
              Phim khoa học
            </a>
            <a href="/" className=" block mt-4 text-white text-sm opacity-80">
              Phim hành động
            </a>
            <a href="/" className=" block mt-4 text-white text-sm opacity-80">
              Phim hài hước
            </a>
          </div>
          <div>
            <div className="text-[#ff9601] text-[16px] font-bold mt-5">
              Thông tin
            </div>
            <a href="/" className=" block mt-4 text-white text-sm opacity-80">
              Giới thiệu
            </a>
            <a href="/" className=" block mt-4 text-white text-sm opacity-80">
              Chính sách bảo mật
            </a>
            <a href="/" className=" block mt-4 text-white text-sm opacity-80">
              Điều khoản
            </a>
            <a href="/" className=" block mt-4 text-white text-sm opacity-80">
              Sitemap
            </a>
          </div>
          <div>
            <div className="text-[#ff9601] text-[16px] font-bold mt-5">
              Hỗ trợ
            </div>
            <p className="mt-4 text-white text-sm opacity-80">
              Mọi thắc mắc và góp ý cần hỗ trợ xin vui lòng liên hệ Fanpage và
              Instagram
            </p>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#d8d8d8] mt-12 "></div>
        <div className="mt-4 pb-4 flex items-center justify-between text-white px-[7.5] lg:max-w-[1320px] mx-auto">
          <h2>Copyright 2024 ©</h2>
          <img
            src="	https://images.dmca.com/Badges/dmca_protected_4_120.png?ID=6b2ba16f-50e0-4ca6-84e7-96c103bcddf7"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
