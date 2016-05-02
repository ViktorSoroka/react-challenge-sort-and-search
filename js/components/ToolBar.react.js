import React, {Component, PropTypes} from 'react';

export default class ToolBar extends Component {
    render() {
        return (
            <div class="row">
                <div class="col-sm-12">
                    <div class="toolbar">
                        <button class="btn btn-default">
                            <i class="icon fa fa-sort-alpha-asc"></i>
                            <span>  Sort by name</span>
                        </button>
                        <button class="btn btn-default">
                            <i class="icon fa fa-sort-numeric-desc"></i>
                            <span>  Sort by age</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}