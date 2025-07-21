import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
function Footer() {
  const movieCategories = [
    { name: "Phim Hành Động", href: "/phim-hanh-dong" },
    { name: "Phim Kinh Dị", href: "/phim-kinh-di" },
    { name: "Phim Tình Cảm", href: "Phim Tình Cảm" },
    { name: "Phim Viễn Tưởng", href: "/phim-vien-tuong" },
    { name: "Phim hành động", href: "/" },
    { name: "Phim hài hước", href: "/" },
  ];

  const infoLinks = [
    { name: "Giới thiệu", href: "/" },
    { name: "Chính sách bảo mật", href: "/" },
    { name: "Điều khoản", href: "/" },
    { name: "Sitemap", href: "/" },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0a1420] to-[#09121d] text-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Main content */}
        <div className="pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#ff9601] border-b-2 border-[#ff9601] pb-2 inline-block">
                Về Chúng Tôi
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Website chính thức và duy nhất của Webnhucc. Hiện tại chúng mình
                chỉ có duy nhất một website chứ không có website nào khác nhé!
              </p>
            </div>

            {/* Movie categories */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#ff9601] border-b-2 border-[#ff9601] pb-2 inline-block">
                Phim Mới
              </h3>
              <ul className="space-y-3">
                {movieCategories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={category.href}
                      className="text-gray-300 hover:text-[#ff9601] transition-colors duration-300 text-sm block hover:translate-x-1 transform transition-transform"
                    >
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#ff9601] border-b-2 border-[#ff9601] pb-2 inline-block">
                Thông Tin
              </h3>
              <ul className="space-y-3">
                {infoLinks.map((link, index) => (
                  <div key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-[#ff9601] transition-colors duration-300 text-sm block hover:translate-x-1 transform transition-transform"
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}
              </ul>
            </div>

            {/* Support section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#ff9601] border-b-2 border-[#ff9601] pb-2 inline-block">
                Hỗ Trợ
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Mọi thắc mắc và góp ý cần hỗ trợ xin vui lòng liên hệ Fanpage và
                Instagram
              </p>

              {/* Social media icons */}
              <div className="flex space-x-4 mt-6">
                <Link
                  to="https://www.facebook.com/NguyenVanHuannn/"
                  target="_blank"
                  className="group flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-white text-sm group-hover:text-white" />
                </Link>
                <Link
                  href="https://www.facebook.com/NguyenVanHuannn/"
                  target="_blank"
                  className="group flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-white text-sm group-hover:text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

        {/* Copyright section */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-sm">
            Copyright © 2024 Webnhucc. All rights reserved.
          </p>
          <img
            src="https://images.dmca.com/Badges/dmca_protected_4_120.png?ID=6b2ba16f-50e0-4ca6-84e7-96c103bcddf7"
            alt="DMCA Protected"
            className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300"
            loading="lazy"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
