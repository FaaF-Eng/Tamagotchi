'use client'

import { useCallback } from 'react'; //Para música
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';



export default function Page2() {
useEffect(() => {
  const audio2 = new Audio("/sounds/menu_music.mp3");
  audio2.loop = true; // faz a música tocar em loop
  audio2.play().catch((e) => console.warn("Erro ao tocar som:", e));

  // Parar a música quando o componente for desmontado (boa prática)

}, []);


    const router = useRouter(); // ✅ Instância do roteador do Next.js

  useEffect(() => {
    document.title = "TAMAGOTCHI";
  }, []);

    

    const playSoundAndNavigate = useCallback((path: string) => {
    const audio2 = new Audio("/sounds/play_sound.wav");
    audio2.play();
    setTimeout(() => {
      router.push(path); // Redireciona após tocar o som
    }, 150); // Pequeno delay para o som iniciar
  }, [router]);


  const playSound = useCallback(() => {
  const audio = new Audio("/sounds/meow.wav"); // Caminho dentro da pasta public
  audio.play();
  }, []);

    const playSound2 = useCallback(() => {
  const audio2 = new Audio("/sounds/play_sound.wav"); // Caminho dentro da pasta public
  audio2.play();
  }, []);

  return(
    
    <div className="flex text-center justify-center items-center h-screen select-none">
      <div className="fixed">
          <a>
          <img  
              src="/tittle.png " 
              alt="logo tittle"
              className="z-10 w-70 mb-150 transition-transform duration-300 hover:scale-110"
              
              />
          </a>

      </div>

      <div className='flex flex-row gap-50 fixed'>
          <img src="seta2.png" alt="seta2" 
          className='w-20 active:translate-y-1 transition-all duration-150 ease-in-out cursor-pointer' 
          onClick={playSound2}/>

          <img src="seta1.png" alt="seta1" 
          className='w-20 active:translate-y-1 transition-all duration-150 ease-in-out cursor-pointer'
          onClick={playSound2} />
      </div>

      <div id="escolha" className='fixed mb-100'>
          <img className=" w-70 " src="escolha.png" alt="escolha" />
      </div>

        <div id="cat3" className="fixed" onClick={playSound}>
          <img className="w-40 h-auto animate-bounce" src="cat3.png" alt="gato3" />
        </div>
        
        <div className="flex justify-center items-center mt-100 cursor-pointer ">
            <img src="/play.png" alt="play" 
            className="fixed w-50 h-auto transition-transform duration-300 hover:scale-110"
            onClick={() => playSoundAndNavigate('/pagina3')}/>
        </div>



     

    </div>
  )
}
