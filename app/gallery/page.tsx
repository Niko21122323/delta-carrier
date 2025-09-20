"use client";

import React, { useState } from "react";
import BannerComponent from "@/components/BannerComponent";
import { gallery } from "@/ts/data";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

const Page = () => {
  // State to control FsLightbox
  const [toggler, setToggler] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);

  const openLightbox = (index: number) => {
    setSlideIndex(index + 1); // FsLightbox is 1-based index
    setToggler(!toggler); // toggle it to open
  };

  return (
    <main>
      <BannerComponent
        title="See What Drives Us"
        text="Browse through our collection of trucks and moments that highlight the quality and dedication behind every journey."
      />

      <section className="py-12 sm:py-16 xl:py-[84px]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((data, i) => (
              <div
                key={data.id}
                className="h-full w-full rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openLightbox(i)}
              >
                <Image
                  src={data.image}
                  alt="gallery image"
                  height={300}
                  width={300}
                  className="h-full w-full object-cover transition-transform duration-200 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FsLightbox
        toggler={toggler}
        sources={gallery.map((item) => item.image)}
        slide={slideIndex}
      />
    </main>
  );
};

export default Page;
