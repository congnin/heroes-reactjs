import React, { Component } from 'react';
import { HeroItems } from './HeroItems';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';


class HeroesLike extends Component {

    componentDidMount() {
        this.props.onFetchHeroesLiked();
    }

    render() {
        return (
            <section id="heroListing">
                <h1 className="page-title">Heroes you liked</h1>
                <HeroItems heroes={this.props.heroes} />
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        heroes: state.likeHeroes.data,
        loading: state.likeHeroes.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchHeroesLiked: () => dispatch(actions.fetchHeroesLiked())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroesLike);