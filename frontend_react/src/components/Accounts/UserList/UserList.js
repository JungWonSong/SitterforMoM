import axios from 'axios';
import React, { Component } from 'react';

class UserList extends Component {
    state = {
        users: [],
    };

    getUsers = () => {
        axios
            .get('/accounts/userlist')
            .then(({ data }) => {
                console.log(data);
                this.setState({
                    users: data,
                });
            })
            .catch((e) => {
                console.error(e);
            });
    };

    componentDidMount() {
        //this.getUsers();
    }

    render() {
        const { users } = this.state;
        users.map((user) => {
            const { id, username } = user;
            return (
                <li key={id} class>
                    {username}
                </li>
            );
        });
        return (
            <ul>
                <button className="ui button">Test button</button>
            </ul>
        );
    }
}

export default UserList;
