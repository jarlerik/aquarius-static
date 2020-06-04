import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { languageReducer } from './language/languageReducer';
import { navbarReducer } from './navbar/navbarReducer';


const rootReducer = combineReducers({
  language: languageReducer,
  navbar: navbarReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk)),
);
/* eslint-enable */
export type RootState = ReturnType<typeof rootReducer>
export default store;