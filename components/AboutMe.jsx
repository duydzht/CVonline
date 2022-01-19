/* eslint-disable @next/next/no-img-element */
import React from 'react';
import BackEnd from './skills/BackEnd';
import FrontEnd from './skills/FrontEnd';
import Other from './skills/Other';

const Aboutme = () => {
    return (
        <div className='card__about'>
            <div className='about_title'>
                <span className='text-light'>ABOUT</span>{' '}
                <span className='text-warning'>ME</span>
            </div>
            <div className='about_content row container-fluid mt-5'>
                <div className='col-2'></div>
                <div className='col-3'>
                    <h3 className='text-light'>INFORMATION</h3>
                    <hr className='bg-light' />
                    <button className='front__end text-info'>PERSONAL</button>
                    <div className='row mt-5'>
                        <div className='col-5 text-light'>
                            <p>First Name </p>
                            <p>Last Name </p>
                            <p>Age </p>
                            <p>Nationality </p>
                            <p>Language </p>
                            <p>Address </p>
                        </div>
                        <div className='col-7 text-warning text-right'>
                            <p>HOANG</p>
                            <p>DUY</p>
                            <p>22</p>
                            <p>VIETNAM</p>
                            <p>Vietnamese, English</p>
                            <p>Hung Ha district, Thai Binh Province</p>
                        </div>
                    </div>
                    <button className='front__end text-info'>CONTACT</button>
                    <div className="row mt-5">
                    <div className='col-2 text-light'>
                            <p><i className="fa fa-envelope-o"></i></p>
                            <p><i className="fa fa-phone-square"></i></p>
                            <p><i className="fa fa-facebook"></i></p>
                            <p><i className="fa fa-skype"></i></p>
                            <p><i className="fa fa-github"></i></p>
                        </div>
                        <div className='col-10 text-warning text-right'>
                            <p>hoangduy241199@gmail.com</p>
                            <p>+84-969-237-429</p>
                            <p><a href='www.facebook.com/duy.zp'>Hoàng Duy Duy</a></p>
                            <p>live:.cid.207563c5f1c97d78</p>
                            <p><a href='https://github.com/duydzht'>Duy Hoang</a></p>
                        </div>
                    </div>
                </div>
                <div className='col-7'>
                    <h3 className='text-center text-warning'>MY SKILL</h3>
                    <hr className='bg-light' />
                    <button className='front__end'>FRONT - END</button>
                    <FrontEnd />
                    <button className='front__end'>BACK - END</button>
                    <BackEnd />
                    <button className='front__end'>OTHER</button>
                    <Other />
                </div>
            </div>
        </div>
    );
};

export default Aboutme;
