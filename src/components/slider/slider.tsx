'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './slider.module.css';
import 'swiper/css';

export default function Slider() {
    return (
        <div className={styles.container}>
            <Swiper
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>  
        </div>     
    );
}