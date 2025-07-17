// Pagination.jsx
function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    // Chỉ hiển thị trang 1, 2, 3, ..., trang hiện tại -1, hiện tại, hiện tại+1, ..., cuối
    if (
      i <= 3 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return (
    <div className="flex justify-center gap-2 p-4 flex-wrap bg-[#09121d]">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-gray-700 text-white hover:bg-gray-500 disabled:opacity-30"
      >
        ←
      </button>

      {pages.map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-3 py-1 text-gray-400">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded ${
              page === currentPage
                ? "bg-yellow-400 text-black font-bold"
                : "bg-gray-800 text-white hover:bg-gray-600"
            }`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-gray-700 text-white hover:bg-gray-500 disabled:opacity-30"
      >
        →
      </button>
    </div>
  );
}

export default Pagination;
