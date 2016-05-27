import React, {Component, PropTypes} from 'react';
import UserStore from '../stores/UserStore';

const ActiveUser = ({activeUserIndex}) => {
    const activeUser = UserStore.getActiveUser(activeUserIndex);
    const content = !activeUser ?
        <h3>Nothing found :(</h3> :
        <div class="thumbnail">
            <img src={`images/${activeUser.image}.svg`}/>
            <div class="thumbnail-caption">
                <h3>{activeUser.name}</h3>
                <table class="user-info table table-responsive">
                    <tbody>
                    <tr>
                        <td>Age:</td>
                        <td>{activeUser.age}</td>
                    </tr>
                    <tr>
                        <td>Favorite animal:</td>
                        <td>{activeUser.image}</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>
                            <span>8</span>
                            <span>{activeUser.phone}</span>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p>
                    <b>Favorite phrase:</b><span> </span>
                    <span>{activeUser.phrase}</span>
                </p>
            </div>
        </div>;

    return (
        <div class="col-sm-4 col-md-3 col-lg-2">
            {content}
        </div>
    );
};

export default ActiveUser;