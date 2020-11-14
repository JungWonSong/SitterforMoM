import { Switch, Route } from 'react-router-dom';
import Worry from './Worry';
import Course from './Course';
import NoMeaning from './NoMeaning';

const MomTalk = ({ match }) => {
    console.log(match.url);
    return (
        <Switch>
            <Route exact path={match.url + '/Worry'} component={Worry} />
            <Route exact path={match.url +'/Course' } component={Course} />
            <Route exact path={match.url +'/NoMeaning' } component={NoMeaning} />
        </Switch>
    );
};

export default MomTalk;