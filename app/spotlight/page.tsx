'use client'
import React, { useState } from 'react';
import {SendQuickChatReq} from "@/ai";
export default function SpotlightChat() {
const [userInput,setUserInput] = useState("")

  const sendTextToAi = () => {
        console.log(SendQuickChatReq(userInput))
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
        sendTextToAi()
    }
  }
  return (
      <>
        <label>
          Text input: <input type="text" name="myInput"
                        onKeyDown={handleKeyDown}
                        className={"border border-gray-300"}
                        value={userInput}
                             onChange={(e) => setUserInput(e.target.value)}
        />
        </label>
      </>
  );
}
