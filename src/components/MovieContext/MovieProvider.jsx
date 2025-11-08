import PropTypes from "prop-types";
import { createContext, useState } from "react";
import YouTube from "react-youtube";
import Modal from "react-modal";
const opts = {
    height: "390",
    width: "640",
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};
const MovieContext = createContext();
const MovieProvider = ({ children }) => {
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
        <MovieContext.Provider value={{ handleTrailer }}>
            {children}
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
        </MovieContext.Provider>
    );
};
MovieProvider.propTypes = {
    children: PropTypes.node,
};
export { MovieContext, MovieProvider };
