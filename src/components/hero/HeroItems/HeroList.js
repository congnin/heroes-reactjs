import React, { Component } from 'react';
import { HeroItems } from './HeroItems';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions';

class HeroList extends Component {

    componentDidMount() {
        this.props.dispatch(actions.fetchHeroes('x'));
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

function mapStateToProps(state) {
    return {
        heroes: state.heroes.data
    }
}

export default connect(mapStateToProps)(HeroList)