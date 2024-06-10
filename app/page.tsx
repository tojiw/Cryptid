"use client";
import Sidebar from "@/components/Sidebar/Sidebar";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRightIcon,
  ArrowUpDown,
  CircleDot,
} from "lucide-react";
import CryptoAssets from "@/components/CryptoAssets/CryptoAssets";
import Leaderboard from "@/components/Leaderboard/Leaderboard";
import SearchBar from "@/components/SearchBar/SearchBar";
import eth from "@/public/eth.svg";
import btc from "@/public/btc.svg";
import sol from "@/public/sol.svg";
import usdt from "@/public/usdt.svg";
import shib from "@/public/shib.svg";
import Transactions from "@/components/Transactions/Transactions";

export default function Home() {
  return (
    <div className="font-medium tracking-tight min-h-screen bg-black text-white">
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex flex-col flex-grow p-2 overflow-hidden">
          <div className="flex justify-between items-center">
            <p className="px-2 text-sm">Main / Stakes</p>
            <button className="bg-[#EA580C] p-2 px-4 rounded-lg mr-4 max-sm:mb-3 max-md:mb-3">
              Account Settings
            </button>
          </div>
          <div className="flex flex-row gap-1 max-md:flex-col max-md:items-center max-md:mr-1 max-md:gap-4">
            <div className="flex flex-col md:flex-row mt-2 ml-1 border-[0.1px] border-[#e5e7eb] rounded-lg overflow-hidden w-2/3 max-md:w-full max-md:m-auto">
              <div className="flex flex-col  justify-between  md:w-1/3 border-r-[1px] border-gray-50 ">
                <p className="p-3 text-sm">Earned Activity</p>
                <div className="flex flex-col">
                  <p className="p-3 py-2 text-xl">Staked Profit</p>
                  <p className="p-3 py-3 text-4xl max-md:text-xl">$13,400.59</p>
                </div>
              </div>
              <div className="mt-24 ">
                <BarChart
                  xAxis={[
                    {
                      scaleType: "band",
                      data: ["Bitcoin", "Etherium", "Solana"],
                    },
                  ]}
                  series={[
                    { data: [4, 3, 5] },
                    { data: [1, 6, 3] },
                    { data: [2, 5, 6] },
                  ]}
                  colors={["#EA580C"]}
                  width={650}
                  height={300}
                />
              </div>
            </div>
            <div className="w-1/3 mt-2 ml-4 border-[0.1px] border-[#e5e7eb] rounded-lg max-md:w-full max-md:m-auto">
              <div className="flex flex-col ">
                <p className="p-3 text-sm">Data</p>
                <div className="overflow-hidden">
                  <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[
                      {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                      },
                    ]}
                    width={400}
                    height={260}
                    colors={["#EA580C"]}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <p>Total Balance (USD)</p>
                  <p className="text-4xl py-3 max-md:text-xl">$17,582.30</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 mt-4 max-md:flex-col max-md:items-center">
            <div className="w-[19%] h-[50vh] border-[0.1px] border-[#e57eb] ml-1 rounded-lg mt-2 max-md:w-full max-md:m-auto">
              <p className="text-sm p-3">Risk rate of your assets</p>
              <div className="flex flex-row justify-between align-middle items-center px-4 border-b-[1px] border-[#e57eb] pb-4">
                <p className="text-5xl">7.5</p>
                <p className="text-xl">/ 10</p>
              </div>
              <p className="p-3">Your top assets</p>
              <CryptoAssets />
            </div>
            <Leaderboard />
            <div
              id="convert"
              className="w-1/3 h-[50vh] border-[0.1px] border-[#e57eb] ml-4 rounded-lg mt-2 max-md:w-full max-md:m-auto max-md:mt-3"
            >
              <div className="border-b-[1px]">
                <p className="text-sm p-3">Quick Swap</p>
              </div>
              <div className="flex flex-col">
                <p className="text-sm px-3 pt-3">Fee Asset</p>
                <div className="p-3">
                  <input
                    type="text"
                    className="w-full bg-[#252525] border-none py-1 placeholder:px-3"
                    placeholder="Etherium"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="text-sm px-3 pt-3">Swap Assets</p>
                  <div className="p-3 flex flex-col items-center justify-center">
                    <input
                      type="text"
                      className="w-full bg-[#252525] border-none py-1 placeholder:px-3"
                      placeholder="Etherium"
                    />
                    <div className="p-3 mt-2 rounded-full bg-[#EA580C] hover:cursor-pointer">
                      <ArrowUpDown />
                    </div>
                  </div>

                  <div className="px-3 flex flex-col items-center justify-center">
                    <input
                      type="text"
                      className="w-full bg-[#252525] border-none py-1 placeholder:px-3"
                      placeholder="Solana"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[50vh] border-[0.1px] border-[#e57eb] ml-1 rounded-lg mt-4 max-md:h-[75vh] max-md:m-auto max-md:mt-3">
            <div className="flex flex-row justify-between px-3 items-center align-middle border-b-[1px]">
              <p className="p-3">Recent Transactions</p>
              <div className="w-1/4 pt-3">
                <SearchBar />
              </div>
            </div>
            <Transactions/>
          </div>
        </div>
      </div>
    </div>
  );
}

