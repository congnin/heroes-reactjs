import React, { Component } from 'react';
import { HeroItem } from './HeroItem';

export class HeroItems extends Component {

    renderHeroes() {
        return this.props.heroes.map((hero, index) => {
            return (
                <HeroItem key={index}
                    colNum='col-md-3 col-xs-6'
                    hero={hero} />
            );
        });
    }

    render() {
        return (
            <div className="row">
                {this.renderHeroes()}
            </div>
        );
    }
}