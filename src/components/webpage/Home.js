import ImageSlider from "./ImageSlider";
import { IntroductionSection } from "./IntroductionSection"
import Updates from "./Updates";
import Events from './Events/Events'
import AboutUniversity from "./AboutUniversity";
import Course from "./Course";
import Cardslider  from "./Cardslider";

export const Home=()=>{
    return(
        <>
        <IntroductionSection/>
        <Updates/>
        <Events/>
        <AboutUniversity/>
        <ImageSlider/>
        <Course/>
       
        </>
        
    )
}
export default Home;
