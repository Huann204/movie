import Logo from "../../assets/img/logo.png";
import { IoIosMenu } from "react-icons/io";
import "tippy.js/dist/tippy.css";
import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";
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
        {[
          "Tìm kiếm",
          "Phim Hành Động",
          "Phim Kinh Dị",
          "Phim Tình Cảm",
          "Phim Viễn Tưởng",
        ].map((text, idx) => {
          // Xác định link cho mỗi mục
          const link =
            text === "Tìm kiếm"
              ? "/tim-kiem"
              : text === "Phim Hành Động"
              ? "/phim-hanh-dong"
              : text === "Phim Kinh Dị"
              ? "/phim-kinh-di"
              : text === "Phim Tình Cảm"
              ? "/phim-tinh-cam"
              : text === "Phim Viễn Tưởng"
              ? "/phim-vien-tuong"
              : "/"; // Đường dẫn mặc định nếu không tìm thấy

          return (
            <li key={idx} className="border-b border-solid border-[#fda399]">
              <Link
                to={link} // Gắn đường dẫn tương ứng
                className="block text-[10px] py-3 px-5 text-white w-[200px] hover:bg-[#fda399] hover:pl-6"
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div className="font-[Roboto, sans-serif] p-[15px] flex items-center sticky top-0 z-10 bg-[#09121d] justify-between lg:justify-between">
      <div className="flex ">
        {/* logo */}
        <Link to="/">
          <img
            className="w-32 h-6 lg:w-[155px] lg:h-9 object-cover"
            src={Logo}
            alt="logo"
          />
        </Link>

        {/* menu lớn khi màn hình rộng */}
        <ul className="hidden lg:flex">
          {[
            "Tìm kiếm",
            "Phim Hành Động",
            "Phim Kinh Dị",
            "Phim Tình Cảm",
            "Phim Viễn Tưởng",
          ].map((text, idx) => {
            // Tạo một đường dẫn phù hợp cho từng mục
            const link =
              text === "Tìm kiếm"
                ? "/tim-kiem"
                : text === "Phim Hành Động"
                ? "/phim-hanh-dong"
                : text === "Phim Kinh Dị"
                ? "/phim-kinh-di"
                : text === "Phim Tình Cảm"
                ? "/phim-tinh-cam"
                : text === "Phim Viễn Tưởng"
                ? "/phim-vien-tuong"
                : "/"; // Đường dẫn mặc định nếu không tìm thấy

            return (
              <li key={idx}>
                <Link
                  to={link}
                  className="text-white py-2 px-2 font-medium rounded-md hover:text-[#0b2b4c] hover:bg-[#fda399]"
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
  

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
