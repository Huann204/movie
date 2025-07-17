import HomePage from "./Page/HomePage";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./Page/MovieDetail";
import WatchPage from "./Page/WatchPage";
import SearchPage from "./Page/SearchPage";

import MovieListByGenre from "./MovieListByGenre";
import Category from "./Page/Category";
import AllMovies from "./Page/AllMovies";

function Content() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tim-kiem" element={<SearchPage />} />
        <Route path="/phim/:slug" element={<MovieDetail />} />
        <Route path="/watch/:slug" element={<WatchPage />} />
        <Route
          path="/phim-hanh-dong"
          element={
            <Category genreSlug="hanh-dong" title="Phim Hành động" limit="18" />
          }
        />
        <Route
          path="/phim-kinh-di"
          element={
            <Category genreSlug="kinh-di" title="Phim Kinh Dị" limit="18" />
          }
        />
        <Route
          path="/phim-tinh-cam"
          element={
            <Category genreSlug="tinh-cam" title="Phim Tình Cảm" limit="18" />
          }
        />
        <Route
          path="/phim-vien-tuong"
          element={
            <Category
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

export default Content;
