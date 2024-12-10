import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

export default function Explore() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
      {/* Header */}
      <h2 className="font-bold text-xl sm:text-2xl md:text-3xl text-blue-600 mb-6">
        Explore More
      </h2>

      {/* Swiper Component */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative group">
            <img
              src="/image/lg1.jpg"
              alt="Example 1"
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg shadow-md object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-base sm:text-lg md:text-xl font-bold">
                Secured Call Center
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative group">
            <img
              src="/image/lg2.png"
              alt="Example 2"
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg shadow-md object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-base sm:text-lg md:text-xl font-bold">
                We are here to be trusted
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative group">
            <img
              src="/image/lg3.jpg"
              alt="Example 3"
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg shadow-md object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-base sm:text-lg md:text-xl font-bold">
                Work with us to regain yours
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative group">
            <img
              src="/image/lg4.png"
              alt="Example 4"
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg shadow-md object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-base sm:text-lg md:text-xl font-bold">
                PrimeLine, we are here for you
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <div className="relative group">
            <img
              src="/image/office.jpg"
              alt="Example 5"
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg shadow-md object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-base sm:text-lg md:text-xl font-bold">
                Incoming and outgoing, we are here to help
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 6 */}
        <SwiperSlide>
          <div className="relative group">
            <img
              src="/image/lg5.webp"
              alt="Example 6"
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg shadow-md object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-base sm:text-lg md:text-xl font-bold">
                We are ready to give help whenever you want it
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
