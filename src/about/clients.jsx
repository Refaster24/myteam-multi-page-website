import gadgets from '../assets/images/logo-gadgets-now.png'
import jakarta from '../assets/images/logo-jakarta-post.png'
import tech from '../assets/images/logo-tech-radar.png'
import guardian from '../assets/images/logo-the-guardian.png'
import verge from '../assets/images/logo-the-verge.png'


export default function Clients(){
    return(
        <section className="bg-[#012f34] py-20">

            <h2 className="text-6xl font-bold text-center mb-8 max-md:text-5xl max-md:w-full max-sm:text-4xl max-sm:px-2">Some of our clients</h2>

            <div className="flex justify-center items-center gap-6 px-4 flex-wrap max-md:flex-col max-md:gap-10">
                <img src={gadgets} alt="gadgets logo" className="object-contain w-40" />
                <img src={guardian} alt="guardian logo" className="object-contain w-40" />
                <img src={tech} alt="tech logo" className="object-contain w-40" />
                <img src={jakarta} alt="jakarta logo" className="object-contain w-40" />
                <img src={verge} alt="verge logo" className="object-contain w-40" />
            </div>

        </section>
    )
}