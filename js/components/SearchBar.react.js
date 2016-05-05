import React, {Component, PropTypes} from 'react';
import UserActions from '../actions/UserActions';

export default class SearchBar extends Component {
    static _onKeyUp = (e) => {
        UserActions.setSearchInput(e.target.value);
    };

    render() {
        return (
            <div class="row">
                <div class="col-sm-12">
                    <div class="searchbar form-group">
                        <input type="text"
                               class="form-control"
                               placeholder="Search people by name..."
                               onKeyUp={SearchBar._onKeyUp}/>
                    </div>
                </div>
            </div>
        );
    }
};