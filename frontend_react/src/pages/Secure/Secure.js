import { Switch, Route } from 'react-router-dom';
import Address from './Address';
import Health from './Health';
import Idcard from './Idcard';
import Account from './Account';
import Insurance from './Insurance';
import Record from './Record';

const Secure = ({ match }) => {
    console.log(match.url);
    return (
        <Switch>
            <Route exact path={match.url + '/Insurance'} component={Insurance} />
            <Route exact path={match.url +'/Idcard' } component={Idcard} />
            <Route exact path={match.url +'/Account' } component={Account} />
            <Route exact path={match.url +'/Address' } component={Address} />
            <Route exact path={match.url +'/Health' } component={Health} />
            <Route exact path={match.url +'/Record' } component={Record} />
        </Switch>
    );
};

export default Secure;
