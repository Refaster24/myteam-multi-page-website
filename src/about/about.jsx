import Ready from "../ready";
import About from "./about-us";
import Clients from "./clients";
import Flipping from "./flipping";

export default function Home(){
    return(
        <main>
            <About/>
            <Flipping/>
            <Clients/>
            <Ready/>
        </main>
    )
}