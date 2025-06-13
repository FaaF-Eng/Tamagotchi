'use client'

import { useCallback } from 'react'; //Para música
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';



export default function Page2() {

  useEffect(() => {
    document.title = "TAMAGOTCHI";
  }, []);

    const router = useRouter(); // ✅ Inicialização do roteador

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
    
    <div className="select-none">
      <div className="flex justify-center items-center mr-70">
        <div >
            <a>
            <img  
                src="/tittle.png " 
                alt="logo tittle"
                className="fixed z-10 w-70 h-auto transition-transform duration-300 hover:scale-110"
                onClick={() => playSoundAndNavigate('/')} 
                />
            </a>
            <div id="escolha" className='mt-40'>
                <img className=" fixed z-12 w-70 z-999" src="escolha.png" alt="escolha" />
            </div>
        </div>
    
        <div className='flex flex-row gap-50 fixed ml-70 mt-160' onClick={playSound2}>
            <img src="seta2.png" alt="seta2" 
            className='w-20 active:translate-y-1 transition-all duration-150 ease-in-out cursor-pointer' />

            <img src="seta1.png" alt="seta1" 
            className='w-20 active:translate-y-1 transition-all duration-150 ease-in-out cursor-pointer' />
        </div>
      </div>
        <div id="cat3" className=" flex justify-center items-center z-13" onClick={playSound}>
          <img className="fixed mt-130 w-40 h-auto animate-bounce" src="cat3.png" alt="gato3" />
        </div>
        
        <div className="flex justify-center items-center mt-100 ">
            <img src="/play.png" alt="play" 
            className="fixed w-50 h-auto transition-transform duration-300 hover:scale-110"
            onClick={() => playSoundAndNavigate('/')}/>
        </div>



     

    </div>
  )
}
