import { useState } from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "react-modal";
import YouTube from "react-youtube";

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 10,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    },
};

const opts = {
    height: "390",
    width: "640",
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};
const MovieList = ({ title, data }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [trailerKey, setTrailerKey] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const handleTrailer = async (id) => {
        setTrailerKey("");
        setErrorMsg("");
        try {
            const url = `https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`;
            const options = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                },
            };
            const movieKey = await fetch(url, options);
            const data = await movieKey.json();
            console.log(data);
            if (data.results && data.results.length > 0) {
                setTrailerKey(data.results[0].key);
                setModalIsOpen(true);
            } else {
                setErrorMsg("Không có trailer cho phim này 😢");
                setModalIsOpen(true);
            }
        } catch (error) {
            setModalIsOpen(false);
            setErrorMsg("Lỗi khi tải trailer. Vui lòng thử lại!");
            console.log(error);
        }
    };
    return (
        <div className="text-white p-10 mb-10">
            <h2 className="uppercase text-2xl mb-5">{title}</h2>
            <Carousel
                responsive={responsive}
                className="flex items-center space-x-4 "
            >
                {data?.length > 0 &&
                    data.map((item) => (
                        <div
                            key={item.id}
                            className="w-[200px] h-[300px] relative group cursor-pointer"
                            onClick={() => handleTrailer(item.id)}
                        >
                            <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out">
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
            </Carousel>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={{
                    overlay: {
                        position: "fixed",
                        zIndex: 9999,
                    },
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                    },
                }}
                contentLabel="Example Modal"
            >
                {trailerKey ? (
                    <YouTube videoId={trailerKey} opts={opts} />
                ) : (
                    <div className="text-center text-black text-md p-3">
                        {errorMsg}
                    </div>
                )}
            </Modal>
        </div>
    );
};
MovieList.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
};
export default MovieList;
