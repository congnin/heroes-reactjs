import axios from '../../services/axios-service';

import * as actionTypes from './actionTypes';

const fetchHeroesStart = () => {
    return {
        type: actionTypes.FETCH_HEROES_INIT
    }
}

const fetchHeroesSuccess = (heroes) => {
    return {
        type: actionTypes.FETCH_HEROES_SUCCESS,
        heroes
    }
}

const fetchHeroesFailed = (error) => {
    return {
        type: actionTypes.FETCH_HEROES_FAIL,
        error: error
    }
}

export const fetchHeroes = (name) => {
    return dispatch => {
        dispatch(fetchHeroesStart());

        axios.get(`/search/${name}`)
            .then(res => {
                const results = res.data.results;
                dispatch(fetchHeroesSuccess(results));
            })
            .catch(err => {
                dispatch(fetchHeroesFailed(err));
            })
    }
}