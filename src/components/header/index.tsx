export function Header(){
    return(
        <header className="fixed select-none">
            <div className="fixed flex items-center justify-between w-full mx-auto max-w-7x1 z-1 ">
                <div className="fixed ml-5">
                    <a href="https://github.com/Pixel-Knights">
                        <img  
                        src="/tittle.png " 
                        alt="logo tittle"
                        className="fixed w-70 h-auto transition-transform duration-300 hover:scale-110" // Define a largura e altura em Tailwind 
                        />
                    </a>    
                </div>
            </div>
            <div
            className="fixed top-0 right-0 w-full h-[10%] bg-[#B8C2B9]"
                    style={{borderColor: '#B8C2B9',boxShadow: '0 0 8px #B8C2B9, 0 0 20px #B8C2B9',
        }}
            ></div>
        </header>
        
    )
}