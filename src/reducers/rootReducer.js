import { combineReducers } from 'redux';
export default combineReducers({
    numberOfSquares: (state = 0) => state,
    currentSquare: (state = 0) => state,
    squareSize: (state = 0) => state,
    borderRadius: (state = 0) => state,
    }
);
