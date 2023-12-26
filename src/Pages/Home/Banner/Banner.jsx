import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[500px]">
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={img1} className="w-full rounded-xl h-[500px]" />
                    <div className="absolute top-0  h-full left-0 bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                        <div className='text-white bottom-0 ml-6 w-1/2 mt-12'>
                            <div className=''>
                                <h1 className='text-4xl font-bold'>Affordable <br /> Price For Car <br /> Servicing</h1>
                                <p className='mt-5'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
                                <div className='mt-5 flex'>
                                    <button className="btn bg-red-700 btn-active mr-5 btn-secondary">Discover More</button>
                                    <button className="btn btn-outline border-2 border-red-300 text-white">Latest Project</button>
                                </div>
                            </div>
                            <div className='bottom-0 ml-96 -mr-96 flex justify-end'>
                                <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;