import React from 'react';
import './Testimonial.css'; // ✅ Correct CSS import

import testimony_img1 from './../../assets/user-01.jpg';
import testimony_img2 from './../../assets/user-02.jpg';
import testimony_img3 from './../../assets/user-03.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Testimonial = () => {
  return (
    <div className="testimony_wrapper section" id='testimonials'>
      <div className="Swiper_content">
        <Swiper 
          className="swiper"
          loop={true}
          autoplay={{
            delay: 1000,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="testimonial">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, molestias? Corrupti magnam voluptatem facere labore!</p>
              <div className="testimonial_info">
                <img src={testimony_img1} alt="user-1" />
                <h3>John Mark <span>Marketer</span></h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, molestias? Corrupti magnam voluptatem facere labore!</p>
              <div className="testimonial_info">
                <img src={testimony_img2} alt="user-2" />
                <h3>Alpex Mark <span>SEO Specialist</span></h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, molestias? Corrupti magnam voluptatem facere labore!</p>
              <div className="testimonial_info">
                <img src={testimony_img3} alt="user-3" />
                <h3>Nishi Mark <span>HR Dept.</span></h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="testimony_details">
        <small className='section_title'>(Testimonials)</small>
        <h2>We are Trusted Over <span>40+ Countries</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sequi eligendi ullam, voluptatibus perferendis hic!</p>
      </div>
    </div>
  );
};

export default Testimonial;