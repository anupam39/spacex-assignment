import React from 'react';
import { useState } from 'react';
import './launchpad.css'

export default function Launchpad(props){

    const launches = props.launches.slice(0,3);
    const eachLaunch = launches.map(launch => (
        <p>{launch}</p>
    ))
    // console.log(eachLaunch)

    return(
        <div className='launchpad' style={{backgroundColor : "grey"}}>
            <h2>Name : {props.name}</h2>
            <h3>Status : {props.status}</h3>
            <p>Details : {props.details}</p>
            {props.launches.length != 0 ? eachLaunch : "No launch available"}
        </div>
    );
}