import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import { HeroDetailInfo } from './HeroDetailInfo';

class HeroDetail extends Component {

    componentDidMount() {
        const heroId = this.props.match.params.id;

        this.props.fetchHeroById(heroId);
    }

    render() {

        if (this.props.hero) {
            const hero = this.props.hero;
            return (
                <section id='heroDetails'>
                    <div className='upper-section'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={hero.image.url} alt='' />
                            </div>

                            <div className='col-md-6 details-section'>
                                <HeroDetailInfo hero={hero} />
                            </div>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <h1> Loading... </h1>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        hero: state.hero.data
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchHeroById: (id) => dispatch(actions.fetchHeroById(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroDetail)