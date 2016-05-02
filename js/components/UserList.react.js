import React, {Component, PropTypes} from 'react';
import {EventEmitter} from "events";

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
                    <tr>
                        <td>
                            <img src="images/dog.svg" class="user-image"/>
                        </td>
                        <td>Alvin Neal</td>
                        <td>18</td>
                        <td>
                            <span>8</span>
                            <span>(854) 235-3326</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src="images/raccoon.svg" class="user-image"/>
                        </td>
                        <td>Leila Smith</td>
                        <td>18</td>
                        <td>
                            <span>8</span>
                            <span>(413) 435-6719</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}