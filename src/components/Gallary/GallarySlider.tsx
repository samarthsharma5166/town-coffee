"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

const images = [
    "/Hero/h1.webp",
    "/bg.webp",
    "/g1.webp",
    "/g2.webp",
    "/Hero/h2.webp",
    "/Hero/h3.webp",
    "/Hero/h1.webp",
    "/Hero/h2.webp",
    "/g3.webp",
]

const GallarySlider = () => {
    return (
        <div className="w-full mx-auto py-12">
            <Swiper
                grabCursor
                centeredSlides
                slidesPerView={1.4}
                spaceBetween={4}
                effect="coverflow"
                coverflowEffect={{
                    rotate: 0,
                    depth: 100,
                    modifier: 0.9,
                    slideShadows: false,
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 2.2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                modules={[EffectCoverflow, Pagination]}
                className="gallery-swiper"
            >
                {images.map((src, i) => (
                    <SwiperSlide key={i}>
                        <div className="group transition-transform duration-500">
                            <div className="relative aspect-4/5 max-h-[clamp(280px,45vh,480px)] overflow-hidden rounded-2xl shadow-xl">
                                <img
                                    src={src}
                                    alt="Cafe"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default GallarySlider
