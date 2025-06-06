export default function FeaturedProductsSection() {
  const products = [
    {
      name: "AI Development",
      image: "/images/banners/AI1.png",
    },
    {
      name: "Web Development",
      image: "/images/banners/laptop1.png",
    },
    {
      name: "Mobile app development",
      image: "/images/banners/phone.png",
    },
  ];

  return (
    <div className="flex flex-col items-center py-20 md:py-36 bg-gray-100">
      <h2 className="text-lg md:text-1xl font-bold mb-4 text-green-400">Sản phẩm</h2>
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-black">Sản phẩm tiêu biểu</h2>
      <div className="container-fluid">
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-y-12 md:gap-y-0 md:gap-x-16 flex-wrap">
          {products.map((product, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center relative w-full md:w-1/3 max-w-xs mx-auto"
            >
              <a href="#" className="relative block w-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full max-w-[260px] md:max-w-[360px] h-auto shadow-md rounded-lg mx-auto"
                />
                <div
                  className="absolute bottom-[-12%] left-1/2 transform -translate-x-1/2 bg-white text-black text-center py-4 rounded-lg shadow-md w-[90%] md:w-full"
                >
                  <p className="text-base md:text-xl font-medium">{product.name}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
