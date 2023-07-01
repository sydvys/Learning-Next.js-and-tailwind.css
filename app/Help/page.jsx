import React from "react";

const Help = () => {
  return (
    <div className="  text-white bg-black mx-auto ">
      <h1 className="text-[#ff5f53] text-2xl self-start ml-4">Help</h1>

      <div className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center items-center text-2xl">
          <h1>Bildilçin - Axtarış imkanları (1-ci hissə)</h1>
          <video className="bg-white" src=""></video>
        </div>
        <div className="flex flex-col justify-center items-center text-2xl">
          <h1>Bildilçin - Axtarış imkanları (2-ci hissə)</h1>
          <video className="bg-white" src=""></video>
        </div>
        <div className="flex flex-col justify-center items-center text-2xl">
          <h1>Bildiçin - Əlavə funksiyalar</h1>
          <video className="bg-white" src=""></video>
        </div>
      </div>

    </div>
  );
};

export default Help;
