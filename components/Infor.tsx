const Infor = () => {
  return (
    <div
      id="infor"
      className="bg-[#08110c] px-4 py-20 sm:px-6 md:px-8 lg:px-20 text-white"
    >
      <h1 className="mb-8 text-3xl font-bold tracking-wider">INFOR</h1>
      <div className="bg-[#14213d] rounded-2xl w-full border border-white/10 px-6 md:px-16 py-8 flex flex-col lg:flex-row gap-8 md:gap-0">
        <div className="flex-1">
          <h1>TRAN THANH TRI</h1>
          <p>Birthday: 03/07/2003</p>
          <p>Gender: Male</p>
        </div>
        <div className="flex-1">
          <h1>ACADEMY OF CRYPTOGRAPHY TECHNIQUES</h1>
          <p>Department: Software Engineer</p>
          <p>School year: 2021 - 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Infor;
