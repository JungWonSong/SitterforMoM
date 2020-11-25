import { Switch, Route } from 'react-router-dom';
import FindSitter from './FindSitter';
import RegisterSitterJobs from './RegisterSitterJobs';
import SitterJobDetail from './SitterJobDetail';
import Apply from './Apply';

const Jobs = ({ match }) => {
    //console.log(match.url);
    return (
        <Switch>
            <Route exact path={match.url + '/FindSitter'} component={FindSitter} />
            <Route exact path={match.url +'/RegisterSitterJobs' } component={RegisterSitterJobs} />
            <Route exact path={match.url +'/Apply/:id' } component={Apply} />
            <Route exact path={match.url +'/SitterJobDetail/:id' } component={SitterJobDetail} />
        </Switch>
    );
};

export default Jobs;