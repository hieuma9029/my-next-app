import Image from "next/image";

export default function FirstStart() {
  return (
    <div
      className="flex items-center justify-between px-24 relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/banners/works.png')",
        backgroundSize: "70% auto",
      }}
    >
      <div className="absolute inset-0 bg-white opacity-90"></div>
      <div className="text-left flex flex-col w-1/2 relative z-10">
        <h1 className="text-5xl font-bold mb-4 text-black">DIAMOND SOFTWARE SOLUTION </h1>
        <p className="text-xl text-gray-600 mb-6">Phần mềm của người Việt</p>
        <button className="w-30 bg-green-500 hover:bg-green-600 text-white font-medium ml-4 p-2 rounded-lg shadow-md transition duration-300 ease-in-out">
          Liên Hệ
        </button>
      </div>
      <div className="relative w-1/2 rounded-bl-clip z-10">
        <Image
          src="/images/banners/works.png"
          alt="Sample"
          width={600}
          height={400}
          className="w-full h-auto object-cover shadow-lg"
        />
      </div>
    </div>
  );
}
