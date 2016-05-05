import React, {Component, PropTypes} from 'react';
import UserActions from "../actions/UserActions";

export default class UserData extends Component {
    static _onClick(userId) {
        UserActions.setActiveUser(userId);
    };

    render() {
        const {user, userIndex} = this.props;
        return (
            <tr onClick={UserData._onClick.bind(this, userIndex)}>
                <td>
                    <img src={`images/${user.image}.svg`} class="user-image"/>
                </td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>
                    <span>8</span>
                    <span>{user.phone}</span>
                </td>
            </tr>
        );
    }
}