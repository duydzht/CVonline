/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

export default function EducationView() {
  return (
    <div className="card__about">
      <div className="about_title">
        <span className="text-warning">EDUCATION {"&"}</span>
        <span className="text-light">certificate</span>
      </div>
      {/* <button className="front__end funix"></button> */}
      <div className="row mt-5 container-fluid">
        <div className="col-2"></div>
        <div className="col-3 d-flex justify-content-center">
          <Image src="/reactjs.jpg" alt="" width="200" height="120px" />
        </div>
        <div className="col-7">
          <div className="container">
            <h3 className="text-warning">
              Front-End Web developer with ReactJS
            </h3>
            <p className="text-light">
              FUNiX - University gave Certificate 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
