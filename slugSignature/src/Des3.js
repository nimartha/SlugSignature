/*
    Following resources are used for this module:
    https://reactjs.org/docs/conditional-rendering.html
*/

import React from 'react';
import './Des3.css';

/**
 * return Design 3
 * @return {object} JSX
 * @param {object} props a set of properties
 * props are intended to be the following:
 *      props.img is an image
 *      props.name is a string representing a name
 *      props.title is a string representing a title
 *      props.major is a string representing a major
 *      props.year is a string representing a graduation year
 *      props.department is a string representing an affiliated department
 *      props.phone is a string representing a phone number
 *      props.email is a string representing an email
 */
function Des3(props) {
    let dispimg = props.img;
    let dispphone = props.phone;
    let dispemail = props.email;
    let nameblock;
    let myblock;
    let tdblock;
    let mytdblock;
    if (!(dispimg)) {
        dispimg = '/images/blank.png';
    };
    if (props.name === '') {
        nameblock = <h1 className="Des3title">First Last</h1>;
    } else {
        nameblock = <h1 className="Des3title">{props.name}</h1>;
    };
    if (props.major === '' || props.year === '') {
        myblock = <div className="Des3p">{props.major}{props.year}</div>;
    } else {
        myblock = <div className="Des3p">{props.major}, {props.year}</div>;
    };
    if (props.title === '' || props.department === '') {
        tdblock = <div className="Des3p">{props.title}{props.department}</div>;
    } else {
        tdblock = <div className="Des3p">
            {props.title}, {props.department}
        </div>;
    };
    if (dispphone === '') {
        dispphone = '(831)-EXA-MPLE';
    };
    if (dispemail === '') {
        dispemail = 'Example@Outlook.com';
    };
    if ((props.major === '' && props.year === '') &&
        (props.title === '' && props.department === '')) {
        mytdblock = <div className="Des3p">
            Title/Major, Department/Year
        </div>;
    } else if (props.major === '' && props.year === '') {
        mytdblock = tdblock;
    } else if (props.title === '' && props.department === '') {
        mytdblock = myblock;
    } else {
        mytdblock = <div>{myblock}{tdblock}</div>;
    }
    return (
        <div className="Des3">
            <img id="picture" src={dispimg} alt="" className="Des3img" />
            {nameblock}
            {mytdblock}
            <div className="Des3pq">
                ________________________________________
            </div>
            <br></br>
            <div className="Des3p">{dispemail}</div>
            <br></br>
            <div className="Des3p">{dispphone}</div>
        </div>
    );
};

export default Des3;
