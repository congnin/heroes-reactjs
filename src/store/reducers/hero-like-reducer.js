import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    data: [],
    loading: false
}

const fetchHeroesStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchHeroesSuccess = (state, action) => {
    return updateObject(state, {
        data: action.heroes,
        loading: false
    });
};

const fetchHeroesFail = (state, action) => {
    return updateObject(state, {
        loading: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_HEROES_LIKED_INIT:
            return fetchHeroesStart(state, action);
        case actionTypes.FETCH_HEROES_LIKED_SUCCESS:
            return fetchHeroesSuccess(state, action);
        case actionTypes.FETCH_HEROES_LIKED_FAIL:
            return fetchHeroesFail(state, action);
        default:
            return state;
    }
}

export default reducer;