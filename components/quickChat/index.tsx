'use client'
import React, {useState} from 'react'
import {SendQuickChatReq} from "@/ai";
import {VscSend} from "react-icons/vsc";
import parse from 'html-react-parser';
import {useRef} from "react";

export function QuickChatProgress() {

  interface message {
    text: any
    fromUser: boolean
  }

  const [messages, setMessages] = useState<message[]>([])

  const sendMessage = async () => {

    const chatInput = (document.getElementById('chatInput') as HTMLInputElement)
    const chatInputValue = chatInput.value
    chatInput.value = ''
    const sendButton = document.getElementById('sendButton') as HTMLButtonElement
    sendButton.disabled = true

    setMessages(prevMessages => [...prevMessages, {text: chatInputValue, fromUser: true}]);
    const aiResponse = await SendQuickChatReq(chatInputValue, 'en').then(() => sendButton.disabled = false)
    console.log(aiResponse)
    setMessages(prevMessages => [
      ...prevMessages,
      {text: aiResponse, fromUser: false},
    ]);
  }

  return (
      <main className={'w-screen items-center flex flex-col'}>
        <div className={'flex'}>
          <div className={'text-red-500'}>
            {messages.map((message, index) => {
              return (
                  <div key={index}
                       className={`flex flex-col gap-2 ${message.fromUser ? 'text-blue-500' : 'text-red-500'}`}>
                    {parse(message.text)}
                  </div>
              )
            })}
          </div>
        </div>
        <form onSubmit={(e) => {
          e.preventDefault()
        }} className={"border-black border rounded-xl flex w-3/4"}>
          <input id={"chatInput"} type={"text"} placeholder={"How can I help you?"}
                 className={"text-xl w-full rounded-xl py-1 px-2 "}/>
          <button id={'sendButton'} onClick={async () => sendMessage()} type={"submit"}
                  className={"h-10 w-10 flex justify-center items-center"}>
            <VscSend size={30}/>
          </button>
        </form>
      </main>
  )
}


