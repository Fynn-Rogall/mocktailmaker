'use client'
import React, {useState} from 'react'

export default function QuickToggle() {

  const [jfs, setJfs] = useState('off')

  const updateJfs = (positions: number) => {
    const jfsStates = ['off', 'starting', 'running', 'stopping']
    const newJfsIndex = (jfsStates.indexOf(jfs) + positions) % jfsStates.length;
    setJfs(jfsStates[newJfsIndex])
    console.log(jfsStates[newJfsIndex])
  }


  return (
      <div
          className={"w-1/2 shadow-[0px_0px_25px_-10px_rgba(0,0,0,0.3)] p-5 rounded-2xl gap-3 flex flex-col items-center"}>
        <p className={"text-3xl font-medium"}>Toggle jibberfy</p>
        <div onClick={() => updateJfs(1)} className={` rounded-3xl w-[88px] h-12 p-1 relative flex transition-all  duration-300
        ${jfs === "running" || jfs === "stopping"
            ? "bg-[#0097C1]"
            : "bg-neutral-200"
        }`}>
          <div className={`bg-white rounded-full z-10 w-10 h-10 flex transition-all duration-400 ease-in ${
              jfs === "running" || jfs === "stopping" && "translate-x-full"
          } `}/>
        </div>
        <div className={"flex items-center gap-2  "}>
          <div className={`rounded-full w-3 h-3 ${
              jfs === "running" || jfs === "stopping"
                  ? "bg-green-500"
                  : "bg-red-500"
          }`}/>
          <p>jibberfy is {jfs === "running" || jfs === "stopping" ? "running" : "off"}</p>
        </div>
      </div>
  )
}
