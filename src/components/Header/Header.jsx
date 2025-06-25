import Logo from "../../assets/img/logo.png";
import { IoIosMenu } from "react-icons/io";
import "tippy.js/dist/tippy.css";
import { useState } from "react";
import Tippy from "@tippyjs/react/headless";

function Header() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible); // toggle menu
  };

  const handleClickOutside = () => {
    setVisible(false); // click ra ngoài là ẩn
  };

  const Menu = (
    <div>
      <ul className="bg-[#0b2b4c]">
        {["Tìm kiếm", "Phim hot", "Phim lẻ", "Phim bộ", "Phim mới"].map(
          (text, idx) => {
            // Xác định link cho mỗi mục
            const link =
              text === "Tìm kiếm"
                ? "/tim-kiem"
                : text === "Phim hot"
                ? "/hot"
                : text === "Phim lẻ"
                ? "/single-movies"
                : text === "Phim bộ"
                ? "/tv-series"
                : text === "Phim mới"
                ? "/new-releases"
                : "/"; // Đường dẫn mặc định nếu không tìm thấy

            return (
              <li key={idx} className="border-b border-solid border-[#fda399]">
                <a
                  href={link} // Gắn đường dẫn tương ứng
                  className="block text-[10px] py-3 px-5 text-white w-[200px] hover:bg-[#fda399] hover:pl-6"
                >
                  {text}
                </a>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );

  return (
    <div className="font-[Roboto, sans-serif] p-[15px] flex items-center sticky top-0 z-10 bg-[#09121d] justify-between lg:justify-start">
      {/* logo */}
      <a href="/">
        <img
          className="w-20 h-6 lg:w-[155px] lg:h-9 object-cover"
          src={Logo}
          alt="logo"
        />
      </a>

      {/* menu lớn khi màn hình rộng */}
      <ul className="hidden lg:flex">
        {["Tìm kiếm", "Phim hot", "Phim lẻ", "Phim bộ", "Phim mới"].map(
          (text, idx) => {
            // Tạo một đường dẫn phù hợp cho từng mục
            const link =
              text === "Tìm kiếm"
                ? "/tim-kiem"
                : text === "Phim hot"
                ? "/hot"
                : text === "Phim lẻ"
                ? "/single-movies"
                : text === "Phim bộ"
                ? "/tv-series"
                : text === "Phim mới"
                ? "/new-releases"
                : "/"; // Đường dẫn mặc định nếu không tìm thấy

            return (
              <li key={idx}>
                <a
                  href={link}
                  className="text-white py-2 px-2 font-medium rounded-md hover:text-[#0b2b4c] hover:bg-[#fda399]"
                >
                  {text}
                </a>
              </li>
            );
          }
        )}
      </ul>

      {/* menu di động */}
      <Tippy
        visible={visible}
        interactive
        placement="bottom-end"
        onClickOutside={handleClickOutside}
        render={() => <div className="p-0">{Menu}</div>}
      >
        <span>
          <IoIosMenu
            onClick={handleClick}
            className="text-white text-[2rem] lg:hidden cursor-pointer"
          />
        </span>
      </Tippy>
    </div>
  );
}

export default Header;
