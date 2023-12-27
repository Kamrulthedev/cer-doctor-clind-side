

import { useEffect } from "react";
import { useState } from "react";


const Services = () => {

    const [Serviced, setServiced] = useState([])

    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServiced(data))
    },[])


    return (
        <div className="mt-10 mb-8">
            <div className="text-center">
                <h1 className="text-red-500 font-bold">Service</h1>
                <h2 className="text-3xl font-bold mb-4"> Our Service Area</h2>
                <p>the majority have suffered alteration in some form, br <br /> by injected humour, or randomised words which do not look even slightly believable. </p>
                <h1>services: {Serviced.length}</h1>
            </div>
        </div>
    );
};

export default Services;