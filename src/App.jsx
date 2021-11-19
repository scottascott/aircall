import React,{ useState,useEffect }  from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


import Header from './Header.jsx';

import AppOutline from './components/AppOutline/index.jsx';
import Activity from './components/Activity/index.jsx';
import Footer from './components/Footer/index.jsx';


const App = () => {
  const [activities, setActivities] = useState([]);
  const [inboxLength, setInboxLength] = useState(0);
  useEffect(() => {
      axios.get(`https://aircall-job.herokuapp.com/activities`)
      .then(res => {
        const activitiesFromAircall = res.data;
        setActivities(activitiesFromAircall);
        setInboxLength(activitiesFromAircall.filter(activity => !activity.is_archived).length)
      })
  }, []);
  const changeArchived=(flag,id)=>{
    axios.post('https://aircall-job.herokuapp.com/activities/'+id, {
      is_archived: flag
    })
    .then(function (response) {
      axios.get(`https://aircall-job.herokuapp.com/activities`)
      .then(res => {
        const activitiesFromAircall = res.data;
        setActivities(activitiesFromAircall);
        setInboxLength(activitiesFromAircall.filter(activity => !activity.is_archived).length)
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  const archiveAll=()=>{
    activities.map((actObj)=>{
      if(!actObj.is_archived)
        changeArchived(true,actObj.id)
    })
  }
  const unArchiveAll=()=>{
    axios.get(`https://aircall-job.herokuapp.com/reset`)
    .then(
      axios.get(`https://aircall-job.herokuapp.com/activities`)
      .then(res => {
        const activitiesFromAircall = res.data;
        setActivities(activitiesFromAircall);
        setInboxLength(activitiesFromAircall.filter(activity => !activity.is_archived).length)
      })
    )
  }
  return (
      <div className='container'>
        <Header/>
        <div className="container-view">
          <AppOutline inboundCount={inboxLength}/>
          <Activity activities={activities} changeArchived={changeArchived} archiveAll={archiveAll} unArchiveAll={unArchiveAll}/>
          <Footer inboundCount={inboxLength} />
        </div>
      </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
