import About from "../About/About";
import Banner from "../Banner/Banner";
import Prodect from "../Prodect/Prodect";
import Services from "../Services/Services";
import Loacation from "../location/Loacation";


const Home = () => {
    return (
        <div className="max-w-[940px] mr-12">
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Loacation></Loacation>
            <Prodect></Prodect>
        </div>
    );
};

export default Home;