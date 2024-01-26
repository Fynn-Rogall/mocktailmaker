'use cliemt'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Selection() {

  const callToAction = "Jetzt saften!"
  const router = useRouter()

  function jetztSaftenKlick(sorte: string) {
    console.log("Jetzt saften! " + sorte)

  }

  return (
      <div className={"tester select-none flex bg-black"}>
        <div className={'relative group'}>
          <Image src="/kiba.jpg" alt={'kiba'} draggable={false} width={864} height={1536}
                 className={'group-hover:blur-sm'}/>
          <div
              className={'absolute flex flex-col gap-3 z-10 group-hover:backdrop-blur-lg p-4 rounded-3xl right-4 bottom-4 left-4 opacity-80 group-hover:opacity-100 text-4xl text-white'}>
            <p className={'group-hover:underline'}>KiBa</p>
            <p className={'opacity-0 group-hover:opacity-100 text-lg'}>Tauche ein in ein Geschmackserlebnis der besonderen Art mit KiBa – der perfekten
              Kombination aus fruchtiger Kirsche und exotischer Banane.</p>
            <button
                onClick={() => {
                  jetztSaftenKlick("kiba")
                  void router.push("/rating")
                }}
                className={' text-white text-xl backdrop-blur-xl border border-white py-2 px-3 rounded-lg group opacity-0 group-hover:opacity-100'}>{callToAction}
            </button>
          </div>
        </div>
        <div className={'relative group'}>
          <Image src="/cerry.jpg" alt={'cherry'} draggable={false} width={864} height={1536}
                 className={'group-hover:blur-sm'}/>
          <div
              className={'absolute flex flex-col gap-3 z-10 group-hover:backdrop-blur-lg p-4 rounded-3xl right-4 bottom-4 left-4 opacity-80 group-hover:opacity-100 text-4xl text-white'}>
            <p className={'group-hover:underline'}>Kirsche</p>
            <p className={'opacity-0 group-hover:opacity-100 text-lg'}>Genieße die süße Verführung saftiger Kirschen in jedem Schluck – ein
              unvergleichliches Fruchterlebnis, das deine Sinne belebt und den Tag versüßt!</p>
            <button
                onClick={() => {
                  jetztSaftenKlick("cherry")
                  void router.push("/rating")
                }}
                className={' text-white text-xl backdrop-blur-xl border border-white py-2 px-3 rounded-lg group opacity-0 group-hover:opacity-100'}>{callToAction}
            </button>
          </div>
        </div>
        <div className={'relative group'}>
          <Image src="/orange.jpg" alt={'orange'} draggable={false} width={864} height={1536}
                 className={'group-hover:blur-sm'}/>
          <div
              className={'absolute flex flex-col gap-3 z-10 group-hover:backdrop-blur-lg p-4 rounded-3xl right-4 bottom-4 left-4 opacity-80 group-hover:opacity-100 text-4xl text-white'}>
            <p className={'group-hover:underline'}>Orange</p>
            <p className={'opacity-0 group-hover:opacity-100 text-lg'}>Erlebe die spritzige Frische sonnengereifter Orangen in einem Getränk, das pure
              Energie und Vitamin-C-Reichtum vereint.</p>
            <button
                onClick={() => {
                  jetztSaftenKlick("orange")
                  void router.push("/rating")
                }}
                className={' text-white text-xl backdrop-blur-xl border border-white py-2 px-3 rounded-lg group opacity-0 group-hover:opacity-100'}>{callToAction}
            </button>
          </div>
        </div>
      </div>
  )
}
