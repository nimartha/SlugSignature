import React from 'react';
import './Design.css';

/**
 * return Main Body
 * @return {object} JSX
 * @param {object} props a set of properties
*/
function Design(props) {
    const designer = props.desUpdate;
    return (
        <div className="Design">
            <h1>Design</h1>
            <div className="image-container">
                <div className="zoom">
                    <img id="design1" src="/images/Design1.png" alt=""
                        onClick={(e) => designer(1)} />
                </div>
                <div className="zoom">
                    <img id="design2" src="/images/Design2.png" alt=""
                        onClick={(e) => designer(2)} />
                </div>
                <div className="zoom">
                    <img id="design3" src="/images/Design3.png" alt=""
                        onClick={(e) => designer(3)} />
                </div>
            </div>
        </div>
    );
};

export default Design;
