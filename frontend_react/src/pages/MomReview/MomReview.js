import { Switch, Route } from 'react-router-dom';
import Good from './Good';
import Marketing from './Marketing';

const MomReview = ({ match }) => {
    console.log(match.url);
    return (
        <Switch>
            <Route exact path={match.url + '/Good'} component={Good} />
            <Route exact path={match.url +'/Marketing' } component={Marketing} />
        </Switch>
    );
};

export default MomReview;