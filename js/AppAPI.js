import ServerActionCreators from './actions/ServerActionCreator';

function post(url) {
    $.ajax({url: url,
        success: function(data) {
            ServerActionCreators.receiveData(data);
        },
        error: function(xhr, status, err) {
            ServerActionCreators.receiveAPIError({ err: err });
        }
    });
}