import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/logo/logo.png'
import { AuthUseContext } from '../Context/UseAuthContext';
import { FaUser } from 'react-icons/fa';

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
            <li><Link to='/blog'>Blog</Link></li>


        </>
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="navbar justify-between bg-base-100 ">
                <div className="navbar-start lg:m-0 m-auto   ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-32 sm:w-52">
                            {navLinks}
                        </ul>

                    </div>
                    <ul>
                        <li><Link to='/' className="btn btn-ghost normal-case text-xl"><img src={logo} className='w-[160px] h-[60px] ' alt="" /></Link></li>
                    </ul>
                    <ul tabIndex={0} className="block lg:hidden">
                        <div className="dropdown dropdown-end">
                            <div className="w-10 rounded-full">
                                {
                                    user?.uid ?
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">  <img src={user?.photoURL} alt="" />  </label>

                                        :
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className=' bg-slate-100 p-6 rounded-full'><div className='absolute top-3 left-3 text-[20px]'>
                                                <FaUser /></div></div>
                                        </label>

                                }
                            </div>

                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link className="justify-between">
                                        {user?.email}
                                    </Link>
                                </li>
                                {
                                    user?.email ?
                                        <>

                                            <li tabIndex={0}>
                                                <Link className="justify-between">
                                                    My Profile
                                                </Link>
                                                <ul className="p-2 bg-slate-100">
                                                    <li><Link to='/addservice'>Add Service</Link></li>
                                                    <li><Link to='/userReviews'>My Reviews</Link></li>
                                                </ul>
                                            </li>
                                            <li><button className="btn btn-outline btn-warning"><Link onClick={handlerToSIgnOut} to='/'>Sign Out</Link></button></li>

                                        </>
                                        :
                                        <>
                                            <li><button className="btn btn-outline btn-secondary mr-4 my-3 "><Link to='/login'>Login</Link></button></li>
                                            <li>
                                                <button className="btn btn-outline btn-secondary"><Link to='/register'>Register</Link></button></li>
                                        </>
                                }
                            </ul>
                        </div>
                    </ul>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navLinks}
                    </ul>
                    <ul>
                        <div className="dropdown dropdown-end">

                            <div className="w-10 rounded-full">
                                {
                                    user?.uid ?
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">  <img src={user?.photoURL} alt="" />  </label>

                                        :
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className=' bg-slate-100 p-6 rounded-full'><div className='absolute top-3 left-3 text-[20px]'>
                                                <FaUser /></div></div>
                                        </label>

                                }
                            </div>

                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <Link className="justify-between">
                                        {user?.email}
                                    </Link>
                                </li>
                                {
                                    user?.email ?
                                        <>

                                            <li tabIndex={0}>
                                                <Link className="justify-between">
                                                    My Profile
                                                </Link>
                                                <ul className="p-2 bg-slate-100">
                                                    <li><Link to='/addservice'>Add Service</Link></li>
                                                    <li><Link to='/userReviews'>My Reviews</Link></li>
                                                </ul>
                                            </li>
                                            <li><button className="btn btn-outline btn-warning"><Link onClick={handlerToSIgnOut} to='/'>Sign Out</Link></button></li>

                                        </>
                                        :
                                        <>
                                            <li><button className="btn btn-outline btn-secondary mr-4 lg:my-3 sm:my-0"><Link to='/login'>Login</Link></button></li>
                                            <li>
                                                <button className="btn btn-outline btn-secondary"><Link to='/register'>Register</Link></button></li>
                                        </>
                                }
                            </ul>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;