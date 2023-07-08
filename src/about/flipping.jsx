import '../flipping.css'
import avatar from '../assets/images/avatar-arthur.jpg'
import pattern1 from '../assets/images/bg-pattern-about-2-contact-1.svg'
import pattern2 from '../assets/images/bg-pattern-home-4-about-3.svg'


export default function Flipping(){
    return(
<section className='bg-[#004047] relative px-4 pt-32 pb-16 flex flex-col items-center gap-10'>

    <h2 className="text-6xl font-bold mb-8 relative z-10 max-md:text-5xl max-sm:text-2xl">Meet the directors</h2>

    <article className='py-12 grid grid-flow-row grid-cols-3 gap-10 relative z-10 max-lg:grid-cols-2 max-md:grid-cols-1'>


<div className="card">
    <div className="card__content">
        
        <div className="card__front">
        <img src={avatar} alt="avatar" className='card__img'/>
        <h3 className="card__title">Cruz Hamer</h3>
        <p className="card__subtitle">Co-founder & CTO</p>
        <p className='card__info'>more info</p>
        </div> 
        
        <div className="card__back">
            <h3 className="card__title">Cruz Hamer</h3>
            <p className="card__body">“Technology is at the forefront of enabling distributed teams. That&apos;s where we come in.”</p>
        
            <ul className='flex gap-4 max-sm:justify-center'>
                <li>
                <svg className='fill-white transition-colors hover:fill-[#f67e7e]' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="inherit" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/></svg>
                </li>
                
                <li>
                <svg className='fill-white transition-colors hover:fill-[#f67e7e]' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="inherit" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/></svg>
                </li>
            </ul>

        </div>
        
    </div>
</div>

<div className="card">
    <div className="card__content">
        
        <div className="card__front">
        <img src={avatar} alt="avatar" className='card__img'/>
        <h3 className="card__title">Cruz Hamer</h3>
        <p className="card__subtitle">Co-founder & CTO</p>
        <p className='card__info'>more info</p>
        </div> 
        
        <div className="card__back">
            <h3 className="card__title">Cruz Hamer</h3>
            <p className="card__body">“Technology is at the forefront of enabling distributed teams. That&apos;s where we come in.”</p>
        
            <ul className='flex gap-4 max-sm:justify-center'>
                <li>
                <svg className='fill-white transition-colors hover:fill-[#f67e7e]' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="inherit" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/></svg>
                </li>
                
                <li>
                <svg className='fill-white transition-colors hover:fill-[#f67e7e]' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="inherit" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/></svg>
                </li>
            </ul>

        </div>
        
    </div>
</div>

<div className="card">
    <div className="card__content">
        
        <div className="card__front">
        <img src={avatar} alt="avatar" className='card__img'/>
        <h3 className="card__title">Cruz Hamer</h3>
        <p className="card__subtitle">Co-founder & CTO</p>
        <p className='card__info'>more info</p>
        </div> 
        
        <div className="card__back">
            <h3 className="card__title">Cruz Hamer</h3>
            <p className="card__body">“Technology is at the forefront of enabling distributed teams. That&apos;s where we come in.”</p>
        
            <ul className='flex gap-4 max-sm:justify-center'>
                <li>
                <svg className='fill-white transition-colors hover:fill-[#f67e7e]' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="inherit" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/></svg>
                </li>
                
                <li>
                <svg className='fill-white transition-colors hover:fill-[#f67e7e]' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="inherit" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/></svg>
                </li>
            </ul>

        </div>
        
    </div>
</div>

<div className="card">
    <div className="card__content">
        
        <div className="card__front">
        <img src={avatar} alt="avatar" className='card__img'/>
        <h3 className="card__title">Cruz Hamer</h3>
        <p className="card__subtitle">Co-founder & CTO</p>
        <p className='card__info'>more info</p>
        </div> 
        
        <div className="card__back">
            <h3 className="card__title">Cruz Hamer</h3>
            <p className="card__body">“Technology is at the forefront of enabling distributed teams. That&apos;s where we come in.”</p>
        
            <ul className='flex gap-4 max-sm:justify-center'>
                <li>
                <svg className='fill-white transition-colors hover:fill-[#f67e7e]' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="inherit" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/></svg>
                </li>
                
                <li>
                <svg className='fill-white transition-colors hover:fill-[#f67e7e]' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="inherit" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/></svg>
                </li>
            </ul>

        </div>
        
    </div>
</div>

<div className="card">
    <div className="card__content">
        
        <div className="card__front">
        <img src={avatar} alt="avatar" className='card__img'/>
        <h3 className="card__title">Cruz Hamer</h3>
        <p className="card__subtitle">Co-founder & CTO</p>
        <p className='card__info'>more info</p>
        </div> 
        
        <div className="card__back">
            <h3 className="card__title">Cruz Hamer</h3>
            <p className="card__body">“Technology is at the forefront of enabling distributed teams. That&apos;s where we come in.”</p>
        
            <ul className='flex gap-4 max-sm:justify-center'>
                <li>
                <svg className='fill-white transition-colors hover:fill-[#f67e7e]' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="inherit" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/></svg>
                </li>
                
                <li>
                <svg className='fill-white transition-colors hover:fill-[#f67e7e]' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="inherit" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/></svg>
                </li>
            </ul>

        </div>
        
    </div>
</div>

<div className="card">
    <div className="card__content">
        
        <div className="card__front">
        <img src={avatar} alt="avatar" className='card__img'/>
        <h3 className="card__title">Cruz Hamer</h3>
        <p className="card__subtitle">Co-founder & CTO</p>
        <p className='card__info'>more info</p>
        </div> 
        
        <div className="card__back">
            <h3 className="card__title">Cruz Hamer</h3>
            <p className="card__body">“Technology is at the forefront of enabling distributed teams. That&apos;s where we come in.”</p>
        
            <ul className='flex gap-4 max-sm:justify-center'>
                <li>
                <svg className='fill-white transition-colors hover:fill-[#f67e7e]' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="inherit" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/></svg>
                </li>
                
                <li>
                <svg className='fill-white transition-colors hover:fill-[#f67e7e]' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="inherit" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/></svg>
                </li>
            </ul>

        </div>
        
    </div>
</div>

<div className="card">
    <div className="card__content">
        
        <div className="card__front">
        <img src={avatar} alt="avatar" className='card__img'/>
        <h3 className="card__title">Cruz Hamer</h3>
        <p className="card__subtitle">Co-founder & CTO</p>
        <p className='card__info'>more info</p>
        </div> 
        
        <div className="card__back">
            <h3 className="card__title">Cruz Hamer</h3>
            <p className="card__body">“Technology is at the forefront of enabling distributed teams. That&apos;s where we come in.”</p>
        
            <ul className='flex gap-4 max-sm:justify-center'>
                <li>
                <svg className='fill-white transition-colors hover:fill-[#f67e7e]' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="inherit" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/></svg>
                </li>
                
                <li>
                <svg className='fill-white transition-colors hover:fill-[#f67e7e]' xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="inherit" d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"/></svg>
                </li>
            </ul>

        </div>
        
    </div>
</div>
    </article>

    <img src={pattern1} alt='pattern' className="absolute top-0 -left-28" />
    <img src={pattern2} alt='pattern' className="absolute bottom-0 right-0" />

</section>
    )
}