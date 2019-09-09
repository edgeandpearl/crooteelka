import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

/* eslint-disable-next-line no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
    numberOfSquares: 0,
    currentSquare: undefined,
    squareSize: 50,
    borderRadius: 4,
};

export default function configureStore() {
    return createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk)),
    );
}
