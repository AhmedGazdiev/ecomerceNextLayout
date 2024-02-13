import React, { useState } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import Wrapper from "@/components/Wrapper";
import ReactMarkdown from "react-markdown";
import { useSelector, useDispatch } from "react-redux";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProducts from "@/components/RelatedProducts";

const ProductDetails = () => {
   return (
      <div className="w-full md:py-20">
         <Wrapper>
            <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
               <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full">
                  <ProductDetailsCarousel />
               </div>
               <div className="flex-[1] py-3">
                  <h2 className="text-[34px] font-semibold mb-2">Jordan retro 6 G</h2>
                  <p className="text-lg font-semibold mb-5">
                     Men&apos;s Golf Shoes
                  </p>
                  <p className="mr-2 text-lg font-semibold">
                     MRP : ₹ 19 696.00
                  </p>
                  <p className="text-md font-medium text-black/[0.5]">
                     incl. of taxes
                  </p>
                  <p className="text-md font-medium text-black/[0.5] mb-20">
                     (Also includes all applicable duties)
                  </p>

                  <div className="mb-10">
                     <div className="flex justify-between mb-2">
                        <h3 className="text-md font-semibold">Select Size</h3>
                        <h3 className="text-md font-medium text-black/[0.5] cursor-pointer">Select Guide</h3>
                     </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                     <div className='border rounded-md text-center py-3 font-medium
                      hover:border-black cursor-pointer'>
                        UK 6
                     </div>
                     <div className='border rounded-md text-center py-3 font-medium
                      hover:border-black cursor-pointer'>
                        UK 6.5
                     </div>
                     <div className='border rounded-md text-center py-3 font-medium
                      hover:border-black cursor-pointer'>
                        UK 7
                     </div>
                     <div className='border rounded-md text-center py-3 font-medium
                      hover:border-black cursor-pointer'>
                        UK 7.5
                     </div>
                     <div className='border rounded-md text-center py-3 font-medium
                      hover:border-black cursor-pointer'>
                        UK 8
                     </div>
                     <div className='border rounded-md text-center py-3 font-medium
                      hover:border-black cursor-pointer'>
                        UK 8.5
                     </div>
                     <div className='border rounded-md text-center py-3 font-medium
                      hover:border-black cursor-pointer'>
                        UK 9
                     </div>
                     <div className='border rounded-md text-center py-3 font-medium
                      hover:border-black cursor-pointer'>
                        UK 9.5
                     </div>
                     <div className='border rounded-md text-center py-3 font-medium
                      cursor-not-allowed bg-black/[0.1] opacity-50'>
                        UK 10
                     </div>
                     <div className='border rounded-md text-center py-3 font-medium
                      cursor-not-allowed bg-black/[0.1] opacity-50'>
                        UK 10.5
                     </div>
                     <div className='border rounded-md text-center py-3 font-medium
                      cursor-not-allowed bg-black/[0.1] opacity-50'>
                        UK 11
                     </div>
                  </div>

                  <div className="text-red-600 mt-1">
                     Size selection is required
                  </div>

                  <div className="mt-10">
                     <button
                        className="w-full py-4 rounded-full bg-black text-white text-lg
                   font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                        Add to Cart
                     </button>
                     <button className="w-full py-4 rounded-full border border-black text-lg font-medium
                transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                        Whishlist
                        <IoMdHeartEmpty size={20} />
                     </button>
                  </div>

                  <div>
                     <h3 className="text-lg font-bold mb-5">
                        Product Details
                     </h3>
                     <p className="markdown text-md mb-5">
                        If you’re a golf enthusiast looking for a pair of shoes that are both stylish and practical, then the Jordan Retro 6 G NRG Men’s Golf Shoe might be just what you’re looking for. Available at the PGA Tour Superstore, these shoes combine the iconic design of the
                        original Air Jordan 6 with the latest golf technology, making them perfect for both casual and professional golfers.
                        <br />
                        <br />
                        Please note that some of the links in this blog may be affiliate links. If you click on a link and make a purchase, I may receive a small commission at no additional cost to you. I only recommend products or services that will be helpful for my readers. By using these
                        affiliate links, you are supporting the content and development of this blog. Thank you for your support!
                     </p>
                  </div>
               </div>
            </div>

            <RelatedProducts/>

         </Wrapper>
      </div>
   )
}

export default ProductDetails