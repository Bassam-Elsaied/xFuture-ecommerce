"use client";

import { useStateContext } from "@/context/StateContext";
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Quantity({ locale }) {
  const { decQty, incQty, qty } = useStateContext();

  return (
    <div className="flex items-center max-w-[200px] space-x-4">
      <h3 className="font-semibold text-lg">Quantity:</h3>
      <p className="flex items-center max-w-[100px]   space-x-4">
        <span
          className={`cursor-pointer p-2 border border-gray-300 rounded-lg hover:bg-gray-300 transition duration-200 ${locale === "ar" && "m-2"}`}
          onClick={decQty}
        >
          <AiOutlineMinus />
        </span>
        <span className="font-bold text-xl">{qty}</span>
        <span
          className="cursor-pointer p-2 border border-gray-300 rounded-lg hover:bg-gray-300 transition duration-200"
          onClick={incQty}
        >
          <AiOutlinePlus />
        </span>
      </p>
    </div>
  );
}

export default Quantity;
