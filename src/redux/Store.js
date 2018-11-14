import { createStore, applyMiddleware } from 'redux'
import reducers from './Reducer'
import reduxThunk from 'redux-thunk';

const createStoreWithMiddlewares = applyMiddleware(reduxThunk)(createStore);

export default createStoreWithMiddlewares(reducers);
