import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import heroesReducer from './heroes-reducer';
import heroReducer  from './hero-reducer';
import likedHeroReducer from './hero-like-reducer';

export const init = () => {
    const rootReducer = combineReducers({
        heroes: heroesReducer,
        hero: heroReducer,
        likeHeroes: likedHeroReducer 
    });

    const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;                    

    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

    return store;
}