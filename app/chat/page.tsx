import React from 'react'
import {QuickChatProgress} from "@/components/quickChat";

export default function Chat() {
  return (
    <div className={'h-screen w-screen flex flex-col justify-end items-center pb-10'}>
      <QuickChatProgress />
    </div>
  )
}
