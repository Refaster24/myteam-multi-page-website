import pattern from './assets/images/bg-pattern-home-6-about-5.svg'

export default function Ready(){
    return(
<section className="relative bg-[#f67e7e] text-black flex items-center justify-between gap-12 px-24 pb-20 pt-16 max-md:flex-col max-sm:px-12 max-sm:pb-4 max-sm:pt-8">
        <img src={pattern} alt="pattern" className='absolute left-0 bottom-0 w-40'/>
        <h2 className='text-6xl font-bold text-center max-lg:text-4xl max-md:w-full max-sm:text-3xl'>
            Ready to get started?
        </h2>

        <a className='relative z-20 text-2xl border-2 border-black rounded-3xl px-2 py-1 transition-all duration-500 font-bold hover:text-white hover:bg-black hover:scale-110 max-sm:text-xl' href="">contact us</a>
</section>
    )
}