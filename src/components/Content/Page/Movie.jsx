// Movie.jsx
import { Link } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";

function Movie({ data, loading }) {
  if (loading)
    return <AiOutlineLoading className="text-white text-8xl animate-spin" />;
  if (!data || data.length === 0)
    return <p className="text-white">Không có phim 😢</p>;

  return data.map((item) => (
    <div key={item._id}>
      <Link to={`/phim/${item.slug}`}>
        <div className="text-[#dbdbdb] w-full h-[300px] overflow-hidden">
          <img
            src={`https://img.phimapi.com/${item.poster_url}`}
            alt={item.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
      <Link to={`/phim/${item.slug}`}>
        <div className="text-sm text-[#dbdbdb] gap-1 w-full flex flex-col overflow-hidden mt-1 font-semibold uppercase">
          <div className="whitespace-nowrap overflow-hidden text-ellipsis w-full">
            {item.name}
          </div>
          <div className="whitespace-nowrap overflow-hidden text-ellipsis w-full text-gray-400">
            {item.origin_name}
          </div>
        </div>
      </Link>
    </div>
  ));
}

export default Movie;
