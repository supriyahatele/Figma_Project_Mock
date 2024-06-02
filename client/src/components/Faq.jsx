// src/components/FAQ.js
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" w-[640px] h-[77px] mt-[90px]">
     <div className="mb-4 bg-[#0F0F0F] ">
        <h2 className="flex justify-between items-center">
          <button
            className="flex justify-between items-center w-full px-4 py-2 text-left text-lg font-medium text-white bg-black rounded-md border border-red-600 rounded-md"
            onClick={() => handleToggle(0)}
          >
            <div className="flex  justify-evenly font-shojumaru  text-[20px] font-normal leading-[26.48px] ">
              <span className="mr-14">1</span>
              <span>When will trading go live?</span>
            </div>
            {openIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </h2>
        {openIndex === 0 && (
         <div className="w-[568px] h-[83px] rounded-[20px] text-[#FBF9F9] bg-[rgba(238, 238, 238, 0.04)]  ml-[37px]    flex justify-center items-center">
         <p className="font-zcool text-[white] text-[15px] font-normal leading-[25.56px]">After the IDO concludes, you can claim the tokens on our official
           website.</p>  
         </div>
        )}
      </div>

      <div className="mb-4 bg-[#0F0F0F] border border-red-600 rounded-md">
        <h2 className="flex justify-between items-center">
          <button
            className="flex justify-between items-center w-full px-4 py-2 text-left text-lg font-medium text-white bg-black rounded-md border border-red-600 rounded-md"
            onClick={() => handleToggle(1)}
          >
            <div className="flex  justify-evenly font-shojumaru  text-[20px] font-normal leading-[26.48px] ">
              <span className="mr-14">2</span>
              <span>When will trading go live?</span>
            </div>
            {openIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </h2>
        {openIndex === 1 && (
         <div className="w-[568px] h-[83px] rounded-[20px] text-[#FBF9F9] bg-[rgba(238, 238, 238, 0.04)]  ml-[37px]    flex justify-center items-center">
         <p className="font-zcool text-[white] text-[15px] font-normal leading-[25.56px]">After the IDO concludes, you can claim the tokens on our official
           website.</p>  
         </div>
        )}
      </div>

      <div className="mb-4 bg-[#0F0F0F] border border-red-600 rounded-md">
        <h2 className="flex justify-between items-center">
          <button
            className="flex justify-between items-center w-full px-4 py-2 text-left text-lg font-medium text-white bg-black rounded-md border border-red-600 rounded-md"
            onClick={() => handleToggle(2)}
          >
            <div className="flex  justify-evenly font-shojumaru  text-[20px] font-normal leading-[26.48px] ">
              <span className="mr-14">3</span>
              <span>When will trading go live?</span>
            </div>
            {openIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </h2>
        {openIndex === 2 && (
         <div className="w-[568px] h-[83px] rounded-[20px] text-[#FBF9F9] bg-[rgba(238, 238, 238, 0.04)]  ml-[37px]    flex justify-center items-center">
         <p className="font-zcool text-[white] text-[15px] font-normal leading-[25.56px]">After the IDO concludes, you can claim the tokens on our official
           website.</p>  
         </div>
        )}
      </div>
      <div className="mb-4 bg-[#0F0F0F] border border-red-600 rounded-md">
        <h2 className="flex justify-between items-center">
          <button
            className="flex justify-between items-center w-full px-4 py-2 text-left text-lg font-medium text-white bg-black rounded-md border border-red-600 rounded-md"
            onClick={() => handleToggle(3)}
          >
            <div className="flex  justify-evenly font-shojumaru  text-[20px] font-normal leading-[26.48px] ">
              <span className="mr-14">4</span>
              <span>When will trading go live?</span>
            </div>
            {openIndex === 3 ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </h2>
        {openIndex === 3 && (
         <div className="w-[568px] h-[83px] rounded-[20px] text-[#FBF9F9] bg-[rgba(238, 238, 238, 0.04)]  ml-[37px]    flex justify-center items-center">
         <p className="font-zcool text-[white] text-[15px] font-normal leading-[25.56px]">After the IDO concludes, you can claim the tokens on our official
           website.</p>  
         </div>
        )}
      </div>
    </div>
  );
};

export { FAQ };
