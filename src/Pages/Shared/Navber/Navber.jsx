
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
const Navber = () => {

    const NovLinks = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/About'}>About</Link></li>
        <li><Link to={'/Services'}>Services</Link></li>
        <li><Link to={'/Blog'}>Blog</Link></li>
        <li><Link to={'/Contact'}>Contact</Link></li> 
    </>

    return (
        <div className="navbar bg-base-100 max-w-[940px] -ml-9 mb-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NovLinks}
                    </ul>
                </div>
                <Link className="btn normal-case btn-ghost text-xl"><img className='w-16 h-16' src={logo} alt="" /></Link> 
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NovLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn">APPOINTMENT</button>
            </div>
        </div>
    );
};

export default Navber;