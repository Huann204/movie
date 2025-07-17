import HlsPlayer from "./hls/hls";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

function WatchPage() {
  const { slug } = useParams();
  const [logicWatch, setLogicWatch] = useState(0);
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`https://phimapi.com/phim/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        // Lấy danh sách tập phim từ server đầu tiên
        const firstServer = data.episodes[0];
        if (firstServer && firstServer.server_data) {
          setMovie(firstServer.server_data);
        } else {
          console.error("Không có server_data.");
          setMovie([]);
        }
      })
      .catch((err) => console.error(err));
  }, [slug]);

  if (!movie)
    return (
      <div className="bg-[#09121d] ">
        <div className="pt-6 px-[7.5px] lg:max-w-[1320px] lg:m lg:ml-auto lg:mr-auto lg:min-h-[500px]">
          <AiOutlineLoading className=" text-white text-8xl animate-spin" />
        </div>
      </div>
    );
  return (
    <>
      <div className="bg-[#09121d] px-2 text-white ">
        <div className="lg:max-w-[1320px] lg:m lg:ml-auto lg:mr-auto ">
          <div className=" ">{movie[logicWatch].filename}</div> <br />
          <div className="lg:grid lg:grid-cols-10 lg:gap-4">
            <div className="col-span-7">
              <HlsPlayer src={movie[logicWatch]?.link_m3u8} />
            </div>

            <div
              style={{ scrollbarWidth: "none" }}
              className="bg-[#1a1c21] h-[410px] lg:w-[315px] lg:col-span-3 overflow-auto "
            >
              <p>Chọn tập 1 đến tập {movie.length}</p> <br />
              <div className="grid grid-cols-6 lg:grid-cols-5 p-[10px] ">
                {movie.map((item, index) => {
                  const isActive = logicWatch === index;
                  return (
                    <div
                      key={index}
                      className={`p-[15px] size-4 rounded-md h-[46px] w-[50px] flex items-center justify-center mb-3 cursor-pointer 
                      ${
                        isActive
                          ? "bg-green-700 text-white"
                          : "bg-[#2c2f35] text-gray-300"
                      }`}
                      onClick={() => setLogicWatch(index)}
                    >
                      {index + 1}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WatchPage;
