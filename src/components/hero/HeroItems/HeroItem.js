import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class HeroItem extends Component {
    
    render () {
        const hero = this.props.hero;
        return (
            <div className={this.props.colNum}>
                <Link className='rental-detail-link' to={`/heroes/${hero.id}`}>
                    <div className='card hero-card'>
                        <img className='card-img-top' src={hero.image.url} alt={hero.name} />
                        <div className='card-block'>
                            <h4 className='card-title'>{hero.name}</h4>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}
