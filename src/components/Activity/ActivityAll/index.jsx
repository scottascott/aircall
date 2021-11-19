import React , { useState } from 'react';
import moment from 'moment';
import { Divider,Comment,Badge,Drawer } from 'antd';
import {PhoneFilled,ArrowDownOutlined,ArrowUpOutlined ,MoreOutlined } from '@ant-design/icons';
import '../style.css'

import ActivityDetail from '../ActivityDetail/index.jsx';

const ActivityAll =(props)=> {
    //use Drawer component to show activity detail
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    //use moment to format date
    moment.locale('en');

    //show activity detail
    const [activity, setActivity] = useState([]);
    const activityDetail = (activityObj)=>{
        setActivity(activityObj)
    }
    return (
        <div className="activity">
            
            <Drawer placement="right" onClose={onClose} visible={visible} getContainer={false} style={{ position: 'absolute' }} closable={false}>
                <ActivityDetail activity={activity} changeArchived={props.changeArchived}/>
            </Drawer>  
            {props.activities.map(activityObj=>{
                const date= new Date(activityObj.created_at) 
                return(
                    <div key={activityObj.id}>
                        <Divider dashed style={{color:"#C7C7C6",fontWeight:"bold"}}>{moment(date).format("MMMM Do YYYY")}</Divider>
                        <div className="activity-node" onClick={()=>activityDetail(activityObj)}>
                            <div className="avtivity-node-left" onClick={showDrawer}>
                                <Comment
                                    author={<div style={{fontWeight:'bold',color:'black'}}>{activityObj.from}</div>}
                                    avatar={
                                        <Badge count={activityObj.direction==="inbound"?<ArrowDownOutlined style={{ color: '#f5222d' }} />:<ArrowUpOutlined  style={{ color: '#00FF00 ' }} />}>
                                            <PhoneFilled  style={{fontSize:"25px",color:"#C7C7C6",marginTop:"3px"}} rotate="90" />
                                        </Badge>
                                    }
                                    content={
                                        <div className="avtivity-node-info" style={{color:"#C7C7C6"}}>
                                            tried to call on {activityObj.to}
                                        </div>
                                    }
                                />
                            </div>
                            <div className="avtivity-node-right" style={{color: "#C7C7C6"}}>
                                <MoreOutlined /> {moment(date).format("h:mm:ss a")} 
                            </div>
                        </div>                                            
                    </div>
                )
            })}

        </div>
    )
    
}

export default ActivityAll