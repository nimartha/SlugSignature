/*
    Following resources are used for this module:
    https://www.npmjs.com/package/dom-to-image
*/

import React from 'react';
import './Preview.css';
import Des1 from './Des1';
import Des2 from './Des2';
import Des3 from './Des3';
import domtoimage from 'dom-to-image';

/**
 * return Preview
 * @return {object} JSX
 * @param {object} props a set of properties
 */
function Preview(props) {
    const copyToClipboard = async () => {
        const {ClipboardItem} = window;
        domtoimage.toBlob(document.getElementById('pToCopy'), {quality: 1})
            .then(function(blob) {
                const data = [new ClipboardItem({[blob.type]: blob})];
                navigator.clipboard.write(data);
                alert('Copied to Clipboard!');
            });
    };

    const downloadMe = async () => {
        domtoimage.toPng(document.getElementById('pToCopy'), {quality: 1})
            .then(function(dataUrl) {
                const link = document.createElement('a');
                link.download = 'email-signature.png';
                link.href = dataUrl;
                link.click();
            });
    };

    const desNum = props.desNum;
    let designNum;
    if (desNum === 1) {
        designNum = <Des1 img={props.img} name={props.name}
            title={props.title} major={props.major}
            year={props.year} college={props.college}
            department={props.department}
            phone={props.phone} email={props.email} />;
    } else if (desNum === 2) {
        designNum = <Des2 img={props.img} name={props.name}
            title={props.title} major={props.major}
            year={props.year} college={props.college}
            department={props.department}
            phone={props.phone} email={props.email} />;
    } else {
        designNum = <Des3 img={props.img} name={props.name}
            title={props.title} major={props.major}
            year={props.year} college={props.college}
            department={props.department}
            phone={props.phone} email={props.email} />;
    }
    return (
        <div className="Preview">
            <h2> Preview </h2>
            <div id='box1'>
                <div id='emptyBox'></div>
                <div id='pToCopy'>
                    {designNum}
                </div>
            </div>
            <button className="button" onClick={copyToClipboard}>
                Copy
            </button>
            <button className="button" onClick={downloadMe}>
                Download
            </button>
            <div className="previewbar"></div>
        </div>
    );
};

export default Preview;
