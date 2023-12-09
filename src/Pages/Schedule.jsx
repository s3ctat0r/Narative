import React from 'react';
import call_me from '../Assets/Videos/call_me.mp4'

const Schedule = () => {
    return (
        <div className='Schedule'>
            <div class="p-5">
                <div class="row g-0">
                    <div class="col-md-4">
                        <video autoPlay loop className='animation-width' src={call_me}></video>
                    {/* <Lottie className='animation-width' animationData={animationData} /> */}
                    </div>
                    <div class="col-md-8">
                    <div class="card-body ms-5">
                            <h1 class=" schedule-title pb-5">We unlock your brand's potential to scale using content & marketing</h1>
                            <p class=" schedule-text  mb-4 ">Narative Media is a social media marketing agency that empowers content creators and businesses to achieve their online goals. We specialize in creating captivating visual content, crafting engaging social media campaigns, and developing effective content strategies that resonate with your target audience.</p>
                            <div className="schedule-btn-margin">
                            <a className='schedule-call' href="">Schedule a Call</a>
                            </div>
                            
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;