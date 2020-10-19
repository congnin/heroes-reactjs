import {
    FETCH_HEROES_INIT,
    FETCH_HEROES_SUCCESS,
    FETCH_HEROES_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    heroes: {
        data: [],
        errors: []
    },
    hero: {
        data: {},
        errors: []
    }
}

export const heroReducer = (state = INITIAL_STATE.heroes, action) => {
    switch (action.type) {
        case FETCH_HEROES_INIT:
            return { ...state, data: [], errors: [] };
        case FETCH_HEROES_SUCCESS:
            return { ...state, data: action.rentals };
        case FETCH_HEROES_FAIL:
            return Object.assign({}, state, { errors: action.errors, data: [] });
        default:
            return state;
    }
}