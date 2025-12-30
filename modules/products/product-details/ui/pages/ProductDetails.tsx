"use client";

import React, { useState } from "react";
import { IProduct } from "@/data/products";
import { Heart, Star } from "lucide-react";
import Image from "next/image";
import AddToCartBtn from "../components/AddToCartBtn";

const ProductDetails = ({ product }: { product: IProduct }) => {
  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Images */}
        <div className="flex gap-4">
          {/* Thumbnails */}
          <div className="flex  flex-col gap-3 items-center max-md:flex-wrap">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(img)}
                className={`border h-fit rounded-md p-1 transition ${
                  activeImage === img ? "border-primary" : "border-gray-200"
                }`}
              >
                <Image
                  width={48}
                  height={48}
                  src={img}
                  alt={product.title}
                  className="w-16 h-16 object-cover rounded"
                />
              </button>
            ))}
          </div>

          {/* Image */}
          <div className="flex-1 flex items-center justify-center bg-gray-50 rounded-lg">
            <Image
              width={420}
              height={420}
              src={activeImage}
              alt={product.title}
              className="max-h-105 w-full object-contain"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-4">
          {/* Title */}
          <h1 className="text-xl md:text-2xl font-semibold">{product.title}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={
                    i < Math.round(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">
              {product.rating.toFixed(1)}
            </span>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-red-600">
            ${product.price}
          </div>

          {/* Description */}
          {product.description && (
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          )}

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {product.category.map((cat, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 bg-gray-100 rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-6">
            <AddToCartBtn product={product} />
            <button className="px-5 py-3 border rounded-md hover:bg-gray-100 transition">
              <Heart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
