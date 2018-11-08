import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './selectionReducer';
import selectionReducer from './selectionReducer';

export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: selectionReducer
});