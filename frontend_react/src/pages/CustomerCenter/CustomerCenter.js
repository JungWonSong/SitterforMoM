import { Switch, Route } from 'react-router-dom';
import HowMuch from './HowMuch';
import HowtoUse from './HowtoUse';
import MomExpert from './MomExpert';
import MomReviewer from './MomReviewer';
import SecureInfo from './SecureInfo';
import SecureReview from './SecureReview';
import WhatisIt from './WhatisIt';
import WriteReview from './WriteReview';

const CustomerCenter = ({ match }) => {
    console.log(match.url);
    return (
        <Switch>
            <Route exact path={match.url + '/howmuch'} component={HowMuch} />
            <Route exact path={match.url +'/howtouse' } component={HowtoUse} />
            <Route exact path={match.url +'/momexpert' } component={MomExpert} />
            <Route exact path={match.url +'/momreviewer' } component={MomReviewer} />
            <Route exact path={match.url +'/secureinfo' } component={SecureInfo} />
            <Route exact path={match.url +'/securereview' } component={SecureReview} />
            <Route exact path={match.url +'/whatisit' } component={WhatisIt} />
            <Route exact path={match.url +'/writereview' } component={WriteReview} />
        </Switch>
    );
};

export default CustomerCenter;