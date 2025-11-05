import PropTypes from "prop-types";
const MovieList = ({ title }) => {
    return (
        <div className="text-white p-10 mb-10">
            <h2 className="uppercase text-2xl mb-5">{title}</h2>
            <div className="flex items-center space-x-4 ">
                <div className="w-[200px] h-[300px] relative group cursor-pointer">
                    <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out">
                        <div className="absolute w-full h-full top-0 left-0 bg-black/40 "></div>
                        <img
                            src=".././banner.jpg"
                            alt="temp"
                            className="w-full h-full object-cover "
                        />
                        <div className="absolute bottom-4 left-4">
                            <p className="uppercase text-[14px] text-gray-300">
                                Tru tiên thanh vân chí
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
MovieList.propTypes = {
    title: PropTypes.string,
};
export default MovieList;
