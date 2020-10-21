import axios from '../../services/firebase-service';

import * as actionTypes from './actionTypes';

const likeHeroInit = () => {
    return {
        type: actionTypes.LIKE_HERO_INIT
    }
}

const likeHeroSuccess = () => {
    return {
        type: actionTypes.LIKE_HERO_SUCCESS
    }
}

const likeHeroFailed = (error) => {
    return {
        type: actionTypes.LIKE_HERO_FAILED,
        error: error
    }
}

export const likeHero = (isLike, hero) => {
    return dispatch => {
        dispatch(likeHeroInit());

        if (isLike) {
            axios.post('/heroes.json', hero)
                .then(response => {
                    dispatch(likeHeroSuccess());
                })
                .catch(error => {
                    dispatch(likeHeroFailed(error));
                });
        }
    }
}


const fetchHeroesSuccess = ( heroes ) => {
    return {
        type: actionTypes.FETCH_HEROES_LIKED_SUCCESS,
        heroes: heroes
    };
};

const fetchHeroesFail = ( error ) => {
    return {
        type: actionTypes.FETCH_HEROES_LIKED_FAIL,
        error: error
    };
};

const fetchHeroesStart = () => {
    return {
        type: actionTypes.FETCH_HEROES_LIKED_INIT
    };
};

export const fetchHeroesLiked = () => {
    return dispatch => {
        dispatch(fetchHeroesStart());
        axios.get( '/heroes.json')
            .then( res => {
                const fetchedHeroes = [];
                for ( let key in res.data ) {
                    fetchedHeroes.push( {
                        ...res.data[key]
                    } );
                }
                dispatch(fetchHeroesSuccess(fetchedHeroes));
            } )
            .catch( err => {
                dispatch(fetchHeroesFail(err));
            } );
    };
};