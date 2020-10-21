import React, { Component } from 'react';
import { HeroItem } from './HeroItem';

export class HeroItems extends Component {

    renderHeroes() {
        const heroes = this.props.heroes;
        if (heroes != null && heroes.length > 0) {
            return heroes.map((hero, index) => {
                return (
                    <HeroItem key={index}
                        colNum='col-md-3 col-xs-6'
                        hero={hero} />
                );
            });
        } else {
            return <h1>Not found any hero!</h1>
        }

    }

    render() {
        return (
            <div className="row">
                {this.renderHeroes()}
            </div>
        );
    }
}