export default function Home() {
  return(
    <div className="overflow-hidden">
      <div className="flex justify-center items-center mr-70">
        <a href="https://github.com/Pixel-Knights">
        <img  
            src="/tittle.png " 
            alt="logo tittle"
            className="fixed w-70 h-auto transition-transform duration-300 hover:scale-110" // Define a largura e altura em Tailwind 
            />
        </a>    
      </div>
      <div className="flex justify-center items-center h-screen">
        <img src="/play.png" alt="play" 
        className="fixed w-70 h-auto transition-transform duration-300 hover:scale-110"/>
      </div>
    </div>
  )
}
