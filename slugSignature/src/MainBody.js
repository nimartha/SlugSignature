/*
    Following resources are used for this module:
    https://reactjs.org/tutorial/tutorial.html
    https://reactjs.org/docs/lifting-state-up.html
*/

import React from 'react';
import Input from './Input';
import Design from './Design';
import './MainBody.css';

/**
 * return Main Body
 * @return {object} JSX
 * @param {object} props a set of properties
 */
function MainBody(props) {
    const imager = props.imgUpdate;
    const namer = props.nameUpdate;
    const titler = props.titleUpdate;
    const majorer = props.majorUpdate;
    const yearer = props.yearUpdate;
    const colleger = props.collegeUpdate;
    const departmenter = props.departmentUpdate;
    const phoner = props.phoneUpdate;
    const emailer = props.emailUpdate;
    const designer = props.desUpdate;

    return (
        <div className="MainBody">
            <div className='container1'>
                <Input imgUpdate={imager} nameUpdate={namer}
                    titleUpdate={titler} majorUpdate={majorer}
                    yearUpdate={yearer} collegeUpdate={colleger}
                    departmentUpdate={departmenter}
                    phoneUpdate={phoner} emailUpdate={emailer}/>
            </div>
            <div className='container2'>
                <Design desUpdate={designer}/>
            </div>
        </div>
    );
};

export default MainBody;
