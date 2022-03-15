/*
    Following resources are used for this module:
    https://reactjs.org/tutorial/tutorial.html
    https://reactjs.org/docs/lifting-state-up.html
*/

import React from 'react';
import Navbar from './Navbar';
import HeroSec from './HeroSec';
import MainBody from './MainBody';
import Preview from './Preview';
import './Main.css';

/**
 * Main class - react component
 */
class Main extends React.Component {
    /**
     * @param {object} props a set of properties
     */
    constructor(props) {
        super(props);
        this.handleImgChange = this.handleImgChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleMajorChange = this.handleMajorChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleCollegeChange = this.handleCollegeChange.bind(this);
        this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleDesChange = this.handleDesChange.bind(this);
        this.state = {img: null, name: '', title: '', major: '',
            year: '', college: '', department: '',
            phone: '', email: '', desNum: 1};
    }
    /**
     * @param {object} imgval an image file
     */
    handleImgChange(imgval) {
        if (imgval) {
            this.setState({img: URL.createObjectURL(imgval)});
        }
    }
    /**
     * @param {object} nameval a name
     */
    handleNameChange(nameval) {
        this.setState({name: nameval});
    }
    /**
     * @param {object} titleval a title
     */
    handleTitleChange(titleval) {
        this.setState({title: titleval});
    }
    /**
     * @param {object} majorval a major
     */
    handleMajorChange(majorval) {
        this.setState({major: majorval});
    }
    /**
     * @param {object} yearval a year
     */
    handleYearChange(yearval) {
        this.setState({year: yearval});
    }
    /**
     * @param {object} colval a college
     */
    handleCollegeChange(colval) {
        this.setState({college: colval});
    }
    /**
     * @param {object} depval a department
     */
    handleDepartmentChange(depval) {
        this.setState({department: depval});
    }
    /**
     * @param {object} phoneval a phone number
     */
    handlePhoneChange(phoneval) {
        this.setState({phone: phoneval});
    }
    /**
     * @param {object} mailval an email address
     */
    handleEmailChange(mailval) {
        this.setState({email: mailval});
    }
    /**
     * @param {object} desval an integer 1-3
     */
    handleDesChange(desval) {
        this.setState({desNum: desval});
    }

    /**
     * @return {object} a <div> containing an <h2>
     * @param {object} props a set of properties
     */
    render() {
        return (
            <div className="Main">
                <Navbar/>
                <HeroSec/>
                <MainBody imgUpdate={this.handleImgChange}
                    nameUpdate={this.handleNameChange}
                    titleUpdate={this.handleTitleChange}
                    majorUpdate={this.handleMajorChange}
                    yearUpdate={this.handleYearChange}
                    collegeUpdate={this.handleCollegeChange}
                    departmentUpdate={this.handleDepartmentChange}
                    phoneUpdate={this.handlePhoneChange}
                    emailUpdate={this.handleEmailChange}
                    desUpdate={this.handleDesChange}/>
                <Preview img={this.state.img} name={this.state.name}
                    title={this.state.title} major={this.state.major}
                    year={this.state.year} college={this.state.college}
                    department={this.state.department}
                    phone={this.state.phone} email={this.state.email}
                    desNum={this.state.desNum}/>
            </div>
        );
    }
}

export default Main;
