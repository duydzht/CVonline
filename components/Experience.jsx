import Image from 'next/image'
import React from 'react'

const ExperienceView = () => {
  return (
    <div className="card__about">
      <div className="about_title">
        <span className="text-warning">EXPERIENCE {"&"}</span>
        <span className="text-light">skills</span>
      </div>
      {/* <button className="front__end funix"></button> */}
      <div className="row mt-5 container-fluid">
        <div className="col-2"></div>
        <div className="col-3 d-flex justify-content-end">
          <Image src="/reactjs.svg" alt="" width="200" height="120px" />
        </div>
        <div className="col-7">
          <div className="container">
            <h3 className="text-warning">
              Front-End Web developer with ReactJS
            </h3>
            <div className="p-2 text-warning border d-flex justify-content-center align-items-center border-warning rounded fw-bold fs-5" style={{width: "200px"}}>1,5 years EXP</div>
            <p className="text-light mt-2">
              1,5 years experiences with ReactJS, React-Hook, React-Router, Redux core, Redux-Saga middleware. 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExperienceView