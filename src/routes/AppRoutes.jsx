// import HomePage from "./Content/HomePage.jsx";
import { Routes, Route } from "react-router-dom";
import AllMovies from "../pages/Movies/AllMovies";
import HomePage from "../pages/Home/HomePage";
import SearchPage from "../pages/Search/SearchPage";

import WatchPage from "../pages/Movies/WatchPage";

import MovieDetailPage from "../pages/Movies/MovieDetailPage";
import CategoryPage from "../components/ui/CategoryPage";
// import MovieDetail from "./Page/MovieDetail";
// import WatchPage from "./Page/WatchPage";
// import SearchPage from "./Page/SearchPage";

// import Category from "./Page/Category";
// import AllMovies from "./Page/AllMovies";
// import HomePage from "../components/Content/Page/HomePage";
// import SearchPage from "../components/Content/Page/SearchPage";
// import MovieDetail from "../components/Content/Page/MovieDetail";
// import WatchPage from "../components/Content/Page/WatchPage";
// import Category from "../components/Content/Page/Category";
// import AllMovies from "../components/Content/Page/AllMovies";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tim-kiem" element={<SearchPage />} />
        <Route path="/phim/:slug" element={<MovieDetailPage />} />
        <Route path="/watch/:slug" element={<WatchPage />} />
        <Route
          path="/phim-hanh-dong"
          element={
            <CategoryPage
              genreSlug="hanh-dong"
              title="Phim Hành động"
              limit="18"
            />
          }
        />
        <Route
          path="/phim-kinh-di"
          element={
            <CategoryPage genreSlug="kinh-di" title="Phim Kinh Dị" limit="18" />
          }
        />
        <Route
          path="/phim-tinh-cam"
          element={
            <CategoryPage
              genreSlug="tinh-cam"
              title="Phim Tình Cảm"
              limit="18"
            />
          }
        />
        <Route
          path="/phim-vien-tuong"
          element={
            <CategoryPage
              genreSlug="vien-tuong"
              title="Phim Viễn Tưởng"
              limit="24"
            />
          }
        />
        <Route path="tat-ca/:slug" element={<AllMovies limit="18" />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
