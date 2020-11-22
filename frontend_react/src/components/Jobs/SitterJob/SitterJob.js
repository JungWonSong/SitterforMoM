import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SitterJob extends Component {
    render() {
        
        const { id, title } = this.props;
        return (
            <div>
                <ul>
                    <Link to={`/Jobs/SitterJobDetail/${id}`}><li key={id}>{title}</li> </Link> 
                </ul>
            </div>
        );
    }
}

export default SitterJob;