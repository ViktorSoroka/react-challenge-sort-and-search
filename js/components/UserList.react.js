import React, {Component, PropTypes} from 'react';
import {EventEmitter} from "events";
import UserData from "../components/UserData.react";

export default class UserList extends Component {
    render() {
        return (
            <div class="col-sm-8 col-md-9 col-lg-10">
                <table class="user-list table table-striped">
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.allUsers.map((user, index) => {
                        return (
                            <UserData key={user.id} user={user} userIndex={index}/>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}