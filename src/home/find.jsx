import pattern1 from '../assets/images/bg-pattern-home-1.svg'
import pattern2 from '../assets/images/bg-pattern-home-2.svg'


export default function Find(){

    return(
<section className="bg-[#014e56] flex pt-28 gap-6 max-md:flex-col">
    <div className="basis-1/2 pl-[7.4%] relative max-md:pl-0">
        <h1 className="text-7xl font-bold relative z-10 max-lg:text-6xl max-md:text-4xl max-md:text-center max-md:px-8">
            Find the best
            <span className="text-[#f67e7e]"> talent</span>
        </h1>
        <img className="absolute top-0 -left-28 max-md:invisible" src={pattern1} alt="pattern" />
    </div>

    <div className="basis-1/2 relative h-80 max-md:grid max-md:place-items-center">
        <div className="w-3/5 h-40 flex flex-col justify-between max-md:text-center max-md:h-auto max-md:pb-40">
            <span className='block w-16 h-1 bg-teal-500 rounded-xl max-md:invisible'></span>
            <p className='relative z-10'>
                Finding the right people and building high performing teams can be hard. 
                Most companies are not tapping into the abundance of global talent. 
                We&apos;re about to change that.
            </p>
        </div>
        <img className="absolute bottom-0 right-20 max-md:right-1/5" src={pattern2} alt="pattern" />
    </div>
</section>
    )
}