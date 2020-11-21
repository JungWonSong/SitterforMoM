import { Switch, Route } from 'react-router-dom';
import FindSitter from './FindSitter';
import RegisterSitterJobs from './RegisterSitterJobs';

const Jobs = ({ match }) => {
    console.log(match.url);
    return (
        <Switch>
            <Route exact path={match.url + '/FindSitter'} component={FindSitter} />
            <Route exact path={match.url +'/RegisterSitterJobs' } component={RegisterSitterJobs} />
        </Switch>
    );
};

export default Jobs;