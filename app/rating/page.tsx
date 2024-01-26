'use client'
import React, {useState} from 'react'
import {FaRegStar} from "react-icons/fa";
import {FaStar} from "react-icons/fa";
export default function Rating() {

  const [clicked, setClicked] = useState(false)

  return (
      <div className={'w-screen h-screen flex flex-col gap-6 justify-center items-center'}>
        <button onClick={() => setClicked(true)}>
          <div className={'flex absolute'}>
            <FaRegStar size={128} className={'text-black'}/>
            <FaRegStar size={128} className={'text-black'}/>
            <FaRegStar size={128} className={'text-black'}/>
            <FaRegStar size={128} className={'text-black'}/>
            <FaRegStar size={128} className={'text-black'}/>
          </div>
          <div className={`flex ${clicked ? 'opacity-100' : 'opacity-0'}`}>
            <FaStar size={128} className={'text-yellow-500'}/>
            <FaStar size={128} className={'text-yellow-500'}/>
            <FaStar size={128} className={'text-yellow-500'}/>
            <FaStar size={128} className={'text-yellow-500'}/>
            <FaStar size={128} className={'text-yellow-500'}/>
          </div>
        </button>
        <p className={`text-xl ${clicked ? 'opacity-100' : 'opacity-0'}`}>Vielen Dank für Ihre ehrliche Meinung. (:</p>
        <p className={`text-md leading-3 ${clicked ? 'opacity-100' : 'opacity-0'}`}>(Die Bewertung ist kein Bug)</p>
        <a className={'absolute bottom-0 text-neutral-200'} href="/">back</a>
      </div>
  )
}
