"use client";
import React from "react";
import { EarthLock, CircleUserRound, Search } from "lucide-react";
import items from "@/components/Sidebar/index";
import { cn } from "@/libs/utils";
import { usePathname } from "next/navigation";

import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";

const Sidebar = () => {
  const pathname = usePathname();
  const mainitems = items.slice(0, 3);
  const tradingitems = items.slice(3, 5);
  const walletitems = items.slice(5, 7);
  return (
    <div className="sticky left-0 top-0 h-screen w-[256px] flex flex-col border-r-[1px] border-[#d2d1d1] p-6 pt-2 max-sm:hidden">
      <div className="flex flex-row gap-2 justify-between pt-2">
        <div className="flex flex-row gap-2 items-center">
          <EarthLock />
          <p className="font-semibold text-lg">Cryptid</p>
        </div>
        <div>
          <CircleUserRound />
        </div>
      </div>

      <div className="flex flex-col pt-6 gap-4">
        <SearchBar />
        <p className="px-3 text-sm">Main</p>
        {mainitems.map((item, index) => (
          <Link href={item.src} key={item.label}>
            <div
              key={index}
              className="flex gap-2 items-center py-[2px] px-2 rounded-lg justify-start"
            >
              {React.createElement(item.src, {
                color: "white",
                size: 22,
              })}
              <p className="text-white">{item.label}</p>
            </div>
          </Link>
        ))}
        <p className="px-3 pt-6 text-sm">Trading</p>
        {tradingitems.map((item) => (
          <Link href={item.route} key={item.label}>
            <div
              key={item.label}
              className="flex gap-2 items-center py-[2px] px-2 rounded-lg justify-start"
            >
              {React.createElement(item.src, {
                color: "white",
                size: 22,
              })}
              <p className="text-white ">{item.label}</p>
            </div>
          </Link>
        ))}

        <p className="px-3 pt-6 text-sm">File</p>
        {walletitems.map((item) => (
          <Link href={item.route} key={item.label}>
            <div
              key={item.label}
              className="flex gap-2 items-center py-[2px] px-2 rounded-lg justify-start"
            >
              {React.createElement(item.src, {
                color: "white",
                size: 22,
              })}
              <p className="text-white ">{item.label}</p>
            </div>
          </Link>
        ))}

        <p className="text-white text-sm px-3 pt-6">Integrations</p>
      </div>
    </div>
  );
};

export default Sidebar;
