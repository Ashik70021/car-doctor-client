import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                <img src={parts} className="w-1/2 absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h1 className='text-2xl font-bold text-[#ff5861]'>About us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad id quae, ab vel tempore neque ex tenetur ipsa enim mollitia est voluptate, maxime laudantium rem.</p>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad id quae, ab vel tempore neque ex tenetur ipsa enim mollitia est voluptate, maxime laudantium rem.</p>
                    <button className="btn bg-[#ff5861]">Get More info</button>
                </div>
            </div>
        </div>
    );
};

export default About;