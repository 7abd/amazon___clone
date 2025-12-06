'use client'
import { CategoryGrid } from "./categoryGrid";
import { JSX, ReactNode } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

interface BackgroundProps {
  children?: ReactNode;
}

const banners = [
  "/banner1.jpg",
  "/banner2.jpg",
  "/banner3.jpg",
  "/banner4.jpg",
  "/banner.jpg",
  "/banner5.jpg",
  "/banner6.jpg",
  "/banner7.jpg"
];

export default function Background({ children }: BackgroundProps): JSX.Element {
  return (
    <>
      <div className="relative w-full h-[250px] overflow-hidden sm:h-[350px] md:h-[450px] lg:h-[550px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          navigation
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {banners.map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} alt={`Banner ${i + 1}`} className="w-full h-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative -mt-20 md:-mt-32 z-10">
        {Array.from({ length: 10 }).map((_, i) => (
          <CategoryGrid key={i} />
        ))}
      </div>
    </>
  );
}
