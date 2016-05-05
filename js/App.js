import React, {Component} from 'react';
import ActiveUser from './components/ActiveUser.react';
import SearchBar from './components/SearchBar.react';
import ToolBar from './components/ToolBar.react';
import UserList from './components/UserList.react';
import UserStore from './stores/UserStore';
import InitializeActions from './actions/InitializeActions';

export default class App extends Component {
    constructor(props) {
        super(props);
        InitializeActions.initApp();
        UserStore.addChangeListener(this._onChange);
        this.state = {
            sortTypes: UserStore.getSortTypes(),
            allUsers: UserStore.getAllUsers(),
            searchInput: UserStore.getSearchValue(),
            activeUserIndex: UserStore.getActiveUserIndex()
        };
    }

    componentWillUnmount() {
        UserStore.removeChangeListener(this._onChange);
    }

    _onChange = () => {
        this.setState({
            sortTypes: UserStore.getSortTypes(),
            allUsers: UserStore.getAllUsers(),
            searchInput: UserStore.getSearchValue(),
            activeUserIndex: UserStore.getActiveUserIndex()
        });
    };

    render() {
        return (
            <div class="app container-fluid">
                <SearchBar searchInput={this.state.searchInput}/>
                <ToolBar sortTypes={this.state.sortTypes}/>
                <div class="row">
                    <ActiveUser activeUserIndex={this.state.activeUserIndex}/>
                    <UserList allUsers={this.state.allUsers}/>
                </div>
            </div>
        );
    }
}
