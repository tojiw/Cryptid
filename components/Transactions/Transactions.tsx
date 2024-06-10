import React from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRightIcon,
  ArrowUpDown,
  CircleDot,
} from "lucide-react";
import eth from "@/public/eth.svg";
import btc from "@/public/btc.svg";
import sol from "@/public/sol.svg";
import usdt from "@/public/usdt.svg";
import shib from "@/public/shib.svg";
const Transactions = () => {
  return (
    <>
      <div className="grid grid-cols-6 max-md:text-sm">
        <div className="">
          <p className="p-3  border-b-[1px]">Asset Name</p>
          <div className="">
            <div className="flex flex-row gap-2 p-3">
              <Image src={eth} alt="" width={20} />
              <p className="max-md:hidden">Etherium</p>
            </div>
            <div className="flex flex-row gap-2 p-3">
              <Image src={btc} alt="" width={20} />
              <p className="max-md:hidden">Bitcoin</p>
            </div>
            <div className="flex flex-row gap-2 p-3">
              <Image src={sol} alt="" width={20} />
              <p className="max-md:hidden">Solana</p>
            </div>
            <div className="flex flex-row gap-2 p-3">
              <Image src={usdt} alt="" width={20} />
              <p className="max-md:hidden">Tether</p>
            </div>
            <div className="flex flex-row gap-2 p-3">
              <Image src={shib} alt="" width={20} />
              <p className="max-md:hidden">ShibaInu</p>
            </div>
          </div>
        </div>
        <div className="max-md:flex-col max-md:gap-6">
          <div>
            <p className="p-3  border-b-[1px]">Date</p>
            <div className="p-2">
              <p className="py-1">Mar 01, 2024, 5:30 PM</p>
            </div>{" "}
            <div className="p-2">
              <p className="py-1">Mar 02, 2024, 2:32 PM</p>
            </div>{" "}
            <div className="p-2">
              <p className="py-1">Mar 03, 2024, 1:43 PM</p>
            </div>{" "}
            <div className="p-2">
              <p className="py-1">Mar 03, 2024, 4:30 PM</p>
            </div>{" "}
            <div className="p-2">
              <p className="py-1">Mar 05, 2024, 6:30 PM</p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className="p-3  border-b-[1px]">Status</p>
            
            <div className="p-3 flex flex-row gap-2">
              <span className="text-green-500 max-md:items-center max-md:m-auto">
                <CircleDot />
              </span>
              <p className="max-md:hidden">Staked</p>
            </div>
            <div className="p-3 flex flex-row gap-2">
              <span className="text-green-500 max-md:items-center max-md:m-auto">
                <CircleDot />
              </span>
              <p className="max-md:hidden">Staked</p>
            </div>
            <div className="p-3 flex flex-row gap-2">
              <span className="text-green-500 max-md:items-center max-md:m-auto">
                <CircleDot />
              </span>
              <p className="max-md:hidden">Staked</p>
            </div>
            <div className="p-3 flex flex-row gap-2">
              <span className="text-yellow-500 max-md:items-center max-md:m-auto">
                <CircleDot />
              </span>
              <p className="max-md:hidden">Withdrawn</p>
            </div>
            <div className="p-3 flex flex-row gap-2">
              <span className="text-yellow-500 max-md:items-center max-md:m-auto">
                <CircleDot />
              </span>
              <p className="max-md:hidden">Withdrawn</p>
            </div>
          </div>
        </div>
        <div>
          <p className="p-3  border-b-[1px]">Amount</p>
          <div>
            <p className="p-3">1,00 ETH ($3,445)</p>
          </div>
          <div>
            <p className="p-3">0,1 BTC ($6,745)</p>
          </div>
          <div>
            <p className="p-3">1,00 SOL ($2,2465)</p>
          </div>
          <div>
            <p className="p-3">850 USDT ($850)</p>
          </div>
          <div>
            <p className="p-3">4,00 SHIB ($9,445)</p>
          </div>
        </div>
        <div>
          <p className="p-3  border-b-[1px]">APR</p>
          <div>
            <p className="p-3">5.5% (4 Weeks)</p>
          </div>
          <div>
            <p className="p-3">1.5% (2 Weeks)</p>
          </div>
          <div>
            <p className="p-3">2.4% (2 Weeks)</p>
          </div>
          <div>
            <p className="p-3">6.2% (5 Months)</p>
          </div>
          <div>
            <p className="p-3">2.2% (1 Month)</p>
          </div>
        </div>
        <div>
          <p className="p-3  border-b-[1px]">Transaction</p>
          <div className="flex flex-row align-middle items-center">
            <p className="p-3">Check ID</p>
            <ArrowRightIcon />
          </div>
          <div className="flex flex-row align-middle items-center">
            <p className="p-3">Check ID</p>
            <ArrowRightIcon />
          </div>
          <div className="flex flex-row align-middle items-center">
            <p className="p-3">Check ID</p>
            <ArrowRightIcon />
          </div>
          <div className="flex flex-row align-middle items-center">
            <p className="p-3">Check ID</p>
            <ArrowRightIcon />
          </div>
          <div className="flex flex-row align-middle items-center">
            <p className="p-3">Check ID</p>
            <ArrowRightIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Transactions;
