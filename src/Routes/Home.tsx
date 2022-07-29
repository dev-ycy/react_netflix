import { useQuery } from "@tanstack/react-query";
import { getMovies } from "./../api";

function Home() {
  const { isLoading, data } = useQuery(["movies", "nowPlaying"], getMovies);
  console.log(data, isLoading);
  return (
    <div style={{ backgroundColor: "whitesmoke", height: "200vh" }}>Home</div>
  );
}

export default Home;
