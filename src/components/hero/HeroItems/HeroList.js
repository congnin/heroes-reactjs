import React, { Component } from 'react';
import { HeroItems } from './HeroItems';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import Spinner from '../../Spinner/Spinner';


class HeroList extends Component {

    componentDidMount() {
        this.props.onFetchHeroes();
    }

    render() {
        let listing = <Spinner />
        if (!this.props.loading) {
            listing = <HeroItems heroes={this.props.heroes} />;
        }
        return (
            <section id="heroListing">
                <h1 className="page-title">All Heroes Around the World</h1>
                {listing}
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        heroes: state.heroes.data,
        loading: state.heroes.loading
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchHeroes: () => dispatch(actions.fetchHeroes('man'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);