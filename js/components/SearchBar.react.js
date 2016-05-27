import React, {Component, PropTypes} from 'react';
import UserActions from '../actions/UserActions';

const _onChange = (e) => {
    UserActions.setSearchInput(e.target.value);
};

const SearchBar = ({searchInput}) => (
    <div class="row">
        <div class="col-sm-12">
            <div class="searchbar form-group">
                <input type="text"
                       value={searchInput}
                       class="form-control"
                       placeholder="Search people by name..."
                       onChange={_onChange}/>
            </div>
        </div>
    </div>
);

export default SearchBar;