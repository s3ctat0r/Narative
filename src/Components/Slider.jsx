import React from 'react';
import vid1 from '../Assets/Videos/vid_1.mp4';
import vid2 from '../Assets/Videos/vid_2.mp4';
import vid3 from '../Assets/Videos/vid_3.mp4';
import vid4 from '../Assets/Videos/vid_4.mp4';
const Slider = () => {
    return (
        <div className='slider'>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <video src={vid2} autoPlay muted loop class="d-block w-100"></video>
                    </div>
                    <div class="carousel-item">
                        <video src={vid3} autoPlay muted loop class="d-block w-100"></video>
                    </div>
                    <div class="carousel-item">
                        <video src={vid4} autoPlay muted loop class="d-block w-100"></video>
                    </div>
                    <div class="carousel-item">
                        <video src={vid1} autoPlay muted loop class="d-block w-100"></video>
                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <div className="btn-color">
                <span class="carousel-control-prev-icon main-color" aria-hidden="true"></span>
                </div>
                    
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <div className="btn-color">
                    <span class="carousel-control-next-icon main-color" aria-hidden="true"></span>
                    </div>
                    
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;