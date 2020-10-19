import axios from 'axios';

import {
    FETCH_HEROES_INIT,
    FETCH_HEROES_SUCCESS,
    FETCH_HEROES_FAIL
} from './types';

export const fetchHeroes = (name) => {
    const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
    const url = `https://superheroapi.com/api/3566277356723893/search/${name}`;

    return dispatch => {
        dispatch(fetchHeroesInit());

        axios.get(PROXY_URL + url, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.data.results)
            .then(heroes => dispatch(fetchHeroesSuccess(heroes)))
    }
}

const fetchHeroesSuccess = (rentals) => {
    return {
        type: FETCH_HEROES_SUCCESS,
        rentals
    }
}

const fetchHeroesInit = () => {
    return {
        type: FETCH_HEROES_INIT
    }
}

const fetchHeroesFail = (errors) => {
    return {
        type: FETCH_HEROES_FAIL,
        errors
    }
}