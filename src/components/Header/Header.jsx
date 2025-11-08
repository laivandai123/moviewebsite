import PropTypes from "prop-types";
import { useState } from "react";

const Header = ({ onSearch }) => {
    const [textSearch, setTextSearch] = useState("");
    return (
        <div className="">
            <div className="lg:py-4 lg:px-8 p-5  bg-black  flex justify-between  items-center">
                <div className="basis-1/4 flex justify-center">
                    <h1 className="text-xl md:text-[30px] text-red-700 uppercase font-bold">
                        Movie
                    </h1>
                </div>

                <nav className=" basis-2/3 hidden lg:flex justify-center items-center space-x-4 ">
                    <ul className="flex items-center gap-5 ">
                        <li className="ct-top-menu-item ct-top-menu-icon-active">
                            <a href="#" className="">
                                Trang chủ
                            </a>
                        </li>
                        <li className="ct-top-menu-item">
                            <a href="" className="">
                                Thể loại
                            </a>
                        </li>
                        <li className="ct-top-menu-item">
                            <a href="" className="">
                                Quốc gia
                            </a>
                        </li>
                        <li className="ct-top-menu-item">
                            <a href="" className="">
                                Phim mới
                            </a>
                        </li>
                        <li className="ct-top-menu-item">
                            <a href="" className="">
                                Phim lẻ
                            </a>
                        </li>
                        <li className="ct-top-menu-item">
                            <a href="" className="">
                                Phim bộ
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="basis-1/4 flex justify-center items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search ..."
                        className="md:py-2 md:px-3 w-[150px] h-[30px] p-2  outline-none rounded-[5px] bg-gray-200 text-[12px] placeholder:text-black placeholder:text-sm md:placeholder:text-[12px]"
                        onChange={(e) => setTextSearch(e.target.value)}
                        value={textSearch}
                    />

                    <button
                        className="text-white bg-red-700 md:py-2 md:px-4 p-2 h-[30px]  flex justify-center items-center text-[12px] rounded-[5px]"
                        onClick={() => onSearch(textSearch)}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};
Header.PropTypes = {
    onSearch: PropTypes.func,
};
export default Header;
