import { useContext } from "react";
import PropTypes from "prop-types";
import { MovieContext } from "../MovieContext/MovieProvider";

const MovieSearch = ({ title, data }) => {
    const { handleTrailer } = useContext(MovieContext);
    return (
        <div className="text-white p-10 mb-10">
            <h2 className="uppercase text-2xl mb-5">{title}</h2>
            <div className="grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {data &&
                    data.length > 0 &&
                    data.map((item) => (
                        <div
                            key={item.id}
                            className="w-[200px] h-[300px] relative group cursor-pointer"
                            onClick={() => handleTrailer(item.id)}
                        >
                            <div className=" w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out">
                                <div className="absolute w-full h-full top-0 left-0 bg-black/40 "></div>
                                <img
                                    src={`${import.meta.env.VITE_IMG_URL}${
                                        item.poster_path
                                    }`}
                                    alt={item.title}
                                    className="w-full h-full object-cover "
                                />
                                <div className="absolute bottom-4 left-4">
                                    <p className="uppercase text-[14px] text-gray-300">
                                        {item.title || item.original_title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

MovieSearch.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
};

export default MovieSearch;
