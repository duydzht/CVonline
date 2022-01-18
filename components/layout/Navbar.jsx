import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Navbar = () => {
    const router = useRouter();
    return (
        <div className='navigation_bar'>
            <Link href='/'>
                <a className='snip1582'>
                    <i className='fa fa-home'></i>
                </a>
            </Link>
            <Link href='/about'>
                <a className='snip1582'>
                    <i className='fa fa-user'></i>
                </a>
            </Link>
            <Link href='/education'>
                <a className='snip1582'>
                    <i className='fa fa-briefcase'></i>
                </a>
            </Link>
            {/* <a className='snip1582'>
                <i className='fa fa-envelope'></i>
            </a> */}
        </div>
    );
};

export default Navbar;
