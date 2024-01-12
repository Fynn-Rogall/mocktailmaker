import React from 'react'
import Image from "next/image";

export default function Logo() {
  return (
    <Image src={'/images/Logo (Main).png'} alt={'Logo'} width={48} height={48} draggable={false}
         className={"select-none"}/>
  )
}
