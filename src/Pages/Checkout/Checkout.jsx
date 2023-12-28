import { useLoaderData } from "react-router-dom";


const Checkout = () => {

    const loder = useLoaderData()
         const {title, _id} = loder;

    return (
        <div>
            <h1>this is checkout pages:{title}</h1>
        </div>
    );
};

export default Checkout;