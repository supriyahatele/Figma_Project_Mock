import React, { useEffect } from "react";
import '.././App.css';
import { useState } from "react";

const TokenNomics = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`lg:w-[1512px] lg:h-[706px] sm:w-[353px]  sm:h-[800px] bg-[#0a0a0a] bg-cover bg-[url('../../images/Rectangle20.png')] ${mounted ? 'fade-in' : ''}`}>
      <div className="lg:w-[330px] lg:h-[52px] sm:w-[353px] border border-solid border-black">
        <p className={`lg:w-[330px] lg:h-[52px] sm:w-[353px] mt-16 ml-[592px] font-shojumaru text-[44px] font-normal leading-[52.36px] text-[#ED0137] ${mounted ? 'slide-in' : ''}`}>
          Tokenomics
        </p>
      </div>

      <button className="w-[244px] h-[70px]  rounded-[20px] text-[#FFFFFF] absolute lg:left-[168px] lg:top-[2460px] sm:left-[660px] sm:top-[130px] bg-[#ED0137] font-shojumaru text-[18px] font-normal leading-[23.84px] scale-on-hover">
        Token Details
      </button>
      
      <div className="w-[412px] h-[306px] border border-solid border-[#ED0137] border-[1.5px] rounded-[20px] flex justify-around absolute lg:top-[2500px] lg:left-[90px] sm:left-[590px] sm:top-[170px] text-[#FFFFFF] ">
        <div className="flex flex-col justify-evenly">
          <p className="font-zcool text-[20px] font-normal leading-[20px] scale-on-hover shine">Name</p>
          <p className="font-zcool text-[20px] font-normal leading-[20px] scale-on-hover shine">Symbol</p>
          <p className="font-zcool text-[20px] font-normal leading-[20px] scale-on-hover shine">Total Supply</p>
          <p className="font-zcool text-[20px] font-normal leading-[20px] scale-on-hover shine">Decimals</p>
        </div>
        <div className="flex flex-col justify-evenly text-[#DF180A]">
          <p className="font-zcool text-[20px] font-normal leading-[20px] scale-on-hover shine">Savior</p>
          <p className="font-zcool text-[20px] font-normal leading-[20px] scale-on-hover shine">SVR</p>
          <p className="font-zcool text-[20px] font-normal leading-[20px] scale-on-hover shine">1000 Trillion</p>
          <p className="font-zcool text-[20px] font-normal leading-[20px] scale-on-hover shine">18</p>
        </div>
      </div>

      <img className="lg:w-[943px] lg:h-[350px] sm:w-[400px] sm:h-[250px] absolute lg:left-[530px] lg:top-[2500px] sm:left-[590px] sm:top-[540px]" src="../../images/Frame1824.png" alt="" />
    </div>
  );
};

export { TokenNomics };
