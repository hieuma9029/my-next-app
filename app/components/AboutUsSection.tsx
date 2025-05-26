import Image from "next/image";
import { aboutText1, aboutText2 } from "../constants/Texts";

export default function AboutUsSection() {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="relative w-1/3 bg-white py-20 about-pic">
        <Image
          src="/images/banners/aboutus.png"
          alt="Person with Headphones"
          width={600}
          height={700}
          className="w-full h-200 object-cover shadow-lg about-pic"
        />
      </div>
      <div className="text-left flex flex-col w-1/3 p-8">
        <h2 className="text-1xl font-bold mb-4 text-green-400">Về chúng tôi</h2>
        <p className="text-sm text-gray-600 mb-6 leading-loose">
          {aboutText1}
          <br />
          <br />
          {aboutText2}
        </p>
        <button className="w-30 bg-blue-500 hover:bg-blue-600 text-white font-medium p-3 rounded-lg shadow-md transition duration-300 ease-in-out">
          Xem Thêm
        </button>
      </div>
    </div>
  );
}
