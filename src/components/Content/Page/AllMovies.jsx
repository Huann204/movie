// Pagination.jsx
import MovieListByGenre from "../MovieListByGenre";
import { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { useParams } from "react-router-dom";

function AllMovies({ limit }) {
  const { slug } = useParams();
  // console.log(slug);

  const titleMap = {
    "tv-shows": "TV SHOWS Đề Cử",
    "hoat-hinh": "Phim Hoạt Hình",
    "phim-kinh-di": "Phim Kinh Dị",
    "phim-hanh-dong": "Phim Hành Động",
    "phim-vien-tuong": "Phim Viễn Tưởng",
    "phim-bo": "PHIM BỘ ĐỀ CỬ",
    "phim-le": "Phim Lẻ Đề Cử",
    "phim-vietsub": "PHIM VIETSUB",
    // thêm cái khác nếu cần
  };

  const title = titleMap[slug] || "Tất cả phim";

  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState(null);

  const handleDataFetched = (data) => {
    setMovies(data); // Cập nhật dữ liệu vào state
  };
  // console.log(movies.data.params.totalPages);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // 👈 kéo mượt mà lên đầu
  }, [currentPage]); // 👈 chạy mỗi khi trang thay đổi

  return (
    <div>
      <MovieListByGenre
        genreSlug={slug}
        title={title}
        limit={limit}
        page={currentPage}
        onDataFetched={handleDataFetched}
      />
      {movies && (
        <Pagination
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          totalPages={movies.data.params.pagination.totalPages}
        />
      )}
    </div>
  );
}

export default AllMovies;

// function AllMovies({ currentPage, totalPages, onPageChange }) {

//   const pages = [];

//   for (let i = 1; i <= totalPages; i++) {
//     // Chỉ hiển thị trang 1, 2, 3, ..., trang hiện tại -1, hiện tại, hiện tại+1, ..., cuối
//     if (
//       i <= 3 ||
//       i === totalPages ||
//       (i >= currentPage - 1 && i <= currentPage + 1)
//     ) {
//       pages.push(i);
//     } else if (pages[pages.length - 1] !== "...") {
//       pages.push("...");
//     }
//   }

//   return (
// <div className="flex justify-center gap-2 mt-4 flex-wrap">
//   <button
//     onClick={() => onPageChange(currentPage - 1)}
//     disabled={currentPage === 1}
//     className="px-3 py-1 rounded bg-gray-700 text-white hover:bg-gray-500 disabled:opacity-30"
//   >
//     ←
//   </button>

//   {pages.map((page, index) =>
//     page === "..." ? (
//       <span key={index} className="px-3 py-1 text-gray-400">
//         ...
//       </span>
//     ) : (
//       <button
//         key={index}
//         onClick={() => onPageChange(page)}
//         className={`px-3 py-1 rounded ${
//           page === currentPage
//             ? "bg-yellow-400 text-black font-bold"
//             : "bg-gray-800 text-white hover:bg-gray-600"
//         }`}
//       >
//         {page}
//       </button>
//     )
//   )}

//   <button
//     onClick={() => onPageChange(currentPage + 1)}
//     disabled={currentPage === totalPages}
//     className="px-3 py-1 rounded bg-gray-700 text-white hover:bg-gray-500 disabled:opacity-30"
//   >
//     →
//   </button>
// </div>
//   );
// }

// export default AllMovies;
