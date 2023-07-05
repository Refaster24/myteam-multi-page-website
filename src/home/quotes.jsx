import pattern1 from '../assets/images/bg-pattern-home-5.svg'
import pattern2 from '../assets/images/bg-pattern-home-4-about-3.svg'
import quote from '../assets/images/icon-quotes.svg'
import avatar from '../assets/images/avatar-arthur.jpg'

export default function Quotes(){
    return(
<section className='bg-[#004047] relative overflow-hidden px-12 py-28 grid place-items-center max-sm:px-2'>
    <img src={pattern2} alt="pattern1" className="absolute top-0 left-0" />
    <img src={pattern1} alt="pattern1" className="absolute bottom-0 right-0" />
    <h2 className='w-3/5 text-5xl font-bold text-center max-lg:text-4xl max-md:w-full max-sm:text-2xl'>
        Delivering real results for top companies. Some of our
        <span className='text-[#79c8c7]'> success stories.</span>
    </h2>

    <article className='flex flex-wrap gap-16 justify-center mt-24'>
        <div className="relative w-[350px] max-sm:w-[300px]">
            <img src={quote} alt="quote" className="absolute left-[38%] -top-10 z-10" />
            <div className='relative z-20 text-center flex flex-col items-center'>
            <p>
            “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”
            </p>
            <h3 className="text-[#79c8c7] pt-2">Arthur Clarke</h3>
            <em className="">Co-founder of MyPhysio</em>
            <img src={avatar} alt="avatar" className="w-20 mt-3 rounded-full border-4 border-[#79c8c7]" />
            </div>
        </div>

        <div className="relative w-[350px] max-sm:w-[300px]">
            <img src={quote} alt="quote" className="absolute left-[38%] -top-10 z-10" />
            <div className='relative z-20 text-center flex flex-col items-center'>
            <p>
            “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”
            </p>
            <h3 className="text-[#79c8c7] pt-2">Arthur Clarke</h3>
            <em className="">Co-founder of MyPhysio</em>
            <img src={avatar} alt="avatar" className="w-20 mt-3 rounded-full border-4 border-[#79c8c7]" />
            </div>
        </div>

        <div className="relative w-[350px] max-sm:w-[300px]">
            <img src={quote} alt="quote" className="absolute left-[38%] -top-10 z-10" />
            <div className='relative z-20 text-center flex flex-col items-center'>
            <p>
            “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”
            </p>
            <h3 className="text-[#79c8c7] pt-2">Arthur Clarke</h3>
            <em className="">Co-founder of MyPhysio</em>
            <img src={avatar} alt="avatar" className="w-20 mt-3 rounded-full border-4 border-[#79c8c7]" />
            </div>
        </div>

    </article>
</section>
    )
}