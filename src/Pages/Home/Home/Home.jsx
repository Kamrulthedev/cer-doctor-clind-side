import About from "../About/About";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div className="max-w-[940px] mr-12">
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;