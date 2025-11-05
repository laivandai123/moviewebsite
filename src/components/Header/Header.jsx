const Header = () => {
    return (
        <div className="">
            <div className="p-4  bg-black  flex justify-center items-center">
                <div className="basis-1/6 flex justify-center">
                    <h1 className=" text-[30px] text-red-700 uppercase font-bold">
                        Movie
                    </h1>
                </div>

                <nav className=" basis-3/6 flex justify-end items-center space-x-4 ">
                    <ul className="flex items-center gap-4 ">
                        <li className="p-1">
                            <a href="#" className="text-white">
                                Trang chủ
                            </a>
                        </li>
                        <li className="p-1">
                            <a href="#" className="text-white">
                                Thể loại
                            </a>
                        </li>
                        <li className="p-1">
                            <a href="#" className="text-white">
                                Quốc gia
                            </a>
                        </li>
                        <li className="p-1">
                            <a href="#" className="text-white">
                                Phim mới
                            </a>
                        </li>
                        <li className="p-1">
                            <a href="#" className="text-white">
                                Phim lẻ
                            </a>
                        </li>
                        <li className="p-1">
                            <a href="#" className="text-white">
                                Phim bộ
                            </a>
                        </li>
                        <li className="p-1">
                            <a href="#" className="text-white">
                                Phim chiếu rạp
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="basis-2/6 flex justify-center items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search ..."
                        className="py-2 px-3 outline-none rounded-lg bg-gray-200 placeholder:text-black"
                    />
                    <button className="text-white text- bg-red-700 py-2 px-4 rounded-lg">
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
