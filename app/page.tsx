'use client'
import Image from 'next/image'

export default function Home() {

  const userName = 'John Doe'

  return (
      <main className={"bg-white"}>

        <div className={"top-0 right-0 flex items-center h-7 select-none"}>
          <div className={"w-full h-7 movable"}/>
          <div className={"flex gap-2 mr-2 w-fit"}>
            <div className={"rounded-full bg-green-500 text-center w-3 h-3"} onClick={() => {
              alert('Minimize')
            }}/>
            <div className={"rounded-full bg-yellow-500 text-center w-3 h-3"} onClick={() => {
              alert('Full screen')
            }}/>
            <div className={"rounded-full bg-red-500 text-center w-3 h-3"} onDoubleClick={() => {
              window.top?.close()
            }} onClick={() => {
              alert('Close')
            }}/>
          </div>
        </div>

        <p>Good {getDaytime()},</p>
        <p>{userName}</p>
        <Image src={'/images/Logo (Main).png'} alt={'Logo'} width={200} height={200} draggable={false}/>
        <input placeholder={"How can I help you?"} className={"focus:outline-black py-1 px-2 rounded-xl"}/>
      </main>
  )
}

function getDaytime(): string {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return 'morning';
  } else if (hour >= 12 && hour < 18) {
    return 'afternoon';
  } else if (hour >= 18 && hour < 22) {
    return 'evening';
  } else {
    return 'night';
  }
}