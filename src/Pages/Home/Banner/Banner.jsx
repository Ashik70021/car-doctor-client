import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[600px] rounded-xl">
                <img src={img1} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full bottom-0 gap-4 bg-gradient-to-r from-[#151515] rounded-xl">
                    <div className='space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold text-white'>Affordable Price for Car Servicing </h2>
                        <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, consequuntur.</p>
                        <div className="gap-4">
                            <button className="btn btn-error mr-4">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide6" className="btn btn-circle hover:bg-[#ff5861] border-0">❮</a>
                    <a href="#slide2" className="btn btn-circle hover:bg-[#ff5861] border-0">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full h-[600px] rounded-xl">
                <img src={img2} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full bottom-0 gap-4 bg-gradient-to-r from-[#151515] rounded-xl">
                    <div className='space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold text-white'>Affordable Price for Car Servicing </h2>
                        <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, consequuntur.</p>
                        <div className="gap-4">
                            <button className="btn btn-error mr-4">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide1" className="btn btn-circle hover:bg-[#ff5861] border-0">❮</a>
                    <a href="#slide3" className="btn btn-circle hover:bg-[#ff5861] border-0">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full h-[600px] rounded-xl">
                <img src={img3} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full bottom-0 gap-4 bg-gradient-to-r from-[#151515] rounded-xl">
                    <div className='space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold text-white'>Affordable Price for Car Servicing </h2>
                        <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, consequuntur.</p>
                        <div className="gap-4">
                            <button className="btn btn-error mr-4">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide2" className="btn btn-circle hover:bg-[#ff5861] border-0">❮</a>
                    <a href="#slide4" className="btn btn-circle hover:bg-[#ff5861] border-0">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full h-[600px] rounded-xl">
                <img src={img4} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full bottom-0 gap-4 bg-gradient-to-r from-[#151515] rounded-xl">
                    <div className='space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold text-white'>Affordable Price for Car Servicing </h2>
                        <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, consequuntur.</p>
                        <div className="gap-4">
                            <button className="btn btn-error mr-4">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide3" className="btn btn-circle hover:bg-[#ff5861] border-0">❮</a>
                    <a href="#slide5" className="btn btn-circle hover:bg-[#ff5861] border-0">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full h-[600px] rounded-xl">
                <img src={img5} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full bottom-0 gap-4 bg-gradient-to-r from-[#151515] rounded-xl">
                    <div className='space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold text-white'>Affordable Price for Car Servicing </h2>
                        <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, consequuntur.</p>
                        <div className="gap-4">
                            <button className="btn btn-error mr-4">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide4" className="btn btn-circle hover:bg-[#ff5861] border-0">❮</a>
                    <a href="#slide6" className="btn btn-circle hover:bg-[#ff5861] border-0">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full h-[600px] rounded-xl">
                <img src={img6} className="w-full rounded-xl" />
                <div className="absolute flex items-center h-full bottom-0 gap-4 bg-gradient-to-r from-[#151515] rounded-xl">
                    <div className='space-y-7 pl-12 w-1/2'>
                        <h2 className='text-6xl font-bold text-white'>Affordable Price for Car Servicing </h2>
                        <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, consequuntur.</p>
                        <div className="gap-4">
                            <button className="btn btn-error mr-4">Discover More</button>
                            <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
                    <a href="#slide5" className="btn btn-circle hover:bg-[#ff5861] border-0">❮</a>
                    <a href="#slide1" className="btn btn-circle hover:bg-[#ff5861] border-0">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;