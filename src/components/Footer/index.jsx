import React, { Component } from 'react';
import { Badge } from 'antd';
import './style.css';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer' >
                <Badge className='inboundNum' count={this.props.inboundCount}/>
            </div>
        )
    }
}
