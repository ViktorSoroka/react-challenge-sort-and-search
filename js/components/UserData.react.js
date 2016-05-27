import React, {Component, PropTypes} from 'react';
import UserActions from "../actions/UserActions";

export default class UserData extends Component {
    static _onClick(user) {
        UserActions.setActiveUser(user);
    };

    render() {
        const {user} = this.props;
        return (
            <tr onClick={UserData._onClick.bind(this, user)}>
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