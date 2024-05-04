import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
          fetch('services.json')
          .then(res => res.json())
          .then(data => setServices(data));
    }, [])
    return (
        <div className="mt-16">
            <div className="text-center">
                <h3 className="text-xl text-orange-700">Our Services</h3>
                <h3 className="text-5xl">Our Service Area</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde facere ad eligendi saepe, praesentium nobis nisi reprehenderit. Quisquam, quod molestiae?</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service = {service}
                    ></ServiceCard> )
                }
            </div>
        </div>
    );
};

export default Services;