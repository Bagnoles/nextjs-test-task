'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import styles from './slider.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { News } from '@/types/news.type';

type SliderProps = {
    data: News[];
}

const SLIDES_PER_VIEW = 3;

export default function Slider({data}: SliderProps) {
    return (
        <div className={styles.container}>
            <Swiper
            modules={[Navigation, Pagination]}
            navigation={SLIDES_PER_VIEW < data.length}
            pagination={
                SLIDES_PER_VIEW < data.length
                  ? {
                      clickable: true,
                    }
                  : undefined
            }
            slidesPerView={SLIDES_PER_VIEW}
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id} className={styles.slide}>
                        <Link href={`/${item.id}`}>
                            <img src={item.image_url} alt={item.title} className={styles.image} />
                            <p>{item.title}</p>
                        </Link>
                    </SwiperSlide>
                    )
                )}
            </Swiper>  
        </div>     
    );
}

/*
<Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {data.map((item) => <SwiperSlide key={item.id} className={styles.width}>
                    
                    <p className={styles.width}>{item.title}</p>
                </SwiperSlide>)}
            </Swiper>  
            */