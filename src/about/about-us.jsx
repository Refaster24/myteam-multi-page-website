import pattern from '../assets/images/bg-pattern-about-1-mobile-nav-1.svg'

export default function About(){
    return(
        <section className='bg-[#014e56] relative overflow-hidden flex justify-around pt-16 pb-28 gap-6 max-md:flex-col max-md:px-12'>
            <h1 className="text-7xl font-bold relative z-10 max-lg:text-6xl max-md:text-4xl max-md:text-center max-md:px-8">About</h1>
            <div className="relative z-20 basis-1/3 max-md:basis-full max-md:text-center">
                <span className="block mb-12 w-16 h-1 bg-[#f67e7e] rounded-xl max-md:invisible"></span>
                <p>We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We&apos;ll bring those teams to you.</p>
            </div>
            <img src={pattern} alt="pattern" className="absolute bottom-0 -right-28 max-md:rotate-90 max-md:right-0 max-md:-bottom-28" />
        </section>
    )
}