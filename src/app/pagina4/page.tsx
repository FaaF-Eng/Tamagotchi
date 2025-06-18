'use client'

import { useCallback } from 'react'; //Para música
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';



export default function Page4() {

useEffect(() => {
  const nick = localStorage.getItem('nickname');
  console.log(nick); // Ou usa direto no estado ou JSX
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
    
    <div className="flex text-center justify-center items-center h-screen select-none ">

        <div className='fixed' >
            <a>
            <img  
                src="/tittle.png " 
                alt="logo tittle"
                className=" z-10 w-70 mb-150 transition-transform duration-300 hover:scale-110"
                />
            </a>
        </div>
    
      

        
        <div className="flex mt-100  flex flex-row">

            <img src="/brincar.png" alt="brincar"
            className='h-15 w-auto transition-transform duration-300 hover:scale-110 z-100 cursor-pointer'
            onClick={() => playSoundAndNavigate('')} />

            <img src="/comer.png" alt="comer"
            className='h-15 w-auto transition-transform duration-300 hover:scale-110 z-100 cursor-pointer'
            onClick={() => playSoundAndNavigate('')} />

            <img src="/dormir.png" alt="dormir"
            className='h-15 w-auto transition-transform duration-300 hover:scale-110 z-100 cursor-pointer'
            onClick={() => playSoundAndNavigate('')} />

            <img src="/banho.png" alt="banho"
            className='h-15 w-auto transition-transform duration-300 hover:scale-110 z-100 cursor-pointer'
            onClick={() => playSoundAndNavigate('')} />
        </div>

        <div className='fixed mb-100 text-[50px] font-bold text-[#194b54]'style={{ textShadow: '2px 1px  #000' }}>{localStorage.getItem('nickname')}</div>

        <div id="tamagotchi" className='fixed' onClick={playSound}>
          <img className="w-60  h-auto" src="cat3.png" alt="tamagotchi" />
        </div>

     

    </div>
  )
}
