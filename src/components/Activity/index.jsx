import React, { Component } from 'react';
import { Tabs  } from 'antd';
import ActivityFeed from './ActivityFeed/index.jsx';
import ActivityAll from './ActivityAll/index.jsx';
import Archive from './Archive/index.jsx';
import './style.css';

const Activity =(props)=> {
    const { TabPane } = Tabs;
    const {activities,changeArchived,archiveAll,unArchiveAll}=props;
    return (
        <div className='activity-container'>
            <div className='tabs'>
                <Tabs defaultActiveKey="1" >
                    <TabPane tab={
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img height="28" src="https://i.ibb.co/BCzg0HR/image.png" alt="logo"/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        } disabled key="0">
                    </TabPane>
                    <TabPane tab="Inbox" key="1">
                    <ActivityFeed activities={activities} changeArchived={changeArchived} archiveAll={archiveAll}/>
                    </TabPane>
                    <TabPane tab="All calls" key="2">
                    <ActivityAll activities={activities} changeArchived={changeArchived}/>
                    </TabPane>
                    <TabPane tab={<img src="https://i.ibb.co/DLRmnXx/image.png" alt="logo" />} key="3">
                    <Archive activities={activities} changeArchived={changeArchived} unArchiveAll={unArchiveAll}/>
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}
export default Activity