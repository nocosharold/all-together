import React, { Component } from 'react';
import './VaccinePage.css';

class BioNTech extends Component {
    render() {
        return (
            <div className="eleven wide column">
                <div className="component_header">
                    <h1>pfizer biontech&#x27;s</h1>
                    <h1>comirnaty</h1>
                </div>
                <p>data as of 02 june 2021</p>
                <div>
                    <img src="https://ik.imagekit.io/1cqtok8fv7n/vaccines/biontech_zTFJFSQbPJJ.png" alt="Biontech Data"></img>
                </div>
            </div>
        );
    };
};
export default BioNTech;