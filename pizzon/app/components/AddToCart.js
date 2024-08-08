"use client";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { cartContext } from "../../cartContext";

export default function AddToCartBtn({ pizza }) {
  const { data, setData } = useContext(cartContext);
  console.log({ pizza, data });
  return (
    <button
      className="cursor-pointer bg-[#FBB200] px-8 py-3 text-lg md:text-xl rounded-full flex font-medium text-white tracking-wider gap-4"
      onClick={() => {
        setData((prev) => [...prev, pizza]);
      }}
    >
      <FaShoppingCart className="" />
      ADD TO CART
    </button>
  );
}
