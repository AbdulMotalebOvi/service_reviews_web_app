import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/logo/loho.png'
import { AuthUseContext } from '../Context/UseAuthContext';

const Header = () => {
    const { user, logOut } = useContext(AuthUseContext)
    const handlerToSIgnOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    const navLinks =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/serviceALl'>Services</Link></li>
            {
                user?.email ?
                    <>

                        <li tabIndex={0}>
                            <Link className="justify-between">
                                Profile
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2 bg-slate-100">
                                <li><Link to='/addservice'>Add Service</Link></li>
                                <li><Link to=''>My Reviews</Link></li>
                            </ul>
                        </li>
                        <li><button className="btn btn-outline btn-warning"><Link onClick={handlerToSIgnOut} to='/'>Sign Out</Link></button></li>

                    </>
                    :
                    <>
                        <li><button className="btn btn-outline btn-secondary mr-4"><Link to='/login'>Login</Link></button></li>
                        <li>
                            <button className="btn btn-outline btn-secondary"><Link to='/register'>Register</Link></button></li>
                    </>
            }
        </>
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl"> daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navLinks}
                    </ul>
                </div>
                <div className="">

                </div>
            </div>
        </div>
    );
};

export default Header;