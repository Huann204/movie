import MovieListByGenre from "../MovieListByGenre";
function HomePage() {
  return (
    <>
      <MovieListByGenre
        genreSlug="hoat-hinh"
        title="PHIM HOẠT HÌNH ĐỀ CỬ "
        limit="12"
      />
      <MovieListByGenre genreSlug="phim-le" title="PHIM LẺ ĐỀ CỬ" limit="6" />
      <MovieListByGenre genreSlug="phim-bo" title="PHIM BỘ ĐỀ CỬ" limit="12" />
      <MovieListByGenre
        genreSlug="tv-shows"
        title="TV SHOWS ĐỀ CỬ"
        limit="12"
      />
    </>
  );
}

export default HomePage;
