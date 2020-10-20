import {
    FETCH_HERO_BY_ID_INIT,
    FETCH_HERO_BY_ID_SUCCESS,
    FETCH_HERO_BY_ID_FAIL
} from '../actions/actionTypes';

import { updateObject } from '../../shared/utility';

const initialState = {
    data: null,
    error: false,
    loading: false
}

const fetchHeroStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const fetchHeroSuccess = (state, action) => {
    return updateObject( state, { 
        data: action.hero,
        error: null,
        loading: false
     } );
};

const fetchHeroFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_HERO_BY_ID_INIT:
            return fetchHeroStart(state, action);
        case FETCH_HERO_BY_ID_SUCCESS:
            return fetchHeroSuccess(state, action);
        case FETCH_HERO_BY_ID_FAIL:
            return fetchHeroFail(state, action);
        default:
            return state;
    }
}

export default reducer;