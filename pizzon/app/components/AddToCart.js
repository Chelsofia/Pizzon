"use client";

import { useContext } from "react";
import { cartContext } from "../../cartContext";

export default function AddToCartBtn({ pizza }) {
  const { data, setData } = useContext(cartContext);
  console.log({ pizza, data });
  return (
    <button
      className="bg-blue-500 py-4 px-10 rounded"
      onClick={() => {
        setData((prev) => [...prev, pizza]);
      }}
    >
      Add to cart
    </button>
  );
}
