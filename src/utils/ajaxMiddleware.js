import $ from 'jquery'
export default function ajaxMiddleware({ dispatch, getState }) {
    return function(next) {
        return function(action) {
            const { ajax, loadingParam, callback, error, ...rest } = action;

            const setDispatch = status =>
                dispatch({
                    ...rest,
                    payload: {
                        [loadingParam]: status
                    }
                });

            if (ajax && ajax.url) {
                !_.isUndefined(loadingParam) && setDispatch(true);
                const params = _.assign({}, { dataType: 'json', contentType: 'application/json' }, ajax);
                return new Promise(function(resolve, reject) {
                    $.ajax(params)
                        .done(function(res) {
                            //请求成功调用callback
                            if (res && typeof callback === 'function') {
                                callback(res, dispatch, getState);
                            }
                            !_.isUndefined(loadingParam) && setDispatch(false);
                            if (typeof ajax.factory === 'function') {
                                resolve(ajax.factory(res));
                            } else {
                                resolve(res);
                            }
                        })
                        .fail(function(err) {
                            if (err.status === 400) {
                                reject(err);
                            }
                            if (typeof error === 'function') {
                                error(err);
                            }
                            !_.isUndefined(loadingParam) && setDispatch(false);
                        });
                });
            } else {
                return next(action);
            }
        };
    };
}
