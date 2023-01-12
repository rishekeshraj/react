import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import './card.css';
import datasc from '../images/ds.jpg';
import hme from '../images/home.jpg'

export function Card(){
    return(
        <>
        <div className="container bgcard">
                
            <h1 className="text-center pb-4">Learn 4.0 Technologies</h1>
            <p className="text-center pb-5">The industrial world is facing rapidly changing challenges.
             Our resources are finite, and we all need to do more with less. Digitalization a
            nd automation are the game changers to meet these challenges on the way to Industry 4.0.</p>
            <div className="row mt-2 ">
            <div className="col-lg-6 ds bg-light p-3">
                <h3>Data Scientist</h3>
                <p>Specific tasks include: Identifying the data-analytics problems that offer the greatest 
                    opportunities to the organization. Determining the correct data sets and variables.</p>
                    <div className="img ">
                        <img src={datasc} className='col-lg-8'/>

                    </div>
            </div> 
            <div className="col-lg-6 nd bg-light p-3">
                <h3>OT Developer</h3>
                <p>Modular OT Developer provides you the best range of distribution board, doors frames, exhaust air cabinets,
                laminar air flow system, ot antistatic flooring & ot control panel with effective & timely delivery.</p>
                <img src={hme} className='col-lg-5'/>
            </div>
            </div>
        </div>
        </>

    )
}