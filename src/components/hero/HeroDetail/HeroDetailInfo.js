import React from 'react';
import { toUpperCase } from '../../../shared/utility';

export function HeroDetailInfo(props) {
    const hero = props.hero;

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
        </div>
    )
}