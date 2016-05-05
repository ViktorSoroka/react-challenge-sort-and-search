import React, {Component, PropTypes} from 'react';
import UserActions from '../actions/UserActions';

export default class ToolBar extends Component {
    _onClick(sortFieldName) {
        UserActions.setCurrentSort(sortFieldName);
    }

    render() {
        let sortTypes = this.props.sortTypes;
        return (
            <div class="row">
                <div class="col-sm-12">
                    <div class="toolbar">
                        <button class="btn btn-default" sort={sortTypes.name.field} onClick={this._onClick.bind(this, sortTypes.name.field)}>
                            <i class={`icon fa fa-sort-alpha-${sortTypes.name.order ? 'asc' : 'desc'}`}></i>
                            <span>Sort by name</span>
                        </button>
                        <button class="btn btn-default" sort={sortTypes.age.field} onClick={this._onClick.bind(this, sortTypes.age.field)}>
                            <i class={`icon fa fa-sort-numeric-${sortTypes.age.order ? 'asc' : 'desc'}`}></i>
                            <span>Sort by age</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}