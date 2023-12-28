import Navber from "../Pages/Shared/Navber/Navber";


const ErrorPages = () => {
    return (
        <div>
            <Navber></Navber>
            <div className="  items-center text-center text-4xl font-bold">
                <div >
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                        <img className="border-4 border-blue-300 rounded-xl" src={`https://i.ibb.co/QmSRhH8/1-10.webp`} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ErrorPages;