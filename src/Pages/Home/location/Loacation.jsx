import { FaBusinessTime } from "react-icons/fa";
import { MdPermPhoneMsg } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Loacation = () => {
    return (
        <div className="h-60 mb-4 bg-slate-950">
            <div className="flex justify-center items-center gap-16 text-white">
               <div className="mt-24 flex items-center gap-2">
                <FaBusinessTime className="text-3xl text-red-600"></FaBusinessTime>
                <div>
           
              <p >We are open monday-friday</p>
                <h1 className="text-xl font-bold">7:00 am - 9:00 pm</h1>
          
                </div>

               </div>
               <div className="mt-24 flex items-center gap-2">
               <MdPermPhoneMsg className="text-3xl text-purple-500"></MdPermPhoneMsg>
              <div>
              <p >Have a question?</p>
                <h1 className="text-xl font-bold">+2546 251 2658</h1>
              </div>
               </div>
               <div className="mt-24 flex items-center gap-2">
                <FaLocationDot className="text-3xl text-purple-700"></FaLocationDot>
           <div>
           <p>Need a repair? our address</p>
                <h1 className="text-xl font-bold">Liza Street, New York</h1>
           </div>
               </div>


            </div>
        </div>
    );
};

export default Loacation;