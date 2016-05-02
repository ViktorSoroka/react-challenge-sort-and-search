// 'use strict';
//
// // action creator
// // do not depend on the strings (more robust way)
// var Dispatcher = require('../dispatcher/appDispatcher');
// var UserApi = require('../api/userApi');
// var ActionTypes = require('../constants/actionTypes');
//
// var UserActions = {
//     saveUser: function (user) {
//         var newUser = UserApi.save(user);
//
//         //Notify all stores (subscribed), that user was just created.
//         Dispatcher.dispatch({
//             actionType: ActionTypes.SAVE_USER,
//             user: newUser
//         });
//     },
//     deleteUser: function (id) {
//         UserApi.deleteUser(id);
//
//         Dispatcher.dispatch({
//             actionType: ActionTypes.DELETE_USER,
//             id: id
//         });
//     }
// };
//
// module.exports = UserActions;