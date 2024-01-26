import CocktailAnimation from "@/components/CocktailAnimation";
import JuicyButtonLikeNamidsSRauAss from "@/components/juicyButtonLikeNamidsSRauAss";

export default function Home() {
  return (
      <main className={"h-screen flex justify-center flex-col bg-black"}>
        <div className={'h-1/2 flex flex-col justify-between w-full items-center'}>
          <CocktailAnimation/>
          <a href={'/helloCocktail'}>
          <JuicyButtonLikeNamidsSRauAss/>
            </a>
          </div>
      </main>
  )
}
