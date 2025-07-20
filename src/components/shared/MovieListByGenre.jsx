import React, { useState, useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { GoTriangleRight } from "react-icons/go";
import { Link } from "react-router-dom";

function Movie({ data, loading }) {
  if (loading) {
    return (
      <div className="flex justify-center items-center col-span-full h-32">
        <div className="text-center">
          <AiOutlineLoading className="text-red-500 text-6xl sm:text-8xl animate-spin mx-auto mb-4" />
          <p className="text-white text-base sm:text-lg"></p>
        </div>
      </div>
    );
  }

  if (!data || !data.data.items) {
    return (
      <div className="col-span-full text-center text-gray-400 py-8">
        <p>Không có dữ liệu 😢</p>
      </div>
    );
  }

  return data.data.items.map((item) => (
    <div key={item._id} className="group">
      <Link to={`/phim/${item.slug}`}>
        <div className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-lg">
          <img
            src={`https://img.phimapi.com/${item.poster_url}`}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      <Link to={`/phim/${item.slug}`}>
        <div className="mt-3 space-y-1">
          <h3 className="text-sm text-[#dbdbdb] font-semibold uppercase tracking-wide line-clamp-2 group-hover:text-[#b1a21e] transition-colors duration-300">
            {item.name}
          </h3>
          <p className="text-xs text-gray-400 line-clamp-1">
            {item.origin_name}
          </p>
        </div>
      </Link>
    </div>
  ));
}

function MovieListByGenre({
  genreSlug,
  title,
  limit,
  page,
  onDataFetched,
  showSeeAll,
}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://phimapi.com/v1/api/danh-sach/${genreSlug}?limit=${limit}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        if (onDataFetched) {
          onDataFetched(data);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [genreSlug, page]);

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
          <Movie data={data} loading={loading} />
        </div>
      </div>
    </section>
  );
}

export default MovieListByGenre;
