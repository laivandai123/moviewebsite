import { useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import MovieList from "./components/MovieList/MovieList";
function App() {
    const [movie, setMovie] = useState();
    useEffect(() => {
        const fetchMovie = async () => {
            const url =
                "https://api.themoviedb.org/3/movie/popular?language=vi&page=1";
            const options = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                },
            };
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data);
            fetchMovie();
        };
    }, []);
    return (
        <>
            <div className="bg-black pb-10">
                <Header />
                <Banner />
                <MovieList title={"Phim Hot"} />
                <MovieList title={"Phim Đề Cử"} />
            </div>
        </>
    );
}

export default App;
