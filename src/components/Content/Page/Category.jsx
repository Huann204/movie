import { useEffect, useState } from "react";
import Movie from "./Movie";
function MovieListByGenre({ genreSlug, title, limit }) {
  const [data, setData] = useState(null); // Đổi từ [] -> null để dễ kiểm tra load
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://phimapi.com/v1/api/the-loai/${genreSlug}?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data.items);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [genreSlug]);

  return (
    <div className="bg-[#09121d]">
      <div className="pt-6 px-[7.5px] lg:max-w-[1320px] lg:m lg:ml-auto lg:mr-auto ">
        <div className="text-[#b1a21e] font-normal text-xl relative">
          {title}
          <div className="h-[1px] w-full bg-[#ffffff93] absolute "></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-[15px] mt-[7.5px]">
          <Movie data={data} loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default MovieListByGenre;
