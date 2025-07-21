import Logo from "../../assets/img/logo.png";
import { IoIosMenu } from "react-icons/io";
import "tippy.js/dist/tippy.css";
import { useState, useEffect } from "react";
import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Header() {
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const menuItems = [
    { text: "Tìm kiếm", link: "/tim-kiem" },
    { text: "Phim Hành Động", link: "/phim-hanh-dong" },
    { text: "Phim Kinh Dị", link: "/phim-kinh-di" },
    { text: "Phim Tình Cảm", link: "/phim-tinh-cam" },
    { text: "Phim Viễn Tưởng", link: "/phim-vien-tuong" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      const wrapper = document.querySelector(".wrapper");
      if (wrapper && !wrapper.contains(e.target)) {
        setData([]);
        setValue("");
        setHidden(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const encoded = encodeURIComponent(value.trim());
    if (!encoded) {
      setData([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      fetch(`https://phimapi.com/v1/api/tim-kiem?keyword=${encoded}`)
        .then((res) => res.json())
        .then((res) => {
          if (res?.data?.items) {
            setData(res.data.items);
          } else {
            setData([]);
          }
        })
        .catch((err) => {
          console.error("API error:", err);
          setData([]);
        });
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [value]);

  const handleClick = () => {
    setVisible(!visible);
  };

  const handleSearchClick = () => {
    setHidden(() => !hidden);
    setValue("");
    setData([]);
  };

  const handleClickOutside = () => {
    setVisible(() => !visible);
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
    <header className="font-[Roboto,sans-serif] p-4 flex items-center justify-between sticky top-0 z-50 bg-[#09121d]/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="flex w-full items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="block">
            <img
              className="w-32 h-6 lg:w-[155px] lg:h-9 object-cover hover:scale-105 transition-transform duration-300"
              src={Logo}
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:flex-1 lg:justify-center">
          <ul className="flex space-x-1">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.link}
                  className="text-white py-2 px-4 font-medium rounded-lg hover:text-[#0b2b4c] hover:bg-[#fda399] transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Search */}
        <div className="wrapper flex-shrink-0 ml-auto">
          <div className="relative">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="Nhập tên phim..."
              className={`absolute right-1 top-1/2 transform -translate-y-1/2 h-[40px] lg:h-[42px] outline-none bg-[#09121d]/95 text-white rounded-lg py-2 pr-10 focus:ring-2 focus:ring-[#fda399]/20 transition-all duration-500 ease-in-out
    ${
      hidden
        ? "w-[260px] lg:w-80 pointer-events-auto border border-white/30 px-4 focus:border-[#fda399]"
        : "w-0 pointer-events-none overflow-hidden px-0  bg-transparent"
    }
    lg:block`}
            />

            <button
              onClick={handleSearchClick}
              className="absolute  right-3 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-[#fda399] transition-all duration-300 hover:scale-110 active:rotate-90"
            >
              <FaSearch />
            </button>

            {/* Search Results */}
            {data.length > 0 && (
              <div className="absolute  top-9 right-0 lg:right-0 w-[260px] lg:w-80 max-h-64 overflow-y-auto bg-[#09121d] border border-white/20 rounded-lg shadow-[-8px_8px_20px_rgba(255,0,102,0.3)] z-50">
                {data.map((item, index) => (
                  <Link to={`/phim/${item.slug}`} key={index}>
                    <div
                      onClick={() => {
                        setData([]);
                        setValue("");
                        setHidden(false);
                      }}
                      className="flex px-4 py-2 cursor-pointer hover:bg-[#0b2b4c] transition-colors duration-200 border-b border-white/10 last:border-b-0"
                    >
                      <div className="w-10 h-14 flex-shrink-0 rounded overflow-hidden">
                        <img
                          src={`https://img.phimapi.com/${item.poster_url}`}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-3 flex-1 min-w-0">
                        <p className="text-white text-sm font-medium truncate">
                          {item.name}
                        </p>
                        <p className="text-gray-400 text-xs truncate">
                          {item.origin_name}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
    </header>
  );
}

export default Header;
