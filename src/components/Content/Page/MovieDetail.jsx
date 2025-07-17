import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";

function MovieDetail() {
  const { slug } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(`https://phimapi.com/phim/${slug}`)
      .then((res) => res.json())
      .then((data) => setMovie(data.movie))
      .catch((err) => console.error(err));
  }, [slug]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!movie)
    return (
      <div className="bg-[#09121d] lg:min-h-[500px]">
        <AiOutlineLoading className=" min-h-36 text-white text-8xl animate-spin" />
      </div>
    );

  return (
    <>
      <div className="bg-[#09121d]  ">
        <div className="lg:max-w-[1320px] lg:m lg:ml-auto lg:mr-auto  ">
          <div className="relative px-2 z-0 ">
            <div className="w-full h-[450px]">
              <img
                className="object-cover h-full w-full"
                src={movie.thumb_url}
                alt="movie.name"
              />
            </div>
            <div className="absolute top-5 left-5 w-[200px]">
              <img
                className="h-[300px] w-full object-cover"
                src={movie.poster_url}
                alt=""
              />
              <Link to={`/watch/${slug}`}>
                <div className="text-white bg-[#dd013f] mt-5 h-10 w-full flex items-center justify-center rounded cursor-pointer">
                  Xem Phim
                </div>
              </Link>
            </div>
          </div>{" "}
          <br />
          <div className="text-white px-2">
            <p>Phim: {movie.name}</p> <br />
            <p>Thời gian: {movie.time}</p> <br />
            <p>Nội dung: {movie.content}</p> <br />
            Diễn Viên:
            {movie.actor.map((actor, index) => (
              <p key={index}>- {actor}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default MovieDetail;
