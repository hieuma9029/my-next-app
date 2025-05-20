export default function WhyChooseUsSection() {
  const reasons = [
    { title: "Dịch vụ khách hàng hàng đầu", description: "Việc khách hàng tuân theo quy trình huấn luyện là rất quan trọng, nhưng lần này tôi sẽ thực hiện điều đó" },
    { title: "Cá nhân hóa cao", description: "Việc khách hàng tuân theo quy trình huấn luyện là rất quan trọng, nhưng lần này tôi sẽ thực hiện điều đó" },
    { title: "Tài năng đam mê", description: "Việc khách hàng tuân theo quy trình huấn luyện là rất quan trọng, nhưng lần này tôi sẽ thực hiện điều đó" },
  ];

  return (
    <div className="flex flex-col items-center py-36 px-56 bg-gray-100">
      <h2 className="text-1xl font-bold mb-4 text-green-400">Tại sao lại chọn chúng tôi</h2>
      <h2 className="text-4xl font-bold mb-12 text-black">Bạn chọn chúng tôi vì điều gì</h2>
      <div className="container-fluid flex justify-around flex-wrap gap-8 overflow-visible">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="text-center flex items-center bg-white p-6 rounded-lg shadow-md flex-grow max-w-[30%] custom-box-shape relative group why-card"
            style={{ height: "400px", minWidth: "300px" }}
          >
            <div className="flex flex-col justify-center flex-grow">
              <h3 className="text-2xl font-bold mb-2 text-black">{reason.title}</h3>
              <p className="text-black text-base">{reason.description}</p>
            </div>
            <div
              className="absolute top-0 right-[-30px] w-20 h-20 bg-blue-500 flex items-center justify-center rounded-full overflow-hidden"
              style={{ clipPath: "inset(0 30% 0 0)" }}
            >
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
