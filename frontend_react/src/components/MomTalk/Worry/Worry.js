import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Worry extends Component {
    render() {
        
        const { id, title } = this.props;
        return (
            <div>
                <ul>
                    <Link to={`/MomTalk/WorryDetail/${id}`}><li key={id}>{title}</li> </Link> 
                </ul>
            </div>
        );
    }
}

export default Worry;