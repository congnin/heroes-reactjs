import React, { Component } from 'react';
import { HeroItems } from './HeroItems';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';


class HeroList extends Component {

    componentDidMount() {
        this.props.onFetchHeroes();
    }

    render() {
        return (
            <section id="heroListing">
                <h1 className="page-title">All Heroes Around the World</h1>
                <HeroItems heroes={this.props.heroes} />
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
        onFetchHeroes: () => dispatch(actions.fetchHeroes('x'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList);