import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ Service }) => {
    console.log(Service)
    const { _id, img, title, price, service_id, description, facility } = Service;

    return (
        <div>
            <div className="card h-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title mb-6">{title}</h2>

                    <div className="flex justify-between">
                        <p className="text-orange-500 -ml-12 font-bold">Price:$ {price}</p>
                        <button className="btn btn-ghost text-red-500">
                        <FaArrowRight></FaArrowRight>
                    </button>
                </div>
            </div>
        </div>
        </div >
    );
};

export default ServiceCard;