import { useEffect } from 'react'
import logo from './assets/images/logo.svg'

export default function Header({currentPage}){

    useEffect(()=>{
        const home = document.getElementById('home')
        const about = document.getElementById('about')
        if(currentPage === 'home'){
            home.style.color = '#f67e7e'
        }
        if(currentPage === 'about'){
            about.style.color = '#f67e7e'
        }
    })

    return(
<header className="bg-[#014e56] px-12 py-10 flex items-center gap-8 max-sm:px-2 max-sm:gap-4">
    <a href="">
        <img src={logo} alt="logo" className="w-32 max-sm:w-24" />
    </a>
    <nav className="flex items-center justify-between basis-4/5 text-xl max-sm:text-xs">
        <div>
            <ul className="flex gap-4">
                <li id='home' className="hover:text-[#f67e7e]">
                    <a href="">
                        Home
                    </a>
                </li>
                <li id='about' className="hover:text-[#f67e7e]">
                    <a href="">
                        About
                    </a>
                </li>
            </ul>
        </div>

        <a className='border-2 border-white rounded-3xl px-2 py-1 transition-all duration-500 font-bold hover:text-black hover:bg-white hover:scale-110' href="">contact us</a>

    </nav>
</header>
    )
}