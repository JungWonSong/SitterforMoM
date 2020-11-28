import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Comment extends Component {
    render() {
        
        const { userId, comments } = this.props;
        return (
            <div>
                <ul>
                    <p>{userId} : {comments}</p>
                </ul>
            </div>
        );
    }
}

export default Comment;