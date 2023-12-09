import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import reel_1 from '../Assets/Videos/reel_1.mp4';
import reel_2 from '../Assets/Videos/reel_2.mp4';
import reel_3 from '../Assets/Videos/reel_3.mp4';
import reel_4 from '../Assets/Videos/reel_4.mp4';
import reel_5 from '../Assets/Videos/reel_5.mp4';
import reel_6 from '../Assets/Videos/reel_6.mp4';

import VideoPlayer from '../Components/Videoplayer';

const vid = [
  reel_1,
  reel_2,
  reel_3,
  reel_4,
  reel_5,
  reel_6
];

function portfolio() {
  return (
    <div className='Portfolio'>
      <Swiper
        effect={'coverflow'}
        grabCursor={false}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination-1', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next-1',
          prevEl: '.swiper-button-prev-1',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {vid.map((vid, index) => (
          <SwiperSlide key={index}>
            <div className="phone-outline">
              <div className="phone-top"></div>
              <VideoPlayer videoUrl={vid} />
              <div className="phone-bottom"></div>
            </div>
          </SwiperSlide>
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev-1 swiper-button-prev  slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next-1 swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination swiper-pagination-1"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default portfolio;
