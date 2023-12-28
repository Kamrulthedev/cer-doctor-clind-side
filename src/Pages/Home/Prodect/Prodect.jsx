import { useEffect, useState } from "react";
import ProdectCard from "./ProdectCard";


const Prodect = () => {
    const [Prodects, setProdects] = useState([])



    useEffect(() => {
        fetch(`prodect.json`)
            .then(res => res.json())
            .catch(data => setProdects(data))
    }, [])



    return (
        <div className="mt-10 mb-11">
            <div className="text-center ">
                <p className="text-red-500 font-bold mb-2">Popular Products</p>
                <h1 className="text-2xl font-bold mb-4">Browse Our Products</h1>
                <p>the majority have suffered alteration in some form, by injected humour,  <br /> or randomised words which do not look even slightly believable. </p>
            </div>
            <div>
                {
                    Prodects?.map(prodected => <ProdectCard key={prodected._id} prodected={prodected}></ProdectCard>)
                }
            </div>
        </div>
    );
};

export default Prodect;