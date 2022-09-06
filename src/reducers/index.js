import { connectRouter } from 'connected-react-router';

const rootReducer = history => ({
    router: connectRouter(history),
});

export default rootReducer;
