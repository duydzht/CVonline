/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';

export default function EducationView() {
    return (
        <div className='card__about'>
            <div className='about_title'>
                <span className='text-warning'>EDUCATION {'&'}</span>
                <span className='text-light'>certificates</span>
            </div>
                    <button className='front__end funix'>FUNIX - UNIVERSITY</button>
            <div className='row mt-5 container-fluid'>
                <div className='col-2'></div>
                <div className='col-3'>
                    <Image
                        src='/reactjs.jpg'
                        alt=''
                        width='300'
                        height='220px'
                    />
                </div>
                <div className='col-7'>
                    <div className='container'>
                        <h3 className='text-warning'>
                            Front-End Web programing with ReactJS
                        </h3>
                        <p className='text-light'>
                            Description: Build a human resource management
                            website using ReactJS framework. Which requires
                            using Redux, Call API
                        </p>
                    </div>
                </div>
            </div>
            <div className='row mt-5 container-fluid'>
                <div className='col-2'></div>
                <div className='col-7'>
                    <div className='container'>
                        <h3 className='text-warning'>
                            Certificate Web Developer responsive with HTML5 -
                            CSS3
                        </h3>
                        <p className='text-light'>
                            Description: Combine HTML and CSS, use more CSS
                            libraries like Bootstrap to handle the UI to suit
                            the requirements
                        </p>
                    </div>
                </div>
                <div className='col-3'>
                    <Image src='/web.jpg' alt='' width='300' height='220px' />
                </div>
            </div>
            <div className='row mt-5 mb-5 container-fluid'>
                <div className='col-2'></div>
                <div className='col-3'>
                    <Image
                        src='/javascript.jpg'
                        alt=''
                        width='300'
                        height='220px'
                    />
                </div>
                <div className='col-7'>
                    <div className='container'>
                        <h3 className='text-warning'>
                            Creating your Program with JavaScript
                        </h3>
                        <p className='text-light'>
                            Description: Building an application to manage
                            student grades in schools using JavaScript
                            programming language
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
