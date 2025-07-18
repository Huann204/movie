import Logo from "../../assets/img/logo.png";
import { IoIosMenu } from "react-icons/io";
import "tippy.js/dist/tippy.css";
import { useState, useEffect } from "react";
import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
function Header() {
  const [visible, setVisible] = useState(false);
  // const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
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
    }, 500); // ⏳ 500ms sau khi người dùng ngừng gõ

    return () => clearTimeout(delayDebounce); // 🧹 clear timeout nếu user gõ tiếp
  }, [value]);
  // const handleOpen = () => {
  //   setOpen(!open);
  // };
  const handleClick = () => {
    setVisible(!visible); // toggle menu
  };

  const handleSearchClick = () => {
    setHidden(() => !hidden);
  };

  const handleClickOutside = () => {
    setVisible(() => !hidden); // click ra ngoài là ẩn
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
    <div className="font-[Roboto, sans-serif] p-[15px] flex items-center justify-between sticky top-0 z-10 bg-[#09121d] flex-row-reverse lg:flex-row lg:justify-between">
      <div className="flex w-full ">
        <div className="lg:flex lg:flex-1 m-auto lg:m-0 ">
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
              "Tìm Kiếm",
              "Phim Hành Động",
              "Phim Kinh Dị",
              "Phim Tình Cảm",
              "Phim Viễn Tưởng",
            ].map((text, idx) => {
              // Tạo một đường dẫn phù hợp cho từng mục
              const link =
                text === "Tìm Kiếm"
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

        <div className="wrapper">
          <div className=" lg:block absolute top-1/2 right-4 transform -translate-y-1/2 lg:w-1/4">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="Nhập tên phim.."
              className={`lg:block  lg:w-full outline-none bg-[#09121d] text-white border border-white rounded px-3 py-1 pr-8 relative ${
                hidden ? "block" : "hidden"
              }`}
            />
            <div
              className="absolute text-white right-2 top-1/2 transform -translate-y-1/2 transition-all duration-300 hover:scale-110 active:rotate-90"
              onClick={handleSearchClick}
            >
              <FaSearch />
            </div>
            {data.length > 0 && (
              <div className="absolute top-[2.2rem] w-full max-h-64 overflow-y-auto overflow-x-hidden bg-[#09121d] shadow-[-8px_8px_20px_rgba(255,0,102,0.3)] rounded-lg">
                {data.map((item, index) => (
                  <Link to={`/phim/${item.slug}`} key={index}>
                    <div
                      onClick={() => {
                        setData([]);
                        setValue("");
                        setHidden(false);
                      }}
                      className="flex w-full p-3 cursor-pointer bg-[#09121d]"
                    >
                      <div className="w-8 flex-shrink-0">
                        <img
                          src={`https://img.phimapi.com/${item.poster_url}`}
                          alt=""
                        />
                      </div>
                      <div className="text-white ml-1 text-sm w-full">
                        <p className="text-ellipsis overflow-hidden whitespace-nowrap w-[170px] lg:w-[260px]">
                          {item.name}
                        </p>
                        <p className="text-ellipsis overflow-hidden whitespace-nowrap w-[170px] lg:w-[260px]">
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

      {/* menu di động */}
      <Tippy
        visible={visible}
        interactive
        placement="bottom-end"
        onClickOutside={handleClickOutside}
        render={() => <div className="p-0">{Menu}</div>}
      >
        <div>
          <span>
            <IoIosMenu
              onClick={handleClick}
              className="text-white text-[2rem] lg:hidden cursor-pointer"
            />
          </span>
        </div>
      </Tippy>
    </div>
  );
}

export default Header;
