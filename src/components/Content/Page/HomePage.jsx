import MovieListByGenre from "../MovieListByGenre";
function HomePage() {
  const isMobile = window.innerWidth < 768;
  const limit = isMobile ? 6 : 12;
  return (
    <>
      <MovieListByGenre
        genreSlug="phim-le"
        title="PHIM LẺ ĐỀ CỬ"
        limit={limit}
        page="1"
        showSeeAll
      />
      <MovieListByGenre
        genreSlug="phim-bo"
        title="PHIM BỘ ĐỀ CỬ"
        limit={limit}
        page="1"
        showSeeAll
      />
      <MovieListByGenre
        genreSlug="hoat-hinh"
        title="PHIM HOẠT HÌNH"
        limit={limit}
        page="1"
        showSeeAll
      />
      <MovieListByGenre
        genreSlug="tv-shows"
        title="TV SHOWS ĐỀ CỬ"
        limit={limit}
        page="1"
        showSeeAll
      />
    </>
  );
}

export default HomePage;
