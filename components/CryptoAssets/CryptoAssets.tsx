import React from 'react'
import btc from "@/public/btc.svg";
import eth from "@/public/eth.svg";
import shib from "@/public/shib.svg";
import usdt from "@/public/usdt.svg";
import xrp from "@/public/xrp.svg";
import sol from "@/public/sol.svg";
import Image from "next/image";

const CryptoAssets = () => {
  return (
    <>
    <div className="flex flex-col gap-4 max-md:">
              <div className="flex flex-row pr-4">
                <div className="w-[20%] h-[10vh] border-[0.1px] border-[#e57eb] ml-3 rounded-md flex flex-col items-center gap-1 p-2">
                  <Image src={btc} alt="" width={35} height={20} />
                  <p>BTC</p>
                </div>
                <div className="w-[20%] h-[10vh] border-[0.1px] border-[#e57eb] ml-3 rounded-md flex flex-col items-center gap-1 p-2">
                  <Image src={eth} alt="" width={35} height={20} />
                  <p>ETH</p>
                </div>
                <div className="w-[20%] h-[10vh] border-[0.1px] border-[#e57eb] ml-3 rounded-md flex flex-col items-center gap-1 p-2">
                  <Image src={shib} alt="" width={35} height={20} />
                  <p>SHIB</p>
                </div>
                <div className="w-[20%] h-[10vh] border-[0.1px] border-[#e57eb] ml-3 rounded-md flex flex-col items-center gap-1 p-2">
                  <Image src={sol} alt="" width={35} height={20} />
                  <p>SOL</p>
                </div>
              </div>
              <div className="flex flex-row-reverse pr-3">
                <div className="w-[20%] h-[10vh] border-[0.1px] border-[#e57eb] ml-3 rounded-md flex flex-col items-center gap-1 p-2">
                  <Image src={xrp} alt="" width={35} height={20} />
                  <p>XRP</p>
                </div>
                <div className="w-[20%] h-[10vh] border-[0.1px] border-[#e57eb] ml-3 rounded-md flex flex-col items-center gap-1 p-2">
                  <Image src={usdt} alt="" width={35} height={20} />
                  <p>USDT</p>
                </div>
                <div className="w-[20%] h-[10vh] border-[0.1px] border-[#e57eb] ml-3 rounded-md flex flex-col items-center gap-1 p-2">
                  <Image src={shib} alt="" width={35} height={20} />
                  <p>SHIB</p>
                </div>
                <div className="w-[20%] h-[10vh] border-[0.1px] border-[#e57eb] ml-3 rounded-md flex flex-col items-center gap-1 p-2">
                  <Image src={sol} alt="" width={35} height={20} />
                  <p>SOL</p>
                </div>
              </div>
            </div>
    </>
  )
}

export default CryptoAssets