const BASE_URL = "https://phimapi.com/v1/api";

export const getMoviesByGenre = async (genreSlug, limit, currentPage) => {
  const res = await fetch(
    `${BASE_URL}/the-loai/${genreSlug}?limit=${limit}&page=${currentPage}`
  );
  if (!res.ok) throw new Error("Không thể tải phim theo thể loại");
  return res.json();
};
export const getMovieList = async (genreSlug, limit, page) => {
  const res = await fetch(
    `${BASE_URL}/danh-sach/${genreSlug}?limit=${limit}&page=${page}`
  );
  if (!res.ok) throw new Error("Không thể tải danh sách phim");
  return res.json();
};
export const getMovieDetail = async (slug) => {
  const res = await fetch(`${BASE_URL}/phim/${slug}`);
  if (!res.ok) throw new Error("Không thể tải chi tiết phim");
  return res.json();
};

export const searchMovies = async (keyword) => {
  const res = await fetch(
    `${BASE_URL}/tim-kiem?keyword=${encodeURIComponent(keyword)}`
  );
  if (!res.ok) throw new Error("Không thể tìm kiếm phim");
  return res.json();
};
