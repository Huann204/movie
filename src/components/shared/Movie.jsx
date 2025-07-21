import { Link } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";

function Movie({ data, loading }) {
  if (loading) {
    return (
      <div className="flex justify-center items-center col-span-full h-32">
        <div className="text-center">
          <AiOutlineLoading className="text-red-500 text-6xl sm:text-8xl animate-spin mx-auto mb-4" />
        </div>
      </div>
    );
  }

  if (!loading && (!data || data.length === 0)) {
    return (
      <div className="col-span-full text-center text-gray-400 py-8">
        <p>Không có phim 😢</p>
      </div>
    );
  }

  return data.map((item) => (
    <div key={item._id} className="group">
      <Link to={`/phim/${item.slug}`}>
        <div className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-lg">
          <img
            src={`https://img.phimapi.com/${item.poster_url}`}
            alt={item.name}
            loading="lazy"
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

export default Movie;
