/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import Slider from '/src/components/Slider'
import '/src/components/CSS/Swiper.css';
import { useEffect, useState } from "react";
import React from 'react'

export default function Destaque() {

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
  
    console.log(data)
  
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
        <div className="flex flex-row flex-wrap justify-around gap-10 py-8 w-1/2">
          <div className="flex flex-col gap-y-5">
            <Slider></Slider>
          </div>
        </div>
      </main>
    );
  }
