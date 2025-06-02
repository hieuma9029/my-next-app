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
    <div className="flex flex-col items-center py-36 bg-gray-100">
      <h2 className="text-1xl font-bold mb-4 text-green-400">Sản phẩm</h2>
      <h2 className="text-4xl font-bold mb-6 text-black">Sản phẩm tiêu biểu</h2>
      <div className="container-fluid">
        <div className="flex justify-between gap-16 flex-wrap">
          {products.map((product, index) => (
            <div key={index} className="text-center flex flex-col items-center relative">
              <a href="#" className="relative block">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-90 h-auto shadow-md rounded-lg"
                />
                <div
                  className="absolute bottom-[-12%] left-1/2 transform -translate-x-1/2 bg-white text-black text-center py-4 rounded-lg shadow-md"
                  style={{ width: "100%" }}
                >
                  <p className="text-xl font-medium">{product.name}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
