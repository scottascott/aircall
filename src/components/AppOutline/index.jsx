import React, { Component } from 'react';
import './style.css';

export default class AppOutline extends Component {
    render() {
        return (
            <div className='appOutline'>
                <div className='appOutlineText'>
                    ({this.props.inboundCount}) Aircall Phone
                </div>
            </div>
        )
    }
}


