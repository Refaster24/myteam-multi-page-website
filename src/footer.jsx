import logo from './assets/images/logo.svg'
import { useEffect } from 'react'



export default function Footer({currentPage}){

    useEffect(()=>{
        const home = document.getElementById('homeFooter')
        const about = document.getElementById('aboutFooter')
        if(currentPage === 'home'){
            home.style.color = '#f67e7e'
        }
        if(currentPage === 'about'){
            about.style.color = '#f67e7e'
        }
    })


    return(
<footer className="bg-[#002529] px-12 py-16 flex justify-between gap-12 max-sm:items-center max-sm:flex-col">
    <div className='flex gap-12 max-sm:items-center max-sm:flex-col'>
    <div>
        <a href="">
        <img src={logo} alt="logo" className="w-32 mb-4 max-sm:w-24" />
        </a>

        <div>
            <ul className="flex gap-4">
                <li id='homeFooter' className="hover:text-[#f67e7e]">
                    <a href="">
                        Home
                    </a>
                </li>
                <li id='aboutFooter' className="hover:text-[#f67e7e]">
                    <a href="">
                        About
                    </a>
                </li>
            </ul>
        </div>
    </div>

    <p className='text-gray-400 max-sm:text-center'>
        987 Hillcrest Lane
        <br />
        Irvine, CA
        <br />
        California 92714
        <br />
        Call Us : 949-833-7432
    </p>
    </div>

    <div className='flex flex-col gap-4'>
        <ul className='flex gap-4 max-sm:justify-center'>
            <li>
            <svg className='fill-white transition-colors hover:fill-[#f67e7e]' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="inherit" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/></svg>
            </li>
            
            <li>
            <svg className='fill-white transition-colors hover:fill-[#f67e7e]' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="inherit" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/></svg>
            </li>

            <li>
            <svg className='fill-white transition-colors hover:fill-[#f67e7e]' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="inherit" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/></svg>
            </li>
        </ul>

        <p className='text-gray-400 max-sm:text-center'>Copyright 2020. All Rights Reserved</p>
    </div>

    

</footer>
    )
}