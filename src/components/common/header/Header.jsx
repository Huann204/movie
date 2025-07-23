// File: components/common/header/Header.jsx
import LogoSection from "./LogoSection";
import DesktopMenu from "./DesktopMenu";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

function Header() {
  return (
    <header className="font-[Roboto,sans-serif] p-4 flex items-center justify-between sticky top-0 z-50 bg-[#09121d]/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="flex w-full items-center">
        <LogoSection />
        <DesktopMenu />
        <SearchBar />
      </div>
      <MobileMenu />
    </header>
  );
}

export default Header;
