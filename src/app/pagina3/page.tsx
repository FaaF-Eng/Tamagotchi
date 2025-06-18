'use client'

import { useCallback } from 'react'; //Para música
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';



export default function Page3() {
const [nickname, setNickname] = useState(''); //valor do input, função que altera valor, começa com str vazio

const salvarNickname = () =>{
    if (nickname.trim() !== ''){
        localStorage.setItem('nickname' , nickname);
        console.log(nickname, "nickname salvo");
    }
};
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
    
    <div className="select-none">
      <div className="flex justify-center items-center mr-70">
        <div >
            <a>
            <img  
                src="/tittle.png " 
                alt="logo tittle"
                className="fixed z-10 w-70 h-auto transition-transform duration-300 hover:scale-110" 
                />
            </a>
            <div id="nome" className='mt-40'>
                <img className=" fixed z-12 w-70 z-999" src="nome.png"  />
            </div>
        </div>
        </div>
        
        <div className="fixed ml-120 mt-50 w-90 max-w-sm min-w-[200px]">
            <input className="w-full bg-[#194b54] placeholder:text-slate-400 
            text-white text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 
            transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300
             shadow-sm focus:shadow" placeholder="NickName" value={nickname} onChange={(e)=>setNickname(e.target.value)}>
        </input>
        </div>

        <div className="fixed ml-165 flex justify-center items-center mt-100 cursor-pointer ">
            <img src="/play.png" alt="play" 
            className="fixed w-50 h-auto transition-transform duration-300 hover:scale-110"
            onClick={() => {salvarNickname();playSoundAndNavigate('/pagina4');}}/>
        </div>
     

    </div>
  )
}
