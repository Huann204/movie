import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react/headless";

const menuItems = [
  { text: "Tìm kiếm", link: "/tim-kiem" },
  { text: "Phim Hành Động", link: "/phim-hanh-dong" },
  { text: "Phim Kinh Dị", link: "/phim-kinh-di" },
  { text: "Phim Tình Cảm", link: "/phim-tinh-cam" },
  { text: "Phim Viễn Tưởng", link: "/phim-vien-tuong" },
];

function MobileMenu() {
  const [visible, setVisible] = useState(false);

  const handleClickOutside = () => {
    setVisible(false);
  };

  const handleClick = () => {
    setVisible(!visible);
  };

  const Menu = (
    <div className="bg-[#0b2b4c] rounded-lg shadow-xl border border-[#fda399]/20 overflow-hidden">
      <ul>
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className="border-b border-[#fda399]/20 last:border-b-0"
          >
            <Link
              to={item.link}
              onClick={() => setVisible(false)}
              className="block text-sm py-3 px-5 text-white w-52 hover:bg-[#fda399] hover:pl-6 transition-all duration-300 ease-in-out"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <Tippy
      visible={visible}
      interactive
      placement="bottom-end"
      onClickOutside={handleClickOutside}
      render={() => <div className="p-0">{Menu}</div>}
    >
      <div>
        <button
          onClick={handleClick}
          className="text-white text-3xl lg:hidden cursor-pointer hover:text-[#fda399] transition-colors duration-300 ml-4 flex items-center"
        >
          <IoIosMenu />
        </button>
      </div>
    </Tippy>
  );
}

export default MobileMenu;
