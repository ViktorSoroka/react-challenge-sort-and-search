// 'use strict';
//
// var Dispatcher = require('../dispatcher/appDispatcher');
// var ActionTypes = require('../constants/actionTypes');
// var _ = require('lodash');
// var EventEmitter = require('../eventemitter');
// var assign = require('object-assign');
// var CHANGE_EVENT = 'change';
//
// var _photos = [];
//
// var PhotoStore = assign(new EventEmitter (), {
//     addChangeListener: function (callback) {
//         this.on(CHANGE_EVENT, callback);
//     },
//     removeChangeListener: function (callback) {
//         this.removeListener(CHANGE_EVENT, callback);
//     },
//     emitChange: function () {
//         this.emit(CHANGE_EVENT);
//     },
//     getAllPhotos: function () {
//         return _photos;
//     }
// });
//
// Dispatcher.register(function (action) {
//     switch (action.actionType) {
//         case ActionTypes.INITIALIZE:
//             _photos = action.initialData.photos;
//             PhotoStore.emitChange();
//             break;
//     }
// });
//
// module.exports = PhotoStore;