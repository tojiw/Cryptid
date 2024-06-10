import React from "react";
import Image from "next/image";
import btc from "@/public/btc.svg";
import eth from "@/public/eth.svg";
import c1 from "@/public/c1.png";
import c2 from "@/public/c2.png";
import c3 from "@/public/c3.png";
import sol from "@/public/sol.svg";
const Leaderboard = () => {
  return (
    <>
      <div
        id="container"
        className="w-[50%] h-[50vh] border-[0.1px] border-[#e57eb] ml-4 rounded-lg mt-2 max-md:w-full max-md:m-auto max-md:mt-3"
      >
        <div className="flex flex-row justify-between p-3 border-b-[1px]">
          <p className="text-sm">Leaderboard</p>
          <span>:</span>
        </div>
        <div className="flex flex-row gap-3 border-b-[1px] pb-4 justify-around px-5">
          <div className="flex flex-col mt-1 py-9 gap-2">
            <div className="flex flex-row gap-2 px-3 ">
              <Image src={btc} alt="" width={15} height={20} />
              <p>Bitcoin</p>
            </div>
            <p className="px-3">00,32412</p>
            <div className="flex flex-row gap-2 px-3 pb-">
              <Image src={eth} alt="" width={15} height={20} />
              <p>Etherium</p>
            </div>
            <p className="px-3">21,3412</p>
            <div className="flex flex-row gap-2 px-3 pb-">
              <Image src={sol} alt="" width={15} height={20} />
              <p>Solana</p>
            </div>
            <p className="px-3">13,412</p>
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-4">
            <Image src={c1} alt="" width={150} />
            <Image src={c2} alt="" width={150} />
            <Image src={c3} alt="" width={150} />
          </div>
          <div className="flex flex-col justify-between py-14">
            <p className="text-sm text-green-500">+$2.125</p>
            <p className="text-sm text-red-500">-$1.325</p>
            <p className="text-sm text-green-500">+$3.135</p>
          </div>
        </div>
        <div className="flex flex-row justify-between p-3 items-center">
          <p className="text-sm">Total Value</p>
          <p>$17,582.30 / 20,334.69</p>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
