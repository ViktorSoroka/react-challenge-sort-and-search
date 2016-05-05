import Dispatcher from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import EventEmitter from 'events';
import AppAPI from '../AppAPI';

let _users = [];
let _activeSearchInput = '';
let _activeUserIndex = 0;
let _filteredUsers = [];
let _sort = {
    _currentSort: {},
    types: {
        name: {field: 'name', order: false, active: false},
        age: {field: 'age', order: false, active: false}
    }
};

const UserStore = Object.assign(new EventEmitter, {

    fetchData() {
        AppAPI.receiveData();
    },

    sortByField(collection, sortObject) {
        return collection.sort((a, b) => {
            if (sortObject.order) {
                if(a[sortObject.field] < b[sortObject.field]) return -1;
                if(a[sortObject.field] > b[sortObject.field]) return 1;
            } else {
                if(a[sortObject.field] > b[sortObject.field]) return -1;
                if(a[sortObject.field] < b[sortObject.field]) return 1;
            }
            return 0;
        });
    },

    setCurrentSort(name) {
        _sort._currentSort.active = false;
        _sort._currentSort = _sort.types[name];
        _sort._currentSort.active = true;
        _sort._currentSort.order = !_sort._currentSort.order;
    },

    getSortTypes() {
        return _sort.types;
    },

    getActiveUserIndex() {
        return _activeUserIndex;
    },

    setActiveUserIndex(index = 0) {
        _sort._currentSort = {};
        _activeUserIndex = index;
    },

    addChangeListener(callback) {
        this.on(ActionTypes.CHANGE, callback);
    },

    getSearchValue() {
        return _activeSearchInput;
    },

    setSearchValue(value) {
        _activeSearchInput = value;
    },

    removeChangeListener(callback) {
        this.removeListener(ActionTypes.CHANGE, callback);
    },

    emitChange() {
        this.emit(ActionTypes.CHANGE);
    },

    getAllUsers() {
        if (!_activeSearchInput) {
            _filteredUsers = _users;
        } else {
            const reg = new RegExp(`^${_activeSearchInput}`, 'i');
            _filteredUsers = _users.filter(user => {
                return user.name.match(reg)
            });
        }

        if (_sort._currentSort.field) {
            _filteredUsers = this.sortByField(_filteredUsers, _sort._currentSort);
        }

        return _filteredUsers;
    },

    getActiveUser() {
        return _filteredUsers[_activeUserIndex];
    }
});

Dispatcher.register(action => {
    switch (action.actionType) {
        case ActionTypes.INITIALIZE:
            // initialization goes here - to add some loading image
            break;
        case ActionTypes.RECEIVE_API_ERROR:
            // error handling goes here
            break;
        case ActionTypes.RECEIVE_DATA:
            _users = _filteredUsers = _users.concat(action.data);
            UserStore.emitChange();
            break;
        case ActionTypes.SET_ACTIVE_SORT:
            UserStore.setCurrentSort(action.newSortFieldName);
            UserStore.emitChange();
            break;
        case ActionTypes.SET_USER_INPUT:
            UserStore.setSearchValue(action.newSearchValue);
            UserStore.setActiveUserIndex();
            UserStore.emitChange();
            break;
        case ActionTypes.SET_ACTIVE_USER:
            UserStore.setActiveUserIndex(action.newCurrentIndex);
            UserStore.emitChange();
            break;
    }
});

export default UserStore;