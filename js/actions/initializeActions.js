// 'use strict';
//
// var Dispatcher = require('../dispatcher/appDispatcher');
// var ActionTypes = require('../constants/actionTypes');
// var UserApi = require('../api/userApi');
// var PhotoApi = require('../api/photosApi');
//
// var InitializeActions = {
//     initApp: function () {
//         Dispatcher.dispatch({
//             actionType: ActionTypes.INITIALIZE,
//             initialData: {
//                 users: UserApi.getAll(),
//                 photos: PhotoApi.getAllPhotos()
//             }
//         });
//     }
// };
//
// module.exports = InitializeActions;