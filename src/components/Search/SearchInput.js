import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchInput extends Component {
    constructor() {
        super();

        this.searchInput = React.createRef();
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.handleSearch();
        }
    }

    handleSearch = () => {
        const { history } = this.props;
        const name = this.searchInput.current.value;

        name ? history.push(`/heroes/search/${name}`) : history.push('/heroes');
        this.searchInput.current.value = '';
    }

    render() {
        return (
            <div className='form-inline my-2 my-lg-0'>
                <input onKeyPress={(event) => this.handleKeyPress(event)}
                    ref={this.searchInput}
                    className='form-control mr-sm-2 hero-search'
                    type='search'
                    placeholder='Pleae input name'
                    aria-label='Search' />
                <button onClick={this.handleSearch}
                    className='btn btn-outline-success my-2 my-sm-0 btn-hero-search'
                    type='submit'>Search</button>
            </div>
        );
    }
}

export default withRouter(SearchInput);