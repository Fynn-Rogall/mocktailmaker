'use client'
import React from 'react'

export default function Headder() {
  return (
      <div className={"flex items-center h-7 select-none border-b border-neutral-200"}>
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
  )
}
