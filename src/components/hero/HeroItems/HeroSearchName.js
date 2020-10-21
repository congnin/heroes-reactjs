import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toUpperCase } from '../../../shared/utility';
import * as actions from '../../../store/actions/index';
import HeroList from './HeroList';


class HeroSearchListing extends Component {

    constructor() {
        super();

        this.state = {
            searchedHero: ''
        }
    }

    componentWillMount() {
        this.searchHeroesByName();
    }

    componentDidUpdate(prevProps) {
        const currentUrlParam = this.props.match.params.name;
        const prevUrlParam = prevProps.match.params.name;

        if (currentUrlParam !== prevUrlParam) {
            this.searchHeroesByName();
        }
    }

    searchHeroesByName() {
        const searchedName = this.props.match.params.name;
        this.setState({ searchedHero: searchedName });

        this.props.onFetchHeroes(searchedName);
    }

    renderTitle() {
        // const { errors, data } = this.props.heroes;
        // const { searchedHero } = this.state;
        // let title = '';

        // if (errors.length > 0) {
        //     title = errors[0].detail;
        // }

        // if (data.length > 0) {
        //     title = `Your Heroes of ${toUpperCase(searchedHero)}`;
        // }

        // return <h1 className="page-title">{title}</h1>
    }

    render() {
        return (
            <section id="heroListing">
                {this.renderTitle()}
                <HeroList heroes={this.props.heroes.data} />
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        heroes: state.heroes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchHeroes: (name) => dispatch(actions.fetchHeroes(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroSearchListing)