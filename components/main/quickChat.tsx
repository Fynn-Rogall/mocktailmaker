'use client'
import React from 'react'
import {BsStars} from "react-icons/bs";
import {VscSend} from "react-icons/vsc";

import { SendQuickChatReq } from '@/ai'
export default function QuickChat() {

  const userName = 'John Doe'

  return (
      <div className={"w-3/4 flex flex-col"}>
        <p className={"text-neutral-400 tracking-tight"}>Good {getDaytime()},</p>
        <p className={"font-bold text-2xl leading-6 mb-4"}>{userName} 🎉</p>
        <form onSubmit={(e) => {
          e.preventDefault()

        }} className={"border-black border rounded-xl flex h-10"}>
          <input id={"chatInput"} type={"text"} placeholder={"How can I help you?"}
                 className={"text-xl w-full rounded-xl py-1 px-2 "}/>
          <button onClick={async () =>  {
            const chatInput = document.getElementById('chatInput') as HTMLInputElement
            const chatInputValue = chatInput.value
            const aiResponse = await SendQuickChatReq( chatInputValue ?? '', 'en')
          }} type={"submit"}
                  className={"h-10 w-10 flex justify-center items-center"}>
            <VscSend size={30}/>
          </button>
        </form>
        <p className={"self-end flex items-center"}><BsStars/> Chat with AI</p>
      </div>
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