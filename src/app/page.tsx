'use client'; //  Adicionado para permitir uso de hooks e interatividade
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation'; //  Adicionado para redirecionamento manual
import { useState } from "react";
import Link from "next/link";


export default function Home() {
  useEffect(() => {
    // exemplo: parando um áudio que estava tocando
    const isSomAtivo = localStorage.getItem("somAtivo");
    if (isSomAtivo === "true") {
      const audio = new Audio("/sounds/menu_music.mp3");
      audio.pause();
      audio.currentTime = 0;
      localStorage.setItem("somAtivo", "false");
    }
  }, []);

useEffect(() => {
  if (!window.location.hash.includes('#recarregado')) {
    window.location.href = window.location.href + '#recarregado';
    window.location.reload();
  }
}, []);

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
    
    <div className="select-none ">
      <div className="flex justify-center items-center mr-70">
        <a href="https://github.com/Pixel-Knights">
        <img  
            src="/tittle.png " 
            alt="logo tittle"
            className="fixed z-10 w-70 h-auto transition-transform duration-300 hover:scale-110" // Define a largura e altura em Tailwind 
            />
        </a>
        <div id="cat1" className="fixed flex justify-center items-center h-screen" onClick={playSound}>
          <img className="w-40 mt-321 ml-250 animate-bounce" src="cat1.png" alt="gato1" />
        </div>
        
        <div id="cat2" className="fixed flex justify-center items-center h-screen" onClick={playSound}>
          <img className="w-45 mt-321 mr-100 ease-linear" src="cat2.png" alt="gato2" />
        </div>    
      </div>

      <div className="flex justify-center items-center h-screen ">
        <img src="/play.png" alt="play" 
        className="fixed w-70 h-auto transition-transform duration-300 hover:scale-110"
        onClick={() => playSoundAndNavigate('/pagina2')}/>
      </div>

    </div>
  )
}
