/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '/src/components/CSS/Swiper.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Swipers() {

    const [data, setData] = useState([])
    const [search, setSearch] = useState("")
    useEffect(() => {
      fetch(
        'https://api.tvmaze.com/shows'
      )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log('error', error))
    }, [])

  return (
            
            <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            id = "swiper"
            >
            {data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
            .map((item) => (
            <SwiperSlide key = {item.id}>
              <img id="tumb" className='w-1/3' src={item.image.original} alt="carrosel"></img>
              </SwiperSlide>
            ))}
            </Swiper>
            
        
    );
}
