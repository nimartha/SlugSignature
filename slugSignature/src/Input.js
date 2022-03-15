/*
    Following resources are used for this module:
    https://reactjs.org/tutorial/tutorial.html
    https://reactjs.org/docs/lifting-state-up.html
*/

import React from 'react';
import './Input.css';

/**
 * return Main Body
 * @return {object} JSX
 * @param {object} props a set of properties
 */
function Input(props) {
    const imgUpdate = props.imgUpdate;
    const namer = props.nameUpdate;
    const titler = props.titleUpdate;
    const majorer = props.majorUpdate;
    const yearer = props.yearUpdate;
    const colleger = props.collegeUpdate;
    const departmenter = props.departmentUpdate;
    const phoner = props.phoneUpdate;
    const emailer = props.emailUpdate;
    return (
        <div className="Input">
            <h1>Personal Information</h1>
            <div className="box">
                <p>
                    <label htmlFor="name">Name:</label><br/>
                    <input type="text" id="name" name="name"
                        placeholder="Jane Doe"
                        onChange={(e) => namer(e.target.value)}/><br/>
                </p>
                <p>
                    <label htmlFor="title">Title:</label><br/>
                    <input type="text" id="title" name="title"
                        placeholder="Student"
                        onChange={(e) => titler(e.target.value)}/><br/>
                </p>
                <p>
                    <label htmlFor="major">Major:</label><br/>
                    <input type="text" id="major" name="major"
                        placeholder="Computer Science"
                        onChange={(e) => majorer(e.target.value)}/><br/>
                </p>
                <p>
                    <label htmlFor="year">Year:</label><br/>
                    <input type="text" id="year" name="year"
                        placeholder="2022"
                        onChange={(e) => yearer(e.target.value)}/><br/>
                </p>
            </div>

            <div className="box">
                <p>
                    <label htmlFor="college">Affiliated College:</label><br/>
                    <input type="text" id="college" name="college"
                        placeholder="Stevenson College"
                        onChange={(e) => colleger(e.target.value)}/><br/>
                </p>
                <p>
                    <label htmlFor="department">Department:</label><br/>
                    <input type="text" id="department" name="department"
                        placeholder="Baskin Engineering"
                        onChange={(e) => departmenter(e.target.value)}/><br/>
                </p>
                <p>
                    <label htmlFor="phonenumber">Phone Number:</label><br/>
                    <input type="text" id="phone" name="phone"
                        placeholder="222-222-2222"
                        onChange={(e) => phoner(e.target.value)}/><br/>
                </p>
                <p>
                    <label htmlFor="email">Email:</label><br/>
                    <input type="text" id="email" name="email"
                        placeholder="ucsc@ucsc.edu"
                        onChange={(e) => emailer(e.target.value)}/><br/>
                </p>
            </div>
            <label htmlFor="picture" id='photoUpload'>
                Photo Upload
            </label> <br/>
            <input type="file" id="picture" name="picture" className='test'
                onChange={(e) => imgUpdate(e.target.files[0])}/><br/>
        </div>

    );
};

export default Input;
