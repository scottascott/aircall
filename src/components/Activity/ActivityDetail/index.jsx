import React from 'react'
import axios from 'axios';
import moment from 'moment';
import { Typography, Space,Button  } from 'antd';
const ActivityDetail=props=> {
    //use Typography, Space from ant design for UI appearence
    const { Text } = Typography;
    
    const {changeArchived}=props
    
    return (
        <Space direction="vertical">
            {props.activity.is_archived?<Button type="primary" shape="round" block onClick={()=>changeArchived(false,props.activity.id)}>Unarchive</Button>:<Button type="primary" shape="round" block onClick={()=>changeArchived(true,props.activity.id)}>Archive</Button>}
            <Text strong>Created_at: </Text>
            <Text italic>{moment(props.activity.created_at).format("MMMM Do YYYY h:mm:ss a")}</Text>
            <Text strong>From</Text>
            <Text italic>{props.activity.from}</Text>
            <Text strong>To</Text>
            <Text italic>{props.activity.to}</Text>
            <Text strong>Via</Text>
            <Text italic>{props.activity.via}</Text>
            <Text strong>Duration</Text>
            <Text italic>{props.activity.duration} s</Text>
            <Text strong>Call_type</Text>
            <Text italic>{props.activity.call_type}</Text>
        </Space>
    )
}
export default ActivityDetail
