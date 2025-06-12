import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'TAMAGOTCHI',
  description: 'Página inicial do projeto Tamagotchi',
  openGraph:{
    title: 'Tamagotchi',
    description: 'Jogo virtual de pet virtual',
    images:['URL DE IMAGEM'],
  },
  robots:{
    index: true,
    follow:true,
    nocache: true,
    googleBot:{
      index: true,
      follow: true,
    }
  }
}

export default function Home() {

  return(
    <div className="select-none ">
      <div className="flex justify-center items-center mr-70">
        <a href="https://github.com/Pixel-Knights">
        <img  
            src="/tittle.png " 
            alt="logo tittle"
            className="fixed z-10 w-70 h-auto transition-transform duration-300 hover:scale-110" // Define a largura e altura em Tailwind 
            />
        </a>
        <div id="cat1" className="fixed flex justify-center items-center h-screen">
          <img className="w-40 mt-321 ml-250 animate-bounce" src="cat1.png" alt="gato1" />
        </div>
        
        <div id="cat2" className="fixed flex justify-center items-center h-screen">
          <img className="w-45 mt-321 mr-100 ease-linear" src="cat2.png" alt="gato2" />
        </div>    
      </div>

      <div className="flex justify-center items-center h-screen ">
        <img src="/play.png" alt="play" 
        className="fixed w-70 h-auto transition-transform duration-300 hover:scale-110"/>
      </div>

    </div>
  )
}
