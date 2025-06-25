import React, { useState, useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { Link } from "react-router-dom";

function Movie({ data, loading }) {
  if (loading)
    return <AiOutlineLoading className="text-white text-8xl animate-spin" />;
  if (!data || !data.data.items) return <p>Không có dữ liệu 😢</p>;

  return data.data.items.map((item) => (
    <div key={item._id}>
      <Link to={`phim/${item.slug}`}>
        <div className="text-[#dbdbdb] w-full h-[300px] overflow-hidden">
          <a href="">
            <img
              src={`https://img.phimapi.com/${item.poster_url}`}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </a>
        </div>
      </Link>
      <Link to={`phim/${item.slug}`}>
        <div className="text-sm text-[#dbdbdb] gap-1 w-full flex flex-col overflow-hidden mt-1 font-semibold uppercase">
          <a
            href=""
            className="whitespace-nowrap overflow-hidden text-ellipsis w-full"
          >
            {item.name}
          </a>
          <a
            href=""
            className="whitespace-nowrap overflow-hidden text-ellipsis w-full"
          >
            {item.origin_name}
          </a>
        </div>
      </Link>
    </div>
  ));
}
function MovieListByGenre({ genreSlug, title, limit }) {
  const [data, setData] = useState(null); // Đổi từ [] -> null để dễ kiểm tra load
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://phimapi.com/v1/api/danh-sach/${genreSlug}?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
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
