import { Switch, Route } from 'react-router-dom';
import FindSitter from './FindSitter';
import IamaSitter from './IamaSitter';

const Jobs = ({ match }) => {
    console.log(match.url);
    return (
        <Switch>
            <Route exact path={match.url + '/FindSitter'} component={FindSitter} />
            <Route exact path={match.url +'/IamaSitter' } component={IamaSitter} />
        </Switch>
    );
};

export default Jobs;