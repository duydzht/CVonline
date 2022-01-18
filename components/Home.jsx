/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
    return (
        <div className='home__page'>
            <div className='home_top'>
                <p>- I&apos;M DUY HOANG</p>
            </div>
            <div className='home_bottom'>
                <p>FRONT-END DEVELOPER</p>
                <div className='home__content'>
                    I am a web developer. Advanced custom website development
                    and optimization, highlighting UI/UX Design, Back-end API
                    Integration tailored to specific requirements. That&apos;s
                    the job I want to do when I join your company..
                </div>
                <Link href='/about'>
                    <a className='button12'>
                        <em> </em>
                        <span>ABOUT ME</span>
                    </a>
                </Link>
            </div>
            <div className='card__img'>
                <img src='/duyduy.jpg' alt='' width='100%' height='auto' />
            </div>
        </div>
    );
};

export default HomePage;
