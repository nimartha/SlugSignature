import React from 'react';
import './Des1.css';
/**
 * return Design 1
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
function Des1(props) {
    let dispimg = props.img;
    let dispphone = props.phone;
    let dispemail = props.email;
    let disptitle = props.title;
    let dispdepartment = props.department;
    let nameblock;
    let myblock;
    let tdblock;
    if (!(dispimg)) {
        dispimg = '/images/blank.png';
    };

    if (props.name === '') {
        nameblock = <h1 className="Des1title">First Last</h1>;
    } else {
        nameblock = <h1 className="Des1title">{props.name}</h1>;
    };

    if (dispphone === '') {
        dispphone = '(555) 555 - 5555';
    };
    if (dispemail === '') {
        dispemail = 'firstlast@ucsc.edu';
    };

    if (disptitle === '') {
        disptitle = 'Title';
    };
    if (dispdepartment === '') {
        dispdepartment = 'Department';
    };

    if (props.major === '' && props.year === '') {
        myblock = <div className="Des1p">Major - Year</div>;
    } else if (props.major === '' || props.year === '') {
        myblock = <div className="Des1p">{props.major}{props.year}</div>;
    } else {
        myblock = <div className="Des1p">{props.major} - {props.year}</div>;
    };

    if (props.title === '' && props.department === '') {
        tdblock = <div className="Des1p">Title - Department</div>;
    } else if (props.title === '' || props.department === '') {
        tdblock = <div className="Des1p">{props.title}{props.department}</div>;
    } else {
        tdblock = <div className="Des1p">
            {props.title} - {props.department}
        </div>;
    };

    return (
        <div className="Des1">
            <img id="picture" src={dispimg} alt="" className="Des1img" />
            {nameblock}
            <div className="Des1p">
                <div>{myblock}</div>
                <br></br>
                <div>{tdblock}</div>
                <p>{dispphone}</p>
                <p>{dispemail}</p>
            </div>
            <div className="design1container">
                <img id="design1" src="/images/Rectangle.png" alt=""
                    width="95%" height="10%" /> </div>
        </div>
    );
};

export default Des1;
