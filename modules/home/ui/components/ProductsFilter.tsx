"use client";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { categories as ALL_CATEGORIES } from "@/data/categories";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter, useSearchParams } from "next/navigation";

const ProductsFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchText, setSearchText] = useState(
    searchParams.get("search") || ""
  );
  const [minPrice, setMinPrice] = useState(
    searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : ""
  );
  const [maxPrice, setMaxPrice] = useState(
    searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : ""
  );
  const [categories, setCategories] = useState(
    searchParams.get("categories")
      ? searchParams.get("categories")!.split(",")
      : []
  );

  const debouncedSearch = useDebounce(searchText, 500);
  const debouncedMinPrice = useDebounce(minPrice, 500);
  const debouncedMaxPrice = useDebounce(maxPrice, 500);
  useEffect(() => {
    const params = new URLSearchParams();
    if (debouncedSearch) params.set("search", debouncedSearch as string);
    if (debouncedMinPrice !== "")
      params.set("minPrice", String(debouncedMinPrice));
    if (debouncedMaxPrice !== "")
      params.set("maxPrice", String(debouncedMaxPrice));
    if (categories.length > 0) params.set("categories", categories.join(","));

    router.replace(`?${params.toString()}`, { scroll: false });
  }, [
    debouncedSearch,
    debouncedMinPrice,
    debouncedMaxPrice,
    categories,
    router,
  ]);

  return (
    <div
      className={twMerge(
        "flex items-center gap-4 flex-wrap p-4 bg-white shadow rounded-md w-full justify-center max-w-[80%]"
      )}
    >
      <div className="flex flex-col space-y-1  max-md:w-full  ">
        <Label>Search</Label>
        <Input
          placeholder="Search products..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="flex flex-col space-y-1 min-w-61.25 ">
        <Label>Categories</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="   justify-between">
              {categories.length
                ? `${categories.length} selected`
                : "Select categories"}
              <ChevronDown size={16} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-52 p-2 bg-white">
            <div className="space-y-2">
              {ALL_CATEGORIES.map((cat) => (
                <div key={cat} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={categories.includes(cat)}
                    onChange={(e) => {
                      console.log(e);

                      if (e.target.checked) setCategories([...categories, cat]);
                      else setCategories(categories.filter((c) => c !== cat));
                    }}
                  />
                  <span className="text-sm">{cat}</span>
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex flex-col space-y-1   max-md:w-full ">
        <Label>Min Price</Label>
        <Input
          type="number"
          placeholder="0"
          value={minPrice}
          onChange={(e) =>
            setMinPrice(e.target.value ? Number(e.target.value) : "")
          }
        />
      </div>

      <div className="flex flex-col space-y-1  max-md:w-full  ">
        <Label>Max Price</Label>
        <Input
          type="number"
          placeholder="1000"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice(e.target.value ? Number(e.target.value) : "")
          }
        />
      </div>
    </div>
  );
};

export default ProductsFilter;
