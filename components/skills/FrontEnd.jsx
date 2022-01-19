/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function FrontEnd() {
    return (
        <div className='row mt-5'>
            <div className='col-6'>
                <div className='card_skill row'>
                    <div className='col-4'>
                        <img
                            src='/reactjs.svg'
                            alt=''
                            width='50px'
                            height='auto'
                        />
                        <p>React</p>
                    </div>
                    <div className='col-8'>
                        <span className='text-warning'> React js</span>
                        <div className='text-light'>
                            ClassComponent, Functional Component, Redux, AXIOS
                            (call API)
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-6'>
                <div className='card_skill row'>
                    <div className='col-4'>
                        <img
                            src='/nextjs.jpg'
                            alt=''
                            width='70px'
                            height='50px'
                        />
                    </div>
                    <div className='col-8'>
                        <span className='text-warning'> NextJS</span>
                        <div className='text-light'>
                            Functional Component, Redux, AXIOS (call API)
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-6 mt-4'>
                <div className='card_skill row'>
                    <div className='col-4'>
                        <img
                            src='/html.jpg'
                            alt=''
                            width='70px'
                            height='70px'
                        />
                    </div>
                    <div className='col-8'>
                        <span className='text-warning'> HTML 5</span>
                        <div className='text-light'>Bootstrap</div>
                    </div>
                </div>
            </div>
            <div className='col-6 mt-4'>
                <div className='card_skill row'>
                    <div className='col-4'>
                        <img
                            src='/css3.jpg'
                            alt=''
                            width='70px'
                            height='70px'
                        />
                    </div>
                    <div className='col-8'>
                        <span className='text-warning'> CSS 3</span>
                        <div className='text-light'>Website Responsive</div>
                    </div>
                </div>
            </div>
            <div className='col-6 mt-4'>
                <div className='card_skill row'>
                    <div className='col-4'>
                        <img src='/js.png' alt='' width='70px' height='70px' />
                    </div>
                    <div className='col-8'>
                        <span className='text-warning'> JavaScript</span>
                        <div className='text-light'>JavaScript ES5, ES6</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
