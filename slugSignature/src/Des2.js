import React from 'react';
import './Des2.css';

/**
 * return Design 2
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
function Des2(props) {
    let dispimg = props.img;
    let dispphone = props.phone;
    let dispemail = props.email;
    let dispdepartment = props.department;
    let nameblock;
    let myblock;
    if (!(dispimg)) {
        dispimg = '/images/blank.png';
    };
    if (props.name === '') {
        nameblock = <h1 className="Des2title">First Last</h1>;
    } else {
        nameblock = <h1 className="Des2title">{props.name}</h1>;
    };
    if (dispdepartment === '') {
        dispdepartment = 'Department';
    };
    if (dispphone === '') {
        dispphone = '(123)-456-7890';
    };
    if (dispemail === '') {
        dispemail = 'email@Outlook.com';
    };
    if (props.major === '' && props.year === '') {
        myblock = <p className="Des2p">Major - Year</p>;
    } else if (props.year === '') {
        myblock = <p className="Des2p">{props.major}</p>;
    } else if (props.major ==='') {
        myblock = <p className="Des2p">{props.year}</p>;
    } else {
        myblock = <p className="Des2p">{props.major} - {props.year}</p>;
    }
    return (
        <div className="Des2">
            <div className='Des2bar-top'></div>
            <div className='Des2box-container'></div>
            <img id="picture" src={dispimg} alt="" className="Des2img" />
            <img id="picture" src='/images/Design2bottom.png'
                alt="" className="Des2_img" />
            {nameblock}
            <p className="Des2p">{props.title}</p>
            {myblock}
            <br></br>
            <div className="Des2p">
                <p>{dispdepartment}</p>
                <p>{dispemail}</p>
                <p>{dispphone}</p>
                <p>{props.college}</p>
            </div>
            <div className='Des2bar-bottom'></div>
        </div>
    );
};

export default Des2;
