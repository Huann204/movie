import { useEffect, useState } from "react";
import Movie from "../shared/Movie";
import Pagination from "../shared/Pagination";

function MovieListByGenre({ genreSlug, title, limit }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://phimapi.com/v1/api/the-loai/${genreSlug}?limit=${limit}&page=${currentPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [genreSlug, currentPage, limit]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="bg-[#09121d]">
      <div className="pt-6 px-4 container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-4">
          <h2 className="text-[#b1a21e] font-semibold text-xl md:text-2xl">
            {title}
          </h2>
          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-2" />
        </div>

        {/* Movies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 min-h-[500px]">
          <Movie data={data?.items} loading={loading} />
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
        totalPages={data?.params.pagination.totalPages}
      />
    </div>
  );
}

export default MovieListByGenre;
