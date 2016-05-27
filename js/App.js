import React, {Component} from 'react';
import ActiveUser from './components/ActiveUser.react';
import SearchBar from './components/SearchBar.react';
import ToolBar from './components/ToolBar.react';
import UserList from './components/UserList.react';
import UserStore from './stores/UserStore';
import ServerActions from './actions/ServerActions';

export default class App extends Component {
    static getStoreState = () => {
        return {
            sortData: UserStore.getSortData(),
            allUsers: UserStore.getAllUsers(),
            searchInput: UserStore.getSearchValue(),
            activeUser: UserStore.getActiveUser()
        };
    };

    constructor(props) {
        super(props);
        ServerActions.getUsersData();
        UserStore.addChangeListener(this._onChange);
        this.state = App.getStoreState();
    }

    componentWillUnmount() {
        UserStore.removeChangeListener(this._onChange);
    }

    _onChange = () => {
        this.setState(App.getStoreState());
    };

    render() {
        return (
            <div class="app container-fluid">
                <SearchBar searchInput={this.state.searchInput}/>
                <ToolBar sortTypes={this.state.sortData.types}/>
                <div class="row">
                    <ActiveUser activeUser={this.state.activeUser}/>
                    <UserList searchInput={this.state.searchInput} allUsers={this.state.allUsers} sortData={this.state.sortData}/>
                </div>
            </div>
        );
    }
}
