import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
const Banner = () => {
    return (
        <div className="bg-banner w-full h-[670px] bg-center bg-cover bg-no-repeat relative">
            <div className="absolute w-full h-full bg-black opacity-30"></div>
            <div className="w-full h-full flex items-center justify-center space-x-[60px]  p-4 relative z-20">
                <div className="flex flex-col flex-1 space-y-5 p-6">
                    <p className="py-1 px-4 text-white text-[14px] bg-gradient-to-r from-orange-800 to-white w-[100px]">
                        TV Show
                    </p>
                    <h1 className="lg:text-[40px] text-[28px] font-bold text-white">
                        Tru tiên thanh vân chí
                    </h1>
                    <div className="flex items-center space-x-3">
                        <FaStar className="text-yellow-400 size-6" />
                        <FaStar className="text-yellow-400 size-6" />
                        <FaStar className="text-yellow-400 size-6" />
                        <FaStar className="text-yellow-400 size-6" />
                        <FaStarHalfAlt className="text-yellow-400 size-6" />
                    </div>
                    <p className="text-white">
                        Thanh Vân Chí (Tiếng Trung Quốc:青云志, tiếng Anh: Noble
                        Aspirations) là một bộ phim truyền hình Trung Quốc được
                        sản xuất vào năm 2016, mượn tên nhân vật và một số địa
                        danh từ tiểu thuyết tiên hiệp nổi tiếng Tru Tiên của nhà
                        văn Tiêu Đỉnh (萧 鼎), tuy nhiên nội dung hoàn toàn khác
                        biệt so với truyện gốc, có thể xem như một bộ fanfic
                        không liên quan đến truyện. Bộ phim được mua bản quyền
                        và sản xuất bởi Hoan Thụy Thế Kỷ, với sự tham gia của Lý
                        Dịch Phong, Triệu Lệ Dĩnh, Dương Tử, Thành Nghị, Thư
                        Sướng, Tần Tuấn Kiệt và một số diễn viên khác.
                    </p>
                    <div className="flex gap-5 mt-6 ">
                        <a
                            href=""
                            className="text-white py-2 px-4 text-[14px] rounded-[5px] bg-gray-700"
                        >
                            Chi tiết
                        </a>
                        <a
                            href=""
                            className="text-white py-2 px-4 text-[14px] rounded-[5px] bg-red-700 hover:opacity-90"
                        >
                            Xem phim
                        </a>
                    </div>
                </div>
                <div className="flex-1 hidden md:flex justify-center items-center relative group cursor-pointer overflow-hidden rounded-lg">
                    <img
                        src=".././banner.jpg"
                        alt="banner"
                        className="w-[300px] h-[400px] object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105 opacity-90"
                    />
                    <div className="absolute w-full h-full inset-0 flex justify-center items-center">
                        <FaRegPlayCircle className="size-14 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
