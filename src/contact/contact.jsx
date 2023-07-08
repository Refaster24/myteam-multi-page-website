import pattern1 from '../assets/images/bg-pattern-about-2-contact-1.svg'
import pattern2 from '../assets/images/bg-pattern-contact-2.svg'
import cog from '../assets/images/icon-cog.svg'
import chart from '../assets/images/icon-chart.svg'
import person from '../assets/images/icon-person.svg'
import Form from './form'


export default function Home(){
    return(
        <main>
            <section className='relative overflow-hidden bg-[#014e56] px-28 py-12 flex justify-between gap-4 max-lg:flex-col max-lg:items-center max-sm:px-6'>
<img src={pattern1} alt="pattern" className="absolute top-0 -left-28 max-sm:w-32 max-sm:-left-16" />
<img src={pattern2} alt="pattern" className="absolute bottom-0 -right-28 max-sm:w-32 max-sm:-right-0 max-sm:-bottom-16" />
<article className='relative z-10'>
    <h1 className="text-7xl font-bold relative z-10 max-lg:text-6xl max-md:text-4xl max-md:px-8 max-lg:text-center">Contact</h1>
    <p className='text-[#f67e7e] font-bold text-3xl mt-5 pl-6 max-lg:pl-0 max-lg:text-center'>Ask us about</p>

    <div className="flex flex-col gap-6 mt-6 basis-1/2 relative z-10">

        <div className="flex gap-2 items-center max-sm:flex-col max-sm:text-center">
            <img src={person} alt="person" />
            <p>The quality of our talent network</p>
        </div>

       <div className="flex gap-2 items-center max-sm:flex-col max-sm:text-center">
            <img src={cog} alt="cog" />
            <p>Usage & implementation of our software</p>
        </div>

       <div className="flex gap-2 items-center max-sm:flex-col max-sm:text-center">
            <img src={chart} alt="chart" />
            <p>How we help drive innovation</p>
        </div>

    </div>

</article>

        <Form/>

            </section>
        </main>
    )
}