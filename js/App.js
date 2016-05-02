import React, { Component } from 'react';
import ActiveUser from './components/ActiveUser.react';
import SearchBar from './components/SearchBar.react';
import ToolBar from './components/ToolBar.react';
import UserList from './components/UserList.react';

export default class App extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div class="app container-fluid">
                <SearchBar />
                <ToolBar />
                <div class="row">
                    <ActiveUser />
                    <UserList />
                </div>
            </div>
        );
    }
}
