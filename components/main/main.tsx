import React from 'react'
import Headder from "@/components/headder";
import Logo from "@/components/main/logo";
import ProfilePicture from "@/components/main/profilePicture";
import QuickToggle from "@/components/main/quickToggle";
import QuickChat from "@/components/main/quickChat";
import Footer from "@/components/main/footer";

export default function Main() {
  return (
      <main className={"bg-white flex flex-col justify-between rounded-2xl h-screen"}>
        <div>
          <Headder/>
          <div className={"flex justify-between p-3"}>
            <Logo/>
            <ProfilePicture/>
          </div>
        </div>
        <div className={"flex flex-col items-center"}>
          <QuickToggle/>
        </div>
        <div className={"flex flex-col items-center"}>
          <QuickChat/>
        </div>
        <div className={"justify-self-end"}>
          <Footer/>
        </div>
      </main>
  )
}
