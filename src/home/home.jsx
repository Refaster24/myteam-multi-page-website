import Build from "./build";
import Find from "./find";
import Quotes from "./quotes";
import Ready from "../ready";

export default function Home(){
    return(
        <main>
            <Find/>
            <Build/>
            <Quotes/>
            <Ready/>
        </main>
    )
}