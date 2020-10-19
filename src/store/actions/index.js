import axios from 'axios';
import axiosInstance from '../../services/axios-service';

import {
    FETCH_HEROES_INIT,
    FETCH_HEROES_SUCCESS,
    FETCH_HEROES_FAIL
} from './types';

export const fetchHeroes = (name) => {
    const url = `/search/${name}`;

    return dispatch => {
        dispatch(fetchHeroesInit());

        axiosInstance.get(url)
            .then(res => res.data.results)
            .then(heroes => dispatch(fetchHeroesSuccess(heroes)))
    }
}

const fetchHeroesSuccess = (heroes) => {
    return {
        type: FETCH_HEROES_SUCCESS,
        heroes
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