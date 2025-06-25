import HomePage from "./Page/HomePage";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./Page/MovieDetail";
import WatchPage from "./Page/WatchPage";
import SearchPage from "./Page/SearchPage";

function Content() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/phim/:slug" element={<MovieDetail />} />
        <Route path="/watch/:slug" element={<WatchPage />} />
        <Route path="/tim-kiem" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default Content;
