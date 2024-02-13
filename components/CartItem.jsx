import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
const CartItem = ({ data }) => {

   return (
      <div className="flex py-5 gap-3 md:gap-5 border-b mt-[55px]">
         <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
            <Image
               src='/product-1.webp'
               alt={() => { }}
               width={120}
               height={120}
            />
         </div>
         <div className="w-full flex flex-col">
            <div className="flex flex-col md:flex-row justify-between">
               <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                  Jordan Retro 6 G
               </div>
               <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                  Men&apos;s Golf Shoes
               </div>
               <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                  MRP : ₹ 19.695
               </div>
            </div>
            <div className="text-md font-medium text-black/[0.5] hidden md:block">
               Men&apos;s Golf Shoes
            </div>
            <div className="flex items-center justify-between mt-4">
               <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                  <div className="flex items-center gap-1">
                     <div className="font-semibold">Size: </div>
                     <select>
                        {['UK 6', 'UK 6.5', 'UK 7', 'UK 7.5', 'UK 8', 'UK 8.5', 'UK 9', 'UK 9.5', 'UK 10', 'UK 10.5', 'UK 11'].map((item) => <option>{item}</option>)}</select>
                  </div>
                  <div className="flex items-center gap-1">
                     <div className="font-semibold">Quantity:</div>
                     <select className="hover:text-black">{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => <option>{item}</option>)}</select>
                  </div>
               </div>
               <RiDeleteBin6Line className="cursor-pointer text-black/[0.5] hover:text-black  text-[16px] md:text-[20px]" />
            </div>
         </div>
      </div>
   );
};

export default CartItem;