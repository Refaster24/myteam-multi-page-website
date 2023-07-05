import cog from '../assets/images/icon-cog.svg'
import chart from '../assets/images/icon-chart.svg'
import person from '../assets/images/icon-person.svg'
import pattern from '../assets/images/bg-pattern-home-3.svg'


export default function Build(){
    return(
<section className="bg-[#012f34] flex justify-between gap-4 px-12 py-32 relative overflow-hidden max-md:flex-col">
    <div className="basis-1/3 space-y-8 max-md:mb-7">
        <span className="block w-16 h-1 bg-[#f67e7e] rounded-xl max-md:invisible"></span>
        <h2 className="text-5xl font-bold max-lg:text-4xl max-md:text-center max-md:text-5xl max-sm:text-3xl">
            Build & manage distributed teams like no one else.
        </h2>
    </div>

    <div className="flex flex-col gap-12 basis-1/2 relative z-10">
        <div className="flex gap-2 items-center max-sm:flex-col max-sm:text-center">
            <img src={person} alt="person" />
            <div>
                <h3 className="text-[#f67e7e] mb-2">Experienced Individuals</h3>
                <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
            </div>
        </div>
        <div className="flex gap-2 items-center max-sm:flex-col max-sm:text-center">
            <img src={cog} alt="cog" />
            <div>
                <h3 className="text-[#f67e7e] mb-2">Easy to Implement</h3>
                <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
            </div>
        </div>
        <div className="flex gap-2 items-center max-sm:flex-col max-sm:text-center">
            <img src={chart} alt="chart" />
            <div>
                <h3 className="text-[#f67e7e] mb-2">Enhanced Productivity</h3>
                <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
            </div>
        </div>
    </div>
    <img src={pattern} alt="pattern" className='absolute bottom-0 -right-28'/>
</section>
    )
}