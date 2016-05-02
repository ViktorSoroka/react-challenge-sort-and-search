import React, {Component, PropTypes} from 'react';

export default class SearchBar extends Component {
    render() {
        return (
            <div class="row">
                <div class="col-sm-12">
                    <div class="searchbar form-group" data-reactid=".0.0.0.0">
                        <input value="" type="text"
                               class="form-control"
                               placeholder="Search people by name..."
                               data-reactid=".0.0.0.0.0"/>
                    </div>
                </div>
            </div>
        );
    }
};