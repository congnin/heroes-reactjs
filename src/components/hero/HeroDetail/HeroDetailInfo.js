import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toUpperCase } from '../../../shared/utility';
import * as actions from '../../../store/actions/index';

class HeroDetailInfo extends Component {

    render() {
        const hero = this.props.hero;

        return (
            <div className='hero'>
                <h2 className='hero-full-name'>{toUpperCase(hero.name)}</h2>
                <h1 className='hero-place-of-birth'>Place of birth: {hero.biography['place-of-birth']}</h1>
                <div className='d-flex flex-column hero-more-info'>
                    <span>Intelligence: {hero.powerstats.intelligence}</span>
                    <span>Strength: {hero.powerstats.strength}</span>
                    <span>Speed: {hero.powerstats.strength}</span>
                    <span>Durability: {hero.powerstats.durability}</span>
                    <span>Power: {hero.powerstats.power}</span>
                    <span>Combat: {hero.powerstats.combat}</span>
                </div>
                <button className='btn btn-success btn-lg' onClick={() => this.props.onHeroLiked(true, hero)}>Like</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onHeroLiked: (isLike, hero) => dispatch(actions.likeHero(isLike, hero))
    };
}

export default connect(null, mapDispatchToProps)(HeroDetailInfo);