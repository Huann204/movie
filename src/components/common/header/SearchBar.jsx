import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function SearchBar() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);
  const [hidden, setHidden] = useState(false);

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
        .catch(() => setData([]));
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [value]);

  const handleSearchClick = () => {
    setHidden(!hidden);
    setValue("");
    setData([]);
  };

  return (
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

        {data.length > 0 && (
          <div className="absolute top-9 right-0 lg:right-0 w-[260px] lg:w-80 max-h-64 overflow-y-auto bg-[#09121d] border border-white/20 rounded-lg shadow-[-8px_8px_20px_rgba(255,0,102,0.3)] z-50">
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
  );
}

export default SearchBar;
