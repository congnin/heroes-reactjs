import * as actionTypes from './actionTypes';
import axios from '../../services/axios-service';

const fetchHeroStart = () => {
    return {
        type: actionTypes.FETCH_HERO_BY_ID_INIT
    };
};

const fetchHeroSuccess = (hero) => {
    return {
        type: actionTypes.FETCH_HERO_BY_ID_SUCCESS,
        hero: hero
    };
};

const fetchHeroFailed = () => {
    return {
        type: actionTypes.FETCH_HERO_BY_ID_FAIL
    };
};

export const fetchHeroById = (id) => {
    return dispatch => {
        dispatch(fetchHeroStart());
        axios.get(`/${id}`)
            .then(response => {
                dispatch(fetchHeroSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchHeroFailed());
            });
    };
};