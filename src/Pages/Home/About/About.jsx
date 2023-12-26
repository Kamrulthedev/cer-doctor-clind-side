import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
            <div className='lg:w-1/2 relative'>
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img src={parts} className="w-1/2 absolute right-16 top-24 rounded-lg shadow-2xl border-8 border-white" />
            </div>
                <div className='lg:w-1/2 '>
                    <h3 className='font-bold text-red-600 text-lg mb-2'>About Us</h3>
                    <h1 className="text-3xl font-bold mb-4">We are qualified & of experience in this field</h1>
                    <p className="mb-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-secondary mt-5 bg-red-500">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;