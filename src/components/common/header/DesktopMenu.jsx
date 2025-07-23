import { Link } from "react-router-dom";

const menuItems = [
  { text: "Tìm kiếm", link: "/tim-kiem" },
  { text: "Phim Hành Động", link: "/phim-hanh-dong" },
  { text: "Phim Kinh Dị", link: "/phim-kinh-di" },
  { text: "Phim Tình Cảm", link: "/phim-tinh-cam" },
  { text: "Phim Viễn Tưởng", link: "/phim-vien-tuong" },
];

function DesktopMenu() {
  return (
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
  );
}

export default DesktopMenu;
