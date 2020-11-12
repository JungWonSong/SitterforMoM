import axios from 'axios';
import React, { Component } from 'react';

class UserList extends Component {
    state = {
        users: [],
    };

    getUsers = () => {
        axios
            .get('http://127.0.0.1:8000/accounts/')
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
        const user_list = users.map((user) => {
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
