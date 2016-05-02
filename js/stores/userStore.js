// 'use strict';
//
// var Dispatcher = require('../dispatcher/appDispatcher');
// var ActionTypes = require('../constants/actionTypes');
// var _ = require('lodash');
// var EventEmitter = require('../eventemitter');
// var assign = require('object-assign');
// var CHANGE_EVENT = 'change';
//
// var _users = [];
//
// var UserStore = assign(new EventEmitter (), {
//     addChangeListener: function (callback) {
//         this.on(CHANGE_EVENT, callback);
//     },
//     removeChangeListener: function (callback) {
//         this.removeListener(CHANGE_EVENT, callback);
//     },
//     emitChange: function () {
//         this.emit(CHANGE_EVENT);
//     },
//     getAllUsers: function () {
//         return _users;
//     },
//     getUserById: function (id) {
//         return _.find(_users, {id: id});
//     }
// });
//
// Dispatcher.register(function (action) {
//     switch (action.actionType) {
//         case ActionTypes.INITIALIZE:
//             _users = action.initialData.users;
//             UserStore.emitChange();
//             break;
//         case ActionTypes.SAVE_USER:
//             _users.push(action.user);
//             UserStore.emitChange();
//             break;
//         case ActionTypes.DELETE_USER:
//             _.remove(_users, function (user) {
//                 return user.id === action.id;
//             });
//             UserStore.emitChange();
//             break;
//     }
// });
//
// module.exports = UserStore;