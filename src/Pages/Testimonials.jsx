import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination } from 'swiper';

// import required modules
import { EffectCube, Navigation } from 'swiper';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [swiper, setSwiper] = useState(null);

    const data = [
        {
            name: 'John Guidry',
            text: "We collaborated with John Guidry, a criminal lawyer from Florida, to enhance his online presence. Through expert video editing and the incorporation of high-end graphics, we elevated the quality of his content. This strategic approach not only generated increased sales but also organically attracted a client worth $900. Our efforts played a pivotal role in optimizing John Guidry's digital platforms and successfully contributing to client acquisition.",
            company_name: 'Criminal defense lawyer',
            video: 1,
            video_url: 'TDDI-vwdfc8',
            img_url: '',
        },
        {
            name: 'Shashwat Dash',
            company_name: 'Founder, Dashfit',
            text: "In Dashfit's early stages as a SaaS company, we managed their social media with sophisticated strategies and high-quality editing. Today, Dashfit enjoys millions of weekly social media impressions, signaling a substantial increase in the app's user base. This success underscores the impact of our strategic efforts in enhancing brand recognition and user engagement.",
            video: 1,
            video_url: 'dYmsxnsQ5s0',
            img_url: '',
        },
        {
            name: 'Gubraj',
            text: "Nutrition Guru, an NGO and personal brand led by an Ayurvedic doctor, sought our assistance in enhancing their social media presence. In less than 30 days, we successfully increased their followers from 20,000 to 50,000 through a meticulously researched content strategy. Additionally, we organized webinars for them, enabling them to monetize their growing audience. Our comprehensive approach has significantly contributed to the rapid expansion and engagement of Nutrition Guru's online community.",
            company_name: 'Nutritionist, Nutrition Guru 99',
            video: 1,
            video_url: 'LLSBQ2juZq4',
            img_url: '',
        },
        
    ];
    const currentTestimonial = data[currentIndex];

    return (
        <div  className='Testimonials'>
            <div className="row g-0">
                <div className="col-md-6">
                    <Swiper
                        effect={'cube'}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        modules={[EffectCube,  Pagination, Navigation]}
                        pagination={{ el: '.swiper-pagination-2', clickable: true }}
                        className="mySwiper"
                        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                        onSwiper={(swiper) => setSwiper(swiper)}
                        navigation={{
                            nextEl: '.swiper-button-next-2',
                            prevEl: '.swiper-button-prev-2',
                            clickable: true,
                            grabCursor: true,
                        }}
                    >
                        {data.map((testimonial, index) => (
                            <SwiperSlide  key={index}>
                                {testimonial.video === 1 ? (
                                    // Render video player
                                    <iframe
                                    className='testimonials-video'
                                    src={`https://www.youtube.com/embed/${testimonial.video_url}`}
                                    title={`testimonial-video-${index}`}
                                    allowFullScreen
                                  ></iframe>
                                ) : (
                                    // Render image
                                    <img
                                        src={testimonial.img_url}
                                        alt={`testimonial-img-${index}`}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <div className='card-heading' >{currentTestimonial.name}</div>
                        <p className="card-text">
                            <div className="text-muted company-name">{currentTestimonial.company_name}</div>
                        </p>
                        <p className="card-text">{currentTestimonial.text}</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="slider-controler testimonial-controler-margin">
                    <div className="swiper-button-prev-2 swiper-button-prev  slider-arrow">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next-2 swiper-button-next slider-arrow">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination swiper-pagination-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
