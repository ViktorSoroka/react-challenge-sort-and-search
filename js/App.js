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
            isServerError: UserStore.isServerError(),
            isDataLoading: UserStore.isDataLoading(),
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
        let {isServerError, isDataLoading, searchInput, sortData, activeUser, allUsers} = this.state;
        if (isServerError) {
            return (<div class="container">
                <h1>Server error</h1>
                <p><strong>Looks like something went wrong!</strong></p>
                <p>Try to refresh the page.</p>
            </div>);
        }

        if (isDataLoading) {
            return (<div class="loader">Loading...</div>);
        }

        return (
            <div class="app container-fluid">
                <SearchBar searchInput={searchInput}/>
                <ToolBar sortTypes={sortData.types}/>
                <div class="row">
                    <ActiveUser activeUser={activeUser}/>
                    <UserList searchInput={searchInput} allUsers={allUsers} sortData={sortData}/>
                </div>
            </div>
        );
    }
}
