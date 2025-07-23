import React, { useState, useEffect } from "react";
import { GoTriangleRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { getMovieList } from "../../services/api";
import MovieCard from "./MovieCard";

function MovieList({
  genreSlug,
  title,
  limit,
  page,
  onDataFetched,
  showSeeAll,
}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getMovieList(genreSlug, limit, page)
      .then((data) => {
        setData(data.data.items);
        setLoading(false);
        if (onDataFetched) {
          onDataFetched(data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [genreSlug, page, limit]);
  // console.log(data);

  // if (!data) {
  //   return (
  //     <div className="flex justify-center items-center col-span-full h-32">
  //       <div className="text-center">
  //         <AiOutlineLoading className="text-red-500 text-6xl sm:text-8xl animate-spin mx-auto mb-4" />
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <section className="bg-[#09121d] py-6">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[#b1a21e] font-semibold text-xl md:text-2xl">
            {title}
          </h2>
          {showSeeAll && (
            <Link
              to={`/tat-ca/${genreSlug}`}
              className="text-white hover:text-[#b1a21e] transition-colors duration-300 flex items-center gap-1 text-sm font-medium"
            >
              Xem tất cả
              <GoTriangleRight className="text-lg" />
            </Link>
          )}
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

        {/* Movies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          <MovieCard data={data} loading={loading} />
        </div>
      </div>
    </section>
  );
}

export default MovieList;
