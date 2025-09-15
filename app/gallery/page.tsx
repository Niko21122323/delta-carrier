import React from "react";
import BannerComponent from "@/components/BannerComponent";
import { gallery } from "@/ts/data";
import Image from "next/image";

const page = () => {
  return (
    <main>
      <BannerComponent
        title="See What Drives Us"
        text="Browse through our collection of trucks and moments that highlight the quality and dedication behind every journey."
      />
      <section className="py-12 sm:py-16 xl:py-[84px]">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((data) => (
              <div
                key={data.id}
                className="h-full w-full rounded-lg overflow-hidden"
              >
                <Image
                  src={data.image}
                  alt="gallery image"
                  height={300}
                  width={300}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
