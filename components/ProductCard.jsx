import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = () => {
   return (
      <Link href='/product/1' className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
         <img className="w-full" width={100} height={100} src="/product-1.webp" alt="productImage" />
         <div className="p-4 text-black/[0.9]">
            <h2 className="text-lg font-medium">Jordan Retro 6 G</h2>
            <div className="flex items-center text-black/[0.5]">
               <p className="mr-2 text-lg font-semibold">$ 20.0</p>
               <p className="text-base font-medium line-through">$ 25.00</p>
               <p className="ml-auto text-base font-medium text-green-500">20% off</p>
            </div>
         </div>
      </Link>
   )
}

export default ProductCard