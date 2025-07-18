import { useEffect, useState } from "react";
import Movie from "../shared/Movie";
// import Pagination from "./Pagination";
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
    window.scrollTo({ top: 0, behavior: "smooth" }); // 👈 kéo mượt mà lên đầu
  }, [currentPage]);

  return (
    <div className="bg-[#09121d]">
      <div className="pt-6 px-[7.5px] lg:max-w-[1320px] lg:m lg:ml-auto lg:mr-auto ">
        <div className="text-[#b1a21e] font-normal text-xl relative">
          {title}
          <div className="h-[1px] w-full bg-[#ffffff93] absolute "></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-[15px] mt-[7.5px] lg:min-h-[500px] ">
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
